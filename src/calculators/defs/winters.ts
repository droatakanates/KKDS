import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Winter formülü — metabolik asidozda beklenen pCO₂. */
export const winters: Calculator = {
  id: 'winters',
  category: 'neph',
  code: 'Winter',
  kind: 'formula',
  name: L('Winter Formülü', 'Winter Düsturu'),
  subtitle: L('Beklenen pCO₂', 'Gözlənilən pCO₂'),
  use: L(
    'Metabolik asidozda beklenen solunumsal kompansasyonu hesaplar (beklenen pCO₂ = 1.5 × HCO₃ + 8 ± 2).',
    'Metabolik asidozda gözlənilən tənəffüs kompensasiyasını hesablayır (gözlənilən pCO₂ = 1.5 × HCO₃ + 8 ± 2).',
  ),
  evidence: L('Albert, Dell & Winters, 1967.', 'Albert, Dell & Winters, 1967.'),
  metricLabel: L('Beklenen aralık', 'Gözlənilən aralıq'),
  resultUnit: L('mmHg', 'mmHg'),
  inputs: [
    { id: 'hco3', type: 'number', placeholder: '12', min: 2, max: 40, step: 1, label: L('Bikarbonat (HCO₃)', 'Bikarbonat (HCO₃)'), unit: L('mmol/L', 'mmol/L') },
  ],
  formula: (v) => {
    const hco3 = parseFloat(String(v.hco3));
    if (Number.isNaN(hco3)) return null;
    return Math.round((1.5 * hco3 + 8) * 10) / 10;
  },
  bands: [
    { min: -100, max: 100000, tone: 'low', riskLabel: L('Beklenen pCO₂', 'Gözlənilən pCO₂'), metric: L('± 2 mmHg', '± 2 mmHg'),
      advice: L('Ölçülen pCO₂ bu aralıktaysa uygun kompansasyon; düşükse eşlik eden solunumsal alkaloz, yüksekse solunumsal asidoz düşün.', 'Ölçülən pCO₂ bu aralıqdadırsa uyğun kompensasiya; aşağıdırsa müşayiət edən tənəffüs alkalozu, yuxarıdırsa tənəffüs asidozu düşün.') },
  ],
  references: ['Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med. 1967.'],
};
