import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Mayo Endoskopik Alt Skoru (MES). */
export const ucMes: Calculator = {
  id: 'uc-mes',
  category: 'gastro',
  code: 'MES',
  kind: 'additive',
  max: 3,
  name: L('Mayo Endoskopik Alt Skoru', 'Mayo Endoskopik Alt Balı'),
  subtitle: L('ÜK endoskopik aktivite', 'XK endoskopik aktivlik'),
  use: L('Ülseratif kolitte mukozanın endoskopik görünümünü 0–3 olarak derecelendirir.', 'Xoralı kolitdə selikli qişanın endoskopik görünüşünü 0–3 kimi dərəcələndirir.'),
  evidence: L('Schroeder ve ark., 1987. MES ≤1 mukozal iyileşme kabul edilir.', 'Schroeder və ark., 1987. MES ≤1 selikli qişa sağalması sayılır.'),
  metricLabel: L('Endoskopik derece', 'Endoskopik dərəcə'),
  inputs: [
    { id: 'mes', type: 'single', default: 0, label: L('Endoskopik görünüm', 'Endoskopik görünüş'), options: [
      { value: 0, points: 0, label: L('0 — normal / inaktif', '0 — normal / qeyri-aktiv') },
      { value: 1, points: 1, label: L('1 — hafif (eritem, vasküler patern azalması)', '1 — yüngül (eritem, damar şəbəkəsi azalması)') },
      { value: 2, points: 2, label: L('2 — orta (belirgin eritem, frajilite, erozyon)', '2 — orta (aşkar eritem, frajillik, eroziya)') },
      { value: 3, points: 3, label: L('3 — şiddetli (spontan kanama, ülserasyon)', '3 — şiddətli (spontan qanaxma, xoralaşma)') } ] },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Normal', 'Normal'), advice: L('MES 0; endoskopik remisyon.', 'MES 0; endoskopik remissiya.') },
    { min: 1, max: 1, tone: 'low', riskLabel: L('Hafif', 'Yüngül'), advice: L('MES 1; mukozal iyileşme sınırında.', 'MES 1; selikli qişa sağalması həddində.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('MES 2; aktif inflamasyon.', 'MES 2; aktiv iltihab.') },
    { min: 3, max: 3, tone: 'high', riskLabel: L('Şiddetli', 'Şiddətli'), advice: L('MES 3; şiddetli aktif inflamasyon.', 'MES 3; şiddətli aktiv iltihab.') },
  ],
  references: ['Schroeder KW, et al. NEJM. 1987.'],
};
