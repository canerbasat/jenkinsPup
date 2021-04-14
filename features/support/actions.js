const assert = require('assert');
const { URL } = require('url');

const scope = require('./scope');
const { getSelector } = require('../selectors');
const { getElemHandle } = require('./helpers');
const { DEFAULT_TIMEOUT } = require('./constants');

const { equal } = assert;

const openPage = async (url) => {
  scope.currentPage = await scope.context.newPage();
  scope.currentPage.setDefaultTimeout(DEFAULT_TIMEOUT);

  await scope.currentPage.goto(url);
  scope.origin = url.slice(0, url.indexOf('?'));
};

const selectVal = async (name, value) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector,{visible: true});
  await scope.currentPage.select(selector,value);
}


const setDevice = async (deviceDescriptor) => {
  if (deviceDescriptor) return scope.currentPage.emulate(deviceDescriptor);
  return Promise.resolve();
};

const setLocation = async (coords) => {
  if (coords) {
    await scope.context.overridePermissions(scope.origin, ['geolocation']);
    return scope.currentPage.setGeolocation(coords);
  }
  return Promise.resolve();
};

const setHeaders = async (headers) => {
  await scope.currentPage.setExtraHTTPHeaders(headers);
};

const clickOn = async (name) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector,{visible: true});
  const elementHandle = await scope.currentPage.$(selector);
  await elementHandle.click({visible: true});
};


const clickRandomInList = async (name) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  const elementHandle = await scope.currentPage.$$(selector);
  const elemRandom = await Math.floor(Math.random() * elementHandle.length) + 1;
  await waitFor(1)
  await elementHandle[elemRandom].click();
  await waitFor(1)
}

const typeIn = async (key, query) => {
  const selector = getSelector(key);
  await scope.currentPage.waitForSelector(selector);
  const elementHandle = await scope.currentPage.$(selector);
  await elementHandle.type(query);
};

const pressKey = async (key) => {
  await scope.currentPage.keyboard.press(key);
};

const textEquals = async (name, text) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  equal(await scope.currentPage.$eval(selector, (el) => el.innerText), text);
};

const textIncludes = async (name, text) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  equal(
    await scope.currentPage.$eval(
      selector,
      (el, txt) => el.innerText.includes(txt),
      text
    ),
    true
  );
};

const hrefEquals = async (name, href) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  equal(await scope.currentPage.$eval(selector, (el) => el.href), href);
};

const hrefIncludes = async (name, href) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  equal(
    await scope.currentPage.$eval(
      selector,
      (el, h) => el.href.includes(h),
      href
    ),
    true
  );
};

const saveHref = async (name) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  scope.savedHref = await scope.currentPage.$eval(selector, (el) => el.href);
};

const srcEquals = async (name, src) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  equal(await scope.currentPage.$eval(selector, (el) => el.src), src);
};

const seeElement = async (name) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  equal(await scope.currentPage.$eval(selector, (el) => Boolean(el)), true);
};

const seeVisibleElement = async (name) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector, { visible: true });
};

const noElement = async (name) => {
  try {
    const elemHandle = await getElemHandle(name, { timeout: 3000 });
    strictEqual(elemHandle, null);
  } catch (error) {
    assert(true);
  }
};

const countElements = async (name, count) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  const elemLen = await scope.currentPage.$eval(selector, (el) => el.length);
  equal(elemLen, count);
};

const compareElementCount = async (name, operator, count) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  const elemLen = await scope.currentPage.$eval(selector, (el) => el.length);
  equal(elemLen, count);

  if (operator === 'more') {
    equal(elemLen > count, true);
  } else {
    equal(elemLen < count, true);
  }
};

const styleEquals = async (attr, name, val) => {
  const selector = getSelector(name);
  await scope.currentPage.waitForSelector(selector);
  equal(
    await scope.currentPage.$eval(selector, (el, key) => el.style[key], attr),
    val
  );
};

const urlEquals = async () => {
  await scope.currentPage.waitForNavigation();
  equal(scope.currentPage.url(), scope.savedHref);
};

const pathEquals = async (path) => {
  await scope.currentPage.waitForNavigation();
  const currentPathname = new URL(scope.currentPage.url()).pathname;
  equal(currentPathname, path);
  //strictEqual(currentPathname, path);
};

const waitFor = async (secs) => {
  await scope.currentPage.waitFor(secs * 1000);
};



