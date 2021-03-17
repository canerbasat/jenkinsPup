Feature: SeturbizURL

Scenario: Anasayfa
        * Tarayici acilir
        * "btn_SeturBizLogo" butonuna tiklanir
        * Sayfanin url adresi "/anasayfa" olmalidir

Scenario: Login
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * Sayfanin url adresi "/login.seam" olmalidir

Scenario: SifreYenile
        * Tarayici acilir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "btn_Sifre_Yenile" butonuna tiklanir
        * Sayfanin url adresi "/b2c/userConfirmation.html" olmalidir

Scenario: Hakkimizda
        * Tarayici acilir
        * "btn_Hakkimizda" butonuna tiklanir
        * Sayfanin url adresi "/hakkimizda" olmalidir

Scenario: Iletisim
        * Tarayici acilir
        * "btn_Iletisim" butonuna tiklanir
        * Sayfanin url adresi "/bize-ulasin" olmalidir

Scenario: Cerez Politikasi
        * Tarayici acilir
        * "btn_CerezPolitikasi" butonuna tiklanir
        * Sayfanin url adresi "/cerez-politikasi" olmalidir

Scenario: SikSorulanSorular
        * Tarayici acilir
        * "btn_SikSorulanSorular" butonuna tiklanir
        * Sayfanin url adresi "/yardim" olmalidir

Scenario: YurtIciOtel
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Anasayfa_YurtIciOtel" butonuna tiklanir
        * Sayfanin url adresi "/b2b/hotel/reservationStep0.seam" olmalidir

Scenario: YurtDisiOtel
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_YurtDisiOtel" butonuna tiklanir
        * Sayfanin url adresi "/b2b/hotel/megatour/searchMegaTourHotel.seam" olmalidir

Scenario: Ucak
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Ucak" butonuna tiklanir
        * Sayfanin url adresi "/b2b/airb2b/flightStep0.seam" olmalidir

Scenario: Arac
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Arac" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/rentacar/vehicleRequest.seam" olmalidir

Scenario: Transfer
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Transfer" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/transfer/transferRequest.seam" olmalidir

Scenario: Tren
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Train" butonuna tiklanir
        * Sayfanin url adresi "/b2b/train/trainReservation.seam" olmalidir

Scenario: Toplanti
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Toplanti" butonuna tiklanir
        * Sayfanin url adresi "/b2b/event/eventReservationStep0.seam" olmalidir

Scenario: Uye Bilgileri Guncelleme
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Kullanici_Adi" butonuna tiklanir
        * "btn_Kullanici_Adi_Uye_Bilgilerini_Guncelleme" butonuna tiklanir
        * Sayfanin url adresi "/b2b/webUserUpdate.seam" olmalidir

Scenario: Kurumsal Uyelik Kurallari
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Kullanici_Adi" butonuna tiklanir
        * "btn_Kurumsal_Uyelik_Kurallari" butonuna tiklanir
        * Sayfanin url adresi "/b2b/tr/other/contentTemplateLabel.seam" olmalidir

Scenario: Yeni Kurumsal Kullanici Istegi
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Kullanici_Adi" butonuna tiklanir
        * "btn_Yeni_Kurumsal_Kullanici_Istegi" butonuna tiklanir
        * Sayfanin url adresi "/b2b/request/userRequest.seam" olmalidir

Scenario: Tum Rezervasyonlarim
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Rezervasyonlarim" butonuna tiklanir
        * "btn_Rezervasyonlarim_Tum_Rezervasyonlar" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/myReservations.seam" olmalidir

Scenario: YurtIciOtel Rezervasyonlarim
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Rezervasyonlarim" butonuna tiklanir
        * "btn_Rezervasyonlarim_YurtIciOtel" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/allHotelReservationSearch.seam" olmalidir

Scenario: YurtDisiOtel Rezervasyonlarim
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Rezervasyonlarim" butonuna tiklanir
        * "btn_Rezervasyonlarim_YurtDisiOtel" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/gtaHotelReservationSearch.seam" olmalidir

Scenario: Ucak Rezervasyonlarim
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Rezervasyonlarim" butonuna tiklanir
        * "btn_Rezervasyonlarim_Ucak" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/allAirB2bReservationSearch.seam" olmalidir

Scenario: Arac Rezervasyonlarim
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Rezervasyonlarim" butonuna tiklanir
        * "btn_Rezervasyonlarim_Arac" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/allRentaCarReservationSearch.seam" olmalidir

Scenario: Transfer Rezervasyonlarim
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Rezervasyonlarim" butonuna tiklanir
        * "btn_Rezervasyonlarim_Transfer" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/allTransferReservationSearch.seam" olmalidir

Scenario: Toplanti Rezervasyonlarim
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Rezervasyonlarim" butonuna tiklanir
        * "btn_Rezervasyonlarim_Toplanti" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/allEventReservationSearch.seam" olmalidir

Scenario: Tren Rezervasyonlarim
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Rezervasyonlarim" butonuna tiklanir
        * "btn_Rezervasyonlarim_Tren" butonuna tiklanir
        * Sayfanin url adresi "/b2c/tr/allTrainReservationSearch.seam" olmalidir









