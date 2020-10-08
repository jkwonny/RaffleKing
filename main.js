const puppeteer = require('puppeteer');
// const request = require('request-promise-native');
// const poll = require('promise-poller').default;


const config = {
  sitekey: '6LdnDpgUAAAAAFp50woveqE_jH9n3gsXJasjwufq',
  pageurl: 'https://extrabutterny.com/collections/release-draws/products/air-jordan-mens-13-retro-lucky-green-shoes-db6537-113?variant=32385120731184',
  apiKey: '2df72833b88d7d00ea8497d4f8f1bc95',
  apiSubmitUrl: 'http://2captcha.com/in.php',
  apiRetrieveUrl: 'http://2captcha.com/res.php'
}

const getFirstName = (firstName) => {
  return `${firstName}`;
}

const getLastName = (lastName) => {
  return `${lastName}`;
}

const chromeOptions = {
  executablePath: 'C:\Program Files (x86)\Google\Chrome\Application\chrome',
  headless: false,
  slowMo: 10,
  defaultViewport: null
};

(async () => {
  const browser = await puppeteer.launch(chromeOptions);

  const page = await browser.newPage();

  await page.goto(config.pageurl);

  await page.$('.DrawApp-DrawEnterButton o-button');
  // console.log('done');

//   await page.type('#first_name', 'Justin');
//   await page.type('#last_name', 'Justin');

// .
//   await browser.close();
})();