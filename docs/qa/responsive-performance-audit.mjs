import { chromium } from 'file:///C:/Users/sanch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import path from 'node:path';

const root = process.cwd();
const output = path.join(root, 'docs/qa');
const routes = ['/', '/soluciones', '/proceso', '/proyectos', '/nosotros'];
const widths = [320, 360, 390, 430, 768, 1024, 1280, 1440, 1920];
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
function inspectPage() {
  const visible = el => { const r=el.getBoundingClientRect(), s=getComputedStyle(el); return r.width>0 && r.height>0 && s.display!=='none' && s.visibility!=='hidden' && !el.closest('[aria-hidden="true"],.sr-only,dialog:not([open])'); };
  const label = el => `${el.tagName.toLowerCase()}.${typeof el.className==='string'?el.className.replaceAll(' ','.'):''}: ${(el.textContent||'').trim().replace(/\s+/g,' ').slice(0,90)}`;
  const outside = [...document.querySelectorAll('body *')].filter(visible).filter(el=>{ const r=el.getBoundingClientRect(); return r.left<-.6 || r.right>innerWidth+.6; }).filter(el=>!el.closest('svg,.skip-link,.system-stack,.website-visual__frame')).map(el=>({element:label(el),left:el.getBoundingClientRect().left,right:el.getBoundingClientRect().right}));
  const clippedText=[];
  for (const el of [...document.querySelectorAll('h1,h2,h3,p,a,button,summary,li,small')].filter(visible)) {
    if (el.closest('svg,.skip-link')) continue;
    const ownText=[...el.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE&&n.textContent.trim());
    for(const node of ownText){
      const range=document.createRange();range.selectNodeContents(node);
      for(const r of range.getClientRects()){
        let ancestor=el;
        while(ancestor&&ancestor!==document.body){
          const s=getComputedStyle(ancestor), a=ancestor.getBoundingClientRect();
          if ((['hidden','clip'].includes(s.overflowX)&& (r.left<a.left-.6||r.right>a.right+.6)) || (['hidden','clip'].includes(s.overflowY)&&(r.top<a.top-.6||r.bottom>a.bottom+.6))) { clippedText.push({element:label(el),container:label(ancestor)});break; }
          ancestor=ancestor.parentElement;
        }
      }
    }
  }
  const controls=[...document.querySelectorAll('a,button,summary')].filter(visible).map(el=>({element:label(el),width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height}));
  const smallControls=controls.filter(r=>r.width<43.9||r.height<43.9);
  const header=document.querySelector('.site-header__inner');
  const children=[...header.children].filter(visible).map(el=>({element:label(el),rect:el.getBoundingClientRect().toJSON()}));
  const collisions=[];
  for(let i=0;i<children.length;i++)for(let j=i+1;j<children.length;j++){const a=children[i].rect,b=children[j].rect;if(Math.min(a.right,b.right)-Math.max(a.left,b.left)>1&&Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>1)collisions.push([children[i].element,children[j].element]);}
  return {documentWidth:document.documentElement.scrollWidth,viewport:innerWidth,pageHeight:document.documentElement.scrollHeight,outside,clippedText:[...new Map(clippedText.map(r=>[r.element+'|'+r.container,r])).values()],smallControls,headerCollisions:collisions,h1:document.querySelector('h1')?.textContent.trim(),horizontalOverflow:document.documentElement.scrollWidth>innerWidth};
}

for(const route of routes){
  for(const width of widths){
    const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
    const page=await context.newPage();
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const response=await page.goto('http://127.0.0.1:4325'+route,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    const result=await page.evaluate(inspectPage);
    const menuToggle=page.locator('[data-menu-toggle]');
    let menu=null;
    if(await menuToggle.isVisible()){
      await menuToggle.click();
      menu=await page.evaluate(()=>({open:document.querySelector('dialog').open,expanded:document.querySelector('[data-menu-toggle]').getAttribute('aria-expanded'),scrollWidth:document.querySelector('dialog').scrollWidth,width:document.querySelector('dialog').clientWidth,lock:document.body.classList.contains('is-menu-open')}));
      await page.keyboard.press('Escape');
      menu.closed=await page.locator('dialog').evaluate(el=>!el.open);
      menu.focusRestored=await menuToggle.evaluate(el=>el===document.activeElement);
    }
    if(process.env.AUDIT_SCREENSHOTS==='1'&&(width===390||width===1440)){
      await page.evaluate(async()=>{
        for(let y=0;y<document.documentElement.scrollHeight;y+=innerHeight){scrollTo(0,y);await new Promise(r=>setTimeout(r,70));}
        await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));
        scrollTo(0,0);
      });
      await page.waitForTimeout(120);
      await page.screenshot({path:path.join(output,'evidence',`${route==='/'?'home':route.slice(1)}-final-${width}.png`),fullPage:true});
    }
    results.push({route,width,status:response.status(),...result,menu,errors});
    console.log(`${route} ${width} overflow=${result.horizontalOverflow} outside=${result.outside.length} clipped=${result.clippedText.length} controls=${result.smallControls.length}`);
    await context.close();
  }
}
const normalContext=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'no-preference'});
const normalPage=await normalContext.newPage();
await normalPage.goto('http://127.0.0.1:4325/',{waitUntil:'networkidle'});
await normalPage.waitForTimeout(1200);
const motionRequests=await normalPage.evaluate(()=>performance.getEntriesByType('resource').map(x=>({url:x.name.replace(location.origin,''),size:x.decodedBodySize,transfer:x.transferSize,type:x.initiatorType})));
await normalPage.emulateMedia({reducedMotion:'reduce'});
await normalPage.waitForTimeout(100);
const reduced=await normalPage.evaluate(()=>({animations:document.getAnimations().filter(a=>a.playState==='running').length,scrollBehavior:getComputedStyle(document.documentElement).scrollBehavior,progress:getComputedStyle(document.querySelector('.scroll-progress')).display,sceneTransform:getComputedStyle(document.querySelector('.system-visual__scene')).transform}));
await normalContext.close();
const nojsContext=await browser.newContext({viewport:{width:390,height:844},javaScriptEnabled:false});
const nojsPage=await nojsContext.newPage();await nojsPage.goto('http://127.0.0.1:4325/',{waitUntil:'networkidle'});
const nojs=await nojsPage.evaluate(()=>({mainVisible:getComputedStyle(document.querySelector('main')).visibility,h1Visible:getComputedStyle(document.querySelector('h1')).opacity,navVisible:getComputedStyle(document.querySelector('.site-nav')).display,menuToggleVisible:getComputedStyle(document.querySelector('.menu-toggle')).display}));
await nojsContext.close();
await browser.close();
const assets=[];
async function walk(dir){for(const name of await readdir(dir)){const file=path.join(dir,name),s=await stat(file);if(s.isDirectory())await walk(file);else{const raw=await readFile(file);assets.push({path:path.relative(path.join(root,'dist'),file).replaceAll('\\','/'),bytes:raw.length,gzipBytes:gzipSync(raw).length});}}}
await walk(path.join(root,'dist'));
await writeFile(path.join(output,'responsive-matrix.json'),JSON.stringify({routes,widths,results,motionRequests,reduced,nojs,assets},null,2));
console.log(JSON.stringify({cells:results.length,overflow:results.filter(r=>r.horizontalOverflow).map(r=>[r.route,r.width]),clipped:results.filter(r=>r.clippedText.length).map(r=>({route:r.route,width:r.width,text:r.clippedText})),errors:results.filter(r=>r.errors.length),reduced,nojs,assets:assets.filter(a=>/\.(js|css|woff2|webp|png)$/.test(a.path))},null,2));
