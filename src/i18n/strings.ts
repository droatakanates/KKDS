import type { CategoryId, Locale, LocalizedText } from '../calculators/types';

/** Desteklenen diller ve gösterilecek adları. */
export const LOCALES: { id: Locale; label: string; flag: string }[] = [
  { id: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { id: 'az', label: 'Azərbaycanca', flag: '🇦🇿' },
  { id: 'tr-CY', label: 'Kıbrıs Türkçesi', flag: '🇨🇾' },
];

export const DEFAULT_LOCALE: Locale = 'tr';

/** Arayüz metinleri. */
export const ui = {
  appName: {
    tr: 'KKDS',
    az: 'KKDS',
    'tr-CY': 'KKDS',
  },
  appTagline: {
    tr: 'Klinik Karar Destek Skorları',
    az: 'Klinik Qərar Dəstək Balları',
    'tr-CY': 'Klinik Karar Destek Skorları',
  },
  searchPlaceholder: {
    tr: 'Skor ara… (örn. CHA₂DS₂-VASc)',
    az: 'Bal axtar… (məs. CHA₂DS₂-VASc)',
    'tr-CY': 'Skor ara… (örn. CHA₂DS₂-VASc)',
  },
  allCategories: {
    tr: 'Tümü',
    az: 'Hamısı',
    'tr-CY': 'Hepsi',
  },
  noResults: {
    tr: 'Sonuç bulunamadı',
    az: 'Nəticə tapılmadı',
    'tr-CY': 'Netice bulunamadı',
  },
  calculate: {
    tr: 'Hesapla',
    az: 'Hesabla',
    'tr-CY': 'Hesapla',
  },
  reset: {
    tr: 'Sıfırla',
    az: 'Sıfırla',
    'tr-CY': 'Sıfırla',
  },
  result: {
    tr: 'Sonuç',
    az: 'Nəticə',
    'tr-CY': 'Netice',
  },
  incompleteResult: {
    tr: 'Sonuç için tüm alanları doldurun',
    az: 'Nəticə üçün bütün sahələri doldurun',
    'tr-CY': 'Netice için tüm alanları doldurun',
  },
  references: {
    tr: 'Kaynaklar',
    az: 'Mənbələr',
    'tr-CY': 'Kaynaklar',
  },
  settings: {
    tr: 'Ayarlar',
    az: 'Ayarlar',
    'tr-CY': 'Ayarlar',
  },
  language: {
    tr: 'Dil',
    az: 'Dil',
    'tr-CY': 'Dil',
  },
  yes: {
    tr: 'Evet',
    az: 'Bəli',
    'tr-CY': 'Evet',
  },
  no: {
    tr: 'Hayır',
    az: 'Xeyr',
    'tr-CY': 'Yok',
  },
  disclaimerTitle: {
    tr: 'Önemli Uyarı',
    az: 'Vacib Xəbərdarlıq',
    'tr-CY': 'Önemli Uyarı',
  },
  disclaimerBody: {
    tr: 'Bu uygulama yalnızca eğitim ve karar destek amaçlıdır. Sonuçlar klinik değerlendirmenin yerini tutmaz; nihai karar hekime aittir.',
    az: 'Bu tətbiq yalnız təhsil və qərar dəstəyi məqsədlidir. Nəticələr klinik qiymətləndirməni əvəz etmir; yekun qərar həkimə aiddir.',
    'tr-CY': 'Bu uygulama sadece eğitim ve karar destek amaçlıdır. Neticeler klinik değerlendirmenin yerini tutmaz; son karar hekimindir.',
  },
} satisfies Record<string, LocalizedText>;

export type UiKey = keyof typeof ui;

/** Kategori adları. */
export const categoryNames: Record<CategoryId, LocalizedText> = {
  cardiology: {
    tr: 'Kardiyoloji',
    az: 'Kardiologiya',
    'tr-CY': 'Kardiyoloji',
  },
  pulmonology: {
    tr: 'Göğüs Hastalıkları',
    az: 'Pulmonologiya',
    'tr-CY': 'Göğüs Hastalıkları',
  },
  neurology: {
    tr: 'Nöroloji',
    az: 'Nevrologiya',
    'tr-CY': 'Nöroloji',
  },
  emergency: {
    tr: 'Acil Tıp',
    az: 'Təcili Tibb',
    'tr-CY': 'Acil Tıp',
  },
  nephrology: {
    tr: 'Nefroloji',
    az: 'Nefrologiya',
    'tr-CY': 'Nefroloji',
  },
  gastro: {
    tr: 'Gastroenteroloji',
    az: 'Qastroenterologiya',
    'tr-CY': 'Gastroenteroloji',
  },
  hematology: {
    tr: 'Hematoloji',
    az: 'Hematologiya',
    'tr-CY': 'Hematoloji',
  },
};
