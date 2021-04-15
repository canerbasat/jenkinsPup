const HOME_SELECTORS = {
  "btn_Cookie_Onay": "a[class='cookiesLinkPre']",
  "btn_Anasayfa_GirisYap": "#btnLogin",
  "tb_GirisYap_KullaniciAdi": "input[class='mdl-textfield__input strykerusername']",
  "tb_GirisYap_Sifre": "input[class='mdl-textfield__input']",
  "tb_GirisYap_Submit": "input[type='submit']",
  "lbl_Anasayfa_KullaniciAdi": "div[class='dropdown user-section']>a>span[id='userName']",
  "btn_Anasayfa_YurtIciOtel": "#otelMenuTr",
  "btn_YurtIciOtel_Gideceginiz_Yer": "input[id='hotelReservationForm:whereYouWantGrid:whereText']",
  "btn_YurtIciOtel_Gideceginiz_Yer_Ilk_Otel": "tr.richfaces_suggestionEntry > td:nth-of-type(2) > .fontMerriweather",
  "btn_YurtIciOtel_Oda_Sayisi": "form#hotelReservationForm .row .form-control",
  "btn_YurtIciOtel_DevamEtButonu": "div[class='actionButtons center'] > input",
  "btn_YurtIciOtel_RezervasyonYap": "input[value='Rezervasyon Yap']",
  "btn_RezervasyonYap_Devam": "input[type='submit']",
  "btn_Rezervasyonu_Tamamla": "a[class='rezOnayBlock']",
  "lbl_Rezervasyonu_Talep_Bilgileri_Mesaji": "span[class='rich-messages-label']",
  "btn_Tarih_Bugun": ".rich-calendar-today",
  "btn_Gidis_Tarihi": "input[name='hotelReservationForm:dateCheckINDecoration:updateInputDate']",
  "btn_OteldeOde": "input[name='hotelReservationForm:guestPaymentDecoration:guestPaymentCheckBox']",
  "btn_OdemeTipi":"form#hotelReservationForm > div > div:nth-of-type(3) .form-control",
  "dD_Oda_Tipi": "span#roomSizeUniq > .form-control",
  "tb_YurtIciOtel_RezervasyonYap_Ad": "span[id='nameUniq'] > input",
  "tb_YurtIciOtel_RezervasyonYap_SoyAd": "span[id='lastNameUniq'] > input",
  "tb_YurtIciOtel_RezervasyonYap_Konaklayici_Mail": "span[id='invoiceOwnerUniq'] > input",
  "tb_YurtIciOtel_RezervasyonYap_HesKodu": "span[id='hesCodeUniq'] > input",
  "btn_YurtIciGidisTarihi": "input[id='hotelReservationForm:dateCheckINDecoration:updateInputDate']",
  "lbl_YurtIciOtel_GidisTarihi_AyYil": "input[id='hotelReservationForm:dateCheckINDecoration:updateInputCurrentDate']",
  "btn_YurtIciOtel_GidisTarihi_SonrakiAy": "td[class='rich-calendar-header'] td:nth-of-type(4)",
  "btn_YurtIciOtel_CikisTarihi": "input[id='hotelReservationForm:dateCheckOUTDecoration:checkOutInputDate']",
  "btn_YurtIciOtel_CikisTarihi_AyYil": "input[id='hotelReservationForm:dateCheckOUTDecoration:checkOutInputCurrentDate']",
  "btn_YurtIciOtel_RezervasyonYap_OdaTipi": "span[id='roomSizeUniq'] > select",
  "btn_YurtDisiOtel_RezervasyonYap_Cinsiyet": "select[class='form-control ydGuestUniq']",
  "tb_YurtIciOtel_RezervasyonYap_Ad": "span[id='nameUniq'] > input",
  "lbl_Hatali_Login_Mesaji": "div.text-danger li",
  "btn_Cikis": "i[class='fa fa-sign-out fa-fw']",
  "btn_Hakkimizda": "a[href='/hakkimizda']",
  "btn_Iletisim": "a[href='/bize-ulasin']",
  "btn_CerezPolitikasi": "a[href='/cerez-politikasi']",
  "btn_SikSorulanSorular": "a[href='/yardim']",
  "btn_SeturBizLogo": "[src='https://cdn.seturbiz.com/content/img/home/logo.png']",
  "btn_Sifre_Yenile": ".remember-link",
  "btn_YurtDisiOtel": "#hotelMenuTr",
  "btn_Ucak": "#flightMenuTr",
  "btn_Arac": "#carMenuTr",
  "btn_Transfer": "#transferMenuTr",
  "btn_Train": "#trainMenuTr",
  "btn_Toplanti": "#meetingMenuTr",
  "btn_Kullanici_Adi": "#userName",
  "btn_Kullanici_Adi_Uye_Bilgilerini_Guncelleme": "#webUser",
  "btn_Kurumsal_Uyelik_Kurallari": "ul.dropdown-menu-right > li:nth-of-type(3) > a",
  "btn_Yeni_Kurumsal_Kullanici_Istegi":"ul.dropdown-menu-right > li:nth-of-type(4) > a",
  "btn_Rezervasyonlarim_Tum_Rezervasyonlar": "ul.nav > li:nth-of-type(2) li:nth-of-type(1) > a",
  "btn_Rezervasyonlarim_YurtIciOtel": "ul.nav > li:nth-of-type(2) li:nth-of-type(2) > a",
  "btn_Rezervasyonlarim_YurtDisiOtel": "ul.nav > li:nth-of-type(2) li:nth-of-type(3) > a",
  "btn_Rezervasyonlarim_Ucak": "ul.nav > li:nth-of-type(2) li:nth-of-type(5) > a",
  "btn_Rezervasyonlarim_Arac": "ul.nav > li:nth-of-type(2) li:nth-of-type(6) > a",
  "btn_Rezervasyonlarim_Transfer": "ul.nav > li:nth-of-type(2) li:nth-of-type(7) > a",
  "btn_Rezervasyonlarim_Toplanti": "ul.nav > li:nth-of-type(2) li:nth-of-type(8) > a",
  "btn_Rezervasyonlarim_Tren": "ul.nav > li:nth-of-type(2) li:nth-of-type(9) > a",
  "btn_Rezervasyonlarim": "ul.nav > li:nth-of-type(2) > .dropdown-toggle",
  "tb_Ucak_Nereden": "input[id='flightSearchForm:flightOrigin:fromInput']",
  "btn_Ucak_Nereden_Ilk_Secim": "tr.rich-sb-int-sel > td:nth-of-type(2)",
  "tb_Ucak_Nereye": "input[id='flightSearchForm:flightDestination:returnInput']",
  "btn_Ucak_Nereye_Ilk_Secim": "body > div:nth-of-type(1) tr:nth-of-type(1) > td:nth-of-type(2) > span:nth-of-type(1)",
  "btn_Ucak_GidisTarihi": "input[name='flightSearchForm:lightOriginDate:departureInputDate']",
  "btn_Ucak_DonusTarihi": "input[name='flightSearchForm:lightReturnDate:returnInputDate']",
  "btn_Ucak_YolcuSayisi": "div.flightStepBack1 > .form-group div > span > .form-control",
  "btn_Ucak_Ara": ".right.form-group > input",
  "btn_Ucak_GidisTarihi_SonrakiAy": "td[class='rich-calendar-header'] td:nth-of-type(4)",
  "btn_Ucak_DonusTarihi_SonrakiAy": "div.flightStepBack1 > div:nth-of-type(4) td:nth-of-type(4) > div:nth-of-type(1)",
  "btn_Ucus_Filtele": "input[name='flightSearchForm:filterFlightButton']",
  "btn_UcusListesi_DevamEt": "input[value='Devam Et »']",
  "btn_Ucus_OnRezervasyon": "input[value='Ön Rezervasyon']",
  "btn_Ucus_Yolcu_Bilgileri_Cinsiyet": ".col-md-12 > div:nth-of-type(2) .form-control",
  "btn_Ucus_AcenteKurallari": "input[id='flightReservationForm:checkInRules']",
  "btn_Ucus_UcusKurallari": "input[id='flightReservationForm:checkInRules1']",
  "btn_Ucus_Odeme_Tipi_SirketOdemeli": "input[value='FULLCREDIT']",
  "btn_Ucus_Odeme_Tipi_KrediKarti": "input[value='CASH']",
  "btn_Ucus_TekYon": "input[value='true']",
  "btn_Ucak_Ebilet_Kes": "div[class='col-md-2 col-sm-4 col-xs-12 center'] > input[value='E-Bilet Kes']",
  "btn_YurtDisiOtel_Sehir": "input[name='hotelReservationForm:locatioSearchDecorate:where']",
  "btn_YurtDisiOtel_GidisTarihi": "input[name='hotelReservationForm:dateCheckINDecoration:dateCheckINInputDate']",
  "btn_YurtDisiOtel_DonusTarihi": "input[name='hotelReservationForm:dateCheckOUTDecoration:dateCheckOUTInputDate']",
  "btn_YurtDisiOtel_Yildiz": "select[name='hotelReservationForm:starRatingDecorate:rateID']",
  "btn_YurtDisiOtel_OdaSayisi": "#hotelReservationForm div:nth-of-type(5) .form-control",
  "btn_YurtDisiOtel_KisiSayisi":"#hotelReservationForm .col-md-4 div .form-control",
  "btn_YurtDisiOtel_OdemeTipi": "select[name='hotelReservationForm:paymentDecoration:revenueMenu']",
  "btn_YurtDisiOtel_Devam": "input[name='hotelReservationForm:nextbtn']",
  "btn_YurtDisiOtel_Oteller": "input[value='Fiyatları Göster']",
  "btn_YurtDisiOtel_Otel_Fiyatlari":"input[value='SATIN AL']",
  "btn_YurtDisiOtel_GidisTarihiGunler":"td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-today rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-calendar-btn'] , td[class='rich-calendar-cell-size rich-calendar-cell rich-calendar-holly rich-right-cell rich-calendar-btn']",
  "btn_YurtDisiOtel_GidisTarihi_SonrakiAy": "td[class='rich-calendar-header'] td:nth-of-type(4)",
  "btn_YurtDisiOtel_Sehir_Ilk_Sehir": ".rich-sb-int-sel > .rich-table-cell",
  "btn_YurtDisiOtel_OdemeTipi": "select[name='hotelReservationForm:paymentDecoration:revenueMenu']",
  "btn_YurtDisiOtel_IlkOtel": ".rich-table-firstrow",
  "btn_Transfer_Sehir": "select[name='transferRequestForm:sehirDekorasyon:sehirSec']",
  "tb_Transfer_Gsm": "input[name='transferRequestForm:gsmPhoneDecoration:gsmPhoneCode']",
  "tb_Transfer_GsmNo": "input[name='transferRequestForm:gsmPhoneDecoration:gsmPhone']",
  "tb_Transfer_eposta": "input[name='transferRequestForm:emailDecoration:email']",
  "btn_Transfer_HavaAlanindanAdrese": ".margtop15.col-md-10 [value='1']",
  "btn_Transfer_AdrestenHavaAlanina": ".margtop15.col-md-10 [value='2']",
  "btn_Transfer_AdrestenAdrese": ".margtop15.col-md-10 [value='3']",
  "btn_Transfer_TransferTarihi": "input[name='transferRequestForm:transferDateDecoration:checkInInputDate']",
  "btn_Transfer_TransferSaati": " span[xmlns='http://www.w3.org/1999/xhtml'] > .col-md-4 div:nth-of-type(1) > select",
  "btn_Transfer_TransferSaati_Dakika": "#transferRequestForm div:nth-of-type(2) > select:nth-of-type(1)",
  "btn_Transfer_Valiz_Sayisi": "input[name='transferRequestForm:suitcaseNumberDecoration:suitcaseNumber']",
  "btn_Transfer_Kisi_Sayisi": "span[xmlns='http://www.w3.org/1999/xhtml'] > .col-md-3 .col-md-12 > span > .form-control",
  "btn_Transfer_Varis_Adresi": "textarea[name='transferRequestForm:arrivalAddressDecoration:arrivalAddress']",
  "btn_Transfer_Kalkis_Adresi": "textarea[name='transferRequestForm:departureAddressDecoration:arrivalAddress']",
  "btn_Transfer_Kisi_TCKN_List": ".margtop10.col-md-12 > div [checked='checked']",
  "btn_Transfer_Misafir_Adlari": ".margtop10.col-md-12 > div > div:nth-of-type(2) .form-control",
  "btn_Transfer_Misafir_Soyadlari": ".margtop10.col-md-12 > div > div:nth-of-type(3) .form-control",
  "btn_Transfer_Tarih_SonrakiAy": ".rich-calendar-header td:nth-of-type(4) > .rich-calendar-tool-btn",
  "btn_Transfer_Tarih_Gun": "tr:nth-of-type(5) > td:nth-of-type(5)",
  "btn_Transfer_Ilk_Misafir_Ad": ".margbottom10 > div:nth-of-type(2) .form-control",
  "btn_Transfer_Ilk_Misafir_SoyAd": ".margbottom10 > div:nth-of-type(3) .form-control",
  "btn_Transfer_Ilk_Misafir_TC": ".margbottom10 > div:nth-of-type(4) .form-control",
  "btn_Transfer_Talebi_Olustur": "input[name='transferRequestForm:nextbtn']",
  "btn_Transfer_Basarili_Talep": "img[src='https://cdn.seturbiz.com/content/img/visual/icon/arrowSend.gif']",
  "btn_Transfer_UcusNumarasi": "input[name='transferRequestForm:flightNumberDecoration:departureFlightNumber']",
  "btn_Transfer_UcusTarihi": "span[xmlns='http://www.w3.org/1999/xhtml'] > .col-md-12 .rich-calendar-input",
  "btn_Transfer_UcusTarihi_SonrakiAy": "span[xmlns='http://www.w3.org/1999/xhtml'] > div:nth-of-type(9) td:nth-of-type(4) > div:nth-of-type(1)",
  "btn_Transfer_UcusTarihi_Gun": "span[xmlns='http://www.w3.org/1999/xhtml'] > div:nth-of-type(9) tr:nth-of-type(5) > td:nth-of-type(5)",
  "btn_Transfer_UcusSaati": "span[xmlns='http://www.w3.org/1999/xhtml'] > div:nth-of-type(9) div:nth-of-type(1) > select:nth-of-type(1)",
  "btn_Transfer_UcusSaatiDakika": "span[xmlns='http://www.w3.org/1999/xhtml'] > div:nth-of-type(9) div:nth-of-type(2) > select:nth-of-type(1)",
  "btn_UcusHavaAlani": "select[name='transferRequestForm:airportDecoration:departureAirport']",
  "btn_UcusHavaYolu": "select[name='transferRequestForm:airlineDecoration:departureAirline']",
  "btn_Tren_YolcuSayisi": "#trainRequestForm > div > .col-md-4 select",
  "btn_Tren_Nereden": "#trainRequestForm > .col-md-12 > div:nth-of-type(2) .form-control",
  "btn_Tren_Nereye": "#trainRequestForm > .col-md-12 > div:nth-of-type(3) .form-control",
  "btn_Tren_GidisTarihi": "input[name='trainRequestForm:departureDate:updateInputDate']",
  "btn_Tren_Dakika": ".margtop10[size='1']",
  "btn_Tren_GidisTarihiSonrakiAy": "#trainRequestForm > div:nth-of-type(3) td:nth-of-type(4) > div:nth-of-type(1)",
  "btn_Tren_Gidis_Gun": "#trainRequestForm > .col-md-12 tr:nth-of-type(5) > td:nth-of-type(4)",
  "btn_Tren_1Y_HesKodu": "input[maxlength='12']",
  "btn_Tren_2Y_HesKodu": "span[xmlns='http://www.w3.org/1999/xhtml'] > div:nth-of-type(4) div > span > .form-control",
  "btn_Tren_TalepOlustur": "input[name='trainRequestForm:save']",
  "btn_Tren_BasariliTalep": "img[src='https://cdn.seturbiz.com/content/img/visual/icon/arrowSend.gif']",
  "btn_Tren_Ekonomi": "input[value='E']",
  "btn_Tren_YemekliEkonomi": "input[value='ED']",
  "btn_Tren_Business": "input[value='B']",
  "btn_Tren_BusinessPlus": "input[value='BP']",
  "btn_Tren_DonusTarihi": "input[name='trainRequestForm:arrivalDate:checkOutInputDate']",
  "btn_Tren_DonusTarihiSonrakiAy": "#trainRequestForm > div:nth-of-type(3) > span:nth-of-type(1) td:nth-of-type(4) > div:nth-of-type(1)",
  "btn_Tren_DonusTarihiGun": "#trainRequestForm > div:nth-of-type(3) > span:nth-of-type(1) tr:nth-of-type(5) > td:nth-of-type(6)",
  "btn_Tren_DonusTarihiDakika": "#trainRequestForm span > .col-md-12 > .col-md-2 .form-control",
  "btn_Tren_GidisDonus": "#trainRequestForm > .col-md-12 .ucakCheckBox",
  "btn_Tren_Esnek": "input[value='F']",
  "btn_Arac_Acenteler": ".enterpriseClass",
  "btn_Arac_AlisYeri": ".col-md-10 > div:nth-of-type(3) .col-md-12 > span > .form-control",
  "btn_Arac_BirakisYeri": ".col-md-10 > div:nth-of-type(4) > div > .col-md-12 > span > .form-control",
  "btn_Arac_AlisTarihi": "input[id='b2cVehicleRequestForm:beginDateDecoration:beginDateInputDate']",
  "btn_Arac_AlisSonrakiAy": ".col-md-10 td:nth-of-type(4) > div:nth-of-type(1)",
  "btn_Arac_AlisGun": ".col-md-10 > div:nth-of-type(3) tr:nth-of-type(5) > td:nth-of-type(4)",
  "btn_Arac_BirakisTarihi": "input[id='b2cVehicleRequestForm:endDateDecoration:endDateInputDate']",
  "btn_Arac_BirakisGun": ".col-md-10 > div:nth-of-type(4) tr:nth-of-type(5) > td:nth-of-type(5)",
  "btn_Arac_AlisSaat": ".col-md-10 div:nth-of-type(2) .col-md-3 > .form-control",
  "btn_Arac_AlisDakika": ".col-md-10 div:nth-of-type(2) .col-md-4 > .form-control",
  "btn_Arac_BirakisSaat": ".col-md-10 > .col-md-6 > div:nth-of-type(3) .col-md-3 > .form-control",
  "btn_Arac_BirakisDakika": ".col-md-10 > .col-md-6 > div:nth-of-type(3) .col-md-4 > .form-control",
  "btn_Arac_AraclariListele": "input[class='btn-searchNew']",
  "btn_Arac_IlkArac": "div[xmlns='http://www.w3.org/1999/xhtml'] > div:nth-of-type(1) .btn-searchNew",
  "btn_Havadenme": ".col-md-10 > div:nth-of-type(3) [value='86']",








  









  













  


  
};


module.exports = HOME_SELECTORS;
