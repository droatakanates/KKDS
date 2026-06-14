import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Maddrey Diskriminant Fonksiyonu — alkolik hepatit şiddeti. */
export const maddrey: Calculator = {
  id: 'maddrey',
  category: 'gastro',
  code: 'Maddrey DF',
  kind: 'formula',
  name: L('Maddrey Diskriminant Fonksiyonu', 'Maddrey Diskriminant Funksiyası'),
  subtitle: L('Alkolik hepatit şiddeti', 'Alkoqol hepatiti ağırlığı'),
  use: L(
    'Alkolik hepatitte şiddeti ve kortikosteroid endikasyonunu belirler (DF ≥ 32 ağır).',
    'Alkoqol hepatitində ağırlığı və kortikosteroid göstərişini müəyyən edir (DF ≥ 32 ağır).',
  ),
  evidence: L('Maddrey ve ark., 1978.', 'Maddrey və ark., 1978.'),
  metricLabel: L('Şiddet', 'Ağırlıq'),
  resultUnit: L('DF', 'DF'),
  inputs: [
    { id: 'pt', type: 'number', placeholder: '20', min: 8, max: 60, step: 0.1, label: L('Hasta PT', 'Xəstə PT'), unit: L('saniye', 'saniyə') },
    { id: 'control', type: 'number', placeholder: '12', min: 8, max: 20, step: 0.1, label: L('Kontrol PT', 'Kontrol PT'), unit: L('saniye', 'saniyə') },
    { id: 'bili', type: 'number', placeholder: '5', min: 0.1, max: 60, step: 0.1, label: L('Total bilirubin', 'Ümumi bilirubin'), unit: L('mg/dL', 'mg/dL') },
  ],
  formula: (v) => {
    const pt = parseFloat(String(v.pt));
    const control = parseFloat(String(v.control));
    const bili = parseFloat(String(v.bili));
    if ([pt, control, bili].some(Number.isNaN)) return null;
    return Math.round((4.6 * (pt - control) + bili) * 10) / 10;
  },
  bands: [
    { min: -100, max: 31.999, tone: 'low', riskLabel: L('Hafif-orta', 'Yüngül-orta'),
      advice: L('DF < 32; kortikosteroidden belirgin fayda beklenmez.', 'DF < 32; kortikosteroiddən aydın fayda gözlənilmir.') },
    { min: 32, max: 100000, tone: 'high', riskLabel: L('Ağır', 'Ağır'),
      advice: L('DF ≥ 32; ağır alkolik hepatit, kortikosteroid değerlendirilmeli.', 'DF ≥ 32; ağır alkoqol hepatiti, kortikosteroid qiymətləndirilməlidir.') },
  ],
  references: ['Maddrey WC, et al. Corticosteroid therapy of alcoholic hepatitis. Gastroenterology. 1978.'],
};
