import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** NAFLD Fibrozis Skoru. */
export const nafld: Calculator = {
  id: 'nafld-fs',
  category: 'gastro',
  code: 'NAFLD-FS',
  kind: 'formula',
  name: L('NAFLD Fibrozis Skoru', 'NAFLD Fibroz Balı'),
  subtitle: L('Yağlı karaciğerde fibrozis', 'Yağlı qaraciyərdə fibroz'),
  use: L(
    'Non-alkolik yağlı karaciğer hastalığında ileri fibrozis (F3–F4) olasılığını tahmin eder.',
    'Qeyri-alkoqol yağlı qaraciyər xəstəliyində irəli fibroz (F3–F4) ehtimalını qiymətləndirir.',
  ),
  evidence: L('Angulo ve ark., 2007 (Hepatology).', 'Angulo və ark., 2007 (Hepatology).'),
  metricLabel: L('Fibrozis olasılığı', 'Fibroz ehtimalı'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'age', type: 'number', placeholder: '50', min: 18, max: 100, step: 1, label: L('Yaş', 'Yaş'), unit: L('yıl', 'il') },
    { id: 'bmi', type: 'number', placeholder: '30', min: 15, max: 60, step: 0.1, label: L('VKİ', 'BKİ'), unit: L('kg/m²', 'kq/m²') },
    { id: 'ifg', type: 'choice', default: 'n', label: L('Bozulmuş AKŞ / Diyabet', 'Pozulmuş ANŞ / Diabet'), options: [
      { value: 'n', label: L('Hayır', 'Xeyr') }, { value: 'y', label: L('Evet', 'Bəli') } ] },
    { id: 'ast', type: 'number', placeholder: '40', min: 5, max: 1000, step: 1, label: L('AST', 'AST'), unit: L('U/L', 'U/L') },
    { id: 'alt', type: 'number', placeholder: '40', min: 5, max: 1000, step: 1, label: L('ALT', 'ALT'), unit: L('U/L', 'U/L') },
    { id: 'plt', type: 'number', placeholder: '200', min: 10, max: 800, step: 1, label: L('Trombosit', 'Trombosit'), unit: L('10⁹/L', '10⁹/L') },
    { id: 'alb', type: 'number', placeholder: '4.0', min: 1, max: 6, step: 0.1, label: L('Albümin', 'Albumin'), unit: L('g/dL', 'q/dL') },
  ],
  formula: (v) => {
    const age = parseFloat(String(v.age));
    const bmi = parseFloat(String(v.bmi));
    const ast = parseFloat(String(v.ast));
    const alt = parseFloat(String(v.alt));
    const plt = parseFloat(String(v.plt));
    const alb = parseFloat(String(v.alb));
    if ([age, bmi, ast, alt, plt, alb].some(Number.isNaN) || alt <= 0) return null;
    const ifg = v.ifg === 'y' ? 1 : 0;
    const s = -1.675 + 0.037 * age + 0.094 * bmi + 1.13 * ifg + 0.99 * (ast / alt) - 0.013 * plt - 0.66 * alb;
    return Math.round(s * 100) / 100;
  },
  bands: [
    { min: -100, max: -1.456, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('F0–F2', 'F0–F2'),
      advice: L('< −1.455; ileri fibrozis düşük olasılıkla dışlanır.', '< −1.455; irəli fibroz aşağı ehtimalla istisna edilir.') },
    { min: -1.455, max: 0.676, tone: 'mid', riskLabel: L('Belirsiz', 'Qeyri-müəyyən'), metric: L('Ara bölge', 'Aralıq zona'),
      advice: L('Ara değer; elastografi / biyopsi düşün.', 'Aralıq dəyər; elastoqrafiya / biopsiya düşün.') },
    { min: 0.677, max: 100000, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('F3–F4', 'F3–F4'),
      advice: L('> 0.676; ileri fibrozis olasılığı yüksek.', '> 0.676; irəli fibroz ehtimalı yüksək.') },
  ],
  references: ['Angulo P, et al. The NAFLD fibrosis score. Hepatology. 2007.'],
};
