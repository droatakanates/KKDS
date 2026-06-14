import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** CHADS₂ — AF'de inme riski (eski/basit skor). */
export const chads2: Calculator = {
  id: 'chads2',
  category: 'cardio',
  code: 'CHADS₂',
  kind: 'additive',
  max: 6,
  name: L('CHADS₂ Skoru', 'CHADS₂ Balı'),
  subtitle: L('AF’de inme riski', 'AF-də insult riski'),
  use: L(
    'Non-valvüler atriyal fibrilasyonda inme riskini tahmin eder (CHA₂DS₂-VASc öncülü).',
    'Qeyri-valvulyar atriyal fibrilyasyonda insult riskini qiymətləndirir (CHA₂DS₂-VASc-dan əvvəlki).',
  ),
  evidence: L('Gage ve ark., 2001 (JAMA).', 'Gage və ark., 2001 (JAMA).'),
  metricLabel: L('Yıllık inme riski', 'İllik insult riski'),
  metricByScore: {
    0: L('%1.9 / yıl', '1.9% / il'),
    1: L('%2.8 / yıl', '2.8% / il'),
    2: L('%4.0 / yıl', '4.0% / il'),
    3: L('%5.9 / yıl', '5.9% / il'),
    4: L('%8.5 / yıl', '8.5% / il'),
    5: L('%12.5 / yıl', '12.5% / il'),
    6: L('%18.2 / yıl', '18.2% / il'),
  },
  inputs: [
    { id: 'chf', type: 'boolean', points: 1, label: L('Konjestif kalp yetmezliği', 'Konqestiv ürək çatışmazlığı') },
    { id: 'htn', type: 'boolean', points: 1, label: L('Hipertansiyon', 'Hipertoniya') },
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş ≥ 75', 'Yaş ≥ 75') },
    { id: 'dm', type: 'boolean', points: 1, label: L('Diabetes mellitus', 'Şəkərli diabet') },
    { id: 'stroke', type: 'boolean', points: 2, label: L('İnme / TİA öyküsü', 'İnsult / KTH anamnezi') },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Düşük', 'Aşağı'),
      advice: L('Düşük risk; antikoagülasyon genellikle gerekmez.', 'Aşağı risk; antikoaqulyasiya adətən lazım deyil.') },
    { min: 1, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'),
      advice: L('Orta risk; antikoagülasyon düşünülmeli.', 'Orta risk; antikoaqulyasiya düşünülməlidir.') },
    { min: 3, max: 6, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('Yüksek risk; oral antikoagülasyon önerilir.', 'Yüksək risk; oral antikoaqulyasiya tövsiyə olunur.') },
  ],
  references: ['Gage BF, et al. Validation of clinical classification schemes (CHADS₂). JAMA. 2001.'],
};
