
Feature: SeturbizArac 
    Scenario: Arac
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina caner.basat@setur.com.tr yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Arac" butonuna tiklanir
        ##AcenteAvis
        * "btn_Arac_Acenteler" menusunden 2 secilir
        ##İstanbul Yeni Havaalani
        * "1" saniye beklenir
        * "btn_Arac_AlisYeri" menusunden 86 secilir
        * "btn_Arac_BirakisYeri" menusunden 86 secilir        
        * "btn_Arac_AlisTarihi" butonuna tiklanir
        * "btn_Arac_AlisSonrakiAy" butonuna tiklanir
        * "btn_Arac_AlisGun" butonuna tiklanir
        * "1" saniye beklenir
        * "btn_Arac_BirakisTarihi" butonuna tiklanir
        * "btn_Arac_BirakisGun" butonuna tiklanir
        * "btn_Arac_AlisSaat" menusunden 00 secilir
        * "btn_Arac_AlisDakika" menusunden 00 secilir
        * "btn_Arac_BirakisSaat" menusunden 00 secilir
        * "btn_Arac_BirakisDakika" menusunden 00 secilir
        * "btn_Arac_AraclariListele" butonuna tiklanir
        * "btn_Arac_IlkArac" gorunene kadar beklenir
        

