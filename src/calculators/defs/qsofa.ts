import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** qSOFA — yatak başı sepsis kötü prognoz taraması. */
export const qsofa: Calculator = {
  id: 'qsofa',
  category: 'infect',
  code: 'qSOFA',
  kind: 'additive',
  max: 3,
  name: L('qSOFA', 'qSOFA'),
  subtitle: L('Sepsis kötü prognoz taraması', 'Sepsis pis proqnoz taraması'),
  use: L(
    'Enfeksiyon şüphesi olan hastalarda kötü prognoz / organ disfonksiyonu riskini yatak başı tarar.',
    'İnfeksiya şübhəsi olan xəstələrdə pis proqnoz / orqan disfunksiyası riskini yataq başı tarayır.',
  ),
  evidence: L('Sepsis-3, Singer ve ark., 2016 (JAMA).', 'Sepsis-3, Singer və ark., 2016 (JAMA).'),
  metricLabel: L('Risk', 'Risk'),
  inputs: [
    { id: 'rr', type: 'boolean', points: 1, label: L('Solunum ≥ 22/dk', 'Tənəffüs ≥ 22/dəq') },
    { id: 'ams', type: 'boolean', points: 1, label: L('Bilinç değişikliği (GKS < 15)', 'Şüur dəyişikliyi (GKS < 15)') },
    { id: 'sbp', type: 'boolean', points: 1, label: L('SKB ≤ 100 mmHg', 'SAT ≤ 100 mmHg') },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Düşük', 'Aşağı'),
      advice: L('Kötü prognoz olasılığı düşük; klinik izlem.', 'Pis proqnoz ehtimalı aşağı; klinik izləmə.') },
    { min: 2, max: 3, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('≥2: yüksek risk. Sepsis açısından değerlendir, organ disfonksiyonunu araştır.', '≥2: yüksək risk. Sepsis baxımından qiymətləndir, orqan disfunksiyasını araşdır.') },
  ],
  references: ['Singer M, et al. The Third International Consensus Definitions for Sepsis (Sepsis-3). JAMA. 2016.'],
};
