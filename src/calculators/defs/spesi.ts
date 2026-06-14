import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** sPESI — basitleştirilmiş pulmoner emboli mortalite riski. */
export const spesi: Calculator = {
  id: 'spesi',
  category: 'vte',
  code: 'sPESI',
  kind: 'additive',
  max: 6,
  name: L('Basitleştirilmiş PESI', 'Sadələşdirilmiş PESI'),
  subtitle: L('PE 30 günlük mortalite', 'PE 30 günlük ölüm'),
  use: L(
    'Akut pulmoner embolide 30 günlük mortalite riskini ve ayaktan tedavi uygunluğunu değerlendirir.',
    'Kəskin pulmoner emboliyada 30 günlük ölüm riskini və ambulator müalicə uyğunluğunu qiymətləndirir.',
  ),
  evidence: L('Jiménez ve ark., 2010 (Arch Intern Med).', 'Jiménez və ark., 2010 (Arch Intern Med).'),
  metricLabel: L('30 günlük mortalite', '30 günlük ölüm'),
  inputs: [
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş > 80', 'Yaş > 80') },
    { id: 'cancer', type: 'boolean', points: 1, label: L('Kanser öyküsü', 'Xərçəng anamnezi') },
    { id: 'cardiopulm', type: 'boolean', points: 1, label: L('Kronik kalp / akciğer hastalığı', 'Xroniki ürək / ağ ciyər xəstəliyi') },
    { id: 'hr', type: 'boolean', points: 1, label: L('Kalp hızı ≥ 110/dk', 'Ürək döyüntüsü ≥ 110/dəq') },
    { id: 'sbp', type: 'boolean', points: 1, label: L('SKB < 100 mmHg', 'SAT < 100 mmHg') },
    { id: 'sao2', type: 'boolean', points: 1, label: L('SaO₂ < %90', 'SaO₂ < 90%') },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('~%1.0', '~1.0%'),
      advice: L('Düşük risk; ayaktan / erken taburculuk düşünülebilir.', 'Aşağı risk; ambulator / erkən evə buraxılma düşünülə bilər.') },
    { min: 1, max: 6, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('~%10.9', '~10.9%'),
      advice: L('Yüksek risk; hastanede izlem / ileri değerlendirme.', 'Yüksək risk; xəstəxanada izləmə / irəli qiymətləndirmə.') },
  ],
  references: ['Jiménez D, et al. Simplification of the PESI for prognostication in PE. Arch Intern Med. 2010.'],
};
