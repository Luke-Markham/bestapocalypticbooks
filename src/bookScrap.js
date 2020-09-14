const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'https://www.amazon.com/Easy-Hope-Surviving-Dead-Book-ebook-dp-B0064VVR0Q/dp/B0064VVR0Q/ref=mt_other?_encoding=UTF8&me=&qid=',
    { waitUntil: 'networkidle0' }
  );

  let data = {};

  data.title = await page.$eval('#productTitle', (el) => el.textContent);
  data.author = await page.$eval('.author > a', (el) => el.textContent);
  data.description = await page.$eval('#iframeContent', (el) => el.textContent);

  var fs = require('fs');
  fs.writeFileSync('data.json', JSON.stringify(data));

  await browser.close();
})();
