import type { Calculator, LocalizedText } from '../types';

/** Puana özel 30 günlük mortalite (%). */
const mortality: Record<number, number> = { 0: 0.6, 1: 2.7, 2: 6.8, 3: 14, 4: 27.8, 5: 27.8 };

const metricByScore: Record<number, LocalizedText> = Object.fromEntries(
  Object.entries(mortality).map(([k, v]) => [
    Number(k),
    { tr: `%${v}`, az: `${v}%`, 'tr-CY': `%${v}` },
  ]),
);

/** CURB-65 — toplum kökenli pnömoni şiddet skoru. */
export const curb65: Calculator = {
  id: 'curb65',
  category: 'pulm',
  code: 'CURB-65',
  kind: 'additive',
  max: 5,
  name: { tr: 'CURB-65', az: 'CURB-65', 'tr-CY': 'CURB-65' },
  subtitle: { tr: 'Pnömoni şiddeti', az: 'Pnevmoniya ağırlığı', 'tr-CY': 'Pnömoni şiddeti' },
  use: {
    tr: 'Toplum kökenli pnömonide şiddeti ve 30 günlük mortalite riskini değerlendirip yatış/taburculuk kararını destekler.',
    az: 'İcma mənşəli pnevmoniyada ağırlığı və 30 günlük ölüm riskini qiymətləndirib hospitalizasiya/evə buraxılma qərarını dəstəkləyir.',
    'tr-CY': 'Toplum kökenli pnömonide şiddeti ve 30 günlük mortalite riskini değerlendirip yatış/taburculuk kararını destekler.',
  },
  evidence: {
    tr: 'Lim ve ark., 2003 (Thorax). Yaygın olarak kullanılan şiddet skoru.',
    az: 'Lim və ark., 2003 (Thorax). Geniş istifadə olunan ağırlıq balı.',
    'tr-CY': 'Lim ve ark., 2003 (Thorax). Yaygın olarak kullanılan şiddet skoru.',
  },
  metricLabel: { tr: '30 günlük mortalite', az: '30 günlük ölüm', 'tr-CY': '30 günlük mortalite' },
  metricByScore,
  inputs: [
    { id: 'conf', type: 'boolean', points: 1,
      label: { tr: 'Konfüzyon', az: 'Konfuziya', 'tr-CY': 'Konfüzyon' },
      hint: { tr: 'Yeni başlangıçlı', az: 'Yeni başlanğıclı', 'tr-CY': 'Yeni başlangıçlı' } },
    { id: 'urea', type: 'boolean', points: 1,
      label: { tr: 'Üre > 7 mmol/L', az: 'Sidik cövhəri > 7 mmol/L', 'tr-CY': 'Üre > 7 mmol/L' },
      hint: { tr: 'BUN > 19 mg/dL', az: 'BUN > 19 mg/dL', 'tr-CY': 'BUN > 19 mg/dL' } },
    { id: 'rr', type: 'boolean', points: 1,
      label: { tr: 'Solunum ≥ 30/dk', az: 'Tənəffüs ≥ 30/dəq', 'tr-CY': 'Solunum ≥ 30/dk' },
      hint: { tr: 'Takipne', az: 'Taxipne', 'tr-CY': 'Takipne' } },
    { id: 'bp', type: 'boolean', points: 1,
      label: { tr: 'Düşük kan basıncı', az: 'Aşağı qan təzyiqi', 'tr-CY': 'Düşük kan basıncı' },
      hint: { tr: 'SKB<90 veya DKB≤60', az: 'SAT<90 və ya DAT≤60', 'tr-CY': 'SKB<90 veya DKB≤60' } },
    { id: 'age65', type: 'boolean', points: 1,
      label: { tr: 'Yaş ≥ 65', az: 'Yaş ≥ 65', 'tr-CY': 'Yaş ≥ 65' },
      hint: { tr: 'Yaşlı hasta', az: 'Yaşlı xəstə', 'tr-CY': 'Yaşlı hasta' } },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low',
      riskLabel: { tr: 'Düşük', az: 'Aşağı', 'tr-CY': 'Düşük' },
      advice: { tr: 'Ayaktan tedavi uygun olabilir.', az: 'Ambulator müalicə uyğun ola bilər.', 'tr-CY': 'Ayaktan tedavi uygun olabilir.' } },
    { min: 2, max: 2, tone: 'mid',
      riskLabel: { tr: 'Orta', az: 'Orta', 'tr-CY': 'Orta' },
      advice: { tr: 'Kısa yatış / gözlem düşünülmeli.', az: 'Qısa hospitalizasiya / müşahidə düşünülməlidir.', 'tr-CY': 'Kısa yatış / gözlem düşünülmeli.' } },
    { min: 3, max: 5, tone: 'high',
      riskLabel: { tr: 'Yüksek', az: 'Yüksək', 'tr-CY': 'Yüksek' },
      advice: { tr: 'Yatış; ≥3 ise YBÜ değerlendir.', az: 'Hospitalizasiya; ≥3 olarsa RŞ qiymətləndir.', 'tr-CY': 'Yatış; ≥3 ise YBÜ değerlendir.' } },
  ],
  references: ['Lim WS, et al. Defining CAP severity on presentation. Thorax. 2003.'],
};
