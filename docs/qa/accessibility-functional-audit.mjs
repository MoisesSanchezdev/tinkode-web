import { chromium } from 'file:///C:/Users/sanch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const base = 'http://127.0.0.1:4321';
const contact = 'https://wa.me/qr/N7DH57UUDVPNI1?s=p';
const output = new URL('./evidence/', import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const report = { generated: new Date().toISOString(), base, axe: '4.10.3', pages: [], interactions: [], noJs: [], reducedMotion: [], anchors: [], errors: [] };
const routeList = ['/', '/soluciones', '/proceso', '/proyectos', '/nosotros', '/auditoria-ruta-inexistente'];
const sizes = [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 390, height: 844 }];

async function test(label, fn) {
  try { const details = await fn(); report.interactions.push({ label, pass: true, details }); console.log('PASS', label); }
  catch (error) { report.interactions.push({ label, pass: false, error: error.message }); console.log('FAIL', label, error.message); await page.keyboard.press('Escape').catch(() => {}); }
  await writeFile(new URL('./accessibility-functional-report.json', output), JSON.stringify(report, null, 2));
}
const assert = (condition, message) => { if (!condition) throw new Error(message); };

for (const size of sizes) {
  const context = await browser.newContext({ viewport: { width: size.width, height: size.height }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => report.errors.push({ size: size.name, url: page.url(), message: error.message }));
  for (const route of routeList) {
    const response = await page.goto(base + route, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.addScriptTag({ path: fileURLToPath(new URL('./axe.min.js', import.meta.url)) });
    const axe = await page.evaluate(async () => window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] }, rules: { 'label-content-name-mismatch': { enabled: true } } }));
    const details = await page.evaluate(() => {
      const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => ({ level: Number(h.tagName.slice(1)), text: h.textContent.trim() }));
      const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
      return {
        title: document.title, lang: document.documentElement.lang,
        description: document.querySelector('meta[name="description"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        robots: document.querySelector('meta[name="robots"]')?.content || null,
        og: Object.fromEntries([...document.querySelectorAll('meta[property^="og:"]')].map(e => [e.getAttribute('property'), e.content])),
        headings, h1Count: headings.filter(h => h.level === 1).length,
        duplicateIds: ids.filter((id, index) => ids.indexOf(id) !== index),
        overflow: document.documentElement.scrollWidth > innerWidth,
        bodyWidth: document.body.scrollWidth, viewport: innerWidth,
        whatsapp: [...document.querySelectorAll('a[href*="wa.me"]')].map(a => ({ href: a.href, target: a.target, rel: a.rel, text: a.getAttribute('aria-label') || a.textContent.trim() })),
        brokenImages: [...document.images].filter(i => i.loading !== 'lazy' && (!i.complete || i.naturalWidth === 0)).map(i => i.src),
        jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => { try { return { valid: true, value: JSON.parse(s.textContent) }; } catch (e) { return { valid: false, error: e.message }; } }),
      };
    });
    const violations = axe.violations.map(v => ({ id: v.id, impact: v.impact, description: v.description, help: v.help, helpUrl: v.helpUrl, nodes: v.nodes.map(n => ({ target: n.target, html: n.html, failureSummary: n.failureSummary })) }));
    const incomplete = axe.incomplete.map(v => ({ id: v.id, impact: v.impact, targets: v.nodes.map(n => n.target) }));
    report.pages.push({ route, size: size.name, status: response.status(), ...details, violations, incomplete });
    console.log('PAGE', size.name, route, 'axe violations', violations.length);
    await writeFile(new URL('./accessibility-functional-report.json', output), JSON.stringify(report, null, 2));
    await page.screenshot({ path: fileURLToPath(new URL(`audit-${route === '/' ? 'home' : route.slice(1)}-${size.name}.png`, output)), fullPage: true });
  }
  await context.close();
}

