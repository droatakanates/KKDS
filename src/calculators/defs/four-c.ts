import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** 4C Mortality Score — COVID-19 hastane mortalitesi. */
export const fourC: Calculator = {
  id: 'four-c',
  category: 'pulm',
  code: '4C Mortality',
  kind: 'additive',
  max: 21,
  name: L('4C Mortalite Skoru', '4C Ölüm Balı'),
  subtitle: L('COVID-19 mortalite riski', 'COVID-19 ölüm riski'),
  use: L('Hastaneye yatan COVID-19 hastalarında ölüm riskini sekiz parametreyle öngörür.', 'Hospitalizə COVID-19 xəstələrində ölüm riskini səkkiz parametrlə proqnozlaşdırır.'),
  evidence: L('Knight ve ark., 2020 (BMJ; ISARIC 4C).', 'Knight və ark., 2020 (BMJ; ISARIC 4C).'),
  metricLabel: L('Hastane mortalitesi', 'Xəstəxana ölümü'),
  inputs: [
    { id: 'age', type: 'single', default: 0, label: L('Yaş', 'Yaş'), options: [
      { value: 0, points: 0, label: L('< 50', '< 50') }, { value: 2, points: 2, label: L('50–59', '50–59') }, { value: 3, points: 3, label: L('60–69', '60–69') }, { value: 4, points: 4, label: L('70–79', '70–79') }, { value: 7, points: 7, label: L('≥ 80', '≥ 80') } ] },
    { id: 'sex', type: 'boolean', points: 1, label: L('Erkek cinsiyet', 'Kişi cinsi') },
    { id: 'comorbid', type: 'single', default: 0, label: L('Komorbidite sayısı', 'Komorbidlik sayı'), options: [
      { value: 0, points: 0, label: L('0', '0') }, { value: 1, points: 1, label: L('1', '1') }, { value: 2, points: 2, label: L('≥ 2', '≥ 2') } ] },
    { id: 'rr', type: 'single', default: 0, label: L('Solunum hızı', 'Tənəffüs sürəti'), options: [
      { value: 0, points: 0, label: L('< 20/dk', '< 20/dəq') }, { value: 1, points: 1, label: L('20–29/dk', '20–29/dəq') }, { value: 2, points: 2, label: L('≥ 30/dk', '≥ 30/dəq') } ] },
    { id: 'spo2', type: 'boolean', points: 2, label: L('SpO₂ < %92', 'SpO₂ < 92%') },
    { id: 'gcs', type: 'boolean', points: 2, label: L('Glasgow Koma Skalası < 15', 'Qlazqo Koma Şkalası < 15') },
    { id: 'urea', type: 'single', default: 0, label: L('Üre (mmol/L)', 'Sidik cövhəri (mmol/L)'), options: [
      { value: 0, points: 0, label: L('≤ 7', '≤ 7') }, { value: 1, points: 1, label: L('7–14', '7–14') }, { value: 3, points: 3, label: L('> 14', '> 14') } ] },
    { id: 'crp', type: 'single', default: 0, label: L('CRP (mg/L)', 'CRP (mg/L)'), options: [
      { value: 0, points: 0, label: L('< 50', '< 50') }, { value: 1, points: 1, label: L('50–99', '50–99') }, { value: 2, points: 2, label: L('≥ 100', '≥ 100') } ] },
  ],
  bands: [
    { min: 0, max: 3, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('~%1.2', '~1.2%'), advice: L('Düşük mortalite riski.', 'Aşağı ölüm riski.') },
    { min: 4, max: 8, tone: 'mid', riskLabel: L('Orta', 'Orta'), metric: L('~%9.9', '~9.9%'), advice: L('Orta risk; yakın izlem.', 'Orta risk; yaxın izləmə.') },
    { min: 9, max: 21, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('~%31–62', '~31–62%'), advice: L('Yüksek mortalite; yoğun izlem / ileri destek.', 'Yüksək ölüm; intensiv izləmə / irəli dəstək.') },
  ],
  references: ['Knight SR, et al. Risk stratification of patients admitted with COVID-19 (4C Mortality Score). BMJ. 2020.'],
};
