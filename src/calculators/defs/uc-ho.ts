import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Ho İndeksi (Edinburgh, 2004) — ASUC'ta IV steroid başarısızlığı. */
export const ucHo: Calculator = {
  id: 'uc-ho',
  category: 'gastro',
  code: 'Ho İndeksi',
  kind: 'additive',
  max: 9,
  name: L('Ho İndeksi (Edinburgh)', 'Ho İndeksi (Edinburqh)'),
  subtitle: L('ASUC steroid başarısızlığı', 'ASUC steroid uğursuzluğu'),
  use: L('Akut şiddetli ÜK’de 3. günde IV steroid başarısızlığı riskini öngörür (≥4 yüksek risk).', 'Kəskin şiddətli XK-də 3-cü gündə IV steroid uğursuzluğu riskini proqnozlaşdırır (≥4 yüksək risk).'),
  evidence: L('Ho ve ark., 2004 (Aliment Pharmacol Ther).', 'Ho və ark., 2004 (Aliment Pharmacol Ther).'),
  metricLabel: L('Steroid başarısızlığı', 'Steroid uğursuzluğu'),
  inputs: [
    { id: 'stool', type: 'single', default: 0, label: L('3. gün ortalama dışkı sıklığı', '3-cü gün orta nəcis tezliyi'), options: [
      { value: 0, points: 0, label: L('≤4', '≤4') }, { value: 1, points: 1, label: L('>4–6', '>4–6') }, { value: 2, points: 2, label: L('>6–9', '>6–9') }, { value: 4, points: 4, label: L('>9', '>9') } ] },
    { id: 'dilatation', type: 'boolean', points: 4, label: L('Kolonik dilatasyon (>5.5 cm)', 'Kolonik dilatasiya (>5.5 sm)') },
    { id: 'albumin', type: 'boolean', points: 1, label: L('Hipoalbüminemi (≤3 g/dL)', 'Hipoalbuminemiya (≤3 q/dL)') },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0–1; düşük steroid başarısızlığı riski.', '0–1; aşağı steroid uğursuzluğu riski.') },
    { min: 2, max: 3, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('2–3; orta risk; yakın izlem.', '2–3; orta risk; yaxın izləmə.') },
    { min: 4, max: 9, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥4; yüksek başarısızlık riski; kurtarma tedavisi / cerrahi değerlendir.', '≥4; yüksək uğursuzluq riski; xilasedici müalicə / cərrahiyyə qiymətləndir.') },
  ],
  references: ['Ho GT, et al. Predicting the outcome of severe ulcerative colitis. Aliment Pharmacol Ther. 2004.'],
};