const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
const page = await context.newPage();
page.setDefaultTimeout(7000);
for (const route of routeList.slice(0, 5)) {
  await page.goto(base + route, { waitUntil: 'networkidle' });
  await test(`menu keyboard ${route}`, async () => {
    await page.locator('[data-menu-toggle]').click();
    assert(await page.locator('dialog').evaluate(e => e.open), 'Dialog did not open');
    assert(await page.locator('[data-menu-toggle]').getAttribute('aria-expanded') === 'true', 'Toggle state not true');
    const seen = [];
    for (let i = 0; i < 22; i++) {
      await page.keyboard.press(i < 11 ? 'Tab' : 'Shift+Tab');
      const state = await page.evaluate(() => ({ inside: Boolean(document.activeElement?.closest('dialog')), documentFocused: document.hasFocus(), tag: document.activeElement?.tagName, label: (document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent.trim())?.slice(0, 80) }));
      seen.push(state);
      assert(state.inside || (!state.documentFocused && state.tag === 'BODY'), `Focus escaped dialog to document content: ${JSON.stringify(state)}`);
    }
    await page.keyboard.press('Escape');
    await page.waitForTimeout(80);
    assert(!(await page.locator('dialog').evaluate(e => e.open)), 'Escape did not close dialog');
    assert(await page.locator('[data-menu-toggle]').evaluate(e => document.activeElement === e), 'Escape did not restore focus');
    assert(await page.locator('[data-menu-toggle]').getAttribute('aria-expanded') === 'false', 'Toggle state not false');
    assert(!(await page.locator('body').evaluate(e => e.classList.contains('is-menu-open'))), 'Scroll lock was retained');
    return { tabSequence: seen };
  });
  await test(`menu close button ${route}`, async () => {
    await page.locator('[data-menu-toggle]').click();
    await page.locator('[data-menu-dismiss]').click();
    assert(!(await page.locator('dialog').evaluate(e => e.open)), 'Close button did not close');
  });
  await test(`menu backdrop ${route}`, async () => {
    await page.locator('[data-menu-toggle]').click();
    const bounds = await page.locator('dialog').boundingBox();
    const x = Math.max(1, bounds.x - 5);
    await page.mouse.click(x, 838);
    await page.waitForTimeout(80);
    assert(!(await page.locator('dialog').evaluate(e => e.open)), 'Backdrop did not close dialog');
  });
  await test(`menu navigation ${route}`, async () => {
    await page.locator('[data-menu-toggle]').click();
    await page.locator('dialog nav a[href="/proceso"]').click();
    await page.waitForURL(base + '/proceso');
    assert(!(await page.locator('dialog').evaluate(e => e.open)), 'Dialog remained open after navigation');
  });
}
await page.goto(base, { waitUntil: 'networkidle' });
await test('menu closes on desktop resize', async () => {
  await page.locator('[data-menu-toggle]').click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(100);
  assert(!(await page.locator('dialog').evaluate(e => e.open)), 'Menu remains open on desktop');
  return { active: await page.evaluate(() => document.activeElement?.outerHTML) };
});
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(base, { waitUntil: 'networkidle' });
for (let index = 0; index < await page.locator('details').count(); index++) {
  await test(`native accordion ${index + 1}`, async () => {
    const details = page.locator('details').nth(index);
    const summary = details.locator('summary');
    await summary.focus();
    await page.keyboard.press('Enter');
    assert(await details.evaluate(e => e.open), 'Enter did not open details');
    assert(await details.locator('div').first().isVisible(), 'Expanded panel not visible');
    await page.keyboard.press('Space');
    assert(!(await details.evaluate(e => e.open)), 'Space did not close details');
  });
}
await test('skip link activates main', async () => {
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  assert(await page.locator('.skip-link').evaluate(e => document.activeElement === e), 'First Tab is not skip link');
  await page.keyboard.press('Enter');
  assert(await page.locator('main').evaluate(e => document.activeElement === e), 'Skip link did not focus main');
});
await test('floating contact hidden state is inert', async () => {
  await page.goto(base, { waitUntil: 'networkidle' });
  const before = await page.locator('[data-floating-contact]').evaluate(e => ({ inert: e.inert, hiddenClass: e.classList.contains('is-hidden') }));
  await page.locator('#planes-negocios').scrollIntoViewIfNeeded();
  await page.waitForTimeout(80);
  const after = await page.locator('[data-floating-contact]').evaluate(e => ({ inert: e.inert, hiddenClass: e.classList.contains('is-hidden') }));
  assert(after.inert && after.hiddenClass, 'Invisible floating contact remains focusable');
  return { before, after };
});

