import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** GOLD spirometrik sınıflama — KOAH hava akımı kısıtlılığı. */
export const gold: Calculator = {
  id: 'gold',
  category: 'pulm',
  code: 'GOLD',
  kind: 'formula',
  name: L('GOLD Spirometrik Sınıflama', 'GOLD Spirometrik Təsnifat'),
  subtitle: L('KOAH hava akımı derecesi', 'XOAX hava axını dərəcəsi'),
  use: L('KOAH’ta (FEV₁/FVC < 0.7) bronkodilatör sonrası FEV₁ % beklenene göre hava akımı kısıtlılığını derecelendirir.', 'XOAX-da (FEV₁/FVC < 0.7) bronxodilatatordan sonra FEV₁ % gözlənilənə görə hava axını məhdudluğunu dərəcələndirir.'),
  evidence: L('GOLD raporu. Yalnızca obstrüksiyon (FEV₁/FVC < 0.7) varlığında uygulanır.', 'GOLD hesabatı. Yalnız obstruksiya (FEV₁/FVC < 0.7) olduqda tətbiq olunur.'),
  metricLabel: L('GOLD evresi', 'GOLD mərhələsi'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'fev1', type: 'number', placeholder: '60', min: 10, max: 150, step: 1, label: L('FEV₁ (% beklenen)', 'FEV₁ (% gözlənilən)'), unit: L('%', '%') },
  ],
  formula: (v) => {
    const f = parseFloat(String(v.fev1));
    if (Number.isNaN(f)) return null;
    if (f >= 80) return 1;
    if (f >= 50) return 2;
    if (f >= 30) return 3;
    return 4;
  },
  bands: [
    { min: 1, max: 1, tone: 'low', riskLabel: L('GOLD 1 — Hafif', 'GOLD 1 — Yüngül'), metric: L('FEV₁ ≥ %80', 'FEV₁ ≥ 80%'), advice: L('Hafif hava akımı kısıtlılığı.', 'Yüngül hava axını məhdudluğu.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('GOLD 2 — Orta', 'GOLD 2 — Orta'), metric: L('FEV₁ %50–79', 'FEV₁ 50–79%'), advice: L('Orta hava akımı kısıtlılığı.', 'Orta hava axını məhdudluğu.') },
    { min: 3, max: 3, tone: 'high', riskLabel: L('GOLD 3 — Ağır', 'GOLD 3 — Ağır'), metric: L('FEV₁ %30–49', 'FEV₁ 30–49%'), advice: L('Ağır hava akımı kısıtlılığı.', 'Ağır hava axını məhdudluğu.') },
    { min: 4, max: 4, tone: 'high', riskLabel: L('GOLD 4 — Çok ağır', 'GOLD 4 — Çox ağır'), metric: L('FEV₁ < %30', 'FEV₁ < 30%'), advice: L('Çok ağır hava akımı kısıtlılığı.', 'Çox ağır hava axını məhdudluğu.') },
  ],
  references: ['Global Initiative for Chronic Obstructive Lung Disease (GOLD) report.'],
};
