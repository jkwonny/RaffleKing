const puppeteer = require('puppeteer-extra')
 
// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


// should be able to create a json file that contains people's info
const billingAccounts = [{ fullname: 'zelda kwon', email: 'zeldakwonny@perfitstyles.com', phonenumber: '5620039832', address: '1307BH North Bronson Ave. Unit 402', zipcode: '90028'},
{ fullname: 'george kwon', email: 'georgiemarnies@perfitstyles.com', phonenumber: '6263387362', address: '1307LL North Bronson Ave. Unit 402', zipcode: '90028'},
{ fullname: 'pranav kwon', email: 'prigggioniess@perfitstyles.com', phonenumber: '6263387336', address: '1307MM North Bronson Ave. Unit 402', zipcode: '90028'},
{ fullname: 'mario kwon', email: 'mariolovaaaa23@perfitstyles.com', phonenumber: '5623773876', address: '1307DF North Bronson Ave. Unit 402', zipcode: '90028'},
{ fullname: 'jesus kwon', email: 'believeinjesus123@perfitstyles.com', phonenumber: '6268889382', address: '1307QQ North Bronson Ave. Unit 402', zipcode: '90028'},
{ fullname: 'Ellen kwon', email: 'ellendageneroushaha@perfitstyles.com', phonenumber: '6263773123', address: '1307GG North Bronson Ave. Unit 402', zipcode: '90028'}]

const proxy = ['50.114.231.231:65075',
  '50.114.231.232:65075',
  '50.114.231.233:65075',
  '50.114.231.234:65075',
  '50.114.231.235:65075',
  '50.114.231.236:65075',
  '50.114.231.237:65075',
  '50.114.231.238:65075',
  '50.114.231.239:65075',
  '50.114.231.240:65075',
  '50.114.231.241:65075',
  '50.114.231.242:65075',
  '50.114.231.243:65075',
  '50.114.231.244:65075',
  '50.114.231.245:65075',
  '50.114.231.246:65075',
  '50.114.231.247:65075',
  '50.114.231.248:65075',
  '50.114.231.249:65075',
  '50.114.231.250:65075',
  '50.114.231.251:65075',
  '50.114.231.252:65075',
  '50.114.231.253:65075',
  '50.114.231.254:65075',
  '50.114.232.2:65075'];
 
  const APIKey = "f708d28ffdc8b669b7174e7c61f0354a"; 
  

const runFunction = (proxy, billing) => {
  puppeteer.launch({ headless: false, args: [ `--proxy-server=${proxy}` ] }).then(async browser => {
    console.log('Running tests..')
    const page = await browser.newPage()
    page.evaluate(() => {
      var script = document.createElement('script');
      script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
      script.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(script);
    })

    await page.goto('https://newyork.doverstreetmarket.com/new-items/jordan-v-ow');
    await page.waitFor(5000);
    await page.type('#field100917790', billing.fullname);
    await page.type('#field100917791', billing.email);
    await page.type('#field100917792', billing.phonenumber);
    await page.select("#field100917793", "US 10");
    await page.type('#field100917794', billing.address);
    await page.select('#field100917795', 'California');
    await page.type('#field100917796', billing.zipcode);
    await page.click('#field100917797_2')
    await page.click('#fsSubmitButton4113892');

    const googleKey = "this comes from right clicking the 2captcha and getting the k= in the iframe url";
    const pageUrl = 'https://newyork.doverstreetmarket.com/new-items/jordan-v-ow';
    const proxyType = 'HTTPS'; 
    // figure out captcha stuff
    // const googleSiteKey = document.getElementsByClassName('g-recaptcha')[0].getAttribute('data-sitekey');
    const googleSiteKey = '6LetKEIUAAAAAPk-uUXqq9E82MG3e40OMt_74gjS&cb=ge437niah36c';

    const token = await solveCaptchaV2(APIKey, googleSiteKey, pageUrl, proxy, proxyType);
    
    await page.evaluate((token) => {
        document.querySelector('#g-recaptcha-response').value = token
    }, token)


    console.log(`Raffle entries complete ✨`)
  })
}

async function solveCaptchaV2(APIKey, googleKey, pageUrl, proxy, proxyType) {
  var requestUrl =
    "http://2captcha.com/in.php?key=" +
    APIKey +
    "&method=userrecaptcha&googlekey=" +
    googleKey +
    "&pageurl=" +
    pageUrl +
    "&proxy=" +
    proxy +
    "&proxytype=";

  switch (proxyType) {
    case "HTTP":
      requestUrl = requestUrl + "HTTP";
      break;

    case "HTTPS":
      requestUrl = requestUrl + "HTTPS";
      break;

    case "SOCKS4":
      requestUrl = requestUrl + "SOCKS4";
      break;

    case "SOCKS5":
      requestUrl = requestUrl + "SOCKS5";
      break;
  }

  $.ajax({
    url: "requestUrl",
    success: function (result) {
      if (result.length < 3) {
        return false;
      } else {
        if (result.substring(0, 3) == "OK|") {
          var captchaID = result.substring(3);

          for (var i = 0; i < 24; i++) {
            var ansUrl =
              "http://2captcha.com/res.php?key=" +
              APIKey +
              "&action=get&id=" +
              captchaID;

            $.ajax({
              url: "ansUrl",
              success: function (ansresult) {
                if (ansresult.length < 3) {
                  return ansresult;
                } else {
                  if (ansresult.substring(0, 3) == "OK|") {
                    return ansresult;
                  } else if (ansresult != "CAPCHA_NOT_READY") {
                    return ansresult;
                  }
                }
              },
            });
            await.sleep(5000);
          }
        } else {
          return ansresult;
        }
      }
    },
    fail: function () {
      return "";
    },
  });
}

// commit

// for (let i = 0; i < billingAccounts.length; i++) {
//   runFunction(proxy[i], billingAccounts[i]);
// }

runFunction(proxy[0], billingAccounts[0]);