const roomTypeSelectAndFillInfo = async () => {
  const roomType = getSelector("btn_YurtIciOtel_RezervasyonYap_OdaTipi");
  await scope.currentPage.waitForSelector(roomType,{visible: true});
  const roomList = (await scope.currentPage.$$("span[id='roomSizeUniq'] > select")).length;
  for (let j = 0; j < roomList; j++) {
    waitFor(1)
    const roomList = await scope.currentPage.$$("span[id='roomSizeUniq'] > select");
    await roomList[j].select("1")
    
    //burayı dene
    await scope.currentPage.waitForSelector("span[id='nameUniq'] > input");
    await waitFor(3)
    let adBilgisi = await scope.currentPage.$$("span[id='nameUniq'] > input");
    let soyadBilgisi = await scope.currentPage.$$("span[id='lastNameUniq'] > input");
    let konaklayiciMail = await scope.currentPage.$$("span[id='invoiceOwnerUniq'] > input");
    let hesKodu = await scope.currentPage.$$("span[id='hesCodeUniq'] > input");
    let cinsiyet = await scope.currentPage.$$("span#genderUniq > .form-control")
    
    
    await waitFor(5)
    await adBilgisi[j].type("Test");
    //await waitFor(1)
    await soyadBilgisi[j].type("Test");
    //await waitFor(1)
    await hesKodu[j].type("4444-4444-44");
    //await waitFor(1)
    await konaklayiciMail[j].type("test@test.com");
    await cinsiyet[j].select("1");
    await waitFor(1)

  }
}



const fillInfoForAbroadOtel = async () => {
  const gender = getSelector("btn_YurtDisiOtel_RezervasyonYap_Cinsiyet");
  await scope.currentPage.waitForSelector(gender,{visible: true});
  const genderList = (await scope.currentPage.$$("select[class='form-control ydGuestUniq']")).length;
  for (let j = 0; j < genderList; j++) {
    waitFor(1)
    const genderList = await scope.currentPage.$$("select[class='form-control ydGuestUniq']");
    await genderList[j].select("1")
  
    await waitFor(3)
    let adBilgisi = await scope.currentPage.$$("input[class='form-control ydNameUniq']");
    let soyadBilgisi = await scope.currentPage.$$("input[class='form-control ydSurnameUniq']");

    await waitFor(3)
    await adBilgisi[j].type("Test");
    await soyadBilgisi[j].type("Test");
    await waitFor(1)
  }
}


const choosePaymentType = async (paymentType) => {
  if(paymentType=="OteldeOde"){
    await waitFor(1)
    await clickOn("btn_OteldeOde")
  }else if(paymentType=="SirketOdemeli"){
    await waitFor(1)
    await selectVal("btn_OdemeTipi","FULLCREDIT")
  }else if(paymentType=="KrediKarti"){
    await waitFor(1)
    await selectVal("btn_OdemeTipi","CASH")
  }
}

const choosePaymentTypeForAbroadOtel = async (paymentType) => {
  if(paymentType=="KrediKarti"){
    await waitFor(1)
    await selectVal("btn_YurtDisiOtel_OdemeTipi","CASH")
  }else if(paymentType=="SirketOdemeli"){
    await waitFor(1)
    await selectVal("btn_YurtDisiOtel_OdemeTipi","FULLCREDIT")
  }
}

const choosePaymentTypeForPlane = async (paymentType) => {
  if(paymentType=="SirketOdemeli"){
    await waitFor(1)
    await clickOn("btn_Ucus_Odeme_Tipi_SirketOdemeli")
    }else if(paymentType=="KrediKarti"){
    await waitFor(1)
    await clickOn("btn_Ucus_Odeme_Tipi_KrediKarti")
  }
}

