import type { CategoryId, Locale, LocalizedText } from '../calculators/types';

/** Marka adı (dilden bağımsız). */
export const BRAND = 'Skorla';

/** Desteklenen diller ve gösterilecek adları. */
export const LOCALES: { id: Locale; label: string; short: string }[] = [
  { id: 'tr', label: 'Türkçe', short: 'TR' },
  { id: 'az', label: 'Azərbaycanca', short: 'AZ' },
  { id: 'tr-CY', label: 'Kıbrıs Türkçesi', short: 'KIB' },
];

export const DEFAULT_LOCALE: Locale = 'tr';

/** Arayüz metinleri (üç dil). */
export const ui = {
  greeting: { tr: 'Merhaba, Dr. Yılmaz', az: 'Salam, Dr. Yılmaz', 'tr-CY': 'Merhaba, Dr. Yılmaz' },
  homeTitle: { tr: 'Klinik skorlar', az: 'Klinik ballar', 'tr-CY': 'Klinik skorlar' },
  search: { tr: 'Skor veya hastalık ara…', az: 'Bal və ya xəstəlik axtar…', 'tr-CY': 'Skor veya hastalık ara…' },
  all: { tr: 'Tümü', az: 'Hamısı', 'tr-CY': 'Hepsi' },
  bySpecialty: { tr: 'Branşa göre', az: 'İxtisasa görə', 'tr-CY': 'Branşa göre' },
  favorites: { tr: 'Favoriler', az: 'Sevimlilər', 'tr-CY': 'Favoriler' },
  allScores: { tr: 'Tüm skorlar', az: 'Bütün ballar', 'tr-CY': 'Tüm skorlar' },
  noFavs: { tr: 'Henüz favori yok.', az: 'Hələ sevimli yoxdur.', 'tr-CY': 'Henüz favori yok.' },
  noFavsHint: { tr: 'Bir skoru yıldızlayarak buraya ekle.', az: 'Bir balı ulduzlayaraq bura əlavə et.', 'tr-CY': 'Bir skoru yıldızlayarak buraya ekle.' },
  browseAll: { tr: 'Tüm skorlara göz at', az: 'Bütün ballara bax', 'tr-CY': 'Tüm skorlara göz at' },
  whenToUse: { tr: 'Ne zaman kullanılır', az: 'Nə zaman istifadə olunur', 'tr-CY': 'Ne zaman kullanılır' },
  evidenceLbl: { tr: 'Kanıt & kaynak', az: 'Sübut & mənbə', 'tr-CY': 'Kanıt & kaynak' },
  aboutScore: { tr: 'Skor hakkında', az: 'Bal haqqında', 'tr-CY': 'Skor hakkında' },
  startCalc: { tr: 'Hesaplamaya başla', az: 'Hesablamağa başla', 'tr-CY': 'Hesaplamaya başla' },
  scoresCount: { tr: 'skor', az: 'bal', 'tr-CY': 'skor' },
  seeResult: { tr: 'Sonucu gör', az: 'Nəticəyə bax', 'tr-CY': 'Sonucu gör' },
  recompute: { tr: 'Tekrar hesapla', az: 'Yenidən hesabla', 'tr-CY': 'Tekrar hesapla' },
  newScore: { tr: 'Yeni skor', az: 'Yeni bal', 'tr-CY': 'Yeni skor' },
  reset: { tr: 'Sıfırla', az: 'Sıfırla', 'tr-CY': 'Sıfırla' },
  result: { tr: 'Sonuç', az: 'Nəticə', 'tr-CY': 'Netice' },
  recommend: { tr: 'Öneri', az: 'Tövsiyə', 'tr-CY': 'Öneri' },
  factors: { tr: 'Katkıda bulunan faktörler', az: 'Töhfə verən amillər', 'tr-CY': 'Katkıda bulunan faktörler' },
  inputs: { tr: 'Girilen değerler', az: 'Daxil edilən dəyərlər', 'tr-CY': 'Girilen değerler' },
  enter: { tr: 'Sonucu görmek için değerleri gir', az: 'Nəticəni görmək üçün dəyərləri daxil et', 'tr-CY': 'Sonucu görmek için değerleri gir' },
  noFactors: { tr: 'Henüz puan ekleyen bir kriter seçilmedi.', az: 'Hələ bal əlavə edən meyar seçilməyib.', 'tr-CY': 'Henüz puan ekleyen bir kriter seçilmedi.' },
  points: { tr: 'puan', az: 'bal', 'tr-CY': 'puan' },
  ofMax: { tr: 'üzerinden', az: '/', 'tr-CY': 'üzerinden' },
  noResults: { tr: 'Sonuç bulunamadı.', az: 'Nəticə tapılmadı.', 'tr-CY': 'Netice bulunamadı.' },
  resultsLbl: { tr: 'sonuç', az: 'nəticə', 'tr-CY': 'netice' },
  comingSoon: { tr: 'Bu bölüm yakında.', az: 'Bu bölmə tezliklə.', 'tr-CY': 'Bu bölüm yakında.' },
  language: { tr: 'Dil', az: 'Dil', 'tr-CY': 'Dil' },
  disclaimer: {
    tr: 'Yalnızca bilgilendirme amaçlıdır; klinik kararın yerine geçmez.',
    az: 'Yalnız məlumat məqsədlidir; klinik qərarı əvəz etmir.',
    'tr-CY': 'Sadece bilgilendirme amaçlıdır; klinik kararın yerine geçmez.',
  },
} satisfies Record<string, LocalizedText>;

export type UiKey = keyof typeof ui;

/** Alt navigasyon sekmeleri. */
export const navTabs: { id: 'home' | 'saved' | 'history' | 'profile'; label: LocalizedText }[] = [
  { id: 'home', label: { tr: 'Keşfet', az: 'Kəşf et', 'tr-CY': 'Keşfet' } },
  { id: 'saved', label: { tr: 'Favoriler', az: 'Sevimlilər', 'tr-CY': 'Favoriler' } },
  { id: 'history', label: { tr: 'Geçmiş', az: 'Tarixçə', 'tr-CY': 'Geçmiş' } },
  { id: 'profile', label: { tr: 'Profil', az: 'Profil', 'tr-CY': 'Profil' } },
];

/** Branş adları. */
export const categoryNames: Record<CategoryId, LocalizedText> = {
  cardio: { tr: 'Kardiyoloji', az: 'Kardiologiya', 'tr-CY': 'Kardiyoloji' },
  pulm: { tr: 'Pulmoner', az: 'Pulmoner', 'tr-CY': 'Pulmoner' },
  neph: { tr: 'Nefroloji', az: 'Nefrologiya', 'tr-CY': 'Nefroloji' },
  neuro: { tr: 'Nöroloji', az: 'Nevrologiya', 'tr-CY': 'Nöroloji' },
  emerg: { tr: 'Acil', az: 'Təcili', 'tr-CY': 'Acil' },
};
