import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Tam Mayo Skoru (Schroeder, 1987) — ülseratif kolit aktivitesi. */
export const ucMayo: Calculator = {
  id: 'uc-mayo',
  category: 'gastro',
  code: 'Mayo (Tam)',
  kind: 'additive',
  max: 12,
  name: L('Tam Mayo Skoru', 'Tam Mayo Balı'),
  subtitle: L('ÜK aktivitesi (endoskopili)', 'XK aktivliyi (endoskopiyalı)'),
  use: L('Ülseratif kolitte dört bileşenle (dışkı sıklığı, rektal kanama, endoskopi, hekim değerlendirmesi) aktiviteyi ölçer.', 'Xoralı kolitdə dörd komponentlə (nəcis tezliyi, rektal qanaxma, endoskopiya, həkim qiyməti) aktivliyi ölçür.'),
  evidence: L('Schroeder ve ark., 1987 (NEJM).', 'Schroeder və ark., 1987 (NEJM).'),
  metricLabel: L('Aktivite', 'Aktivlik'),
  inputs: [
    { id: 'stool', type: 'single', default: 0, label: L('Dışkılama sıklığı', 'Nəcis tezliyi'), options: [
      { value: 0, points: 0, label: L('Normal', 'Normal') }, { value: 1, points: 1, label: L('1–2 fazla', '1–2 çox') }, { value: 2, points: 2, label: L('3–4 fazla', '3–4 çox') }, { value: 3, points: 3, label: L('≥5 fazla', '≥5 çox') } ] },
    { id: 'bleeding', type: 'single', default: 0, label: L('Rektal kanama', 'Rektal qanaxma'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Zaman zaman kan', 'Hərdən qan') }, { value: 2, points: 2, label: L('Çoğunlukla kan', 'Əsasən qan') }, { value: 3, points: 3, label: L('Sadece kan', 'Yalnız qan') } ] },
    { id: 'endoscopy', type: 'single', default: 0, label: L('Endoskopi (MES)', 'Endoskopiya (MES)'), options: [
      { value: 0, points: 0, label: L('0 — normal', '0 — normal') }, { value: 1, points: 1, label: L('1 — hafif', '1 — yüngül') }, { value: 2, points: 2, label: L('2 — orta', '2 — orta') }, { value: 3, points: 3, label: L('3 — şiddetli', '3 — şiddətli') } ] },
    { id: 'pga', type: 'single', default: 0, label: L('Hekim global değerlendirmesi', 'Həkim qlobal qiyməti'), options: [
      { value: 0, points: 0, label: L('Normal', 'Normal') }, { value: 1, points: 1, label: L('Hafif', 'Yüngül') }, { value: 2, points: 2, label: L('Orta', 'Orta') }, { value: 3, points: 3, label: L('Şiddetli', 'Şiddətli') } ] },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Remisyon', 'Remissiya'), advice: L('≤ 2; klinik remisyon.', '≤ 2; klinik remissiya.') },
    { min: 3, max: 5, tone: 'mid', riskLabel: L('Hafif', 'Yüngül'), advice: L('3–5; hafif aktivite.', '3–5; yüngül aktivlik.') },
    { min: 6, max: 10, tone: 'high', riskLabel: L('Orta', 'Orta'), advice: L('6–10; orta aktivite; tedaviyi gözden geçir.', '6–10; orta aktivlik; müalicəni nəzərdən keçir.') },
    { min: 11, max: 12, tone: 'high', riskLabel: L('Şiddetli', 'Şiddətli'), advice: L('11–12; şiddetli aktivite; agresif tedavi.', '11–12; şiddətli aktivlik; aqressiv müalicə.') },
  ],
  references: ['Schroeder KW, et al. Coated oral 5-ASA therapy for mildly to moderately active UC. NEJM. 1987.'],
};
