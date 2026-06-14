import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** APRI — AST/Trombosit Oranı İndeksi (fibrozis). */
export const apri: Calculator = {
  id: 'apri',
  category: 'gastro',
  code: 'APRI',
  kind: 'formula',
  name: L('APRI Skoru', 'APRI Balı'),
  subtitle: L('AST/trombosit fibrozis indeksi', 'AST/trombosit fibroz indeksi'),
  use: L(
    'AST ve trombositten hepatik fibrozis / siroz olasılığını tahmin eder.',
    'AST və trombositdən hepatik fibroz / siroz ehtimalını qiymətləndirir.',
  ),
  evidence: L('Wai ve ark., 2003 (Hepatology).', 'Wai və ark., 2003 (Hepatology).'),
  metricLabel: L('Fibrozis olasılığı', 'Fibroz ehtimalı'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'ast', type: 'number', placeholder: '40', min: 5, max: 1000, step: 1, label: L('AST', 'AST'), unit: L('U/L', 'U/L') },
    { id: 'uln', type: 'number', placeholder: '40', min: 10, max: 80, step: 1, label: L('AST üst sınırı (ULN)', 'AST yuxarı həddi (ULN)'), unit: L('U/L', 'U/L') },
    { id: 'plt', type: 'number', placeholder: '200', min: 10, max: 800, step: 1, label: L('Trombosit', 'Trombosit'), unit: L('10⁹/L', '10⁹/L') },
  ],
  formula: (v) => {
    const ast = parseFloat(String(v.ast));
    const uln = parseFloat(String(v.uln));
    const plt = parseFloat(String(v.plt));
    if ([ast, uln, plt].some(Number.isNaN) || plt <= 0 || uln <= 0) return null;
    return Math.round(((ast / uln) / plt) * 100 * 100) / 100;
  },
  bands: [
    { min: 0, max: 0.499, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('Anlamlı fibrozis olası değil', 'Əhəmiyyətli fibroz ehtimalsız'),
      advice: L('< 0.5; anlamlı fibrozis düşük olasılık.', '< 0.5; əhəmiyyətli fibroz aşağı ehtimal.') },
    { min: 0.5, max: 1.5, tone: 'mid', riskLabel: L('Orta', 'Orta'), metric: L('Ara bölge', 'Aralıq zona'),
      advice: L('Ara değer; ileri değerlendirme önerilir.', 'Aralıq dəyər; əlavə qiymətləndirmə tövsiyə olunur.') },
    { min: 1.501, max: 100000, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('Siroz olası', 'Siroz ehtimallı'),
      advice: L('> 1.5; ileri fibrozis / siroz olasılığı yüksek.', '> 1.5; irəli fibroz / siroz ehtimalı yüksək.') },
  ],
  references: ['Wai CT, et al. A simple noninvasive index (APRI) to predict fibrosis. Hepatology. 2003.'],
};
