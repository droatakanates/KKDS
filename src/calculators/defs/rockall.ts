import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Rockall (klinik / endoskopi öncesi) — üst GİS kanama riski. */
export const rockall: Calculator = {
  id: 'rockall',
  category: 'gastro',
  code: 'Rockall',
  kind: 'additive',
  max: 7,
  name: L('Rockall Skoru (klinik)', 'Rockall Balı (klinik)'),
  subtitle: L('Üst GİS kanama riski', 'Üst MBT qanaxma riski'),
  use: L(
    'Endoskopi öncesi üst GİS kanamada rekürrens ve mortalite riskini yaş, şok ve komorbiditeyle değerlendirir.',
    'Endoskopiya öncəsi üst MBT qanaxmada residiv və ölüm riskini yaş, şok və komorbidlə qiymətləndirir.',
  ),
  evidence: L('Rockall ve ark., 1996 (Gut). Tam skor endoskopi bulgularını da içerir.', 'Rockall və ark., 1996 (Gut). Tam bal endoskopiya tapıntılarını da əhatə edir.'),
  metricLabel: L('Risk', 'Risk'),
  inputs: [
    { id: 'age', type: 'single', default: 0, label: L('Yaş', 'Yaş'), options: [
      { value: 0, points: 0, label: L('< 60', '< 60') }, { value: 1, points: 1, label: L('60–79', '60–79') }, { value: 2, points: 2, label: L('≥ 80', '≥ 80') } ] },
    { id: 'shock', type: 'single', default: 0, label: L('Şok', 'Şok'), options: [
      { value: 0, points: 0, label: L('Yok (NKB≥100, KH<100)', 'Yox (SAT≥100, ÜD<100)') },
      { value: 1, points: 1, label: L('Taşikardi (KH≥100)', 'Taxikardiya (ÜD≥100)') },
      { value: 2, points: 2, label: L('Hipotansiyon (SKB<100)', 'Hipotoniya (SAT<100)') } ] },
    { id: 'comorbid', type: 'single', default: 0, label: L('Komorbidite', 'Komorbidlik'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') },
      { value: 2, points: 2, label: L('KKY / İKH / majör', 'KÜÇ / İÜX / böyük') },
      { value: 3, points: 3, label: L('Böbrek/karaciğer yetm., metastaz', 'Böyrək/qaraciyər çat., metastaz') } ] },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Düşük', 'Aşağı'),
      advice: L('Düşük risk; erken taburculuk düşünülebilir.', 'Aşağı risk; erkən evə buraxılma düşünülə bilər.') },
    { min: 2, max: 4, tone: 'mid', riskLabel: L('Orta', 'Orta'),
      advice: L('Orta risk; endoskopi ve izlem.', 'Orta risk; endoskopiya və izləmə.') },
    { min: 5, max: 7, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('Yüksek risk; yakın izlem, acil endoskopi.', 'Yüksək risk; yaxın izləmə, təcili endoskopiya.') },
  ],
  references: ['Rockall TA, et al. Risk assessment after acute upper gastrointestinal haemorrhage. Gut. 1996.'],
};
