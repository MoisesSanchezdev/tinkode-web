// Run against an already-built Astro preview. Uses transient npm cache, no project dependency.
import { chromium } from 'file:///C:/Users/sanch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import lighthouse from 'file:///C:/Users/sanch/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/lighthouse/core/index.js';
import desktopConfig from 'file:///C:/Users/sanch/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/lighthouse/core/config/desktop-config.js';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({ channel:'chrome', headless:true, args:['--remote-debugging-port=9225'] });
const targets = process.argv.slice(2).length ? process.argv.slice(2) : ['home-mobile','home-desktop','soluciones-mobile','proceso-mobile','proyectos-mobile','nosotros-mobile'];
try {
  for(const target of targets){
    const [route,mode]=target.split('-');
    const url='http://127.0.0.1:4325'+(route==='home'?'/':'/'+route);
    const result=await lighthouse(url,{port:9225,logLevel:'error',output:['json','html'],onlyCategories:['performance','accessibility','best-practices','seo']},mode==='desktop'?desktopConfig:undefined);
    await writeFile(`docs/qa/lighthouse-${target}.report.json`,result.report[0]);
    await writeFile(`docs/qa/lighthouse-${target}.report.html`,result.report[1]);
    console.log(JSON.stringify({target,runtimeError:result.lhr.runtimeError,scores:Object.fromEntries(Object.entries(result.lhr.categories).map(([key,value])=>[key,Math.round(value.score*100)])),lcp:result.lhr.audits['largest-contentful-paint'].displayValue,cls:result.lhr.audits['cumulative-layout-shift'].displayValue,tbt:result.lhr.audits['total-blocking-time'].displayValue}));
  }
} finally { await browser.close(); }
