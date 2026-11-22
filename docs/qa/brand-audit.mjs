import { chromium } from 'file:///C:/Users/sanch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const report=[];
for(const width of [360,390,768,1440]){
 const page=await browser.newPage({viewport:{width,height:width===1440?900:844},deviceScaleFactor:1});
 await page.route('**/@vite/client',r=>r.abort());
 for(const route of ['/','/proyectos']){
  await page.goto(`http://127.0.0.1:4321${route}`,{waitUntil:'networkidle'});
  await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
  await page.evaluate(async()=>{await document.fonts.ready;for(let y=0;y<document.body.scrollHeight;y+=600){scrollTo(0,y);await new Promise(r=>setTimeout(r,80))}await Promise.race([Promise.all([...document.images].filter(i=>i.getBoundingClientRect().width>0).map(i=>i.decode().catch(()=>{}))),new Promise(r=>setTimeout(r,2000))]);scrollTo(0,0)});
  await page.waitForTimeout(1100);
  if(route==='/'){
   await page.screenshot({path:`docs/qa/evidence/brand-audit-header-${width}.png`});
   if(width<1000){
    await page.locator('button[aria-controls]').first().click();
    await page.waitForTimeout(400);
    await page.screenshot({path:`docs/qa/evidence/brand-audit-dialog-${width}.png`});
    await page.keyboard.press('Escape');
   }
   await page.locator('footer').scrollIntoViewIfNeeded();
   await page.waitForTimeout(300);
   await page.screenshot({path:`docs/qa/evidence/brand-audit-footer-${width}.png`});
  }else{
   const card=page.locator('.project-card--nfc');
   await card.scrollIntoViewIfNeeded();
   await page.waitForTimeout(300);
   await card.screenshot({path:`docs/qa/evidence/brand-audit-nfc-${width}.png`});
  }
  report.push(await page.evaluate(({width,route})=>({width,route,scrollWidth:document.documentElement.scrollWidth,logos:[...document.querySelectorAll('.site-logo img')].map(i=>({src:i.getAttribute('src'),complete:i.complete,naturalWidth:i.naturalWidth,width:i.getBoundingClientRect().width,height:i.getBoundingClientRect().height})),clipped:[...document.querySelectorAll('main *, .site-header *, footer *')].filter(e=>e.getBoundingClientRect().width>0&&(e.getBoundingClientRect().left<-.5||e.getBoundingClientRect().right>innerWidth+.5)).map(e=>({tag:e.tagName,class:e.className,text:e.textContent.trim().slice(0,70)})),icon:[...document.querySelectorAll('link[rel*="icon"]')].map(l=>({rel:l.rel,href:l.getAttribute('href')})),ogImage:document.querySelector('meta[property="og:image"]')?.getAttribute('content')}),{width,route}));
 }
 await page.close();
}
await browser.close();
await writeFile('docs/qa/evidence/brand-audit-report.json',JSON.stringify(report,null,2));
console.log(report.map(r=>`${r.width} ${r.route}: scrollWidth ${r.scrollWidth}; clipped ${r.clipped.length}; logo ${r.logos.map(l=>`${Math.round(l.width)}x${Math.round(l.height)}(${l.complete})`).join(', ')}`).join('\n'));
