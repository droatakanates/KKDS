import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** SIRS — sistemik inflamatuvar yanıt sendromu kriterleri. */
export const sirs: Calculator = {
  id: 'sirs',
  category: 'infect',
  code: 'SIRS',
  kind: 'additive',
  max: 4,
  name: L('SIRS Kriterleri', 'SIRS Meyarları'),
  subtitle: L('Sistemik inflamatuvar yanıt', 'Sistemik iltihabi cavab'),
  use: L(
    'Sistemik inflamatuvar yanıtı tanımlar; enfeksiyon varlığında sepsis düşündürür (≥2 kriter).',
    'Sistemik iltihabi cavabı təyin edir; infeksiya zamanı sepsisi düşündürür (≥2 meyar).',
  ),
  evidence: L('ACCP/SCCM Konsensus, 1992.', 'ACCP/SCCM Konsensus, 1992.'),
  metricLabel: L('Durum', 'Vəziyyət'),
  inputs: [
    { id: 'temp', type: 'boolean', points: 1, label: L('Ateş > 38°C veya < 36°C', 'Hərarət > 38°C və ya < 36°C') },
    { id: 'hr', type: 'boolean', points: 1, label: L('Kalp hızı > 90/dk', 'Ürək döyüntüsü > 90/dəq') },
    { id: 'rr', type: 'boolean', points: 1, label: L('Solunum > 20 veya PaCO₂ < 32', 'Tənəffüs > 20 və ya PaCO₂ < 32') },
    { id: 'wbc', type: 'boolean', points: 1, label: L('Lökosit > 12k, < 4k veya %10 band', 'Lökosit > 12k, < 4k və ya 10% çubuq') },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('SIRS yok', 'SIRS yox'),
      advice: L('SIRS kriteri karşılanmadı (<2).', 'SIRS meyarı qarşılanmadı (<2).') },
    { min: 2, max: 4, tone: 'mid', riskLabel: L('SIRS var', 'SIRS var'),
      advice: L('≥2 kriter; enfeksiyon varlığında sepsis açısından değerlendir.', '≥2 meyar; infeksiya zamanı sepsis baxımından qiymətləndir.') },
  ],
  references: ['Bone RC, et al. ACCP/SCCM Consensus Conference. Chest. 1992.'],
};
