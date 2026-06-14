import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** West Haven kriterleri — hepatik ensefalopati derecesi. */
export const westHaven: Calculator = {
  id: 'west-haven',
  category: 'gastro',
  code: 'West Haven',
  kind: 'additive',
  max: 4,
  name: L('West Haven Kriterleri', 'West Haven Meyarları'),
  subtitle: L('Hepatik ensefalopati derecesi', 'Hepatik ensefalopatiya dərəcəsi'),
  use: L(
    'Karaciğer hastalığında hepatik ensefalopatinin şiddetini 0–IV olarak derecelendirir.',
    'Qaraciyər xəstəliyində hepatik ensefalopatiyanın ağırlığını 0–IV kimi dərəcələndirir.',
  ),
  evidence: L('Conn ve ark.; West Haven sınıflaması.', 'Conn və ark.; West Haven təsnifatı.'),
  metricLabel: L('Derece', 'Dərəcə'),
  inputs: [
    { id: 'grade', type: 'single', default: 0, label: L('Derece', 'Dərəcə'), options: [
      { value: 0, points: 0, label: L('0 — normal', '0 — normal') },
      { value: 1, points: 1, label: L('I — hafif konfüzyon', 'I — yüngül konfuziya') },
      { value: 2, points: 2, label: L('II — letarji, dezoryantasyon', 'II — letargiya, dezoriyentasiya') },
      { value: 3, points: 3, label: L('III — somnolans, stupor', 'III — somnolans, stupor') },
      { value: 4, points: 4, label: L('IV — koma', 'IV — koma') } ] },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Derece 0', 'Dərəcə 0'),
      advice: L('Belirgin ensefalopati yok (minimal HE olabilir).', 'Aşkar ensefalopatiya yox (minimal HE ola bilər).') },
    { min: 1, max: 2, tone: 'mid', riskLabel: L('Derece I–II', 'Dərəcə I–II'),
      advice: L('Hafif-orta HE; tetikleyici araştır, laktuloz başla.', 'Yüngül-orta HE; tetikləyici araşdır, laktuloza başla.') },
    { min: 3, max: 4, tone: 'high', riskLabel: L('Derece III–IV', 'Dərəcə III–IV'),
      advice: L('Ağır HE; havayolu koruması, yoğun bakım değerlendir.', 'Ağır HE; hava yolu qoruması, reanimasiya qiymətləndir.') },
  ],
  references: ['Conn HO, et al. West Haven criteria for hepatic encephalopathy.'],
};
