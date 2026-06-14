import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** UCDAI / Sutherland İndeksi (1987) — ÜK kompozit aktivite. */
export const ucUcdai: Calculator = {
  id: 'uc-ucdai',
  category: 'gastro',
  code: 'UCDAI',
  kind: 'additive',
  max: 12,
  name: L('UCDAI / Sutherland İndeksi', 'UCDAI / Sutherland İndeksi'),
  subtitle: L('ÜK kompozit aktivite', 'XK kompozit aktivlik'),
  use: L('Dışkı sıklığı, rektal kanama, mukozal görünüm ve hekim değerlendirmesini birleştirir (Mayo’ya benzer).', 'Nəcis tezliyi, rektal qanaxma, selikli qişa görünüşü və həkim qiymətini birləşdirir (Mayo-ya bənzər).'),
  evidence: L('Sutherland ve ark., 1987 (Gastroenterology).', 'Sutherland və ark., 1987 (Gastroenterology).'),
  metricLabel: L('Aktivite', 'Aktivlik'),
  inputs: [
    { id: 'stool', type: 'single', default: 0, label: L('Dışkı sıklığı', 'Nəcis tezliyi'), options: [
      { value: 0, points: 0, label: L('Normal', 'Normal') }, { value: 1, points: 1, label: L('1–2 fazla', '1–2 çox') }, { value: 2, points: 2, label: L('3–4 fazla', '3–4 çox') }, { value: 3, points: 3, label: L('≥5 fazla', '≥5 çox') } ] },
    { id: 'bleeding', type: 'single', default: 0, label: L('Rektal kanama', 'Rektal qanaxma'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Eser', 'İz') }, { value: 2, points: 2, label: L('Belirgin', 'Aşkar') }, { value: 3, points: 3, label: L('Çoğunlukla kan', 'Əsasən qan') } ] },
    { id: 'mucosa', type: 'single', default: 0, label: L('Mukozal görünüm', 'Selikli qişa görünüşü'), options: [
      { value: 0, points: 0, label: L('Normal', 'Normal') }, { value: 1, points: 1, label: L('Hafif frajilite', 'Yüngül frajillik') }, { value: 2, points: 2, label: L('Orta frajilite', 'Orta frajillik') }, { value: 3, points: 3, label: L('Spontan kanama / ülser', 'Spontan qanaxma / xora') } ] },
    { id: 'pga', type: 'single', default: 0, label: L('Hekim değerlendirmesi', 'Həkim qiyməti'), options: [
      { value: 0, points: 0, label: L('Normal', 'Normal') }, { value: 1, points: 1, label: L('Hafif', 'Yüngül') }, { value: 2, points: 2, label: L('Orta', 'Orta') }, { value: 3, points: 3, label: L('Şiddetli', 'Şiddətli') } ] },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Remisyon', 'Remissiya'), advice: L('≤2; remisyon.', '≤2; remissiya.') },
    { min: 3, max: 6, tone: 'mid', riskLabel: L('Hafif-orta', 'Yüngül-orta'), advice: L('3–6; hafif-orta aktivite.', '3–6; yüngül-orta aktivlik.') },
    { min: 7, max: 12, tone: 'high', riskLabel: L('Şiddetli', 'Şiddətli'), advice: L('≥7; şiddetli aktivite.', '≥7; şiddətli aktivlik.') },
  ],
  references: ['Sutherland LR, et al. 5-ASA enema in distal UC (UCDAI). Gastroenterology. 1987.'],
};
