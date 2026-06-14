import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });
const b = (id: string, points: number, tr: string, az: string) =>
  ({ id, type: 'boolean' as const, points, label: L(tr, az) });

/** Charlson Komorbidite İndeksi. */
export const charlson: Calculator = {
  id: 'charlson',
  category: 'general',
  code: 'Charlson',
  kind: 'additive',
  max: 37,
  name: L('Charlson Komorbidite İndeksi', 'Charlson Komorbidlik İndeksi'),
  subtitle: L('Komorbidite ve mortalite', 'Komorbidlik və ölüm'),
  use: L('Komorbiditeleri ağırlıklandırarak 10 yıllık mortalite riskini tahmin eder (yaş düzeltmesi hariç).', 'Komorbidlikləri çəkiləndirərək 10 illik ölüm riskini qiymətləndirir (yaş düzəlişi istisna).'),
  evidence: L('Charlson ve ark., 1987 (J Chronic Dis).', 'Charlson və ark., 1987 (J Chronic Dis).'),
  metricLabel: L('Risk', 'Risk'),
  inputs: [
    b('mi', 1, 'Miyokart infarktüsü', 'Miokard infarktı'),
    b('chf', 1, 'Konjestif kalp yetmezliği', 'Konqestiv ürək çatışmazlığı'),
    b('pvd', 1, 'Periferik damar hastalığı', 'Periferik damar xəstəliyi'),
    b('cva', 1, 'Serebrovasküler hastalık / TİA', 'Serebrovaskulyar xəstəlik / KTH'),
    b('dementia', 1, 'Demans', 'Demans'),
    b('copd', 1, 'Kronik akciğer hastalığı', 'Xroniki ağ ciyər xəstəliyi'),
    b('connective', 1, 'Bağ dokusu hastalığı', 'Birləşdirici toxuma xəstəliyi'),
    b('ulcer', 1, 'Peptik ülser', 'Peptik xora'),
    b('hemiplegia', 2, 'Hemipleji', 'Hemiplegiya'),
    b('renal', 2, 'Orta-ağır böbrek hastalığı', 'Orta-ağır böyrək xəstəliyi'),
    b('leukemia', 2, 'Lösemi', 'Leykemiya'),
    b('lymphoma', 2, 'Lenfoma', 'Limfoma'),
    b('aids', 6, 'AIDS', 'AIDS'),
    { id: 'diabetes', type: 'single', default: 0, label: L('Diyabet', 'Diabet'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Komplikasyonsuz', 'Ağırlaşmasız') }, { value: 2, points: 2, label: L('Son organ hasarı', 'Son orqan zədəsi') } ] },
    { id: 'liver', type: 'single', default: 0, label: L('Karaciğer hastalığı', 'Qaraciyər xəstəliyi'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Hafif', 'Yüngül') }, { value: 3, points: 3, label: L('Orta-ağır', 'Orta-ağır') } ] },
    { id: 'tumor', type: 'single', default: 0, label: L('Solid tümör', 'Solid şiş'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 2, points: 2, label: L('Lokalize (<5 yıl)', 'Lokalizə (<5 il)') }, { value: 6, points: 6, label: L('Metastatik', 'Metastatik') } ] },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0; düşük komorbidite yükü.', '0; aşağı komorbidlik yükü.') },
    { min: 1, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('1–2; orta komorbidite; mortalite artmış.', '1–2; orta komorbidlik; ölüm artmış.') },
    { min: 3, max: 37, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥3; yüksek komorbidite yükü; mortalite belirgin artmış.', '≥3; yüksək komorbidlik yükü; ölüm nəzərəçarpan artmış.') },
  ],
  references: ['Charlson ME, et al. A new method of classifying prognostic comorbidity. J Chronic Dis. 1987.'],
};
