import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** IPI — agresif (diffüz büyük B hücreli) lenfoma prognozu. */
export const ipi: Calculator = {
  id: 'ipi',
  category: 'heme',
  code: 'IPI',
  kind: 'additive',
  max: 5,
  name: L('Uluslararası Prognostik İndeks (IPI)', 'Beynəlxalq Proqnostik İndeks (IPI)'),
  subtitle: L('Agresif lenfoma prognozu', 'Aqressiv limfoma proqnozu'),
  use: L('Diffüz büyük B hücreli lenfomada genel sağkalımı beş klinik faktörle öngörür.', 'Diffuz böyük B hüceyrəli limfomada ümumi sağqalmanı beş klinik amillə proqnozlaşdırır.'),
  evidence: L('IPI Project, 1993 (NEJM).', 'IPI Project, 1993 (NEJM).'),
  metricLabel: L('Risk grubu', 'Risk qrupu'),
  inputs: [
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş > 60', 'Yaş > 60') },
    { id: 'stage', type: 'boolean', points: 1, label: L('Evre III–IV (Ann Arbor)', 'Mərhələ III–IV (Ann Arbor)') },
    { id: 'ecog', type: 'boolean', points: 1, label: L('ECOG ≥ 2', 'ECOG ≥ 2') },
    { id: 'ldh', type: 'boolean', points: 1, label: L('LDH > normal', 'LDH > normal') },
    { id: 'extranodal', type: 'boolean', points: 1, label: L('Ekstranodal tutulum > 1 bölge', 'Ekstranodal tutulma > 1 sahə') },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0–1; düşük risk, en iyi prognoz.', '0–1; aşağı risk, ən yaxşı proqnoz.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Düşük-orta', 'Aşağı-orta'), advice: L('2; düşük-orta risk.', '2; aşağı-orta risk.') },
    { min: 3, max: 3, tone: 'mid', riskLabel: L('Yüksek-orta', 'Yüksək-orta'), advice: L('3; yüksek-orta risk.', '3; yüksək-orta risk.') },
    { min: 4, max: 5, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('4–5; yüksek risk, en kötü prognoz.', '4–5; yüksək risk, ən pis proqnoz.') },
  ],
  references: ['The International Non-Hodgkin’s Lymphoma Prognostic Factors Project. NEJM. 1993.'],
};
