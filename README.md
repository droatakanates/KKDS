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
  _layout.tsx              # Kök stack + sağlayıcılar (font, i18n, durum, safe-area)
  (tabs)/                  # Alt navigasyon
    _layout.tsx            # Özel BottomNav (Keşfet / Favoriler / Geçmiş / Profil)
    index.tsx              # Keşfet: marka, arama, branş çipleri, gruplu liste
    saved.tsx              # Favoriler
    history.tsx · profile.tsx
  info/[id].tsx            # Ne zaman kullanılır + kanıt + "Hesaplamaya başla"
  calculator/[id].tsx      # Girdiler + canlı skorlu alt çubuk + "Sonucu gör"
  result/[id].tsx          # Gradyan hero, risk rozeti, öneri, faktörler

src/
  calculators/
    types.ts               # Veri-odaklı skor tip tanımları
    registry.ts            # Kayıt defteri + branşlar (SPECIALTIES)
    defs/                  # Her skor ayrı bir dosya
      chadsvasc.ts · wells.ts · curb65.ts · gcs.ts · ckdepi.ts
  engine/
    compute.ts             # Skorlama motoru (additive + formula → bant)
  i18n/
    index.tsx              # I18nProvider + useI18n() + dil kalıcılığı
    strings.ts             # Arayüz metinleri + branş/nav adları (3 dil)
  store/
    appState.tsx           # Favoriler (AsyncStorage) + hesaplayıcı durumu
  components/
    Icon.tsx · ScoreCard.tsx · inputs.tsx · LanguageToggle.tsx
  theme/
    index.ts               # Tasarım token'ları (renk, tone, gradyan, font, gölge)
```

## Skorlar (80 skor / 11 branş)

Hepsi üç dilde; her biri "ne zaman kullanılır" + kaynak içerir. Branşlar:

- **Kardiyoloji:** CHA₂DS₂-VASc, HAS-BLED, CHADS₂, Killip, NYHA, HEART, TIMI (NSTEMI/STEMI), Sgarbossa, ORBIT
- **Tromboemboli:** Wells (PE/DVT), sPESI, PERC, Padua, IMPROVE VTE, Hestia, Caprini
- **Solunum:** CURB-65, PSI, SMART-COP, mMRC, CAT, ACT, Epworth, Light, BODE, GOLD, STOP-BANG, 4C
- **Gastro/Hepatoloji:** Child-Pugh, MELD, MELD-Na, Maddrey, GAHS, FIB-4, APRI, NAFLD-FS, AIMS65, Rockall, West Haven, Ranson, BISAP, Harvey-Bradshaw, Parsiyel Mayo
- **Nefroloji/Metabolik:** eGFR (CKD-EPI), Cockcroft-Gault, anyon açığı, düzeltilmiş Ca/Na, Winter, osmolar açık, FENa, HOMA-IR
- **Hematoloji/Onkoloji:** 4Ts, ISTH DIC, PLASMIC, ECOG, Karnofsky, MASCC, Khorana, IPI, FLIPI, ISS, Binet, Rai
- **İnfeksiyon/Sepsis:** qSOFA, SIRS, Centor, NEWS2, SOFA
- **Romatoloji:** DAS28, SLEDAI-2K, BASDAI, ASDAS-CRP, FFS
- **Nöroloji:** Glasgow Koma Skalası · **Genel/Geriatri:** Charlson, CAM, CIWA-Ar

> Geçerli katsayı/algoritma tablosu veya kombinatoryal mantık gerektiren
> birkaç skor sonraya bırakıldı: GRACE, Duke, APACHE II, FRAX, ASCVD, SCORE2,
> Framingham, tam BVAS ve KDIGO/RIFLE/AKIN (AKI evrelemesi).

## Yeni Skor Ekleme

Mimari **veri-odaklı**: yeni bir skor eklemek kod yazmayı değil, bir veri nesnesi
tanımlamayı gerektirir.

1. `src/calculators/defs/<skor>.ts` dosyası oluştur ve `Calculator` tipinde bir
   nesne dışa aktar. Girdi tipleri: `boolean` (evet/hayır), `single` (segment
   seçim), `number` (sayısal), `choice` (puansız seçim). `kind: 'additive'`
   puanları toplar; `kind: 'formula'` bir `formula(values)` fonksiyonu çalıştırır.
2. `src/calculators/registry.ts` içindeki `calculators` dizisine ekle.

Tüm metinler üç dilde (`{ tr, az, 'tr-CY' }`) verilir. Motor ve arayüz
otomatik olarak yeni skoru listeler, hesaplar ve yorumlar.

## Tasarım

Arayüz Claude Design "Friendly Rounded" sistemine dayanır (marka: **Skorla**,
mor #7C3AED aksan, Plus Jakarta Sans). Tüm görsel değerler `src/theme/index.ts`
token'larında toplanır; tek noktadan yeniden temalanabilir.

## Yol Haritası (taslak)

- [ ] Geçmiş / son kullanılan skorlar
- [ ] Skor kütüphanesinin genişletilmesi (branş başına çoklu skor)
- [ ] Geniş ekran (masaüstü) iki sütunlu düzen
- [ ] Birim sistemi (SI / konvansiyonel) tercihi
- [ ] EAS Build ile mağaza dağıtımı (App Store / Play Store)