const selectDomesticFlight = async (flightType,destinatation) => {
  if(flightType=="YDisi"){
    if(destinatation=="OW"){
      await waitFor(1);
      const flights = await scope.currentPage.$$("tr.rich-table-row .btn");
      await waitFor(1)
      const flightsRandom = await Math.floor(Math.random() * flights.length) + 1;
      await flights[flightsRandom].click();
      await waitFor(1)
    }else{
      await waitFor(1);
      const flights = await scope.currentPage.$$("tr.rich-table-row .btn");
      await waitFor(1)
      const flightsRandom = await Math.floor(Math.random() * flights.length) + 1;
      await flights[flightsRandom].click();
      await waitFor(1)
    }
  }else//Yurtici
  {
    if(destinatation=="OW"){
      await waitFor(1)
      const domesticFlights = await scope.currentPage.$$("div[id='flightSearchForm:domesticFlights'] > table > tbody> tr > td:nth-child(5) > div[class='containerFN'] > ul > li > table > tbody > tr > td > input[title='Turkish Airlines']");
      await waitFor(1)
      const domesticFlightsRandom = Math.floor(Math.random() * domesticFlights.length) + 1;
      await waitFor(1)
      await domesticFlights[domesticFlightsRandom].click();
      await waitFor(1)
      await clickOn("btn_UcusListesi_DevamEt") 
    }else{
      await waitFor(1)
      const domesticFlights = await scope.currentPage.$$("div[id='flightSearchForm:domesticFlights'] > table > tbody> tr > td:nth-child(5) > div[class='containerFN'] > ul > li > table > tbody > tr > td > input[title='Turkish Airlines']");
      await waitFor(1)
      const domesticFlightsRandom = Math.floor(Math.random() * domesticFlights.length) + 1;
      await waitFor(1)
      await domesticFlights[domesticFlightsRandom].click();
      await waitFor(1)
      const returnFlights = await scope.currentPage.$$("div[id='flightSearchForm:returnFlights'] > table > tbody> tr > td:nth-child(5) > div[class='containerFN'] > ul > li > table > tbody > tr > td > input[title='Turkish Airlines']");
      await waitFor(1)
      const returnFlightsRandom = Math.floor(Math.random() * returnFlights.length) + 1;
      await waitFor(1)
      await returnFlights[returnFlightsRandom].click();
      await waitFor(1)
      await clickOn("btn_UcusListesi_DevamEt") 
    }
  }
};



const fillPasssengerInformationPlain = async (flightType) => {
  const cinsiyet = getSelector("btn_Ucus_Yolcu_Bilgileri_Cinsiyet");
  await scope.currentPage.waitForSelector(cinsiyet,{visible: true});
  const passengersCount = (await scope.currentPage.$$("input[class='form-control nameUnique']")).length;
  if(flightType=="YDisi"){
    for (let j = 0; j < passengersCount; j++) {
      waitFor(1)
      let cinsiyet = await scope.currentPage.$$("select[class='form-control genderUnique']")
      let adBilgisi = await scope.currentPage.$$("input[class='form-control nameUnique']");
      let soyadBilgisi = await scope.currentPage.$$("input[class='form-control surnameUnique']");
      let dogumTarihi =  await scope.currentPage.$$("input[class='form-control dateOfBirthUnique']");
      let eposta = await scope.currentPage.$$("input[class='form-control eMailUnique']");
      let gsdmKod = await scope.currentPage.$$("input[class='form-control gsmCodeUnique']");
      let gsmNumara = await scope.currentPage.$$("input[class='form-control gsmNumberUnique']");
      let tckn = await scope.currentPage.$$("input[class='form-control identityUnique']");
      let pasaportNo = await scope.currentPage.$$("input[class='form-control passaportUnique']");
      let gecerlilikTarihi = await scope.currentPage.$$("input[class='form-control passportValidUnique']");
      let uyruk = await scope.currentPage.$$("select[class='form-control nationalityUnique']");

      await cinsiyet[j].select("1");
      await adBilgisi[j].type("Caner");
      await soyadBilgisi[j].type("Basat");
      await dogumTarihi[j].type("12/11/1996");
      await eposta[j].type("isgelistirme@seturbiz.com");
      await gsdmKod[j].type("534");
      await gsmNumara[j].type("4585220");
      await tckn[j].type("48703351180");
      await pasaportNo[j].type("U123456");
      await gecerlilikTarihi[j].type("01/01/2023");
      await uyruk[j].select("2");
    }
  }else{
    for (let j = 0; j < passengersCount; j++) {
      waitFor(1)
      let cinsiyet = await scope.currentPage.$$("select[class='form-control genderUnique']")
      let adBilgisi = await scope.currentPage.$$("input[class='form-control nameUnique']");
      let soyadBilgisi = await scope.currentPage.$$("input[class='form-control surnameUnique']");
      let dogumTarihi =  await scope.currentPage.$$("input[class='form-control dateOfBirthUnique']");
      let eposta = await scope.currentPage.$$("input[class='form-control eMailUnique']");
      let gsdmKod = await scope.currentPage.$$("input[class='form-control gsmCodeUnique']");
      let gsmNumara = await scope.currentPage.$$("input[class='form-control gsmNumberUnique']");
      let tckn = await scope.currentPage.$$("input[class='form-control identityUnique']");
      let hesKodu = await scope.currentPage.$$("input[class='form-control hesCodeUnique']");
  
      await cinsiyet[j].select("1");
      await adBilgisi[j].type("Caner");
      await soyadBilgisi[j].type("Basat");
      await dogumTarihi[j].type("12/11/1996");
      await eposta[j].type("isgelistirme@seturbiz.com");
      await gsdmKod[j].type("534");
      await gsmNumara[j].type("4585220");
      await tckn[j].type("48703351180");
      await hesKodu[j].type("N4E9865717");
    }
  }
  await clickOn("btn_Ucus_AcenteKurallari")
  await clickOn("btn_Ucus_UcusKurallari")
    

}




