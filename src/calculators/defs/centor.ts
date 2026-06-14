import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Centor (McIsaac) — streptokokal farenjit olasılığı. */
export const centor: Calculator = {
  id: 'centor',
  category: 'infect',
  code: 'Centor',
  kind: 'additive',
  max: 5,
  name: L('Centor (McIsaac) Skoru', 'Centor (McIsaac) Balı'),
  subtitle: L('Streptokokal farenjit olasılığı', 'Streptokok faringit ehtimalı'),
  use: L(
    'Boğaz ağrısında A grubu streptokok olasılığını tahmin ederek test / antibiyotik kararını yönlendirir.',
    'Boğaz ağrısında A qrupu streptokok ehtimalını qiymətləndirib test / antibiotik qərarını yönləndirir.',
  ),
  evidence: L('McIsaac ve ark., 1998 (yaşa göre düzeltilmiş Centor).', 'McIsaac və ark., 1998 (yaşa görə düzəldilmiş Centor).'),
  metricLabel: L('Strep olasılığı', 'Strep ehtimalı'),
  inputs: [
    { id: 'exudate', type: 'boolean', points: 1, label: L('Tonsiller eksuda / şişlik', 'Tonzillar eksudat / şişkinlik') },
    { id: 'nodes', type: 'boolean', points: 1, label: L('Hassas ön servikal LAP', 'Həssas ön servikal LAP') },
    { id: 'fever', type: 'boolean', points: 1, label: L('Ateş > 38°C', 'Hərarət > 38°C') },
    { id: 'cough', type: 'boolean', points: 1, label: L('Öksürük YOK', 'Öskürək YOX') },
    { id: 'age', type: 'single', default: 0, label: L('Yaş', 'Yaş'), options: [
      { value: 'a', points: 1, label: L('3–14', '3–14') },
      { value: 'b', points: 0, label: L('15–44', '15–44') },
      { value: 'c', points: -1, label: L('≥ 45', '≥ 45') },
    ] },
  ],
  bands: [
    { min: -1, max: 1, tone: 'low', riskLabel: L('Düşük', 'Aşağı'),
      advice: L('Düşük olasılık; test / antibiyotik genellikle gerekmez.', 'Aşağı ehtimal; test / antibiotik adətən lazım deyil.') },
    { min: 2, max: 3, tone: 'mid', riskLabel: L('Orta', 'Orta'),
      advice: L('Hızlı antijen testi / kültür önerilir.', 'Sürətli antigen testi / kultura tövsiyə olunur.') },
    { min: 4, max: 5, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('Yüksek olasılık; test pozitifse antibiyotik düşün.', 'Yüksək ehtimal; test müsbətdirsə antibiotik düşün.') },
  ],
  references: ['McIsaac WJ, et al. A clinical score to reduce unnecessary antibiotic use in pharyngitis. CMAJ. 1998.'],
};
