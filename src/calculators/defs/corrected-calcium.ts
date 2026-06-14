import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Albümine göre düzeltilmiş kalsiyum. */
export const correctedCalcium: Calculator = {
  id: 'corrected-calcium',
  category: 'neph',
  code: 'Düzeltilmiş Ca',
  kind: 'formula',
  name: L('Düzeltilmiş Kalsiyum', 'Düzəldilmiş Kalsium'),
  subtitle: L('Albümine göre kalsiyum', 'Albuminə görə kalsium'),
  use: L(
    'Hipoalbüminemide gerçek kalsiyum durumunu tahmin eder (Ca + 0.8 × [4 − albümin]).',
    'Hipoalbuminemiyada həqiqi kalsium vəziyyətini qiymətləndirir (Ca + 0.8 × [4 − albumin]).',
  ),
  evidence: L('Payne ve ark., 1973 (BMJ).', 'Payne və ark., 1973 (BMJ).'),
  metricLabel: L('Yorum', 'Şərh'),
  resultUnit: L('mg/dL', 'mg/dL'),
  inputs: [
    { id: 'ca', type: 'number', placeholder: '9.0', min: 4, max: 16, step: 0.1, label: L('Ölçülen kalsiyum', 'Ölçülən kalsium'), unit: L('mg/dL', 'mg/dL') },
    { id: 'alb', type: 'number', placeholder: '4.0', min: 1, max: 6, step: 0.1, label: L('Albümin', 'Albumin'), unit: L('g/dL', 'q/dL') },
  ],
  formula: (v) => {
    const ca = parseFloat(String(v.ca));
    const alb = parseFloat(String(v.alb));
    if ([ca, alb].some(Number.isNaN)) return null;
    return Math.round((ca + 0.8 * (4 - alb)) * 10) / 10;
  },
  bands: [
    { min: -100, max: 8.499, tone: 'mid', riskLabel: L('Hipokalsemi', 'Hipokalsemiya'),
      advice: L('< 8.5 mg/dL; hipokalsemi açısından değerlendir.', '< 8.5 mg/dL; hipokalsemiya baxımından qiymətləndir.') },
    { min: 8.5, max: 10.5, tone: 'low', riskLabel: L('Normal', 'Normal'),
      advice: L('Düzeltilmiş kalsiyum normal aralıkta.', 'Düzəldilmiş kalsium normal aralıqda.') },
    { min: 10.501, max: 100000, tone: 'high', riskLabel: L('Hiperkalsemi', 'Hiperkalsemiya'),
      advice: L('> 10.5 mg/dL; hiperkalsemi nedenlerini araştır.', '> 10.5 mg/dL; hiperkalsemiya səbəblərini araşdır.') },
  ],
  references: ['Payne RB, et al. Interpretation of serum calcium in patients with abnormal serum proteins. BMJ. 1973.'],
};
