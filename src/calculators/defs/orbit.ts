import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** ORBIT — AF'de antikoagülasyon kanama riski. */
export const orbit: Calculator = {
  id: 'orbit',
  category: 'cardio',
  code: 'ORBIT',
  kind: 'additive',
  max: 7,
  name: L('ORBIT Kanama Skoru', 'ORBIT Qanaxma Balı'),
  subtitle: L('AF’de kanama riski', 'AF-də qanaxma riski'),
  use: L('Atriyal fibrilasyonda oral antikoagülan altında majör kanama riskini öngörür.', 'Atriyal fibrilyasyonda oral antikoaqulyant altında böyük qanaxma riskini proqnozlaşdırır.'),
  evidence: L('O’Brien ve ark., 2015 (Eur Heart J).', 'O’Brien və ark., 2015 (Eur Heart J).'),
  metricLabel: L('Kanama riski', 'Qanaxma riski'),
  inputs: [
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş > 74', 'Yaş > 74') },
    { id: 'anemia', type: 'boolean', points: 2, label: L('Anemi / düşük Hb-Hct', 'Anemiya / aşağı Hb-Hct'), hint: L('Hb <13 (E) / <12 (K) veya Hct <40/<36', 'Hb <13 (K) / <12 (Q) və ya Hct <40/<36') },
    { id: 'bleeding', type: 'boolean', points: 2, label: L('Kanama öyküsü', 'Qanaxma anamnezi') },
    { id: 'egfr', type: 'boolean', points: 1, label: L('eGFR < 60 mL/dk', 'eGFR < 60 mL/dəq') },
    { id: 'antiplatelet', type: 'boolean', points: 1, label: L('Antiplatelet tedavi', 'Antiaqreqant müalicə') },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('Düşük kanama riski.', 'Aşağı qanaxma riski.') },
    { min: 3, max: 3, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('Orta risk; düzeltilebilir faktörleri gözden geçir.', 'Orta risk; düzəldilə bilən amilləri nəzərdən keçir.') },
    { min: 4, max: 7, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('Yüksek kanama riski; yakın izlem.', 'Yüksək qanaxma riski; yaxın izləmə.') },
  ],
  references: ['O’Brien EC, et al. The ORBIT bleeding score. Eur Heart J. 2015.'],
};
