# KKDS — Klinik Karar Destek Skorları

MdCalc benzeri, **yalnızca klinik skorlama sistemleri** içeren çok platformlu
(Web + iOS + Android) bir klinik karar destek uygulaması. Tek bir TypeScript
kod tabanından üç platforma da çıkar.

> ⚠️ Bu uygulama yalnızca eğitim ve karar destek amaçlıdır. Sonuçlar klinik
> değerlendirmenin yerini tutmaz; nihai karar hekime aittir.

## Teknoloji

- **Expo (SDK 56)** + **React Native** + **React Native Web** — tek kod tabanı
- **Expo Router** — dosya tabanlı navigasyon (web + native)
- **TypeScript** (strict)
- **Çok dilli**: Türkçe (`tr`), Azerbaycanca (`az`), Kıbrıs Türkçesi (`tr-CY`)

## Çalıştırma

```bash
npm install
npm run web        # tarayıcıda
npm run ios        # iOS simülatörü (macOS)
npm run android    # Android emülatörü
npm start          # Metro + QR kod (Expo Go)
```

Diğer komutlar:

```bash
npm run typecheck            # tsc --noEmit
npx expo export --platform web   # statik web çıktısı (dist/)
```

## Proje Yapısı

```
app/                       # Ekranlar (Expo Router)
  _layout.tsx              # Kök layout + sağlayıcılar (i18n, safe-area)
  index.tsx                # Ana sayfa: arama + kategori filtresi + skor listesi
  calculator/[id].tsx      # Skor çalıştırıcı ekranı
  settings.tsx             # Dil seçimi + uyarı

src/
  calculators/
    types.ts               # Veri-odaklı skor tip tanımları
    registry.ts            # Tüm skorların kayıt defteri
    defs/                  # Her skor ayrı bir dosya
      chadsvasc.ts · curb65.ts · gcs.ts · wells-dvt.ts
  engine/
    compute.ts             # Genel skorlama motoru (tip → puan → bant)
  i18n/
    index.tsx              # I18nProvider + useI18n() + dil kalıcılığı
    strings.ts             # Arayüz metinleri + kategori adları (3 dil)
  components/
    ScoreListItem.tsx · InputField.tsx · ResultBanner.tsx
  theme/
    index.ts               # Tasarım token'ları (renk, boşluk, tipografi)
```

## Yeni Skor Ekleme

Mimari **veri-odaklı**: yeni bir skor eklemek kod yazmayı değil, bir veri nesnesi
tanımlamayı gerektirir.

1. `src/calculators/defs/<skor>.ts` dosyası oluştur ve `Calculator` tipinde bir
   nesne dışa aktar. Girdi tipleri: `boolean` (evet/hayır), `single` (tekli
   seçim), `number` (aralık→puan).
2. `src/calculators/registry.ts` içindeki `calculators` dizisine ekle.

Tüm metinler üç dilde (`{ tr, az, 'tr-CY' }`) verilir. Motor ve arayüz
otomatik olarak yeni skoru listeler, hesaplar ve yorumlar.

## Tasarım

Renk, boşluk ve tipografi `src/theme/index.ts` içindeki token'larda toplanır.
Claude Design'dan gelen arayüz bu token'lara eşlenerek tüm uygulamaya tek
noktadan uygulanabilir.

## Yol Haritası (taslak)

- [ ] Claude Design arayüzünün token'lara eşlenmesi
- [ ] Skor kütüphanesinin genişletilmesi (kategori başına çoklu skor)
- [ ] Favoriler / son kullanılanlar
- [ ] `number` tipli girdiler için sayısal klavye bileşeni
- [ ] Birim sistemi (SI / konvansiyonel) tercihi
- [ ] EAS Build ile mağaza dağıtımı (App Store / Play Store)
