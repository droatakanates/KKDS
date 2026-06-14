import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** FIB-4 indeksi — karaciğer fibrozisi tahmini. */
export const fib4: Calculator = {
  id: 'fib4',
  category: 'gastro',
  code: 'FIB-4',
  kind: 'formula',
  name: L('FIB-4 İndeksi', 'FIB-4 İndeksi'),
  subtitle: L('Karaciğer fibrozisi', 'Qaraciyər fibrozu'),
  use: L(
    'Yaş, AST, ALT ve trombositten ileri karaciğer fibrozisi olasılığını tahmin eder.',
    'Yaş, AST, ALT və trombositdən irəli qaraciyər fibrozu ehtimalını qiymətləndirir.',
  ),
  evidence: L('Sterling ve ark., 2006 (Hepatology).', 'Sterling və ark., 2006 (Hepatology).'),
  metricLabel: L('Fibrozis olasılığı', 'Fibroz ehtimalı'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'age', type: 'number', placeholder: '50', min: 18, max: 100, step: 1, label: L('Yaş', 'Yaş'), unit: L('yıl', 'il') },
    { id: 'ast', type: 'number', placeholder: '40', min: 5, max: 1000, step: 1, label: L('AST', 'AST'), unit: L('U/L', 'U/L') },
    { id: 'alt', type: 'number', placeholder: '40', min: 5, max: 1000, step: 1, label: L('ALT', 'ALT'), unit: L('U/L', 'U/L') },
    { id: 'plt', type: 'number', placeholder: '200', min: 10, max: 800, step: 1, label: L('Trombosit', 'Trombosit'), unit: L('10⁹/L', '10⁹/L') },
  ],
  formula: (v) => {
    const age = parseFloat(String(v.age));
    const ast = parseFloat(String(v.ast));
    const alt = parseFloat(String(v.alt));
    const plt = parseFloat(String(v.plt));
    if ([age, ast, alt, plt].some(Number.isNaN) || plt <= 0 || alt <= 0) return null;
    return Math.round(((age * ast) / (plt * Math.sqrt(alt))) * 100) / 100;
  },
  bands: [
    { min: 0, max: 1.449, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('İleri fibrozis olası değil', 'İrəli fibroz ehtimalsız'),
      advice: L('< 1.45; ileri fibrozis düşük olasılıkla dışlanır.', '< 1.45; irəli fibroz aşağı ehtimalla istisna edilir.') },
    { min: 1.45, max: 3.25, tone: 'mid', riskLabel: L('Belirsiz', 'Qeyri-müəyyən'), metric: L('Ara bölge', 'Aralıq zona'),
      advice: L('Ara değer; elastografi / ileri değerlendirme düşün.', 'Aralıq dəyər; elastoqrafiya / əlavə qiymətləndirmə düşün.') },
    { min: 3.251, max: 100000, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('İleri fibrozis olası', 'İrəli fibroz ehtimallı'),
      advice: L('> 3.25; ileri fibrozis olasılığı yüksek, sevk değerlendir.', '> 3.25; irəli fibroz ehtimalı yüksək, yönləndirmə düşün.') },
  ],
  references: ['Sterling RK, et al. Development of a simple noninvasive index (FIB-4). Hepatology. 2006.'],
};
