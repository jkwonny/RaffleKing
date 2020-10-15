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

const proxy = ['108.165.20.125:11012',
  '108.165.20.126:11013',
  '108.165.20.127:11014',
  '108.165.20.128:11015',
  '108.165.20.129:11016',
  '108.165.20.130:11017',
  '108.165.20.156:11043',
  '108.165.20.157:11044',
  '108.165.20.158:11045',
  '108.165.20.159:11046',
  '108.165.20.160:11047',
  '108.165.20.161:11048',
  '108.165.20.162:11049',
  '108.165.20.163:11050',
  '108.165.20.164:11051',
  '108.165.20.165:11052',
  '108.165.20.166:11053',
  '108.165.20.167:11054',
  '108.165.20.168:11055',
  '108.165.20.169:11056',
  '108.165.20.170:11057',
  '108.165.20.171:11058',
  '108.165.20.172:11059',
  '108.165.20.173:11060',
  '108.165.20.174:11061'];
 

const runFunction = (proxy, billing) => {
  puppeteer.launch({ headless: false, args: [ `--proxy-server=${proxy}` ] }).then(async browser => {
    console.log('Running tests..')
    const page = await browser.newPage()
    await page.goto('https://newyork.doverstreetmarket.com/new-items/raffle');
    await page.waitFor(5000)
    await page.type('#field100228038', billing.fullname);
    await page.type('#field100228039', billing.email);
    await page.type('#field100228040', billing.phonenumber);
    await page.select("#field100228041", "US 10");
    await page.type('#field100228042', billing.address);
    await page.select('#field100228043', 'California');
    await page.type('#field100228044', billing.zipcode);
    await page.click('#fsSubmitButton4094992');

    // figure out captcha stuff
  
  
    console.log(`Raffle entries complete ✨`)
  })
}


for (let i = 0; i < billingAccounts.length; i++) {
  runFunction(proxy[i], billingAccounts[i]);
}