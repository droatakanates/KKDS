import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** SMART-COP — pnömonide yoğun solunum/vazopressör desteği ihtiyacı. */
export const smartcop: Calculator = {
  id: 'smartcop',
  category: 'pulm',
  code: 'SMART-COP',
  kind: 'additive',
  max: 11,
  name: L('SMART-COP', 'SMART-COP'),
  subtitle: L('Pnömonide destek ihtiyacı', 'Pnevmoniyada dəstək ehtiyacı'),
  use: L('Toplum kökenli pnömonide yoğun solunum veya vazopressör desteği ihtiyacını öngörür (≥3 artmış risk).', 'İcma mənşəli pnevmoniyada intensiv tənəffüs və ya vazopressor dəstəyi ehtiyacını proqnozlaşdırır (≥3 artmış risk).'),
  evidence: L('Charles ve ark., 2008 (Clin Infect Dis). Solunum ve oksijen eşikleri yaşa göre ayarlanır.', 'Charles və ark., 2008 (Clin Infect Dis). Tənəffüs və oksigen həddi yaşa görə tənzimlənir.'),
  metricLabel: L('Risk', 'Risk'),
  inputs: [
    { id: 'sbp', type: 'boolean', points: 2, label: L('SKB < 90 mmHg', 'SAT < 90 mmHg') },
    { id: 'multilobar', type: 'boolean', points: 1, label: L('Multilober infiltrasyon', 'Multilobar infiltrasiya') },
    { id: 'albumin', type: 'boolean', points: 1, label: L('Albümin < 3.5 g/dL', 'Albumin < 3.5 q/dL') },
    { id: 'rr', type: 'boolean', points: 1, label: L('Yüksek solunum hızı (yaşa göre)', 'Yüksək tənəffüs sürəti (yaşa görə)'), hint: L('≤50y ≥25/dk, >50y ≥30/dk', '≤50y ≥25/dəq, >50y ≥30/dəq') },
    { id: 'tachy', type: 'boolean', points: 1, label: L('Taşikardi ≥ 125/dk', 'Taxikardiya ≥ 125/dəq') },
    { id: 'confusion', type: 'boolean', points: 1, label: L('Yeni konfüzyon', 'Yeni konfuziya') },
    { id: 'oxygen', type: 'boolean', points: 2, label: L('Düşük oksijen (yaşa göre)', 'Aşağı oksigen (yaşa görə)'), hint: L('≤50y PaO₂<70/SpO₂≤93, >50y PaO₂<60/SpO₂≤90', '≤50y PaO₂<70/SpO₂≤93, >50y PaO₂<60/SpO₂≤90') },
    { id: 'ph', type: 'boolean', points: 2, label: L('Arteriyel pH < 7.35', 'Arterial pH < 7.35') },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0–2; düşük destek ihtiyacı riski.', '0–2; aşağı dəstək ehtiyacı riski.') },
    { min: 3, max: 4, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('3–4; orta risk; yakın izlem.', '3–4; orta risk; yaxın izləmə.') },
    { min: 5, max: 11, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥5; yüksek risk; yoğun bakım değerlendir.', '≥5; yüksək risk; reanimasiya qiymətləndir.') },
  ],
  references: ['Charles PGP, et al. SMART-COP: a tool for predicting the need for intensive respiratory or vasopressor support in CAP. Clin Infect Dis. 2008.'],
};
