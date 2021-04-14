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