//Ihtiyac aninda outDate parametresi gec
const selectInAndOutDate = async (inDate) => {
  await selectDepartureDate(inDate)
  //await selectOutDate(outDate)c
};

const selectDepartureDate = async (inDate) => {
  var d = new Date();
  var addDays = inDate;
  d.setDate(d.getDate()+parseInt(inDate))
  
  var day = d.getDate();
  var month = ("0" + (d.getMonth() + 1)).slice(-2); 
  var year = d.getFullYear();
  var departureDateMonthYear = month+"/"+year;
  await console.log("Giris Tarihi: "+day+"/"+month+"/"+year);
  await clickOn("btn_YurtIciGidisTarihi");
  var thisMonthValue = await scope.currentPage.$eval("input[id='hotelReservationForm:dateCheckINDecoration:updateInputCurrentDate']",
                  element=> element.getAttribute("value"))
  console.log(thisMonthValue)
  
  while(thisMonthValue!=departureDateMonthYear){
    await waitFor(1)
    await clickOn("btn_YurtIciOtel_GidisTarihi_SonrakiAy")
    await waitFor(1)
    thisMonthValue = await scope.currentPage.$eval("input[id='hotelReservationForm:dateCheckINDecoration:updateInputCurrentDate']",
    element=> element.getAttribute("value"));
    if (thisMonthValue==01/2023) {
      console.log("asd");
    }
  }
  if(thisMonthValue==departureDateMonthYear){
    const dayList = await scope.currentPage.$$("tbody > tr > td[class='hotelReservationForm_dateCheckINDecoration_updateDayCell rich-calendar-cell rich-calendar-btn'] , td[class='hotelReservationForm_dateCheckINDecoration_updateDayCell rich-calendar-cell rich-calendar-holly rich-calendar-btn'], td[class='hotelReservationForm_dateCheckINDecoration_updateDayCell rich-calendar-cell rich-calendar-today rich-calendar-btn'] , td[class='hotelReservationForm_dateCheckINDecoration_updateDayCell rich-calendar-cell rich-calendar-holly rich-right-cell rich-calendar-btn']");
    await dayList[day-1].click();
  }
}


const selectDepartureDateForAbroadOtel = async (inDate) => {
  var d = new Date();
  var addDays = inDate;
  d.setDate(d.getDate()+parseInt(inDate))
  
  var day = d.getDate();
  var month = ("0" + (d.getMonth() + 1)).slice(-2); 
  var year = d.getFullYear();
  var departureDateMonthYear = month+"/"+year;
  await console.log("Giris Tarihi: "+day+"/"+month+"/"+year);
  await clickOn("btn_YurtDisiOtel_GidisTarihi");
  var thisMonthValue = await scope.currentPage.$eval("input[name='hotelReservationForm:dateCheckINDecoration:dateCheckINInputCurrentDate']",
                  element=> element.getAttribute("value"))
  console.log(thisMonthValue)
  
  while(thisMonthValue!=departureDateMonthYear){
    await waitFor(1)
    await clickOn("btn_YurtDisiOtel_GidisTarihi_SonrakiAy")
    await waitFor(1)
    thisMonthValue = await scope.currentPage.$eval("input[name='hotelReservationForm:dateCheckINDecoration:dateCheckINInputCurrentDate']",
    element=> element.getAttribute("value"));
    if (thisMonthValue==01/2023) {
      console.log("asd");
    }
  }
  if(thisMonthValue==departureDateMonthYear){
    const dayList = await scope.currentPage.$$("td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-today rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-right-cell rich-calendar-btn']");
    await dayList[day-1].click();
  }
}

