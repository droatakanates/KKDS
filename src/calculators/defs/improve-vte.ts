import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** IMPROVE VTE risk skoru — hospitalize medikal hastada. */
export const improveVte: Calculator = {
  id: 'improve-vte',
  category: 'vte',
  code: 'IMPROVE VTE',
  kind: 'additive',
  max: 12,
  name: L('IMPROVE VTE Skoru', 'IMPROVE VTE Balı'),
  subtitle: L('Yatan hastada VTE riski', 'Yatan xəstədə VTE riski'),
  use: L('Hospitalize medikal hastalarda 3 aylık VTE riskini öngörür; profilaksi kararını destekler.', 'Hospitalizə medikal xəstələrdə 3 aylıq VTE riskini proqnozlaşdırır; profilaktika qərarını dəstəkləyir.'),
  evidence: L('Spyropoulos ve ark., 2011 (Chest).', 'Spyropoulos və ark., 2011 (Chest).'),
  metricLabel: L('VTE riski', 'VTE riski'),
  inputs: [
    { id: 'prevvte', type: 'boolean', points: 3, label: L('Önceki VTE', 'Əvvəlki VTE') },
    { id: 'thrombophilia', type: 'boolean', points: 2, label: L('Bilinen trombofili', 'Məlum trombofiliya') },
    { id: 'paralysis', type: 'boolean', points: 2, label: L('Alt ekstremite paralizisi', 'Aşağı ətraf iflici') },
    { id: 'cancer', type: 'boolean', points: 2, label: L('Aktif kanser', 'Aktiv xərçəng') },
    { id: 'immobil', type: 'boolean', points: 1, label: L('İmmobilizasyon ≥ 7 gün', 'İmmobilizasiya ≥ 7 gün') },
    { id: 'icu', type: 'boolean', points: 1, label: L('YBÜ / KBÜ yatışı', 'RŞ / KBŞ hospitalizasiyası') },
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş > 60', 'Yaş > 60') },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0–1; düşük risk; farmakolojik profilaksi genellikle gerekmez.', '0–1; aşağı risk; farmakoloji profilaktika adətən lazım deyil.') },
    { min: 2, max: 3, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('2–3; artmış risk; profilaksiyi değerlendir.', '2–3; artmış risk; profilaktikanı qiymətləndir.') },
    { min: 4, max: 12, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥ 4; yüksek risk; kontrendikasyon yoksa tromboprofilaksi.', '≥ 4; yüksək risk; əks-göstəriş yoxdursa tromboprofilaktika.') },
  ],
  references: ['Spyropoulos AC, et al. Predictive and associative models to identify hospitalized medical patients at risk for VTE (IMPROVE). Chest. 2011.'],
};
