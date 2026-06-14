import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Glasgow Alkolik Hepatit Skoru (GAHS). */
export const gahs: Calculator = {
  id: 'gahs',
  category: 'gastro',
  code: 'GAHS',
  kind: 'additive',
  max: 12,
  name: L('Glasgow Alkolik Hepatit Skoru', 'Qlazqo Alkoqol Hepatit Balı'),
  subtitle: L('Alkolik hepatit prognozu', 'Alkoqol hepatiti proqnozu'),
  use: L(
    'Alkolik hepatitte 28 ve 84 günlük sağkalımı tahmin eder (≥9 kötü prognoz).',
    'Alkoqol hepatitində 28 və 84 günlük sağqalmanı qiymətləndirir (≥9 pis proqnoz).',
  ),
  evidence: L('Forrest ve ark., 2005 (Gut).', 'Forrest və ark., 2005 (Gut).'),
  metricLabel: L('Prognoz', 'Proqnoz'),
  inputs: [
    { id: 'age', type: 'single', default: 1, label: L('Yaş', 'Yaş'), options: [
      { value: 1, points: 1, label: L('< 50', '< 50') }, { value: 2, points: 2, label: L('≥ 50', '≥ 50') } ] },
    { id: 'wbc', type: 'single', default: 1, label: L('Lökosit (10⁹/L)', 'Lökosit (10⁹/L)'), options: [
      { value: 1, points: 1, label: L('< 15', '< 15') }, { value: 2, points: 2, label: L('≥ 15', '≥ 15') } ] },
    { id: 'urea', type: 'single', default: 1, label: L('Üre (mmol/L)', 'Sidik cövhəri (mmol/L)'), options: [
      { value: 1, points: 1, label: L('< 5', '< 5') }, { value: 2, points: 2, label: L('≥ 5', '≥ 5') } ] },
    { id: 'inr', type: 'single', default: 1, label: L('INR', 'INR'), options: [
      { value: 1, points: 1, label: L('< 1.5', '< 1.5') }, { value: 2, points: 2, label: L('1.5–2.0', '1.5–2.0') }, { value: 3, points: 3, label: L('> 2.0', '> 2.0') } ] },
    { id: 'bili', type: 'single', default: 1, label: L('Bilirubin (µmol/L)', 'Bilirubin (µmol/L)'), options: [
      { value: 1, points: 1, label: L('< 125', '< 125') }, { value: 2, points: 2, label: L('125–250', '125–250') }, { value: 3, points: 3, label: L('> 250', '> 250') } ] },
  ],
  bands: [
    { min: 5, max: 8, tone: 'low', riskLabel: L('Düşük', 'Aşağı'),
      advice: L('GAHS < 9; daha iyi sağkalım, steroidsiz izlenebilir.', 'GAHS < 9; daha yaxşı sağqalma, steroidsiz izlənə bilər.') },
    { min: 9, max: 12, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('GAHS ≥ 9; kötü prognoz, kortikosteroidden fayda görebilir.', 'GAHS ≥ 9; pis proqnoz, kortikosteroiddən fayda görə bilər.') },
  ],
  references: ['Forrest EH, et al. Analysis of factors predictive of mortality in alcoholic hepatitis (GAHS). Gut. 2005.'],
};
