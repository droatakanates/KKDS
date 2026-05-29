# KKDS — Geliştirici Notları (Claude için)

MdCalc benzeri klinik skor uygulaması. Expo (SDK 56) + Expo Router + TypeScript;
tek kod tabanından Web + iOS + Android.

Ürün markası (arayüzde görünen ad): **Skorla**. Tasarım sistemi Claude Design
"Friendly Rounded" (mor #7C3AED aksan, Plus Jakarta Sans).

## Mimari ilkeler

- **Veri-odaklı skorlar.** Skorlar `src/calculators/defs/*.ts` içinde `Calculator`
  nesneleri olarak tanımlanır ve `registry.ts`'e eklenir. UI/motor genel; yeni
  skor için ekran kodu yazılmaz.
- **Tek skorlama motoru.** `src/engine/compute.ts` tüm girdi tiplerini işler
  (`boolean`, `single`, `number`, `choice`) ve `additive` toplamı ya da `formula`
  sonucunu bir `ResultBand`'e (tone + riskLabel + advice + metric) eşler.
- **Çok dillilik zorunlu.** Kullanıcıya görünen her metin `LocalizedText`
  (`{ tr, az, 'tr-CY' }`) olmalı. UI metinleri `src/i18n/strings.ts`'te. Aktif
  dile çözmek için `useI18n().tx(...)` / `t(...)`.
- **Tema token'ları.** Renk/boşluk/tipografi/gölge/gradyan `src/theme/index.ts`'ten
  gelir; bileşenlerde sabit (hard-coded) değer kullanma. Fontlar
  `@expo-google-fonts/plus-jakarta-sans` (Jakarta500/600/700/800), ikonlar
  `src/components/Icon.tsx` (react-native-svg), gradyanlar `expo-linear-gradient`.
- **Durum.** Favoriler ve hesaplayıcı girdileri `src/store/appState.tsx`
  (`useAppState`) içinde; ekranlar arası paylaşılır, favoriler AsyncStorage'da.
- **Navigasyon.** Expo Router; alt sekmeler `app/(tabs)/`, akış
  `info/[id] → calculator/[id] → result/[id]`.

## Komutlar

- `npm run typecheck` — değişiklikten sonra çalıştır.
- `npx expo export --platform web` — bundle'ın derlendiğini doğrular.

## Tıbbi içerik uyarısı

Skor puanları, eşikler ve yorumlar klinik karar destek içeriğidir. Değiştirir/
eklerken `references` alanındaki kaynağa sadık kal ve uydurma yapma.