const selectDepartureDatePlane = async (inDate) => {
  var d = new Date();
  var addDays = inDate;
  var today = d.getDate();
  d.setDate(d.getDate()+parseInt(inDate))
  
  var day = d.getDate();
  var month = ("0" + (d.getMonth() + 1)).slice(-2); 
  var year = d.getFullYear();
  var departureDateMonthYear = month+"/"+year;
  await console.log("Giris Tarihi: "+day+"/"+month+"/"+year);
  
  await clickOn("btn_Ucak_GidisTarihi");

  var thisMonthValue = await scope.currentPage.$eval("input[name='flightSearchForm:lightOriginDate:departureInputCurrentDate']",
                  element=> element.getAttribute("value"))
  console.log(thisMonthValue)
  
  var thisMonthValueForDayChoose = thisMonthValue;

  while(thisMonthValue!=departureDateMonthYear){
    await waitFor(1)
    await clickOn("btn_Ucak_GidisTarihi_SonrakiAy")
    await waitFor(1)
    thisMonthValue = await scope.currentPage.$eval("input[name='flightSearchForm:lightOriginDate:departureInputCurrentDate']",
    element=> element.getAttribute("value"));
    if (thisMonthValue==01/2023) {
      console.log("hataliSecimErrorFirlat");
    }
  }
  if(thisMonthValue==departureDateMonthYear){
    if(thisMonthValueForDayChoose==departureDateMonthYear){
      await waitFor(1)
      const dayList = await scope.currentPage.$$("td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-right-cell rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-today rich-calendar-btn']");
      await dayList[day-today].click();
      await waitFor(1)
    }else{
      await waitFor(1)
      const dayList = await scope.currentPage.$$("td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-right-cell rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-today rich-calendar-btn']");
      await dayList[day-1].click();
      await waitFor(1)
    }
  }
}

const selectReturnDatePlane = async (returnDate) => {
  await waitFor(3)
  var d = new Date();
  var today = d.getDate();
  d.setDate(d.getDate()+parseInt(returnDate))
  
  var day = d.getDate();
  var month = ("0" + (d.getMonth() + 1)).slice(-2); 
  var year = d.getFullYear();
  var departureDateMonthYear = month+"/"+year;
  await console.log("Donus Tarihi: "+day+"/"+month+"/"+year);
  
  await clickOn("btn_Ucak_DonusTarihi");

  var thisMonthValue = await scope.currentPage.$eval("input[name='flightSearchForm:lightReturnDate:returnInputCurrentDate']",
                  element=> element.getAttribute("value"))
  console.log(thisMonthValue)
  
  var thisMonthValueForDayChoose = thisMonthValue;

  while(thisMonthValue!=departureDateMonthYear){
    await waitFor(1)
    await clickOn("btn_Ucak_DonusTarihi_SonrakiAy")
    await waitFor(1)
    thisMonthValue = await scope.currentPage.$eval("input[name='flightSearchForm:lightReturnDate:returnInputCurrentDate']",
    element=> element.getAttribute("value"));
    if (thisMonthValue==01/2022) {
      console.log("hataliSecimErrorFirlat");
    }
  }
  if(thisMonthValue==departureDateMonthYear){
    if(thisMonthValueForDayChoose==departureDateMonthYear){
      const dayList = await scope.currentPage.$$("td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-right-cell rich-calendar-boundary-dates'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-calendar-boundary-dates'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-boundary-dates'] ,td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-select'][onclick=\"$('flightSearchForm:lightReturnDate:return').component.eventCellOnClick(event, this);\"] ,  td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-btn'][onclick=\"$('flightSearchForm:lightReturnDate:return').component.eventCellOnClick(event, this);\"] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-calendar-btn'][onclick=\"$('flightSearchForm:lightReturnDate:return').component.eventCellOnClick(event, this);\"] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-right-cell rich-calendar-btn'][onclick=\"$('flightSearchForm:lightReturnDate:return').component.eventCellOnClick(event, this);\"]");
      await dayList[day-1].click();
    }else{
      const dayList = await scope.currentPage.$$("td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-right-cell rich-calendar-boundary-dates'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-calendar-boundary-dates'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-boundary-dates'] ,td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-select'][onclick=\"$('flightSearchForm:lightReturnDate:return').component.eventCellOnClick(event, this);\"] ,  td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-btn'][onclick=\"$('flightSearchForm:lightReturnDate:return').component.eventCellOnClick(event, this);\"] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-calendar-btn'][onclick=\"$('flightSearchForm:lightReturnDate:return').component.eventCellOnClick(event, this);\"] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-right-cell rich-calendar-btn'][onclick=\"$('flightSearchForm:lightReturnDate:return').component.eventCellOnClick(event, this);\"]");
      //Bura patlıyo
      await dayList[day].click();
    }
  }
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}






module.exports = {
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
  selectDepartureDate,
  selectDepartureDatePlane,
  selectInAndOutDate,
  roomTypeSelectAndFillInfo,
  choosePaymentType,
  selectReturnDatePlane,
  selectDomesticFlight,
  fillPasssengerInformationPlain,
  choosePaymentTypeForPlane,
  selectDepartureDateForAbroadOtel,
  choosePaymentTypeForAbroadOtel,
  clickRandomInList,
  fillInfoForAbroadOtel,
};