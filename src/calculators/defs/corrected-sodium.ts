import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Hiperglisemide düzeltilmiş sodyum. */
export const correctedSodium: Calculator = {
  id: 'corrected-sodium',
  category: 'neph',
  code: 'Düzeltilmiş Na',
  kind: 'formula',
  name: L('Düzeltilmiş Sodyum', 'Düzəldilmiş Natrium'),
  subtitle: L('Hiperglisemide sodyum', 'Hiperqlikemiyada natrium'),
  use: L(
    'Hiperglisemide ölçülen sodyumu düzelterek gerçek sodyum durumunu gösterir (her 100 mg/dL glukoz için +1.6).',
    'Hiperqlikemiyada ölçülən natriumu düzəldib həqiqi natrium vəziyyətini göstərir (hər 100 mg/dL qlükoza üçün +1.6).',
  ),
  evidence: L('Katz, 1973 (faktör 1.6). Hillier 2.4 faktörünü önerir.', 'Katz, 1973 (faktor 1.6). Hillier 2.4 faktorunu təklif edir.'),
  metricLabel: L('Yorum', 'Şərh'),
  resultUnit: L('mmol/L', 'mmol/L'),
  inputs: [
    { id: 'na', type: 'number', placeholder: '130', min: 100, max: 180, step: 1, label: L('Ölçülen sodyum', 'Ölçülən natrium'), unit: L('mmol/L', 'mmol/L') },
    { id: 'glucose', type: 'number', placeholder: '400', min: 50, max: 1500, step: 1, label: L('Glukoz', 'Qlükoza'), unit: L('mg/dL', 'mg/dL') },
  ],
  formula: (v) => {
    const na = parseFloat(String(v.na));
    const glu = parseFloat(String(v.glucose));
    if ([na, glu].some(Number.isNaN)) return null;
    return Math.round((na + 0.016 * (glu - 100)) * 10) / 10;
  },
  bands: [
    { min: -100, max: 134.999, tone: 'mid', riskLabel: L('Hiponatremi', 'Hiponatremiya'),
      advice: L('Düzeltilmiş Na < 135; gerçek hiponatremi mevcut.', 'Düzəldilmiş Na < 135; həqiqi hiponatremiya var.') },
    { min: 135, max: 145, tone: 'low', riskLabel: L('Normal', 'Normal'),
      advice: L('Düzeltilmiş sodyum normal aralıkta.', 'Düzəldilmiş natrium normal aralıqda.') },
    { min: 145.001, max: 100000, tone: 'high', riskLabel: L('Hipernatremi', 'Hipernatremiya'),
      advice: L('Düzeltilmiş Na > 145; hipernatremi mevcut.', 'Düzəldilmiş Na > 145; hipernatremiya var.') },
  ],
  references: ['Katz MA. Hyperglycemia-induced hyponatremia. NEJM. 1973.'],
};
