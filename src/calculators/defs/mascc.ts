import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** MASCC — febril nötropenide düşük risk taraması. */
export const mascc: Calculator = {
  id: 'mascc',
  category: 'heme',
  code: 'MASCC',
  kind: 'additive',
  max: 26,
  name: L('MASCC Skoru', 'MASCC Balı'),
  subtitle: L('Febril nötropeni riski', 'Febril neytropeniya riski'),
  use: L('Febril nötropenide ciddi komplikasyon riski düşük hastaları belirler (≥21 düşük risk).', 'Febril neytropeniyada ciddi ağırlaşma riski aşağı xəstələri müəyyən edir (≥21 aşağı risk).'),
  evidence: L('Klastersky ve ark., 2000 (J Clin Oncol).', 'Klastersky və ark., 2000 (J Clin Oncol).'),
  metricLabel: L('Risk', 'Risk'),
  inputs: [
    { id: 'burden', type: 'single', default: 5, label: L('Hastalık yükü (semptom)', 'Xəstəlik yükü (simptom)'), options: [
      { value: 5, points: 5, label: L('Yok / hafif', 'Yox / yüngül') },
      { value: 3, points: 3, label: L('Orta', 'Orta') },
      { value: 0, points: 0, label: L('Ağır', 'Ağır') } ] },
    { id: 'hypotension', type: 'boolean', points: 5, label: L('Hipotansiyon YOK (SKB >90)', 'Hipotoniya YOX (SAT >90)') },
    { id: 'copd', type: 'boolean', points: 4, label: L('KOAH YOK', 'XOAX YOX') },
    { id: 'tumor', type: 'boolean', points: 4, label: L('Solid tümör / mantar enf. öyküsü yok', 'Solid şiş / göbələk inf. anamnezi yox') },
    { id: 'dehydration', type: 'boolean', points: 3, label: L('Sıvı gerektiren dehidratasyon YOK', 'Maye tələb edən dehidratasiya YOX') },
    { id: 'outpatient', type: 'boolean', points: 3, label: L('Ateş başlangıcında ayaktan', 'Hərarət başlanğıcında ambulator') },
    { id: 'age', type: 'boolean', points: 2, label: L('Yaş < 60', 'Yaş < 60') },
  ],
  bands: [
    { min: 21, max: 26, tone: 'low', riskLabel: L('Düşük risk', 'Aşağı risk'), advice: L('≥ 21; düşük komplikasyon riski; uygunsa ayaktan oral tedavi düşünülebilir.', '≥ 21; aşağı ağırlaşma riski; uyğun olarsa ambulator oral müalicə düşünülə bilər.') },
    { min: 0, max: 20, tone: 'high', riskLabel: L('Yüksek risk', 'Yüksək risk'), advice: L('< 21; yüksek risk; yatış ve IV geniş spektrumlu antibiyotik.', '< 21; yüksək risk; hospitalizasiya və IV geniş spektrli antibiotik.') },
  ],
  references: ['Klastersky J, et al. The MASCC risk-index score. J Clin Oncol. 2000.'],
};
