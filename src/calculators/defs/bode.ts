import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** BODE indeksi — KOAH prognozu. */
export const bode: Calculator = {
  id: 'bode',
  category: 'pulm',
  code: 'BODE',
  kind: 'additive',
  max: 10,
  name: L('BODE İndeksi', 'BODE İndeksi'),
  subtitle: L('KOAH prognozu', 'XOAX proqnozu'),
  use: L('KOAH’ta 4 yıllık sağkalımı VKİ, hava akımı, dispne ve egzersiz kapasitesiyle öngörür.', 'XOAX-da 4 illik sağqalmanı BKİ, hava axını, dispnoe və məşq tutumu ilə proqnozlaşdırır.'),
  evidence: L('Celli ve ark., 2004 (NEJM).', 'Celli və ark., 2004 (NEJM).'),
  metricLabel: L('Prognoz', 'Proqnoz'),
  inputs: [
    { id: 'bmi', type: 'single', default: 0, label: L('VKİ', 'BKİ'), options: [
      { value: 0, points: 0, label: L('> 21', '> 21') }, { value: 1, points: 1, label: L('≤ 21', '≤ 21') } ] },
    { id: 'fev1', type: 'single', default: 0, label: L('FEV₁ (% beklenen)', 'FEV₁ (% gözlənilən)'), options: [
      { value: 0, points: 0, label: L('≥ 65', '≥ 65') }, { value: 1, points: 1, label: L('50–64', '50–64') }, { value: 2, points: 2, label: L('36–49', '36–49') }, { value: 3, points: 3, label: L('≤ 35', '≤ 35') } ] },
    { id: 'dyspnea', type: 'single', default: 0, label: L('mMRC dispne', 'mMRC dispnoe'), options: [
      { value: 0, points: 0, label: L('0–1', '0–1') }, { value: 1, points: 1, label: L('2', '2') }, { value: 2, points: 2, label: L('3', '3') }, { value: 3, points: 3, label: L('4', '4') } ] },
    { id: 'walk', type: 'single', default: 0, label: L('6 dk yürüme (m)', '6 dəq yeriş (m)'), options: [
      { value: 0, points: 0, label: L('≥ 350', '≥ 350') }, { value: 1, points: 1, label: L('250–349', '250–349') }, { value: 2, points: 2, label: L('150–249', '150–249') }, { value: 3, points: 3, label: L('≤ 149', '≤ 149') } ] },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0–2; en iyi sağkalım.', '0–2; ən yaxşı sağqalma.') },
    { min: 3, max: 4, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('3–4; orta prognoz.', '3–4; orta proqnoz.') },
    { min: 5, max: 10, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥5; artmış mortalite; agresif yönetim ve rehabilitasyon.', '≥5; artmış ölüm; aqressiv idarəetmə və reabilitasiya.') },
  ],
  references: ['Celli BR, et al. The body-mass index, airflow obstruction, dyspnea, and exercise capacity index (BODE). NEJM. 2004.'],
};
