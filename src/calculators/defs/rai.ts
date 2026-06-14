import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Rai sınıflaması — kronik lenfositik lösemi (KLL). */
export const rai: Calculator = {
  id: 'rai',
  category: 'heme',
  code: 'Rai',
  kind: 'additive',
  max: 4,
  name: L('Rai Sınıflaması (KLL)', 'Rai Təsnifatı (XLL)'),
  subtitle: L('KLL evrelemesi', 'XLL mərhələləməsi'),
  use: L('KLL’de en yüksek klinik bulguya göre evre (0–IV) ve risk grubunu belirler.', 'XLL-də ən yüksək klinik tapıntıya görə mərhələ (0–IV) və risk qrupunu müəyyən edir.'),
  evidence: L('Rai ve ark., 1975 (Blood).', 'Rai və ark., 1975 (Blood).'),
  metricLabel: L('Risk grubu', 'Risk qrupu'),
  inputs: [
    { id: 'stage', type: 'single', default: 0, label: L('En yüksek bulgu', 'Ən yüksək tapıntı'), options: [
      { value: 0, points: 0, label: L('0 — yalnız lenfositoz', '0 — yalnız limfositoz') },
      { value: 1, points: 1, label: L('I — lenfadenopati', 'I — limfadenopatiya') },
      { value: 2, points: 2, label: L('II — splenomegali/hepatomegali', 'II — splenomeqali/hepatomeqali') },
      { value: 3, points: 3, label: L('III — anemi (Hb <11)', 'III — anemiya (Hb <11)') },
      { value: 4, points: 4, label: L('IV — trombositopeni (<100)', 'IV — trombositopeniya (<100)') } ] },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Düşük risk', 'Aşağı risk'), advice: L('Evre 0; düşük risk, izlem.', 'Mərhələ 0; aşağı risk, izləmə.') },
    { min: 1, max: 2, tone: 'mid', riskLabel: L('Orta risk', 'Orta risk'), advice: L('Evre I–II; orta risk.', 'Mərhələ I–II; orta risk.') },
    { min: 3, max: 4, tone: 'high', riskLabel: L('Yüksek risk', 'Yüksək risk'), advice: L('Evre III–IV; yüksek risk, tedavi sıklıkla endike.', 'Mərhələ III–IV; yüksək risk, müalicə çox vaxt göstərişlidir.') },
  ],
  references: ['Rai KR, et al. Clinical staging of chronic lymphocytic leukemia. Blood. 1975.'],
};
