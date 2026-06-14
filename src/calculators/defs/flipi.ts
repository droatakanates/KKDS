import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** FLIPI — foliküler lenfoma prognostik indeksi. */
export const flipi: Calculator = {
  id: 'flipi',
  category: 'heme',
  code: 'FLIPI',
  kind: 'additive',
  max: 5,
  name: L('FLIPI', 'FLIPI'),
  subtitle: L('Foliküler lenfoma prognozu', 'Follikulyar limfoma proqnozu'),
  use: L('Foliküler lenfomada genel sağkalımı beş faktörle öngörür.', 'Follikulyar limfomada ümumi sağqalmanı beş amillə proqnozlaşdırır.'),
  evidence: L('Solal-Céligny ve ark., 2004 (Blood).', 'Solal-Céligny və ark., 2004 (Blood).'),
  metricLabel: L('Risk grubu', 'Risk qrupu'),
  inputs: [
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş ≥ 60', 'Yaş ≥ 60') },
    { id: 'stage', type: 'boolean', points: 1, label: L('Evre III–IV', 'Mərhələ III–IV') },
    { id: 'hb', type: 'boolean', points: 1, label: L('Hemoglobin < 12 g/dL', 'Hemoglobin < 12 q/dL') },
    { id: 'ldh', type: 'boolean', points: 1, label: L('LDH > normal', 'LDH > normal') },
    { id: 'nodal', type: 'boolean', points: 1, label: L('> 4 nodal alan', '> 4 nodal sahə') },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0–1; düşük risk.', '0–1; aşağı risk.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('2; orta risk.', '2; orta risk.') },
    { min: 3, max: 5, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥ 3; yüksek risk.', '≥ 3; yüksək risk.') },
  ],
  references: ['Solal-Céligny P, et al. Follicular Lymphoma International Prognostic Index. Blood. 2004.'],
};
