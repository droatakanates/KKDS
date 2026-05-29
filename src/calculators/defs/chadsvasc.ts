import type { Calculator, LocalizedText } from '../types';

/** Puana özel yıllık inme riski (%). */
const strokeRisk: Record<number, number> = {
  0: 0.2, 1: 0.6, 2: 2.2, 3: 3.2, 4: 4.8, 5: 7.2, 6: 9.7, 7: 11.2, 8: 10.8, 9: 12.2,
};

const metricByScore: Record<number, LocalizedText> = Object.fromEntries(
  Object.entries(strokeRisk).map(([k, v]) => [
    Number(k),
    { tr: `%${v} / yıl`, az: `${v}% / il`, 'tr-CY': `%${v} / yıl` },
  ]),
);

/** CHA₂DS₂-VASc — atriyal fibrilasyonda inme riski. */
export const chadsvasc: Calculator = {
  id: 'chadsvasc',
  category: 'cardio',
  code: 'CHA₂DS₂-VASc',
  kind: 'additive',
  max: 9,
  name: { tr: 'CHA₂DS₂-VASc Skoru', az: 'CHA₂DS₂-VASc Balı', 'tr-CY': 'CHA₂DS₂-VASc Skoru' },
  subtitle: { tr: 'AF’de inme riski', az: 'AF-də insult riski', 'tr-CY': 'AF’de inme riski' },
  use: {
    tr: 'Non-valvüler atriyal fibrilasyonu olan hastalarda inme riskini sınıflandırmak ve oral antikoagülasyon kararını desteklemek için kullanılır.',
    az: 'Qeyri-valvulyar atriyal fibrilyasyonu olan xəstələrdə insult riskini təsnif etmək və oral antikoaqulyasiya qərarını dəstəkləmək üçün istifadə olunur.',
    'tr-CY': 'Non-valvüler atriyal fibrilasyonu olan hastalarda inme riskini sınıflandırmak ve oral antikoagülasyon kararını desteklemek için kullanılır.',
  },
  evidence: {
    tr: 'Lip ve ark., 2010. ESC ve birçok ulusal AF kılavuzunda önerilir.',
    az: 'Lip və ark., 2010. ESC və bir çox milli AF təlimatında tövsiyə olunur.',
    'tr-CY': 'Lip ve ark., 2010. ESC ve birçok ulusal AF kılavuzunda önerilir.',
  },
  metricLabel: { tr: 'Yıllık inme riski', az: 'İllik insult riski', 'tr-CY': 'Yıllık inme riski' },
  metricByScore,
  inputs: [
    { id: 'chf', type: 'boolean', points: 1,
      label: { tr: 'Konjestif kalp yetmezliği', az: 'Konqestiv ürək çatışmazlığı', 'tr-CY': 'Konjestif kalp yetmezliği' },
      hint: { tr: 'KY öyküsü / düşük EF', az: 'ÜÇ anamnezi / aşağı EF', 'tr-CY': 'KY öyküsü / düşük EF' } },
    { id: 'htn', type: 'boolean', points: 1,
      label: { tr: 'Hipertansiyon', az: 'Hipertoniya', 'tr-CY': 'Hipertansiyon' },
      hint: { tr: 'İstirahat KB >140/90', az: 'İstirahət TT >140/90', 'tr-CY': 'İstirahat KB >140/90' } },
    { id: 'age', type: 'single', default: 0,
      label: { tr: 'Yaş', az: 'Yaş', 'tr-CY': 'Yaş' },
      options: [
        { value: 0, points: 0, label: { tr: '< 65', az: '< 65', 'tr-CY': '< 65' } },
        { value: 1, points: 1, label: { tr: '65–74', az: '65–74', 'tr-CY': '65–74' } },
        { value: 2, points: 2, label: { tr: '≥ 75', az: '≥ 75', 'tr-CY': '≥ 75' } },
      ] },
    { id: 'dm', type: 'boolean', points: 1,
      label: { tr: 'Diabetes mellitus', az: 'Şəkərli diabet', 'tr-CY': 'Diabetes mellitus' },
      hint: { tr: 'AKŞ >125 veya tedavi', az: 'ANŞ >125 və ya müalicə', 'tr-CY': 'AKŞ >125 veya tedavi' } },
    { id: 'stroke', type: 'boolean', points: 2,
      label: { tr: 'İnme / TİA / tromboemboli', az: 'İnsult / KTH / tromboemboliya', 'tr-CY': 'İnme / TİA / tromboemboli' },
      hint: { tr: 'Öyküde mevcut', az: 'Anamnezdə var', 'tr-CY': 'Öyküde mevcut' } },
    { id: 'vasc', type: 'boolean', points: 1,
      label: { tr: 'Vasküler hastalık', az: 'Damar xəstəliyi', 'tr-CY': 'Vasküler hastalık' },
      hint: { tr: 'MI, PAH, aort plağı', az: 'Mİ, PAX, aorta plağı', 'tr-CY': 'MI, PAH, aort plağı' } },
    { id: 'sex', type: 'boolean', points: 1,
      label: { tr: 'Cinsiyet: Kadın', az: 'Cins: Qadın', 'tr-CY': 'Cinsiyet: Kadın' },
      hint: { tr: 'Kadın cinsiyet', az: 'Qadın cinsi', 'tr-CY': 'Kadın cinsiyet' } },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low',
      riskLabel: { tr: 'Düşük', az: 'Aşağı', 'tr-CY': 'Düşük' },
      advice: { tr: 'Antikoagülasyon genellikle önerilmez.', az: 'Antikoaqulyasiya adətən tövsiyə olunmur.', 'tr-CY': 'Antikoagülasyon genellikle önerilmez.' } },
    { min: 1, max: 1, tone: 'mid',
      riskLabel: { tr: 'Orta', az: 'Orta', 'tr-CY': 'Orta' },
      advice: { tr: 'Oral antikoagülasyon düşünülebilir.', az: 'Oral antikoaqulyasiya düşünülə bilər.', 'tr-CY': 'Oral antikoagülasyon düşünülebilir.' } },
    { min: 2, max: 9, tone: 'high',
      riskLabel: { tr: 'Yüksek', az: 'Yüksək', 'tr-CY': 'Yüksek' },
      advice: { tr: 'Oral antikoagülasyon önerilir.', az: 'Oral antikoaqulyasiya tövsiyə olunur.', 'tr-CY': 'Oral antikoagülasyon önerilir.' } },
  ],
  references: ['Lip GYH, et al. Refining clinical risk stratification in AF. Chest. 2010.'],
};
