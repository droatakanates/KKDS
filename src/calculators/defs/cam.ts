import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** CAM — deliryum tanısı (Confusion Assessment Method). */
export const cam: Calculator = {
  id: 'cam',
  category: 'general',
  code: 'CAM',
  kind: 'formula',
  name: L('CAM (Deliryum)', 'CAM (Delirium)'),
  subtitle: L('Deliryum tanı algoritması', 'Delirium diaqnoz alqoritmi'),
  use: L('Deliryumu dört özellikle değerlendirir: (1 VE 2) VE (3 VEYA 4) karşılanırsa CAM pozitif.', 'Deliriumu dörd xüsusiyyətlə qiymətləndirir: (1 VƏ 2) VƏ (3 VƏ YA 4) qarşılanırsa CAM müsbət.'),
  evidence: L('Inouye ve ark., 1990 (Ann Intern Med).', 'Inouye və ark., 1990 (Ann Intern Med).'),
  metricLabel: L('Sonuç', 'Nəticə'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'acute', type: 'boolean', points: 1, label: L('1) Akut başlangıç ve dalgalı seyir', '1) Kəskin başlanğıc və dalğalı gediş') },
    { id: 'inattention', type: 'boolean', points: 1, label: L('2) Dikkat bozukluğu', '2) Diqqət pozğunluğu') },
    { id: 'disorganized', type: 'boolean', points: 1, label: L('3) Dağınık düşünce', '3) Dağınıq düşüncə') },
    { id: 'consciousness', type: 'boolean', points: 1, label: L('4) Bilinç düzeyi değişikliği', '4) Şüur səviyyəsi dəyişikliyi') },
  ],
  formula: (v) => {
    const positive = v.acute === true && v.inattention === true && (v.disorganized === true || v.consciousness === true);
    return positive ? 1 : 0;
  },
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('CAM negatif', 'CAM mənfi'), metric: L('Kriter karşılanmadı', 'Meyar qarşılanmadı'), advice: L('Deliryum kriterleri karşılanmadı; klinik izlem.', 'Delirium meyarları qarşılanmadı; klinik izləmə.') },
    { min: 1, max: 1, tone: 'high', riskLabel: L('CAM pozitif', 'CAM müsbət'), metric: L('Deliryum lehine', 'Delirium xeyrinə'), advice: L('Kriterler karşılandı; deliryum olası. Tetikleyici nedeni araştır.', 'Meyarlar qarşılandı; delirium ehtimallı. Tetikləyici səbəbi araşdır.') },
  ],
  references: ['Inouye SK, et al. Clarifying confusion: the Confusion Assessment Method. Ann Intern Med. 1990.'],
};
