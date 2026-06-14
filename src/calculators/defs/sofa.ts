import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** SOFA — organ disfonksiyonu / sepsis değerlendirmesi. */
export const sofa: Calculator = {
  id: 'sofa',
  category: 'infect',
  code: 'SOFA',
  kind: 'additive',
  max: 24,
  name: L('SOFA Skoru', 'SOFA Balı'),
  subtitle: L('Organ disfonksiyonu', 'Orqan disfunksiyası'),
  use: L('Altı organ sistemini değerlendirerek sepsiste organ disfonksiyonunu ve seyri izler.', 'Altı orqan sistemini qiymətləndirərək sepsisdə orqan disfunksiyasını və gedişi izləyir.'),
  evidence: L('Vincent ve ark., 1996; Sepsis-3, 2016.', 'Vincent və ark., 1996; Sepsis-3, 2016.'),
  metricLabel: L('Mortalite ilişkisi', 'Ölümlə əlaqə'),
  inputs: [
    { id: 'resp', type: 'single', default: 0, label: L('Solunum (PaO₂/FiO₂)', 'Tənəffüs (PaO₂/FiO₂)'), options: [
      { value: 0, points: 0, label: L('≥ 400', '≥ 400') }, { value: 1, points: 1, label: L('< 400', '< 400') }, { value: 2, points: 2, label: L('< 300', '< 300') }, { value: 3, points: 3, label: L('< 200 (destekli)', '< 200 (dəstəkli)') }, { value: 4, points: 4, label: L('< 100 (destekli)', '< 100 (dəstəkli)') } ] },
    { id: 'coag', type: 'single', default: 0, label: L('Koagülasyon (trombosit ×10³)', 'Koaqulyasiya (trombosit ×10³)'), options: [
      { value: 0, points: 0, label: L('≥ 150', '≥ 150') }, { value: 1, points: 1, label: L('< 150', '< 150') }, { value: 2, points: 2, label: L('< 100', '< 100') }, { value: 3, points: 3, label: L('< 50', '< 50') }, { value: 4, points: 4, label: L('< 20', '< 20') } ] },
    { id: 'liver', type: 'single', default: 0, label: L('Karaciğer (bilirubin mg/dL)', 'Qaraciyər (bilirubin mg/dL)'), options: [
      { value: 0, points: 0, label: L('< 1.2', '< 1.2') }, { value: 1, points: 1, label: L('1.2–1.9', '1.2–1.9') }, { value: 2, points: 2, label: L('2.0–5.9', '2.0–5.9') }, { value: 3, points: 3, label: L('6.0–11.9', '6.0–11.9') }, { value: 4, points: 4, label: L('> 12', '> 12') } ] },
    { id: 'cardio', type: 'single', default: 0, label: L('Kardiyovasküler', 'Kardiovaskulyar'), options: [
      { value: 0, points: 0, label: L('MAP ≥ 70', 'MAP ≥ 70') }, { value: 1, points: 1, label: L('MAP < 70', 'MAP < 70') }, { value: 2, points: 2, label: L('Düşük doz vazopressör', 'Aşağı doza vazopressor') }, { value: 3, points: 3, label: L('Orta doz vazopressör', 'Orta doza vazopressor') }, { value: 4, points: 4, label: L('Yüksek doz vazopressör', 'Yüksək doza vazopressor') } ] },
    { id: 'cns', type: 'single', default: 0, label: L('SSS (Glasgow)', 'MSS (Qlazqo)'), options: [
      { value: 0, points: 0, label: L('15', '15') }, { value: 1, points: 1, label: L('13–14', '13–14') }, { value: 2, points: 2, label: L('10–12', '10–12') }, { value: 3, points: 3, label: L('6–9', '6–9') }, { value: 4, points: 4, label: L('< 6', '< 6') } ] },
    { id: 'renal', type: 'single', default: 0, label: L('Böbrek (kreatinin mg/dL)', 'Böyrək (kreatinin mg/dL)'), options: [
      { value: 0, points: 0, label: L('< 1.2', '< 1.2') }, { value: 1, points: 1, label: L('1.2–1.9', '1.2–1.9') }, { value: 2, points: 2, label: L('2.0–3.4', '2.0–3.4') }, { value: 3, points: 3, label: L('3.5–4.9', '3.5–4.9') }, { value: 4, points: 4, label: L('> 5.0', '> 5.0') } ] },
  ],
  bands: [
    { min: 0, max: 6, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0–6; düşük organ disfonksiyonu; mortalite görece düşük.', '0–6; aşağı orqan disfunksiyası; ölüm nisbətən aşağı.') },
    { min: 7, max: 11, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('7–11; orta-belirgin disfonksiyon; yakın izlem.', '7–11; orta-aşkar disfunksiya; yaxın izləmə.') },
    { min: 12, max: 24, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥12; ağır organ disfonksiyonu; yüksek mortalite.', '≥12; ağır orqan disfunksiyası; yüksək ölüm.') },
  ],
  references: ['Vincent JL, et al. The SOFA score to describe organ dysfunction/failure. Intensive Care Med. 1996.'],
};
