Feature: Seturbiz Ucak


   Scenario Outline: Seturbiz Ucak YurtIci Gidiş Geliş
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina <LoginUserPassword> yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Ucak" butonuna tiklanir
        * "tb_Ucak_Nereden" alanina İstanbul yazilir
        * "btn_Ucak_Nereden_Ilk_Secim" butonuna tiklanir
        * "tb_Ucak_Nereye" alanina Adana yazilir
        * "btn_Ucak_Nereye_Ilk_Secim" butonuna tiklanir
        * Gidis ucus tarihi <DepartureDate> gun sonrasina secilir
        * Donus ucus tarihi <ReturnDate> gun sonrasina secilir
        * "btn_Ucak_YolcuSayisi" menusunden <NumberOfPassenger> secilir
        * "btn_Ucak_Ara" butonuna tiklanir
        * "btn_Ucus_Filtele" gorunene kadar beklenir
        * Ucus <Destination> secilir
        * "btn_Ucus_OnRezervasyon" gorunene kadar beklenir
        * Yolcu ucusbilgileri doldurulur
        * Ucak odeme tipi <PaymentType> secilir
        * "btn_Ucus_OnRezervasyon" butonuna tiklanir
        * "btn_Ucak_Ebilet_Kes" gorunene kadar beklenir


         Examples:
        | LoginUser              |LoginUserPassword|DepartureDate|ReturnDate    |Where       |To        |NumberOfPassenger|PaymentType  |Destination|
        |caner.basat@setur.com.tr|47854785zZ       |40            |43            |İstanbul    |Adana     |3                |SirketOdemeli|RT         |
        |caner.basat@setur.com.tr|47854785zZ       |35            |40            |İstanbul    |Adana     |1                |SirketOdemeli|RT         |
        |caner.basat@setur.com.tr|47854785zZ       |28            |30            |İstanbul    |Adana     |2                |SirketOdemeli|RT         |
        |caner.basat@setur.com.tr|47854785zZ       |40            |43            |İstanbul    |Adana     |3                |SirketOdemeli|RT         |


    

    Scenario Outline: Seturbiz Ucak YurtIci Tek Yon
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina <LoginUserPassword> yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Ucak" butonuna tiklanir
        * "tb_Ucak_Nereden" alanina İstanbul yazilir
        * "btn_Ucak_Nereden_Ilk_Secim" butonuna tiklanir
        * "btn_Ucus_TekYon" butonuna tiklanir        
        * "tb_Ucak_Nereye" alanina Adana yazilir
        * "btn_Ucak_Nereye_Ilk_Secim" butonuna tiklanir
        * Gidis ucus tarihi <DepartureDate> gun sonrasina secilir
        * "btn_Ucak_YolcuSayisi" menusunden <NumberOfPassenger> secilir
        * "btn_Ucak_Ara" butonuna tiklanir
        * "btn_Ucus_Filtele" gorunene kadar beklenir
        * Ucus <Destination> secilir
        * "btn_Ucus_OnRezervasyon" gorunene kadar beklenir
        * Yolcu ucusbilgileri doldurulur
        * Ucak odeme tipi <PaymentType> secilir
        * "btn_Ucus_OnRezervasyon" butonuna tiklanir
        * "btn_Ucak_Ebilet_Kes" gorunene kadar beklenir

         Examples:
        | LoginUser              |LoginUserPassword|DepartureDate|ReturnDate    |Where       |To        |NumberOfPassenger|PaymentType  |Destination|
        |caner.basat@setur.com.tr|47854785zZ       |7            |3            |İstanbul    |Adana     |1                |SirketOdemeli|OW         |
        |caner.basat@setur.com.tr|47854785zZ       |8            |4            |İstanbul    |Adana     |2                |SirketOdemeli|OW         |
        |caner.basat@setur.com.tr|47854785zZ       |9            |5            |İstanbul    |Adana     |3                |SirketOdemeli|OW         |

 