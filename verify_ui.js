const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3001');

  // Hero section
  await page.screenshot({ path: 'hero.png' });

  // Scroll to Why Choose
  await page.evaluate(() => {
    document.getElementById('why-choose').scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'why_choose.png' });

  // Scroll to Showcase
  await page.evaluate(() => {
    document.getElementById('showcase').scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'showcase.png' });

  // Scroll to Services
  await page.evaluate(() => {
    document.getElementById('services').scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'services.png' });

  await browser.close();
})();
