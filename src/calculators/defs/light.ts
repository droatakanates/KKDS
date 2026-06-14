import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Light kriterleri — plevral sıvıda eksuda / transuda ayrımı. */
export const light: Calculator = {
  id: 'light',
  category: 'pulm',
  code: 'Light',
  kind: 'additive',
  max: 3,
  name: L('Light Kriterleri', 'Light Meyarları'),
  subtitle: L('Eksuda / transuda ayrımı', 'Eksudat / transudat ayrımı'),
  use: L('Plevral efüzyonu eksuda veya transuda olarak ayırır; herhangi bir kriter karşılanırsa eksuda.', 'Plevral efüzyonu eksudat və ya transudat kimi ayırır; hər hansı meyar qarşılanırsa eksudat.'),
  evidence: L('Light ve ark., 1972 (Ann Intern Med).', 'Light və ark., 1972 (Ann Intern Med).'),
  metricLabel: L('Yorum', 'Şərh'),
  inputs: [
    { id: 'protein', type: 'boolean', points: 1, label: L('Plevra/serum protein oranı > 0.5', 'Plevra/serum zülal nisbəti > 0.5') },
    { id: 'ldhratio', type: 'boolean', points: 1, label: L('Plevra/serum LDH oranı > 0.6', 'Plevra/serum LDH nisbəti > 0.6') },
    { id: 'ldhabs', type: 'boolean', points: 1, label: L('Plevra LDH > serum ULN’nin 2/3’ü', 'Plevra LDH > serum ULN-nin 2/3-ü') },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Transuda', 'Transudat'), advice: L('Hiçbir kriter yok; transuda (örn. kalp yetmezliği, siroz).', 'Heç bir meyar yox; transudat (məs. ürək çatışmazlığı, siroz).') },
    { min: 1, max: 3, tone: 'mid', riskLabel: L('Eksuda', 'Eksudat'), advice: L('≥1 kriter; eksuda; nedeni araştır (enfeksiyon, malignite, vb.).', '≥1 meyar; eksudat; səbəbi araşdır (infeksiya, malignite və s.).') },
  ],
  references: ['Light RW, et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med. 1972.'],
};
