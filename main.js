const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://bdgastore.com/blogs/upcoming-releases/9-23-20-nike-dunk-hi-sp-maize-blue');

//   await page.type('#first_name', 'Justin');
//   await page.type('#last_name', 'Justin');

//   await browser.close();
})();