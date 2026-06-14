import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Osmolar açık — ölçülen ve hesaplanan osmolalite farkı. */
export const osmolarGap: Calculator = {
  id: 'osmolar-gap',
  category: 'neph',
  code: 'Osmolar Açık',
  kind: 'formula',
  name: L('Osmolar Açık', 'Osmolyar Boşluq'),
  subtitle: L('Toksik alkol değerlendirmesi', 'Toksik alkoqol qiymətləndirməsi'),
  use: L(
    'Ölçülen ile hesaplanan osmolalite farkını verir; yüksekse ölçülemeyen osmoller (metanol, etilen glikol) düşündürür.',
    'Ölçülən ilə hesablanan osmolyarlıq fərqini verir; yüksəkdirsə ölçülə bilməyən osmollar (metanol, etilen qlikol) düşündürür.',
  ),
  evidence: L('Hesaplanan osm = 2×Na + glukoz/18 + BUN/2.8. Normal açık < 10.', 'Hesablanan osm = 2×Na + qlükoza/18 + BUN/2.8. Normal boşluq < 10.'),
  metricLabel: L('Yorum', 'Şərh'),
  resultUnit: L('mOsm/kg', 'mOsm/kg'),
  inputs: [
    { id: 'measured', type: 'number', placeholder: '290', min: 250, max: 400, step: 1, label: L('Ölçülen osmolalite', 'Ölçülən osmolyarlıq'), unit: L('mOsm/kg', 'mOsm/kg') },
    { id: 'na', type: 'number', placeholder: '140', min: 100, max: 180, step: 1, label: L('Sodyum', 'Natrium'), unit: L('mmol/L', 'mmol/L') },
    { id: 'glucose', type: 'number', placeholder: '90', min: 30, max: 1500, step: 1, label: L('Glukoz', 'Qlükoza'), unit: L('mg/dL', 'mg/dL') },
    { id: 'bun', type: 'number', placeholder: '14', min: 2, max: 200, step: 1, label: L('BUN', 'BUN'), unit: L('mg/dL', 'mg/dL') },
  ],
  formula: (v) => {
    const measured = parseFloat(String(v.measured));
    const na = parseFloat(String(v.na));
    const glu = parseFloat(String(v.glucose));
    const bun = parseFloat(String(v.bun));
    if ([measured, na, glu, bun].some(Number.isNaN)) return null;
    const calc = 2 * na + glu / 18 + bun / 2.8;
    return Math.round((measured - calc) * 10) / 10;
  },
  bands: [
    { min: -100, max: 10, tone: 'low', riskLabel: L('Normal', 'Normal'),
      advice: L('< 10; anlamlı ölçülemeyen osmol beklenmez.', '< 10; əhəmiyyətli ölçülə bilməyən osmol gözlənilmir.') },
    { min: 10.001, max: 20, tone: 'mid', riskLabel: L('Sınırda', 'Sərhəddə'),
      advice: L('10–20; klinikle birlikte değerlendir, tekrarla.', '10–20; klinika ilə birlikdə qiymətləndir, təkrarla.') },
    { min: 20.001, max: 100000, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('> 20; toksik alkol (metanol, etilen glikol) açısından acil değerlendir.', '> 20; toksik alkoqol (metanol, etilen qlikol) baxımından təcili qiymətləndir.') },
  ],
  references: ['Purssell RA, et al. Derivation of the osmole gap. Ann Emerg Med. 2001.'],
};
