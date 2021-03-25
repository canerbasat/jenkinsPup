Feature: SeturbizYurtIciOtelDataDriven
    Scenario Outline: SeturBizYurtIci SirketOdemeli
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Anasayfa_YurtIciOtel" butonuna tiklanir
        * Gidis tarihi <EntryDate> gun sonrasina secilir
        * Odeme tipi <PaymentType> secilir
        * "btn_YurtIciOtel_Gideceginiz_Yer" alanina <Destination> yazilir
        * "btn_YurtIciOtel_Gideceginiz_Yer_Ilk_Otel" butonuna tiklanir
        * "btn_YurtIciOtel_Oda_Sayisi" menusunden <NumberOfRooms> secilir
        * "2" saniye beklenir
        * "btn_YurtIciOtel_DevamEtButonu" butonuna tiklanir
        * "btn_YurtIciOtel_RezervasyonYap" butonuna tiklanir
        * Yolcu bilgileri doldurulur
        * "btn_RezervasyonYap_Devam" butonuna tiklanir
        * "btn_Rezervasyonu_Tamamla" butonuna tiklanir
        * "lbl_Rezervasyonu_Talep_Bilgileri_Mesaji" elementi "Rezervasyon Talebiniz Alınmıştır" degerine esittir

        Examples:
        | LoginUser              |LoginUserPassword|EntryDate|Destination        |NumberOfRooms|PaymentType|
        |caner.basat@setur.com.tr|47854785zZ       |1        |Divan İstanbul Asia|1            |SirketOdemeli|
        |caner.basat@setur.com.tr|47854785zZ       |2        |Divan İstanbul Asia|2            |SirketOdemeli|
        |caner.basat@setur.com.tr|47854785zZ       |3        |Divan İstanbul Asia|3            |SirketOdemeli|



    Scenario Outline: SeturBizYurtIci OteldeOde
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_Anasayfa_YurtIciOtel" butonuna tiklanir
        * Gidis tarihi <EntryDate> gun sonrasina secilir
        * Odeme tipi <PaymentType> secilir
        * "btn_YurtIciOtel_Gideceginiz_Yer" alanina <Destination> yazilir
        * "btn_YurtIciOtel_Gideceginiz_Yer_Ilk_Otel" butonuna tiklanir
        * "btn_YurtIciOtel_Oda_Sayisi" menusunden <NumberOfRooms> secilir
        * "2" saniye beklenir
        * "btn_YurtIciOtel_DevamEtButonu" butonuna tiklanir
        * "btn_YurtIciOtel_RezervasyonYap" butonuna tiklanir
        * Yolcu bilgileri doldurulur
        * "btn_RezervasyonYap_Devam" butonuna tiklanir
        * "btn_Rezervasyonu_Tamamla" butonuna tiklanir
        * "lbl_Rezervasyonu_Talep_Bilgileri_Mesaji" elementi "Rezervasyon Talebiniz Alınmıştır" degerine esittir

        Examples:
        | LoginUser              |LoginUserPassword|EntryDate|Destination        |NumberOfRooms|PaymentType|
        |caner.basat@setur.com.tr|47854785zZ       |1        |Divan İstanbul Asia|1            |OteldeOde|
        |caner.basat@setur.com.tr|47854785zZ       |2        |Divan İstanbul Asia|2            |OteldeOde|
        |caner.basat@setur.com.tr|47854785zZ       |3        |Divan İstanbul Asia|3            |OteldeOde|
        

        

        
      



              