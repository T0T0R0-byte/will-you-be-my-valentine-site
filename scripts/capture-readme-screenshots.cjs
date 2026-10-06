const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });

  fs.mkdirSync("docs/screenshots", { recursive: true });

  await page.goto("http://127.0.0.1:8001/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "docs/screenshots/question.png", fullPage: false });

  await page.click("#no-btn");
  await page.waitForTimeout(700);
  await page.screenshot({ path: "docs/screenshots/no-choice.png", fullPage: false });

  await page.click("#yes-btn");
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "docs/screenshots/success.png", fullPage: false });

  await browser.close();
})();
