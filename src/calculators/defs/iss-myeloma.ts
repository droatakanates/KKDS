import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** ISS — multipl miyelom evreleme (β2-mikroglobulin + albümin). */
export const issMyeloma: Calculator = {
  id: 'iss-myeloma',
  category: 'heme',
  code: 'ISS (MM)',
  kind: 'formula',
  name: L('ISS Miyelom Evrelemesi', 'ISS Mieloma Mərhələləməsi'),
  subtitle: L('Multipl miyelom evresi', 'Multipl mieloma mərhələsi'),
  use: L('Multipl miyelomda β2-mikroglobulin ve albümine göre evre (I–III) belirler.', 'Multipl mielomada β2-mikroqlobulin və albuminə görə mərhələ (I–III) müəyyən edir.'),
  evidence: L('Greipp ve ark., 2005 (J Clin Oncol).', 'Greipp və ark., 2005 (J Clin Oncol).'),
  metricLabel: L('Evre', 'Mərhələ'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'b2m', type: 'number', placeholder: '3.0', min: 0.5, max: 50, step: 0.1, label: L('β2-mikroglobulin', 'β2-mikroqlobulin'), unit: L('mg/L', 'mg/L') },
    { id: 'alb', type: 'number', placeholder: '3.5', min: 1, max: 6, step: 0.1, label: L('Albümin', 'Albumin'), unit: L('g/dL', 'q/dL') },
  ],
  formula: (v) => {
    const b2m = parseFloat(String(v.b2m));
    const alb = parseFloat(String(v.alb));
    if ([b2m, alb].some(Number.isNaN)) return null;
    if (b2m >= 5.5) return 3;
    if (b2m < 3.5 && alb >= 3.5) return 1;
    return 2;
  },
  bands: [
    { min: 1, max: 1, tone: 'low', riskLabel: L('Evre I', 'Mərhələ I'), metric: L('β2M <3.5 ve albümin ≥3.5', 'β2M <3.5 və albumin ≥3.5'),
      advice: L('En iyi prognoz; medyan sağkalım en uzun.', 'Ən yaxşı proqnoz; median sağqalma ən uzun.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Evre II', 'Mərhələ II'), metric: L('Evre I ve III dışı', 'Mərhələ I və III xarici'),
      advice: L('Ara prognoz.', 'Aralıq proqnoz.') },
    { min: 3, max: 3, tone: 'high', riskLabel: L('Evre III', 'Mərhələ III'), metric: L('β2M ≥5.5', 'β2M ≥5.5'),
      advice: L('En kötü prognoz.', 'Ən pis proqnoz.') },
  ],
  references: ['Greipp PR, et al. International Staging System for multiple myeloma. J Clin Oncol. 2005.'],
};
