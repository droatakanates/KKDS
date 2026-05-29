# KKDS — Geliştirici Notları (Claude için)

MdCalc benzeri klinik skor uygulaması. Expo (SDK 56) + Expo Router + TypeScript;
tek kod tabanından Web + iOS + Android.

## Mimari ilkeler

- **Veri-odaklı skorlar.** Skorlar `src/calculators/defs/*.ts` içinde `Calculator`
  nesneleri olarak tanımlanır ve `registry.ts`'e eklenir. UI/motor genel; yeni
  skor için ekran kodu yazılmaz.
- **Tek skorlama motoru.** `src/engine/compute.ts` tüm girdi tiplerini işler
  (`boolean`, `single`, `number` aralıkları) ve toplamı bir `ResultBand`'e eşler.
- **Çok dillilik zorunlu.** Kullanıcıya görünen her metin `LocalizedText`
  (`{ tr, az, 'tr-CY' }`) olmalı. UI metinleri `src/i18n/strings.ts`'te. Aktif
  dile çözmek için `useI18n().tx(...)` / `t(...)`.
- **Tema token'ları.** Renk/boşluk/tipografi `src/theme/index.ts`'ten gelir;
  bileşenlerde sabit (hard-coded) değer kullanma.

## Komutlar

- `npm run typecheck` — değişiklikten sonra çalıştır.
- `npx expo export --platform web` — bundle'ın derlendiğini doğrular.

## Tıbbi içerik uyarısı

Skor puanları, eşikler ve yorumlar klinik karar destek içeriğidir. Değiştirir/
eklerken `references` alanındaki kaynağa sadık kal ve uydurma yapma.
