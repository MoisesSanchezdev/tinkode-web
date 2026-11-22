import { chromium } from "file:///C:/Users/sanch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
const base = "http://127.0.0.1:4321";
const routes = ["/", "/soluciones", "/proceso", "/proyectos", "/nosotros"];
const browser = await chromium.launch({ channel:"chrome", headless:true });
const page = await browser.newPage({ reducedMotion:"reduce" });
const errors = [];
page.on("pageerror", e => errors.push(e.message));
const report = { views:[], assets:[], errors, originalPixelsPreserved:false };
try {
 for (const route of routes) for (const width of [360,390,430,768,1024,1440]) {
   await page.setViewportSize({ width, height:900 });
   await page.goto(base+route, { waitUntil:"networkidle" });
   const result = await page.evaluate(() => ({
     overflow:document.documentElement.scrollWidth>innerWidth,
     logos:[...document.querySelectorAll(".site-logo img")].map(image => {
       const r=image.getBoundingClientRect(), s=getComputedStyle(image);
       return { src:image.getAttribute("src"), loaded:image.complete&&image.naturalWidth>0, width:r.width, height:r.height, filter:s.filter, transform:s.transform };
     }),
     og:document.querySelector('meta[property="og:image"]').content,
     schemaLogo:JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)["@graph"][0].logo,
   }));
   assert.equal(result.overflow,false,route+" overflow at "+width);
   for (const logo of result.logos.filter(image => image.width>0)) {
     // The footer is lazy; load it only when it is in view.
     if (logo.height>0) assert.ok(Math.abs(logo.width/logo.height-910/550)<0.01,"Logo aspect ratio");
     assert.equal(logo.filter,"none");
     assert.equal(logo.transform,"none");
     assert.equal(logo.src,"/images/brand/tinkode-logo.webp");
   }
   assert.ok(result.og.endsWith("/og.png?v=tk-2026"));
   assert.ok(result.schemaLogo.endsWith("/images/brand/tinkode-logo.png"));
   report.views.push({route,width,...result});
 }
 await page.setViewportSize({width:390,height:844});
 await page.goto(base);
 await page.locator("[data-menu-toggle]").click();
 assert.equal(await page.locator("dialog .site-logo img").evaluate(i=>i.complete&&i.naturalWidth>0),true);
 await page.keyboard.press("Escape");
 await page.locator(".site-footer").scrollIntoViewIfNeeded();
 await page.locator(".site-footer img").evaluate(i=>i.decode());
 assert.equal(await page.locator(".site-footer img").evaluate(i=>i.naturalWidth),364);
 for (const asset of ["/images/brand/tinkode-logo.webp","/images/brand/tinkode-logo.png","/images/brand/tinkode-symbol.png","/favicon.svg?v=tk-2026","/favicon-32.png","/apple-touch-icon.png","/og.png?v=tk-2026"]) {
   const response = await page.request.get(base+asset);
   assert.equal(response.status(),200,asset);
   report.assets.push({asset,status:response.status(),bytes:(await response.body()).length});
 }
 const original = await sharp("public/images/brand/tinkode-logo-original.jpg").extract({left:174,top:338,width:910,height:550}).raw().toBuffer();
 const exported = await sharp("public/images/brand/tinkode-logo.png").raw().toBuffer();
 assert.ok(original.equals(exported),"PNG must preserve every original foreground and background pixel");
 report.originalPixelsPreserved=true;
 assert.equal(errors.length,0);
 await writeFile("docs/qa/evidence/brand-verification.json",JSON.stringify(report,null,2));
 console.log(JSON.stringify({views:report.views.length,assets:report.assets.length,errors,originalPixelsPreserved:true}));
} finally { await browser.close(); }
