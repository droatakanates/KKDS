import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Ranson kriterleri — akut pankreatit şiddeti (safra taşı dışı). */
export const ranson: Calculator = {
  id: 'ranson',
  category: 'gastro',
  code: 'Ranson',
  kind: 'additive',
  max: 11,
  name: L('Ranson Kriterleri', 'Ranson Meyarları'),
  subtitle: L('Akut pankreatit şiddeti', 'Kəskin pankreatit ağırlığı'),
  use: L(
    'Akut pankreatitte başvuru ve 48. saat parametreleriyle mortalite riskini öngörür (safra taşı dışı eşikler).',
    'Kəskin pankreatitdə müraciət və 48-ci saat parametrləri ilə ölüm riskini proqnozlaşdırır (öd daşı xarici həddlər).',
  ),
  evidence: L('Ranson ve ark., 1974. 48 saat sonra tamamlanır.', 'Ranson və ark., 1974. 48 saatdan sonra tamamlanır.'),
  metricLabel: L('Mortalite riski', 'Ölüm riski'),
  inputs: [
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş > 55', 'Yaş > 55'), hint: L('Başvuru', 'Müraciət') },
    { id: 'wbc', type: 'boolean', points: 1, label: L('Lökosit > 16.000', 'Lökosit > 16.000'), hint: L('Başvuru', 'Müraciət') },
    { id: 'glucose', type: 'boolean', points: 1, label: L('Glukoz > 200 mg/dL', 'Qlükoza > 200 mg/dL'), hint: L('Başvuru', 'Müraciət') },
    { id: 'ldh', type: 'boolean', points: 1, label: L('LDH > 350 IU/L', 'LDH > 350 IU/L'), hint: L('Başvuru', 'Müraciət') },
    { id: 'ast', type: 'boolean', points: 1, label: L('AST > 250 IU/L', 'AST > 250 IU/L'), hint: L('Başvuru', 'Müraciət') },
    { id: 'hct', type: 'boolean', points: 1, label: L('Hematokrit düşüşü > %10', 'Hematokrit düşməsi > 10%'), hint: L('48. saat', '48-ci saat') },
    { id: 'bun', type: 'boolean', points: 1, label: L('BUN artışı > 5 mg/dL', 'BUN artımı > 5 mg/dL'), hint: L('48. saat', '48-ci saat') },
    { id: 'ca', type: 'boolean', points: 1, label: L('Kalsiyum < 8 mg/dL', 'Kalsium < 8 mg/dL'), hint: L('48. saat', '48-ci saat') },
    { id: 'pao2', type: 'boolean', points: 1, label: L('PaO₂ < 60 mmHg', 'PaO₂ < 60 mmHg'), hint: L('48. saat', '48-ci saat') },
    { id: 'base', type: 'boolean', points: 1, label: L('Baz açığı > 4 mEq/L', 'Baza defisiti > 4 mEq/L'), hint: L('48. saat', '48-ci saat') },
    { id: 'fluid', type: 'boolean', points: 1, label: L('Sıvı sekestrasyonu > 6 L', 'Maye sekvestrasiyası > 6 L'), hint: L('48. saat', '48-ci saat') },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('~%2', '~2%'),
      advice: L('Hafif pankreatit; düşük mortalite.', 'Yüngül pankreatit; aşağı ölüm.') },
    { min: 3, max: 4, tone: 'mid', riskLabel: L('Orta', 'Orta'), metric: L('~%15', '~15%'),
      advice: L('Orta şiddet; yakın izlem.', 'Orta ağırlıq; yaxın izləmə.') },
    { min: 5, max: 11, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('~%40–100', '~40–100%'),
      advice: L('Ağır pankreatit; yoğun bakım değerlendir.', 'Ağır pankreatit; reanimasiya qiymətləndir.') },
  ],
  references: ['Ranson JH, et al. Prognostic signs and the role of operative management in acute pancreatitis. Surg Gynecol Obstet. 1974.'],
};
