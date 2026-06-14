import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** 4Ts — heparin ilişkili trombositopeni (HIT) olasılığı. */
export const fourTs: Calculator = {
  id: 'four-ts',
  category: 'heme',
  code: '4Ts',
  kind: 'additive',
  max: 8,
  name: L('4Ts Skoru', '4Ts Balı'),
  subtitle: L('HIT olasılığı', 'HIT ehtimalı'),
  use: L('Heparin ilişkili trombositopeni (HIT) klinik olasılığını değerlendirir.', 'Heparin ilə əlaqəli trombositopeniyanın (HIT) klinik ehtimalını qiymətləndirir.'),
  evidence: L('Lo ve ark., 2006 (J Thromb Haemost).', 'Lo və ark., 2006 (J Thromb Haemost).'),
  metricLabel: L('HIT olasılığı', 'HIT ehtimalı'),
  inputs: [
    { id: 'thrombocytopenia', type: 'single', default: 0, label: L('Trombositopeni', 'Trombositopeniya'), options: [
      { value: 2, points: 2, label: L('Düşüş >%50, nadir ≥20', 'Düşmə >50%, nadir ≥20') },
      { value: 1, points: 1, label: L('Düşüş %30–50 veya nadir 10–19', 'Düşmə 30–50% və ya nadir 10–19') },
      { value: 0, points: 0, label: L('Düşüş <%30 veya nadir <10', 'Düşmə <30% və ya nadir <10') } ] },
    { id: 'timing', type: 'single', default: 0, label: L('Zamanlama', 'Zamanlama'), options: [
      { value: 2, points: 2, label: L('5–10 gün veya ≤1 gün (yakın heparin)', '5–10 gün və ya ≤1 gün (yaxın heparin)') },
      { value: 1, points: 1, label: L('>10 gün veya belirsiz', '>10 gün və ya qeyri-müəyyən') },
      { value: 0, points: 0, label: L('<4 gün (yakın heparin yok)', '<4 gün (yaxın heparin yox)') } ] },
    { id: 'thrombosis', type: 'single', default: 0, label: L('Tromboz / sekel', 'Tromboz / sekel'), options: [
      { value: 2, points: 2, label: L('Yeni tromboz / cilt nekrozu / sistemik reaksiyon', 'Yeni tromboz / dəri nekrozu / sistemik reaksiya') },
      { value: 1, points: 1, label: L('İlerleyen/yineleyen tromboz veya cilt lezyonu', 'İrəliləyən/təkrarlanan tromboz və ya dəri lezyonu') },
      { value: 0, points: 0, label: L('Yok', 'Yox') } ] },
    { id: 'other', type: 'single', default: 0, label: L('Diğer neden', 'Digər səbəb'), options: [
      { value: 2, points: 2, label: L('Belirgin başka neden yok', 'Aşkar başqa səbəb yox') },
      { value: 1, points: 1, label: L('Olası başka neden', 'Mümkün başqa səbəb') },
      { value: 0, points: 0, label: L('Kesin başka neden', 'Dəqiq başqa səbəb') } ] },
  ],
  bands: [
    { min: 0, max: 3, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('Düşük olasılık; HIT olası değil.', 'Aşağı ehtimal; HIT ehtimalsız.') },
    { min: 4, max: 5, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('Orta olasılık; HIT testi (anti-PF4) ve heparin kesimini düşün.', 'Orta ehtimal; HIT testi (anti-PF4) və heparinin dayandırılmasını düşün.') },
    { min: 6, max: 8, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('Yüksek olasılık; heparini kes, alternatif antikoagülan başla.', 'Yüksək ehtimal; heparini dayandır, alternativ antikoaqulyant başla.') },
  ],
  references: ['Lo GK, et al. Evaluation of pretest clinical score (4Ts) for HIT. J Thromb Haemost. 2006.'],
};
