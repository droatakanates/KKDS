import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Child-Pugh — sirozda şiddet ve prognoz sınıflaması. */
export const childPugh: Calculator = {
  id: 'child-pugh',
  category: 'gastro',
  code: 'Child-Pugh',
  kind: 'additive',
  max: 15,
  name: L('Child-Pugh Skoru', 'Child-Pugh Balı'),
  subtitle: L('Sirozda prognoz', 'Sirozda proqnoz'),
  use: L(
    'Sirozun şiddetini beş parametreyle (bilirubin, albümin, INR, asit, ensefalopati) sınıflar.',
    'Sirozun ağırlığını beş parametrlə (bilirubin, albumin, INR, assit, ensefalopatiya) təsnif edir.',
  ),
  evidence: L('Pugh ve ark., 1973.', 'Pugh və ark., 1973.'),
  metricLabel: L('Child sınıfı', 'Child sinifi'),
  inputs: [
    { id: 'bili', type: 'single', default: 1, label: L('Bilirubin (mg/dL)', 'Bilirubin (mg/dL)'), options: [
      { value: 1, points: 1, label: L('< 2', '< 2') }, { value: 2, points: 2, label: L('2–3', '2–3') }, { value: 3, points: 3, label: L('> 3', '> 3') } ] },
    { id: 'alb', type: 'single', default: 1, label: L('Albümin (g/dL)', 'Albumin (q/dL)'), options: [
      { value: 1, points: 1, label: L('> 3.5', '> 3.5') }, { value: 2, points: 2, label: L('2.8–3.5', '2.8–3.5') }, { value: 3, points: 3, label: L('< 2.8', '< 2.8') } ] },
    { id: 'inr', type: 'single', default: 1, label: L('INR', 'INR'), options: [
      { value: 1, points: 1, label: L('< 1.7', '< 1.7') }, { value: 2, points: 2, label: L('1.7–2.3', '1.7–2.3') }, { value: 3, points: 3, label: L('> 2.3', '> 2.3') } ] },
    { id: 'ascites', type: 'single', default: 1, label: L('Asit', 'Assit'), options: [
      { value: 1, points: 1, label: L('Yok', 'Yox') }, { value: 2, points: 2, label: L('Hafif', 'Yüngül') }, { value: 3, points: 3, label: L('Orta-ağır', 'Orta-ağır') } ] },
    { id: 'enceph', type: 'single', default: 1, label: L('Ensefalopati', 'Ensefalopatiya'), options: [
      { value: 1, points: 1, label: L('Yok', 'Yox') }, { value: 2, points: 2, label: L('Evre 1–2', 'Mərhələ 1–2') }, { value: 3, points: 3, label: L('Evre 3–4', 'Mərhələ 3–4') } ] },
  ],
  bands: [
    { min: 5, max: 6, tone: 'low', riskLabel: L('Sınıf A', 'Sinif A'), metric: L('1 yıl ~%100 sağkalım', '1 il ~100% sağqalma'),
      advice: L('İyi karaciğer fonksiyonu; düşük perioperatif risk.', 'Yaxşı qaraciyər funksiyası; aşağı perioperativ risk.') },
    { min: 7, max: 9, tone: 'mid', riskLabel: L('Sınıf B', 'Sinif B'), metric: L('1 yıl ~%80 sağkalım', '1 il ~80% sağqalma'),
      advice: L('Orta düzey bozulma; girişimlerde dikkat.', 'Orta dərəcəli pozulma; müdaxilələrdə diqqət.') },
    { min: 10, max: 15, tone: 'high', riskLabel: L('Sınıf C', 'Sinif C'), metric: L('1 yıl ~%45 sağkalım', '1 il ~45% sağqalma'),
      advice: L('İleri yetmezlik; transplant değerlendirmesi.', 'İrəliləmiş çatışmazlıq; transplant qiymətləndirməsi.') },
  ],
  references: ['Pugh RNH, et al. Transection of the oesophagus for bleeding oesophageal varices. Br J Surg. 1973.'],
};
