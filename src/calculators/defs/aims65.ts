import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** AIMS65 — üst GİS kanama mortalite riski. */
export const aims65: Calculator = {
  id: 'aims65',
  category: 'gastro',
  code: 'AIMS65',
  kind: 'additive',
  max: 5,
  name: L('AIMS65 Skoru', 'AIMS65 Balı'),
  subtitle: L('Üst GİS kanama mortalitesi', 'Üst MBT qanaxma ölümü'),
  use: L(
    'Üst gastrointestinal kanamada hastane içi mortalite riskini beş kolay parametreyle öngörür.',
    'Üst qastrointestinal qanaxmada xəstəxanadaxili ölüm riskini beş asan parametrlə proqnozlaşdırır.',
  ),
  evidence: L('Saltzman ve ark., 2011 (Gastrointest Endosc).', 'Saltzman və ark., 2011 (Gastrointest Endosc).'),
  metricLabel: L('Mortalite riski', 'Ölüm riski'),
  inputs: [
    { id: 'alb', type: 'boolean', points: 1, label: L('Albümin < 3.0 g/dL', 'Albumin < 3.0 q/dL') },
    { id: 'inr', type: 'boolean', points: 1, label: L('INR > 1.5', 'INR > 1.5') },
    { id: 'mental', type: 'boolean', points: 1, label: L('Bilinç değişikliği', 'Şüur dəyişikliyi') },
    { id: 'sbp', type: 'boolean', points: 1, label: L('SKB ≤ 90 mmHg', 'SAT ≤ 90 mmHg') },
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş > 65', 'Yaş > 65') },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Düşük', 'Aşağı'),
      advice: L('Düşük mortalite riski; standart yönetim.', 'Aşağı ölüm riski; standart idarəetmə.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'),
      advice: L('Orta risk; yakın izlem, erken endoskopi.', 'Orta risk; yaxın izləmə, erkən endoskopiya.') },
    { min: 3, max: 5, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('Yüksek mortalite; yoğun bakım / acil endoskopi değerlendir.', 'Yüksək ölüm; reanimasiya / təcili endoskopiya qiymətləndir.') },
  ],
  references: ['Saltzman JR, et al. A simple risk score accurately predicts mortality in UGIB (AIMS65). Gastrointest Endosc. 2011.'],
};
