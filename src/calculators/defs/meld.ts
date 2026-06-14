import type { Calculator, InputValues } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

function meldBase(v: InputValues): number | null {
  const bili = parseFloat(String(v.bili));
  const inr = parseFloat(String(v.inr));
  const cr = parseFloat(String(v.cr));
  if (Number.isNaN(bili) || Number.isNaN(inr) || Number.isNaN(cr)) return null;
  const b = Math.max(bili, 1);
  const i = Math.max(inr, 1);
  const c = Math.min(Math.max(cr, 1), 4);
  return 3.78 * Math.log(b) + 11.2 * Math.log(i) + 9.57 * Math.log(c) + 6.43;
}

/** MELD — son dönem karaciğer hastalığı modeli (3 aylık mortalite / transplant önceliği). */
export const meld: Calculator = {
  id: 'meld',
  category: 'gastro',
  code: 'MELD',
  kind: 'formula',
  name: L('MELD Skoru', 'MELD Balı'),
  subtitle: L('Karaciğer hastalığı şiddeti', 'Qaraciyər xəstəliyi ağırlığı'),
  use: L(
    'Sirozda 3 aylık mortaliteyi tahmin eder ve karaciğer transplant önceliğini belirler.',
    'Sirozda 3 aylıq ölümü qiymətləndirir və qaraciyər transplant prioritetini müəyyən edir.',
  ),
  evidence: L('Kamath ve ark., 2001 (Hepatology). Kreatinin 4 mg/dL ile sınırlanır.', 'Kamath və ark., 2001 (Hepatology). Kreatinin 4 mg/dL ilə məhdudlaşır.'),
  metricLabel: L('3 aylık mortalite', '3 aylıq ölüm'),
  resultUnit: L('puan', 'bal'),
  inputs: [
    { id: 'bili', type: 'number', placeholder: '1.0', min: 0.1, max: 50, step: 0.1, label: L('Bilirubin', 'Bilirubin'), unit: L('mg/dL', 'mg/dL') },
    { id: 'inr', type: 'number', placeholder: '1.0', min: 0.5, max: 15, step: 0.1, label: L('INR', 'INR') },
    { id: 'cr', type: 'number', placeholder: '1.0', min: 0.1, max: 15, step: 0.1, label: L('Kreatinin', 'Kreatinin'), unit: L('mg/dL', 'mg/dL'), hint: L('Diyalizde ise 4 alınır', 'Dializdədirsə 4 götürülür') },
  ],
  formula: (v) => {
    const m = meldBase(v);
    return m == null ? null : Math.round(m);
  },
  bands: [
    { min: 0, max: 9, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('~%1.9', '~1.9%'),
      advice: L('Düşük kısa dönem mortalite riski.', 'Aşağı qısa müddətli ölüm riski.') },
    { min: 10, max: 19, tone: 'mid', riskLabel: L('Orta', 'Orta'), metric: L('~%6', '~6%'),
      advice: L('Orta risk; nakil değerlendirmesi için takip.', 'Orta risk; transplant qiymətləndirməsi üçün izləmə.') },
    { min: 20, max: 200, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('~%20–70', '~20–70%'),
      advice: L('Yüksek mortalite; transplant önceliği yüksek.', 'Yüksək ölüm; transplant prioriteti yüksək.') },
  ],
  references: ['Kamath PS, et al. A model to predict survival in patients with end-stage liver disease. Hepatology. 2001.'],
};

/** MELD-Na — sodyum eklenmiş MELD. */
export const meldNa: Calculator = {
  id: 'meld-na',
  category: 'gastro',
  code: 'MELD-Na',
  kind: 'formula',
  name: L('MELD-Na Skoru', 'MELD-Na Balı'),
  subtitle: L('Sodyum düzeltmeli MELD', 'Natrium düzəlişli MELD'),
  use: L(
    'MELD’e serum sodyumunu ekleyerek sirozda mortalite tahminini iyileştirir (UNOS 2016).',
    'MELD-ə serum natriumunu əlavə edərək sirozda ölüm proqnozunu yaxşılaşdırır (UNOS 2016).',
  ),
  evidence: L('Kim ve ark., 2008 (NEJM); UNOS 2016. Na 125–137 ile sınırlanır.', 'Kim və ark., 2008 (NEJM); UNOS 2016. Na 125–137 ilə məhdudlaşır.'),
  metricLabel: L('Şiddet', 'Ağırlıq'),
  resultUnit: L('puan', 'bal'),
  inputs: [
    { id: 'bili', type: 'number', placeholder: '1.0', min: 0.1, max: 50, step: 0.1, label: L('Bilirubin', 'Bilirubin'), unit: L('mg/dL', 'mg/dL') },
    { id: 'inr', type: 'number', placeholder: '1.0', min: 0.5, max: 15, step: 0.1, label: L('INR', 'INR') },
    { id: 'cr', type: 'number', placeholder: '1.0', min: 0.1, max: 15, step: 0.1, label: L('Kreatinin', 'Kreatinin'), unit: L('mg/dL', 'mg/dL') },
    { id: 'na', type: 'number', placeholder: '137', min: 100, max: 160, step: 1, label: L('Sodyum', 'Natrium'), unit: L('mmol/L', 'mmol/L') },
  ],
  formula: (v) => {
    const base = meldBase(v);
    const na0 = parseFloat(String(v.na));
    if (base == null || Number.isNaN(na0)) return null;
    const meldI = Math.round(base);
    if (meldI <= 11) return meldI;
    const na = Math.min(Math.max(na0, 125), 137);
    const score = meldI + 1.32 * (137 - na) - 0.033 * meldI * (137 - na);
    return Math.min(Math.round(score), 40);
  },
  bands: [
    { min: 0, max: 9, tone: 'low', riskLabel: L('Düşük', 'Aşağı'),
      advice: L('Düşük kısa dönem mortalite riski.', 'Aşağı qısa müddətli ölüm riski.') },
    { min: 10, max: 19, tone: 'mid', riskLabel: L('Orta', 'Orta'),
      advice: L('Orta risk; nakil değerlendirmesi için takip.', 'Orta risk; transplant qiymətləndirməsi üçün izləmə.') },
    { min: 20, max: 200, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('Yüksek mortalite; transplant önceliği yüksek.', 'Yüksək ölüm; transplant prioriteti yüksək.') },
  ],
  references: ['Kim WR, et al. Hyponatremia and mortality among patients on the liver transplant waiting list. NEJM. 2008.'],
};
