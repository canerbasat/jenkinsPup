const { Given, When, Then } = require('cucumber');

const { compose } = require('../utils');
const {
  getLocaleHeaders,
  getDevice,
  getUrl,
  getLocation,
} = require('../support/helpers');
const {
  openPage,
  setDevice,
  setLocation,
  setHeaders,
  clickOn,
  typeIn,
  pressKey,
  textEquals,
  textIncludes,
  hrefEquals,
  hrefIncludes,
  saveHref,
  srcEquals,
  seeElement,
  seeVisibleElement,
  noElement,
  countElements,
  compareElementCount,
  styleEquals,
  urlEquals,
  pathEquals,
  waitFor,
  selectVal,
  selectInAndOutDate,
  roomTypeSelectAndFillInfo,
  choosePaymentType,
  selectDepartureDatePlane,
  selectReturnDatePlane,
  selectDomesticFlight,
  fillPasssengerInformationPlain,
  choosePaymentTypeForPlane
} = require('../support/actions');

Given(/Gidis tarihi (.+) gun sonrasina secilir/, async (inDate) =>
selectInAndOutDate(inDate)
);

Given(/Gidis ucus tarihi (.+) gun sonrasina secilir/, async (inDate) =>
selectDepartureDatePlane(inDate)
);

Given(/(.+) Ucus (.+) secilir/, async (flightType,destinatation) =>
selectDomesticFlight(flightType,destinatation)
);



Given(/Donus ucus tarihi (.+) gun sonrasina secilir/, async (returnDate) =>
selectReturnDatePlane(returnDate)
);

Given(/Odeme tipi (.+) secilir/, async (paymentType) =>
choosePaymentType(paymentType)
);

Given(/Ucak odeme tipi (.+) secilir/, async (paymentType) =>
choosePaymentTypeForPlane(paymentType)
);





Given("Yolcu bilgileri doldurulur", async () =>
roomTypeSelectAndFillInfo()
);


Given(/(.+) yolcu ucus bilgileri doldurulur/, async (flightType) =>
fillPasssengerInformationPlain(flightType)
);



When(/"(.+)" gorunene kadar beklenir/, async (name) => seeVisibleElement(name));


// Given
Given(/a user on a (desktop|tablet|mobile) device/, async (device) => {
  const deviceDescriptor = getDevice(device);
  await setDevice(deviceDescriptor);
});

Given(/the (.+) domain and the (.*) path/, async (domain, path) =>
  compose(openPage, getUrl)(domain, path)
);

Given("Tarayici acilir", async () =>
  compose(openPage, getUrl)("test")
);

Given(/"(.+)" menusunden (.*) secilir/, async (name, value) =>
  selectVal(name,value)
);

Given(/a user in the (en-us) locale/, async (locale) =>
  compose(setHeaders, getLocaleHeaders)(locale)
);

// When
When(/I go to (.+)/, async (url) => openPage(url));

When(/"(.+)" butonuna tiklanir/, async (name) => clickOn(name));

When(/I set the user location to (.+)/, async (location) =>
  compose(setLocation, getLocation)(location)
);

When(/"(.+)" alanina (.+) yazilir/, async (key, query) => typeIn(key, query));

When(/I save the HREF of the (.+)/, async (name) => saveHref(name));

When(/"(\d+)" saniye beklenir/, async (secs) => waitFor(secs));

// Then
Then(/the (.+) should be displayed/, async (name) => seeElement(name));

Then(/the (.+) should be visible/, async (name) => seeVisibleElement(name));

Then(/the (.+) should not be displayed/, async (name) => noElement(name));

Then(/(\d+) (.+)s* should be displayed/, async (count, name) =>
  countElements(count, name)
);

When(/I press (.+)/, async (key) => {
  await pressKey(key);
});

Then(
  /(more|less) than (\d+) (.+)s* should be displayed/,
  async (operator, count, name) => compareElementCount(name, operator, count)
);

Then(/the HREF for the (.+) should be "(.+)"/, async (name, href) =>
  hrefEquals(name, href)
);

Then(/the HREF for the (.+) should include "(.+)"/, async (name, href) =>
  hrefIncludes(name, href)
);

Then(/the SRC for the (.+) should be "(.+)"/, async (name, src) =>
  srcEquals(name, src)
);


Given(/"(.+)" elementi "(.+)" degerine esittir/, async (name, text) =>
  textEquals(name, text)
);

Then(/"(.+)" elementi "(.+)" degerini icermektedir/, async (name, text) =>
  textIncludes(name, text)
);

Then(/the (.+) style for the (.+) should be "(.+)"/, async (attr, name, val) =>
  styleEquals(attr, name, val)
);

Then(/the URL should equal the saved HREF/, async () => urlEquals());

Then(/Sayfanin url adresi "(.+)" olmalidir/, async (path) => pathEquals(path));
