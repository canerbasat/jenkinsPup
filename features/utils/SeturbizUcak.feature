Feature: SeturDeneme
    Scenario Outline: SeturDeneme
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina <LoginUserPassword> yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Ucak" butonuna tiklanir
        * "tb_Ucak_Nereden" alanina İstanbul yazilir
        * "btn_Ucak_Nereden_Ilk_Secim" butonuna tiklanir
        * "tb_Ucak_Nereye" alanina Londra yazilir
        * "btn_Ucak_Nereye_Ilk_Secim" butonuna tiklanir
        * Gidis tarihiucak 30 gun sonrasina secilir
        * Donus
        * "btn_Ucak_YolcuSayisi" menusunden 1 secilir
        * "btn_Ucak_Ara" butonuna tiklanir

         Examples:
        | LoginUser              |LoginUserPassword|EntryDate|Destination        |NumberOfRooms|PaymentType|
        |caner.basat@setur.com.tr|47854785zZ       |1        |Divan İstanbul Asia|1            |SirketOdemeli|
        |caner.basat@setur.com.tr|47854785zZ       |2        |Divan İstanbul Asia|2            |SirketOdemeli|
        |caner.basat@setur.com.tr|47854785zZ       |3        |Divan İstanbul Asia|3            |SirketOdemeli|