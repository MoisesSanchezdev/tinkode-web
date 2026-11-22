import { chromium } from 'file:///C:/Users/sanch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const report = [];
for (const width of [1440, 390]) {
  const page = await browser.newPage({viewport:{width,height:width===1440?900:844},deviceScaleFactor:1});
  // Keep each capture stable while other reviewers refine sources in the dev server.
  await page.route('**/@vite/client', request => request.abort());
  for (const route of ['/', '/soluciones', '/proceso', '/proyectos', '/nosotros']) {
    await page.goto(`http://127.0.0.1:4321${route}`,{waitUntil:'networkidle'});
    await page.addStyleTag({content:'html {scroll-behavior:auto!important}'});
    await page.evaluate(async()=>{
      await document.fonts.ready;
      for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,120));}
      await Promise.race([Promise.all([...document.images].filter(i=>i.getBoundingClientRect().width>0).map(i=>i.decode().catch(()=>{}))),new Promise(r=>setTimeout(r,2000))]);
      window.scrollTo(0,0);
    });
    await page.waitForTimeout(1000);
    const name=route==='/'?'home':route.slice(1);
    await page.screenshot({path:`docs/qa/evidence/audit-${name}-${width}.png`,fullPage:true});
    await page.screenshot({path:`docs/qa/evidence/audit-${name}-${width}-top.png`});
    report.push(await page.evaluate(({route,width})=>({route,width,height:document.documentElement.scrollHeight,scrollWidth:document.documentElement.scrollWidth,sections:[...document.querySelectorAll('main > *, main section')].map(el=>({tag:el.tagName,className:el.className,id:el.id,top:Math.round(el.getBoundingClientRect().top+scrollY),height:Math.round(el.getBoundingClientRect().height)})),headings:[...document.querySelectorAll('h1,h2,h3')].map(el=>({tag:el.tagName,text:el.textContent.trim(),fontSize:getComputedStyle(el).fontSize,top:Math.round(el.getBoundingClientRect().top+scrollY)})),images:[...document.images].map(i=>({src:i.getAttribute('src'),complete:i.complete,naturalWidth:i.naturalWidth})),clipped:[...document.querySelectorAll('main *')].filter(el=>el.getBoundingClientRect().width>0&&(el.getBoundingClientRect().left<0||el.getBoundingClientRect().right>innerWidth+1)).map(el=>({tag:el.tagName,class:el.className,text:el.textContent.trim().slice(0,60)}))}),{route,width}));
  }
  if(width===390){
    await page.goto('http://127.0.0.1:4321/',{waitUntil:'networkidle'});
    const button=page.locator('button[aria-controls]').first();
    if(await button.count()){
      await button.click();
      await page.waitForTimeout(400);
      await page.screenshot({path:'docs/qa/evidence/audit-menu-390.png'});
    }
  }
  await page.close();
}
await browser.close();
await writeFile('docs/qa/evidence/visual-audit-report.json',JSON.stringify(report,null,2));
console.log(report.map(r=>`${r.route} @${r.width}: ${r.height}px, scrollWidth ${r.scrollWidth}, clipped ${r.clipped.length}, images ${r.images.filter(i=>i.complete&&i.naturalWidth>0).length}/${r.images.length}`).join('\n'));
