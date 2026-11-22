import { chromium } from 'file:///C:/Users/sanch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { writeFile } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const report = [];
for (const width of [390, 768]) {
  for (const reducedMotion of ['reduce', 'no-preference']) {
    const context = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4321/#planes-negocios', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    const directTop = await page.locator('#planes-negocios').evaluate(e => e.getBoundingClientRect().top);
    await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(1000);
    await page.locator('[data-menu-toggle]').click();
    await page.locator('dialog nav a[href="/#planes-negocios"]').click();
    await page.waitForTimeout(1100);
    const state = await page.evaluate(() => ({ hash: location.hash, targetTop: document.getElementById('planes-negocios').getBoundingClientRect().top, headerBottom: document.querySelector('header').getBoundingClientRect().bottom, dialogOpen: document.querySelector('dialog').open, focus: document.activeElement.getAttribute('aria-label'), scrollY }));
    report.push({ width, reducedMotion, directTop, ...state, aligned: Math.abs(state.targetTop - directTop) < 3 });
    await context.close();
  }
}
await writeFile(new URL('./evidence/menu-anchor-regression.json', import.meta.url), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
