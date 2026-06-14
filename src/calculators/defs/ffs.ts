import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Five-Factor Score (FFS, 2009) — nekrotizan vaskülit prognozu. */
export const ffs: Calculator = {
  id: 'ffs',
  category: 'rheum',
  code: 'FFS',
  kind: 'additive',
  max: 5,
  name: L('Beş Faktör Skoru (FFS)', 'Beş Amil Balı (FFS)'),
  subtitle: L('Nekrotizan vaskülit prognozu', 'Nekrotizan vaskulit proqnozu'),
  use: L('Nekrotizan vaskülitlerde (PAN, EGPA, MPA, GPA) 5 yıllık mortalite riskini öngörür.', 'Nekrotizan vaskulitlərdə (PAN, EGPA, MPA, GPA) 5 illik ölüm riskini proqnozlaşdırır.'),
  evidence: L('Guillevin ve ark., 2011 (revize FFS, Medicine).', 'Guillevin və ark., 2011 (yenilənmiş FFS, Medicine).'),
  metricLabel: L('Mortalite riski', 'Ölüm riski'),
  inputs: [
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş > 65', 'Yaş > 65') },
    { id: 'cardiac', type: 'boolean', points: 1, label: L('Kardiyak tutulum', 'Kardiak tutulma') },
    { id: 'gi', type: 'boolean', points: 1, label: L('Gastrointestinal tutulum', 'Qastrointestinal tutulma') },
    { id: 'renal', type: 'boolean', points: 1, label: L('Böbrek yetmezliği (Kr ≥ 1.7 mg/dL)', 'Böyrək çatışmazlığı (Kr ≥ 1.7 mg/dL)') },
    { id: 'ent', type: 'boolean', points: 1, label: L('KBB belirtisi YOK', 'QBB əlaməti YOX') },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('5 yıl mortalite ~%9', '5 il ölüm ~9%'), advice: L('FFS = 0; en iyi prognoz.', 'FFS = 0; ən yaxşı proqnoz.') },
    { min: 1, max: 1, tone: 'mid', riskLabel: L('Orta', 'Orta'), metric: L('~%21', '~21%'), advice: L('FFS = 1; orta risk.', 'FFS = 1; orta risk.') },
    { min: 2, max: 5, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('~%40', '~40%'), advice: L('FFS ≥ 2; yüksek mortalite; agresif tedavi.', 'FFS ≥ 2; yüksək ölüm; aqressiv müalicə.') },
  ],
  references: ['Guillevin L, et al. The Five-Factor Score revisited. Medicine. 2011.'],
};
