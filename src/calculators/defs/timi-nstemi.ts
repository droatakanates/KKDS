import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** TIMI risk skoru — UA/NSTEMI. */
export const timiNstemi: Calculator = {
  id: 'timi-nstemi',
  category: 'cardio',
  code: 'TIMI (NSTEMI)',
  kind: 'additive',
  max: 7,
  name: L('TIMI Risk Skoru (UA/NSTEMI)', 'TIMI Risk Balı (UA/NSTEMI)'),
  subtitle: L('Kararsız angina / NSTEMI', 'Qeyri-sabit angina / NSTEMI'),
  use: L('Kararsız angina / NSTEMI’de 14 günlük ölüm, MI ve acil revaskülarizasyon riskini öngörür.', 'Qeyri-sabit angina / NSTEMI-də 14 günlük ölüm, Mİ və təcili revaskulyarizasiya riskini proqnozlaşdırır.'),
  evidence: L('Antman ve ark., 2000 (JAMA).', 'Antman və ark., 2000 (JAMA).'),
  metricLabel: L('14 günlük risk', '14 günlük risk'),
  inputs: [
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş ≥ 65', 'Yaş ≥ 65') },
    { id: 'riskfactors', type: 'boolean', points: 1, label: L('≥3 KAH risk faktörü', '≥3 ÜAX risk amili') },
    { id: 'cad', type: 'boolean', points: 1, label: L('Bilinen KAH (≥%50 stenoz)', 'Məlum ÜAX (≥50% stenoz)') },
    { id: 'asa', type: 'boolean', points: 1, label: L('Son 7 günde aspirin', 'Son 7 gündə aspirin') },
    { id: 'angina', type: 'boolean', points: 1, label: L('Son 24 saatte ≥2 angina atağı', 'Son 24 saatda ≥2 angina tutması') },
    { id: 'st', type: 'boolean', points: 1, label: L('ST deviasyonu ≥ 0.5 mm', 'ST deviasiyası ≥ 0.5 mm') },
    { id: 'marker', type: 'boolean', points: 1, label: L('Pozitif kardiyak belirteç', 'Müsbət kardiak marker') },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('~%5', '~5%'), advice: L('Düşük risk.', 'Aşağı risk.') },
    { min: 2, max: 3, tone: 'mid', riskLabel: L('Orta', 'Orta'), metric: L('~%8–13', '~8–13%'), advice: L('Orta risk; yakın izlem.', 'Orta risk; yaxın izləmə.') },
    { min: 4, max: 7, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('~%20–41', '~20–41%'), advice: L('Yüksek risk; erken invaziv strateji düşün.', 'Yüksək risk; erkən invaziv strategiya düşün.') },
  ],
  references: ['Antman EM, et al. The TIMI risk score for unstable angina/NSTEMI. JAMA. 2000.'],
};
