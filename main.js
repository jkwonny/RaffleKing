const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  setTimeout(function() {
    console.log('hello world!');
  }, 5000);
  await page.goto('http://www.baitme.com/nike-kobe-v-protro-pj-tucker-pe');
  setTimeout(function() {
    console.log('hello world!');
  }, 5000);
//   await page.type('#first_name', 'Justin');
//   await page.type('#last_name', 'Justin');

//   await browser.close();
})();