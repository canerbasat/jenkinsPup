const {BeforeAll, AfterAll, After, setDefaultTimeout , Before} = require('cucumber');
const puppeteer = require('puppeteer');


const scope = require('./support/scope');
const { DEFAULT_TIMEOUT, DEFAULT_VIEWPORT } = require('./support/constants');





Before(async () => {
  setDefaultTimeout(DEFAULT_TIMEOUT);
    scope.browser = await puppeteer.launch({
      defaultViewport: DEFAULT_VIEWPORT,
      //executablePath: '/usr/bin/chromium-browser',
      args: [
        "--lang=tr-TR,tr",
        // Required for Docker version of Puppeteer
        '--start-maximized',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        // This will write shared memory files into /tmp instead of /dev/shm,
        // because Docker’s default for /dev/shm is 64MB
        '--disable-dev-shm-usage',
      ],
      defaultViewport: DEFAULT_VIEWPORT,
      headless: false,
    });


  scope.context = await scope.browser.createIncognitoBrowserContext();
});





After(async () => {
  if (scope.browser && scope.currentPage) {
    await scope.context.close();
    await scope.browser.close();

    scope.currentPage = null;
    scope.origin = null;
    scope.savedHref = null;
  }
});


//BeforeAll olarak cagırdıgında tum testleri tek browserda yeni tablarda calıstırıyor loginSession dusmuyo o yuzden before kullan
/*
Before(async () => {
  setDefaultTimeout(DEFAULT_TIMEOUT);
    scope.browser = await puppeteer.launch({
      defaultViewport: DEFAULT_VIEWPORT,
      //executablePath: '/usr/bin/chromium-browser',
      args: [
        "--lang=tr-TR,tr",
        // Required for Docker version of Puppeteer
        '--start-maximized',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        // This will write shared memory files into /tmp instead of /dev/shm,
        // because Docker’s default for /dev/shm is 64MB
        '--disable-dev-shm-usage',
      ],
      defaultViewport: DEFAULT_VIEWPORT,
      headless: false,
    });


  scope.context = await scope.browser.createIncognitoBrowserContext();
});
*/

/*
AfterAll(async () => {
  if (scope.context) await scope.context.close();
  if (scope.browser) await scope.browser.close();
});
*/