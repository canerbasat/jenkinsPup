Feature: Seturbiz

 Scenario: Basarisiz login olma
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina yanlissifre yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "lbl_Hatali_Login_Mesaji" elementi "Lütfen kullanıcı adı ve şifrenizi kontrol ediniz. Şifrenizi Hatırlamıyorsanız, Şifre Yenile / Hatırla linkinden hatırlatma yapabilirsiniz." degerine esittir

Scenario: Basarili login olma
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Anasayfa_YurtIciOtel" butonuna tiklanir
 
 Scenario: Basarili cikis yapabilme
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Cikis" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir

 

     |caner.basat@setur.com.tr|47854785zZ       |40            |46            |İstanbul    |Ankara     |3                |SirketOdemeli|RT         |YIci|
 
    Scenario Outline: Seturbiz Ucak YurtIci Tek Yon
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina <LoginUserPassword> yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Ucak" butonuna tiklanir
        * "tb_Ucak_Nereden" alanina <Where> yazilir
        * "btn_Ucak_Nereden_Ilk_Secim" butonuna tiklanir
        * "btn_Ucus_TekYon" butonuna tiklanir        
        * "tb_Ucak_Nereye" alanina <To> yazilir
        * "btn_Ucak_Nereye_Ilk_Secim" butonuna tiklanir
        * Gidis ucus tarihi <DepartureDate> gun sonrasina secilir
        * "btn_Ucak_YolcuSayisi" menusunden <NumberOfPassenger> secilir
        * "btn_Ucak_Ara" butonuna tiklanir
        * "btn_Ucus_Filtele" gorunene kadar beklenir
        * <FlightType> Ucus <Destination> secilir
        * "btn_Ucus_OnRezervasyon" gorunene kadar beklenir
        * <FlightType> yolcu ucus bilgileri doldurulur
        * Ucak odeme tipi <PaymentType> secilir
        * "btn_Ucus_OnRezervasyon" butonuna tiklanir
        Then "btn_Ucak_Ebilet_Kes" gorunene kadar beklenir
        Examples:
       | LoginUser              |LoginUserPassword|DepartureDate|ReturnDate    |Where       |To        |NumberOfPassenger|PaymentType  |Destination|FlightType|
        |caner.basat@setur.com.tr|47854785zZ       |41            |44            |İstanbul    |Adana     |1               |SirketOdemeli|OW         |YIci|
 

   Scenario Outline: Seturbiz Ucak YurtDisis Gidiş Geliş
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina <LoginUserPassword> yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Ucak" butonuna tiklanir
        * "tb_Ucak_Nereden" alanina <Where> yazilir
        * "btn_Ucak_Nereden_Ilk_Secim" butonuna tiklanir
        * "tb_Ucak_Nereye" alanina <To> yazilir
        * "btn_Ucak_Nereye_Ilk_Secim" butonuna tiklanir
        * Gidis ucus tarihi <DepartureDate> gun sonrasina secilir
        * Donus ucus tarihi <ReturnDate> gun sonrasina secilir
        * "btn_Ucak_YolcuSayisi" menusunden <NumberOfPassenger> secilir
        * "btn_Ucak_Ara" butonuna tiklanir
        * "btn_Ucus_Filtele" gorunene kadar beklenir
        * <FlightType> Ucus <Destination> secilir
        * "btn_Ucus_OnRezervasyon" gorunene kadar beklenir
        * <FlightType> yolcu ucus bilgileri doldurulur
        * Ucak odeme tipi <PaymentType> secilir
        * "btn_Ucus_OnRezervasyon" butonuna tiklanir
        Then "btn_Ucak_Ebilet_Kes" gorunene kadar beklenir
        


        Examples:
        | LoginUser              |LoginUserPassword|DepartureDate|ReturnDate    |Where       |To        |NumberOfPassenger|PaymentType  |Destination|FlightType|
        |caner.basat@setur.com.tr|47854785zZ       |38            |41            |İstanbul    |Londra     |1                |SirketOdemeli|RT         |YDisi|


    

    Scenario Outline: Seturbiz Ucak YurtDisi Tek Yon
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina <LoginUserPassword> yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Ucak" butonuna tiklanir
        * "tb_Ucak_Nereden" alanina <Where> yazilir
        * "btn_Ucak_Nereden_Ilk_Secim" butonuna tiklanir
        * "btn_Ucus_TekYon" butonuna tiklanir        
        * "tb_Ucak_Nereye" alanina <To> yazilir
        * "btn_Ucak_Nereye_Ilk_Secim" butonuna tiklanir
        * Gidis ucus tarihi <DepartureDate> gun sonrasina secilir
        * "btn_Ucak_YolcuSayisi" menusunden <NumberOfPassenger> secilir
        * "btn_Ucak_Ara" butonuna tiklanir
        * "btn_Ucus_Filtele" gorunene kadar beklenir
        * <FlightType> Ucus <Destination> secilir
        * "btn_Ucus_OnRezervasyon" gorunene kadar beklenir
        * <FlightType> yolcu ucus bilgileri doldurulur
        * Ucak odeme tipi <PaymentType> secilir
        * "btn_Ucus_OnRezervasyon" butonuna tiklanir
        Then "btn_Ucak_Ebilet_Kes" gorunene kadar beklenir
        Examples:
        |LoginUser              |LoginUserPassword|DepartureDate|ReturnDate    |Where       |To        |NumberOfPassenger|PaymentType  |Destination|FlightType|
        |caner.basat@setur.com.tr|47854785zZ       |41            |44            |İstanbul    |Londra     |1                |SirketOdemeli|OW         |YDisi|

