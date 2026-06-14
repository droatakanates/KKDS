import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Lichtiger İndeksi (Modifiye Truelove-Witts) — ÜK aktivitesi. */
export const ucLichtiger: Calculator = {
  id: 'uc-lichtiger',
  category: 'gastro',
  code: 'Lichtiger',
  kind: 'additive',
  max: 21,
  name: L('Lichtiger İndeksi', 'Lichtiger İndeksi'),
  subtitle: L('ÜK aktivitesi (ASUC yanıtı)', 'XK aktivliyi (ASUC cavabı)'),
  use: L('Akut şiddetli ÜK’de aktiviteyi ölçer; siklosporin/infliksimab yanıtında eşik (<10 yanıt).', 'Kəskin şiddətli XK-də aktivliyi ölçür; siklosporin/infliksimab cavabında hədd (<10 cavab).'),
  evidence: L('Lichtiger ve ark., 1994 (NEJM).', 'Lichtiger və ark., 1994 (NEJM).'),
  metricLabel: L('Aktivite', 'Aktivlik'),
  inputs: [
    { id: 'diarrhea', type: 'single', default: 0, label: L('Diyare (dışkı/gün)', 'İshal (nəcis/gün)'), options: [
      { value: 0, points: 0, label: L('0–2', '0–2') }, { value: 1, points: 1, label: L('3–4', '3–4') }, { value: 2, points: 2, label: L('5–6', '5–6') }, { value: 3, points: 3, label: L('7–9', '7–9') }, { value: 4, points: 4, label: L('≥10', '≥10') } ] },
    { id: 'nocturnal', type: 'boolean', points: 1, label: L('Noktürnal diyare', 'Noktürnal ishal') },
    { id: 'blood', type: 'single', default: 0, label: L('Görünür kan (dışkı oranı)', 'Görünən qan (nəcis nisbəti)'), options: [
      { value: 0, points: 0, label: L('0%', '0%') }, { value: 1, points: 1, label: L('<%50', '<50%') }, { value: 2, points: 2, label: L('≥%50', '≥50%') }, { value: 3, points: 3, label: L('100%', '100%') } ] },
    { id: 'incontinence', type: 'boolean', points: 1, label: L('Fekal inkontinans', 'Fekal inkontinensiya') },
    { id: 'pain', type: 'single', default: 0, label: L('Karın ağrısı / kramp', 'Qarın ağrısı / qıc olma'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Hafif', 'Yüngül') }, { value: 2, points: 2, label: L('Orta', 'Orta') }, { value: 3, points: 3, label: L('Şiddetli', 'Şiddətli') } ] },
    { id: 'wellbeing', type: 'single', default: 0, label: L('Genel iyilik hâli', 'Ümumi sağlamlıq'), options: [
      { value: 0, points: 0, label: L('Mükemmel', 'Mükəmməl') }, { value: 1, points: 1, label: L('Çok iyi', 'Çox yaxşı') }, { value: 2, points: 2, label: L('İyi', 'Yaxşı') }, { value: 3, points: 3, label: L('Orta', 'Orta') }, { value: 4, points: 4, label: L('Kötü', 'Pis') }, { value: 5, points: 5, label: L('Berbat', 'Dəhşətli') } ] },
    { id: 'tenderness', type: 'single', default: 0, label: L('Karın hassasiyeti', 'Qarın həssaslığı'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Hafif, lokalize', 'Yüngül, lokalizə') }, { value: 2, points: 2, label: L('Hafif-orta, yaygın', 'Yüngül-orta, yayğın') }, { value: 3, points: 3, label: L('Şiddetli / rebound', 'Şiddətli / rebaund') } ] },
    { id: 'antidiarrheal', type: 'boolean', points: 1, label: L('Antidiyareik ihtiyacı', 'Antidiarreik ehtiyacı') },
  ],
  bands: [
    { min: 0, max: 9, tone: 'low', riskLabel: L('Yanıt / hafif', 'Cavab / yüngül'), advice: L('<10; tedavi yanıtı / düşük aktivite.', '<10; müalicə cavabı / aşağı aktivlik.') },
    { min: 10, max: 13, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('10–13; orta aktivite.', '10–13; orta aktivlik.') },
    { min: 14, max: 21, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥14; yüksek aktivite; kurtarma tedavisini değerlendir.', '≥14; yüksək aktivlik; xilasedici müalicəni qiymətləndir.') },
  ],
  references: ['Lichtiger S, et al. Cyclosporine in severe ulcerative colitis refractory to steroid therapy. NEJM. 1994.'],
};
