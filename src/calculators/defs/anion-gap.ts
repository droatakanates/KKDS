import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Anyon açığı — metabolik asidoz yaklaşımı. */
export const anionGap: Calculator = {
  id: 'anion-gap',
  category: 'neph',
  code: 'Anyon Açığı',
  kind: 'formula',
  name: L('Anyon Açığı', 'Anion Boşluğu'),
  subtitle: L('Metabolik asidoz ayrımı', 'Metabolik asidoz ayrımı'),
  use: L(
    'Metabolik asidozu yüksek ve normal anyon açıklı olarak ayırır (AG = Na − [Cl + HCO₃]).',
    'Metabolik asidozu yüksək və normal anion boşluqlu kimi ayırır (AG = Na − [Cl + HCO₃]).',
  ),
  evidence: L('Normal aralık ~8–12 mEq/L (laboratuvara göre değişir).', 'Normal aralıq ~8–12 mEq/L (laboratoriyadan asılı).'),
  metricLabel: L('Yorum', 'Şərh'),
  resultUnit: L('mEq/L', 'mEq/L'),
  inputs: [
    { id: 'na', type: 'number', placeholder: '140', min: 100, max: 180, step: 1, label: L('Sodyum', 'Natrium'), unit: L('mmol/L', 'mmol/L') },
    { id: 'cl', type: 'number', placeholder: '104', min: 60, max: 140, step: 1, label: L('Klorür', 'Xlor'), unit: L('mmol/L', 'mmol/L') },
    { id: 'hco3', type: 'number', placeholder: '24', min: 2, max: 50, step: 1, label: L('Bikarbonat', 'Bikarbonat'), unit: L('mmol/L', 'mmol/L') },
  ],
  formula: (v) => {
    const na = parseFloat(String(v.na));
    const cl = parseFloat(String(v.cl));
    const hco3 = parseFloat(String(v.hco3));
    if ([na, cl, hco3].some(Number.isNaN)) return null;
    return Math.round((na - (cl + hco3)) * 10) / 10;
  },
  bands: [
    { min: -100, max: 12, tone: 'low', riskLabel: L('Normal', 'Normal'),
      advice: L('Normal anyon açığı; asidoz varsa normal AG’li (örn. ishal, RTA).', 'Normal anion boşluğu; asidoz varsa normal AG-li (məs. ishal, RTA).') },
    { min: 12.001, max: 20, tone: 'mid', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('Yüksek anyon açığı; HAGMA araştır (laktat, ketoasidoz, toksinler, üremi).', 'Yüksək anion boşluğu; HAGMA araşdır (laktat, ketoasidoz, toksinlər, uremiya).') },
    { min: 20.001, max: 100000, tone: 'high', riskLabel: L('Belirgin yüksek', 'Nəzərəçarpan yüksək'),
      advice: L('Belirgin yüksek AG; acil HAGMA değerlendirmesi.', 'Nəzərəçarpan yüksək AG; təcili HAGMA qiymətləndirməsi.') },
  ],
  references: ['Emmett M, Narins RG. Clinical use of the anion gap. Medicine. 1977.'],
};
