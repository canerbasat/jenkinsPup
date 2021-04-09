Feature: SeturbizTransferDataDriven
    Scenario Outline: SeturBizTransfer AdrestenAdrese
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Transfer" butonuna tiklanir
        * "btn_Transfer_AdrestenAdrese" butonuna tiklanir
        * "btn_Transfer_Sehir" menusunden 1 secilir
        * "tb_Transfer_Gsm" alanina 534 yazilir
        * "tb_Transfer_GsmNo" alanina 4585220 yazilir
        * "tb_Transfer_eposta" alanina caner.basat@setur.com.tr yazilir
        * "btn_Transfer_TransferTarihi" butonuna tiklanir
        * "btn_Transfer_Tarih_SonrakiAy" butonuna tiklanir
        * "btn_Transfer_Tarih_Gun" butonuna tiklanir
        * "btn_Transfer_TransferSaati" menusunden 00 secilir
        * "btn_Transfer_TransferSaati_Dakika" menusunden 00 secilir
        * "btn_Transfer_Valiz_Sayisi" alanina 1 yazilir
        * "btn_Transfer_Kisi_Sayisi" menusunden 1 secilir
        * "btn_Transfer_Kalkis_Adresi" alanina Güngören yazilir
        * "btn_Transfer_Varis_Adresi" alanina Güngören yazilir
        * "btn_Transfer_Ilk_Misafir_Ad" alanina Caner yazilir
        * "btn_Transfer_Ilk_Misafir_SoyAd" alanina Başat yazilir
        * "btn_Transfer_Ilk_Misafir_TC" alanina 48703351180 yazilir
        * "btn_Transfer_Talebi_Olustur" butonuna tiklanir
        * "btn_Transfer_Basarili_Talep" gorunene kadar beklenir


        Examples:
        | LoginUser              |LoginUserPassword|EntryDate|Destination        |NumberOfRooms|PaymentType  |TransferType       |
        |caner.basat@setur.com.tr|47854785zZ       |1        |Berlin             |1            |SirketOdemeli|HavaAlanındanAdrese| 


       Scenario Outline: SeturBizTransfer HavaAlanındanAdrese
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Transfer" butonuna tiklanir
        * "btn_Transfer_HavaAlanindanAdrese" butonuna tiklanir
        * "btn_Transfer_Sehir" menusunden 1 secilir
        * "tb_Transfer_Gsm" alanina 534 yazilir
        * "tb_Transfer_GsmNo" alanina 4585220 yazilir
        * "tb_Transfer_eposta" alanina caner.basat@setur.com.tr yazilir
        * "1" saniye beklenir
        * "btn_Transfer_TransferTarihi" butonuna tiklanir
        * "btn_Transfer_Tarih_SonrakiAy" butonuna tiklanir
        * "btn_Transfer_Tarih_Gun" butonuna tiklanir
        * "btn_Transfer_TransferSaati" menusunden 00 secilir
        * "btn_Transfer_TransferSaati_Dakika" menusunden 00 secilir
        * "btn_Transfer_Valiz_Sayisi" alanina 1 yazilir
        * "btn_Transfer_Kisi_Sayisi" menusunden 1 secilir
        * "btn_Transfer_Varis_Adresi" alanina Güngören yazilir
        * "btn_Transfer_Ilk_Misafir_Ad" alanina Caner yazilir
        * "btn_Transfer_Ilk_Misafir_SoyAd" alanina Başat yazilir
        * "btn_Transfer_Ilk_Misafir_TC" alanina 48703351180 yazilir
        * "btn_Transfer_UcusNumarasi" alanina 123123 yazilir
        * "btn_Transfer_UcusTarihi" butonuna tiklanir
        * "btn_Transfer_UcusTarihi_SonrakiAy" butonuna tiklanir
        * "btn_Transfer_UcusTarihi_Gun" butonuna tiklanir
        * "btn_Transfer_UcusSaati" menusunden 00 secilir
        * "btn_Transfer_UcusSaatiDakika" menusunden 00 secilir
        * "btn_UcusHavaAlani" menusunden 22 secilir
        * "btn_UcusHavaYolu" menusunden 67 secilir
        * "btn_Transfer_Talebi_Olustur" butonuna tiklanir
        * "btn_Transfer_Basarili_Talep" gorunene kadar beklenir


        Examples:
        | LoginUser              |LoginUserPassword|EntryDate|Destination        |NumberOfRooms|PaymentType  |TransferType       |
        |caner.basat@setur.com.tr|47854785zZ       |1        |Berlin             |1            |SirketOdemeli|HavaAlanındanAdrese| 

       
          Scenario Outline: SeturBizTransfer AdrestenHavaAlanina
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Transfer" butonuna tiklanir
        * "btn_Transfer_AdrestenHavaAlanina" butonuna tiklanir
        * "btn_Transfer_Sehir" menusunden 1 secilir
        * "tb_Transfer_Gsm" alanina 534 yazilir
        * "tb_Transfer_GsmNo" alanina 4585220 yazilir
        * "tb_Transfer_eposta" alanina caner.basat@setur.com.tr yazilir
        * "1" saniye beklenir
        * "btn_Transfer_TransferTarihi" butonuna tiklanir
        * "btn_Transfer_Tarih_SonrakiAy" butonuna tiklanir
        * "btn_Transfer_Tarih_Gun" butonuna tiklanir
        * "btn_Transfer_TransferSaati" menusunden 00 secilir
        * "btn_Transfer_TransferSaati_Dakika" menusunden 00 secilir
        * "btn_Transfer_Valiz_Sayisi" alanina 1 yazilir
        * "btn_Transfer_Kisi_Sayisi" menusunden 1 secilir
        * "btn_Transfer_Kalkis_Adresi" alanina Güngören yazilir
        * "btn_Transfer_Ilk_Misafir_Ad" alanina Caner yazilir
        * "btn_Transfer_Ilk_Misafir_SoyAd" alanina Başat yazilir
        * "btn_Transfer_Ilk_Misafir_TC" alanina 48703351180 yazilir
        * "btn_Transfer_UcusNumarasi" alanina 123123 yazilir
        * "btn_Transfer_UcusTarihi" butonuna tiklanir
        * "btn_Transfer_UcusTarihi_SonrakiAy" butonuna tiklanir
        * "btn_Transfer_UcusTarihi_Gun" butonuna tiklanir
        * "btn_Transfer_UcusSaati" menusunden 00 secilir
        * "btn_Transfer_UcusSaatiDakika" menusunden 00 secilir
        * "btn_UcusHavaAlani" menusunden 22 secilir
        * "btn_UcusHavaYolu" menusunden 67 secilir
        * "btn_Transfer_Talebi_Olustur" butonuna tiklanir
        * "btn_Transfer_Basarili_Talep" gorunene kadar beklenir


        Examples:
        | LoginUser              |LoginUserPassword|EntryDate|Destination        |NumberOfRooms|PaymentType  |TransferType       |
        |caner.basat@setur.com.tr|47854785zZ       |1        |Berlin             |1            |SirketOdemeli|HavaAlanındanAdrese| 

       
       