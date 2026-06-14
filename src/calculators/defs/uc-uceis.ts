import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** UCEIS — Ülseratif Kolit Endoskopik Şiddet İndeksi (Travis, 2012). */
export const ucUceis: Calculator = {
  id: 'uc-uceis',
  category: 'gastro',
  code: 'UCEIS',
  kind: 'additive',
  max: 8,
  name: L('UCEIS', 'UCEIS'),
  subtitle: L('ÜK endoskopik şiddet', 'XK endoskopik ağırlıq'),
  use: L('Üç tanımlayıcıyla (vasküler patern, kanama, erozyon/ülser) endoskopik şiddeti puanlar; gözlemciler arası uyumu yüksektir.', 'Üç təsviredici ilə (damar şəbəkəsi, qanaxma, eroziya/xora) endoskopik ağırlığı qiymətləndirir; müşahidəçilər arası uyumu yüksəkdir.'),
  evidence: L('Travis ve ark., 2012 (Gut).', 'Travis və ark., 2012 (Gut).'),
  metricLabel: L('Endoskopik şiddet', 'Endoskopik ağırlıq'),
  inputs: [
    { id: 'vascular', type: 'single', default: 0, label: L('Vasküler patern', 'Damar şəbəkəsi'), options: [
      { value: 0, points: 0, label: L('0 — normal', '0 — normal') }, { value: 1, points: 1, label: L('1 — yer yer silinmiş', '1 — yer-yer silinmiş') }, { value: 2, points: 2, label: L('2 — tamamen silinmiş', '2 — tamamilə silinmiş') } ] },
    { id: 'bleeding', type: 'single', default: 0, label: L('Kanama', 'Qanaxma'), options: [
      { value: 0, points: 0, label: L('0 — yok', '0 — yox') }, { value: 1, points: 1, label: L('1 — mukozal', '1 — selikli') }, { value: 2, points: 2, label: L('2 — luminal hafif', '2 — luminal yüngül') }, { value: 3, points: 3, label: L('3 — luminal orta-şiddetli', '3 — luminal orta-şiddətli') } ] },
    { id: 'erosions', type: 'single', default: 0, label: L('Erozyon ve ülser', 'Eroziya və xora'), options: [
      { value: 0, points: 0, label: L('0 — yok', '0 — yox') }, { value: 1, points: 1, label: L('1 — erozyon', '1 — eroziya') }, { value: 2, points: 2, label: L('2 — yüzeyel ülser', '2 — səthi xora') }, { value: 3, points: 3, label: L('3 — derin ülser', '3 — dərin xora') } ] },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Remisyon/hafif', 'Remissiya/yüngül'), advice: L('0–1; remisyon veya minimal aktivite.', '0–1; remissiya və ya minimal aktivlik.') },
    { min: 2, max: 4, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('2–4; orta endoskopik aktivite.', '2–4; orta endoskopik aktivlik.') },
    { min: 5, max: 8, tone: 'high', riskLabel: L('Şiddetli', 'Şiddətli'), advice: L('5–8; şiddetli endoskopik aktivite; ASUC riski.', '5–8; şiddətli endoskopik aktivlik; ASUC riski.') },
  ],
  references: ['Travis SP, et al. Developing and validating the UCEIS. Gut. 2012.'],
};
