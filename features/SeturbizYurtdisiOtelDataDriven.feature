Feature: SeturbizYurtDisiOtelDataDriven
    Scenario Outline: SeturBizYurtDisi SirketOdemeli
        * Tarayici acilir
        * "btn_Cookie_Onay" butonuna tiklanir
        * "btn_Anasayfa_GirisYap" butonuna tiklanir
        * "tb_GirisYap_KullaniciAdi" alanina <LoginUser> yazilir
        * "tb_GirisYap_Sifre" alanina 47854785zZ yazilir
        * "tb_GirisYap_Submit" butonuna tiklanir
        * "btn_YurtDisiOtel" butonuna tiklanir
        * Yurtdisi otel gidis tarihi <EntryDate> gun sonrasina secilir
        * Yurtdışı otel odeme tipi <PaymentType> secilir
        * "btn_YurtDisiOtel_Sehir" alanina <Destination> yazilir
        * "btn_YurtDisiOtel_Sehir_Ilk_Sehir" butonuna tiklanir
        * "btn_YurtDisiOtel_Yildiz" menusunden 3,4,5 secilir
        * "btn_YurtDisiOtel_OdaSayisi" menusunden <NumberOfRooms> secilir
        * "2" saniye beklenir
        * "btn_YurtDisiOtel_Devam" butonuna tiklanir
        * "btn_YurtDisiOtel_IlkOtel" gorunene kadar beklenir
        * "10" saniye beklenir
        * "btn_YurtDisiOtel_Oteller" listesinden rastgele tiklanir
        * "btn_YurtDisiOtel_Otel_Fiyatlari" listesinden rastgele tiklanir
        * Yurtdisiotel yolcu bilgileri doldurulur
      
        Examples:
        | LoginUser              |LoginUserPassword|EntryDate|Destination        |NumberOfRooms|PaymentType|
        |caner.basat@setur.com.tr|47854785zZ       |1        |Berlin|1            |SirketOdemeli|
  
