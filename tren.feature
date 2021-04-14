
Feature: SeturbizTrens 
    Scenario: 2Kisi Standart-GidisDonus-BusinessPlus
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Train" butonuna tiklanir
        * "btn_Tren_YolcuSayisi" menusunden 2 secilir
        * "btn_Tren_Nereden" menusunden 3 secilir
        * "btn_Tren_Nereye" menusunden 4 secilir
        * "btn_Tren_GidisTarihi" butonuna tiklanir
        * "btn_Tren_GidisTarihiSonrakiAy" butonuna tiklanir
        * "btn_Tren_Gidis_Gun" butonuna tiklanir
        * "btn_Tren_Dakika" menusunden 00:00 - 01:00 secilir
        * "btn_Tren_1Y_HesKodu" alanina N4E9-8657-17 yazilir
        * "btn_Tren_2Y_HesKodu" alanina N4E9-8657-17 yazilir
        * "btn_Tren_Ekonomi" butonuna tiklanir
        * "btn_Tren_GidisDonus" butonuna tiklanir
        * "btn_Tren_DonusTarihi" butonuna tiklanir
        * "btn_Tren_DonusTarihiSonrakiAy" butonuna tiklanir
        * "1" saniye beklenir
        * "btn_Tren_DonusTarihiSonrakiAy" butonuna tiklanir
        * "btn_Tren_DonusTarihiGun" butonuna tiklanir
        * "btn_Tren_DonusTarihiDakika" menusunden 00:00 - 01:00 secilir
        * "btn_Tren_TalepOlustur" butonuna tiklanir
        * "btn_Tren_BasariliTalep" gorunene kadar beklenir
