import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** BISAP — akut pankreatit mortalite riski. */
export const bisap: Calculator = {
  id: 'bisap',
  category: 'gastro',
  code: 'BISAP',
  kind: 'additive',
  max: 5,
  name: L('BISAP Skoru', 'BISAP Balı'),
  subtitle: L('Akut pankreatit şiddeti', 'Kəskin pankreatit ağırlığı'),
  use: L(
    'Akut pankreatitte ilk 24 saatte mortalite riskini beş kolay parametreyle öngörür.',
    'Kəskin pankreatitdə ilk 24 saatda ölüm riskini beş asan parametrlə proqnozlaşdırır.',
  ),
  evidence: L('Wu ve ark., 2008 (Gut).', 'Wu və ark., 2008 (Gut).'),
  metricLabel: L('Mortalite riski', 'Ölüm riski'),
  inputs: [
    { id: 'bun', type: 'boolean', points: 1, label: L('BUN > 25 mg/dL', 'BUN > 25 mg/dL') },
    { id: 'mental', type: 'boolean', points: 1, label: L('Bilinç bozukluğu', 'Şüur pozğunluğu') },
    { id: 'sirs', type: 'boolean', points: 1, label: L('SIRS mevcut', 'SIRS mövcud') },
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş > 60', 'Yaş > 60') },
    { id: 'effusion', type: 'boolean', points: 1, label: L('Plevral efüzyon', 'Plevral efüzyon') },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('< %2', '< 2%'),
      advice: L('Düşük mortalite riski; standart takip.', 'Aşağı ölüm riski; standart izləmə.') },
    { min: 3, max: 5, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('%15–%22', '15%–22%'),
      advice: L('Yüksek risk; yoğun bakım / yakın izlem değerlendir.', 'Yüksək risk; reanimasiya / yaxın izləmə qiymətləndir.') },
  ],
  references: ['Wu BU, et al. The early prediction of mortality in acute pancreatitis (BISAP). Gut. 2008.'],
};