const anchorTargets = new Map();
for (const route of routeList.slice(0, 5)) {
  await page.goto(base + route, { waitUntil: 'networkidle' });
  const internal = await page.locator('a[href]').evaluateAll(links => links.map(a => a.href).filter(h => h.startsWith(location.origin)));
  for (const href of internal) anchorTargets.set(href, true);
}
for (const href of anchorTargets.keys()) {
  const url = new URL(href);
  const response = await page.goto(href, { waitUntil: 'networkidle' });
  const result = { href, status: response?.status() ?? 200, hash: url.hash, exists: true };
  if (url.hash) {
    result.exists = await page.evaluate(hash => Boolean(document.getElementById(decodeURIComponent(hash.slice(1)))), url.hash);
    if (result.exists) result.position = await page.evaluate(hash => { const r = document.getElementById(decodeURIComponent(hash.slice(1))).getBoundingClientRect(); const header = document.querySelector('header').getBoundingClientRect(); return { top: r.top, bottom: r.bottom, headerBottom: header.bottom, behindHeader: r.top < header.bottom - 1 }; }, url.hash);
  }
  report.anchors.push(result);
}
await context.close();

for (const size of sizes) {
  const noJsContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: size.width, height: size.height } });
  const noJsPage = await noJsContext.newPage();
  for (const route of routeList.slice(0, 5)) {
    const response = await noJsPage.goto(base + route, { waitUntil: 'networkidle' });
    const result = await noJsPage.evaluate(() => ({
      h1Visible: [...document.querySelectorAll('h1')].every(e => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && Number(s.opacity) > 0; }),
      visibleContent: [...document.querySelectorAll('main h1,main h2,main p')].every(e => { const s = getComputedStyle(e); return s.visibility !== 'hidden' && s.display !== 'none' && Number(s.opacity) > 0; }),
      visibleNavigation: [...document.querySelectorAll('nav')].filter(e => e.getBoundingClientRect().width > 0).map(e => ({ label: e.getAttribute('aria-label'), links: e.querySelectorAll('a').length })),
      menuButtonVisible: Boolean(document.querySelector('[data-menu-toggle]')?.getBoundingClientRect().width),
      exactWhatsapp: [...document.querySelectorAll('a[href*="wa.me"]')].every(a => a.href === 'https://wa.me/qr/N7DH57UUDVPNI1?s=p'),
      overflow: document.documentElement.scrollWidth > innerWidth,
    }));
    report.noJs.push({ route, size: size.name, status: response.status(), ...result });
    if (route === '/' && size.name === 'mobile') {
      if (result.menuButtonVisible) {
        await noJsPage.locator('[data-menu-toggle]').click();
        report.noJs.at(-1).menuOpens = await noJsPage.locator('dialog').evaluate(e => e.open);
      } else report.noJs.at(-1).menuOpens = null;
      await noJsPage.locator('details summary').first().click();
      report.noJs.at(-1).accordionWorks = await noJsPage.locator('details').first().evaluate(e => e.open);
      await noJsPage.screenshot({ path: fileURLToPath(new URL('audit-no-js-mobile.png', output)), fullPage: true });
    }
  }
  await noJsContext.close();
}

const motionContext = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const motionPage = await motionContext.newPage();
for (const route of routeList.slice(0, 5)) {
  await motionPage.goto(base + route, { waitUntil: 'networkidle' });
  report.reducedMotion.push({ route, ...(await motionPage.evaluate(() => ({
    query: matchMedia('(prefers-reduced-motion: reduce)').matches,
    scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    progressDisplay: getComputedStyle(document.querySelector('.scroll-progress')).display,
    activeAnimations: document.getAnimations().filter(a => a.playState === 'running').length,
    transformedReveals: [...document.querySelectorAll('[data-reveal],[data-hero-reveal]')].filter(e => getComputedStyle(e).transform !== 'none').map(e => ({ html: e.outerHTML.slice(0, 180), transform: getComputedStyle(e).transform })),
    loadedGsapResources: performance.getEntriesByType('resource').map(r => r.name).filter(n => /gsap|ScrollTrigger/i.test(n)),
  }))) });
}
await motionContext.close();

report.summary = {
  pageCount: report.pages.length,
  violations: report.pages.reduce((sum, p) => sum + p.violations.length, 0),
  violationIds: [...new Set(report.pages.flatMap(p => p.violations.map(v => v.id)))],
  wrongWhatsapp: report.pages.flatMap(p => p.whatsapp.filter(a => a.href !== contact)),
  failedInteractions: report.interactions.filter(t => !t.pass),
  brokenAnchors: report.anchors.filter(a => a.status >= 400 || !a.exists),
  contentOverflow: report.pages.filter(p => p.overflow).map(p => ({ route: p.route, size: p.size })),
  runtimeErrors: report.errors,
};
await writeFile(new URL('./accessibility-functional-report.json', output), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report.summary, null, 2));
await browser.close();
