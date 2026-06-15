import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Hesaplanan serum osmolalitesi — sıvı/elektrolit ve toksikoloji değerlendirmesi. */
export const serumOsmolality: Calculator = {
  id: 'serum-osmolality',
  category: 'neph',
  code: 'Serum Osm',
  kind: 'formula',
  name: L('Serum Osmolalitesi', 'Serum Osmolyarlığı'),
  subtitle: L('Hesaplanan osmolalite', 'Hesablanan osmolyarlıq'),
  use: L(
    'Sodyum, glukoz ve BUN’dan hesaplanan serum osmolalitesini verir (2×Na + glukoz/18 + BUN/2.8). Hiper/hipoosmolar durum ve osmolar açık değerlendirmesinde kullanılır.',
    'Natrium, qlükoza və BUN-dan hesablanan serum osmolyarlığını verir (2×Na + qlükoza/18 + BUN/2.8). Hiper/hipoosmolyar vəziyyət və osmolyar boşluq qiymətləndirməsində istifadə olunur.',
  ),
  evidence: L('Hesaplanan osm = 2×Na + glukoz/18 + BUN/2.8. Normal aralık ~275–295 mOsm/kg.', 'Hesablanan osm = 2×Na + qlükoza/18 + BUN/2.8. Normal aralıq ~275–295 mOsm/kg.'),
  metricLabel: L('Yorum', 'Şərh'),
  resultUnit: L('mOsm/kg', 'mOsm/kg'),
  inputs: [
    { id: 'na', type: 'number', placeholder: '140', min: 100, max: 180, step: 1, label: L('Sodyum', 'Natrium'), unit: L('mmol/L', 'mmol/L') },
    { id: 'glucose', type: 'number', placeholder: '90', min: 30, max: 1500, step: 1, label: L('Glukoz', 'Qlükoza'), unit: L('mg/dL', 'mg/dL') },
    { id: 'bun', type: 'number', placeholder: '14', min: 2, max: 200, step: 1, label: L('BUN', 'BUN'), unit: L('mg/dL', 'mg/dL') },
  ],
  formula: (v) => {
    const na = parseFloat(String(v.na));
    const glu = parseFloat(String(v.glucose));
    const bun = parseFloat(String(v.bun));
    if ([na, glu, bun].some(Number.isNaN)) return null;
    return Math.round((2 * na + glu / 18 + bun / 2.8) * 10) / 10;
  },
  bands: [
    { min: -100, max: 274.999, tone: 'mid', riskLabel: L('Düşük (hipoosmolar)', 'Aşağı (hipoosmolyar)'),
      advice: L('< 275; hipoosmolalite; hiponatremi/su fazlası açısından değerlendir.', '< 275; hipoosmolyarlıq; hiponatremiya/su artıqlığı baxımından qiymətləndir.') },
    { min: 275, max: 295, tone: 'low', riskLabel: L('Normal', 'Normal'),
      advice: L('275–295 mOsm/kg; normal aralık.', '275–295 mOsm/kg; normal aralıq.') },
    { min: 295.001, max: 100000, tone: 'high', riskLabel: L('Yüksek (hiperosmolar)', 'Yüksək (hiperosmolyar)'),
      advice: L('> 295; hiperosmolalite; hipernatremi, hiperglisemi veya üremi açısından değerlendir.', '> 295; hiperosmolyarlıq; hipernatremiya, hiperqlikemiya və ya uremiya baxımından qiymətləndir.') },
  ],
  references: ['Rasouli M. Basic concepts and practical equations on osmolality. J Clin Lab Anal. 2016.'],
};
