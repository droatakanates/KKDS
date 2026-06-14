import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Padua prediksiyon skoru — yatan medikal hastada VTE riski. */
export const padua: Calculator = {
  id: 'padua',
  category: 'vte',
  code: 'Padua',
  kind: 'additive',
  max: 20,
  name: L('Padua Prediksiyon Skoru', 'Padua Proqnoz Balı'),
  subtitle: L('Yatan hastada VTE riski', 'Yatan xəstədə VTE riski'),
  use: L('Hospitalize medikal hastalarda venöz tromboemboli riskini ve profilaksi ihtiyacını değerlendirir (≥4 yüksek risk).', 'Hospitalizə medikal xəstələrdə VTE riskini və profilaktika ehtiyacını qiymətləndirir (≥4 yüksək risk).'),
  evidence: L('Barbar ve ark., 2010 (J Thromb Haemost).', 'Barbar və ark., 2010 (J Thromb Haemost).'),
  metricLabel: L('VTE riski', 'VTE riski'),
  inputs: [
    { id: 'cancer', type: 'boolean', points: 3, label: L('Aktif kanser', 'Aktiv xərçəng') },
    { id: 'prevvte', type: 'boolean', points: 3, label: L('Önceki VTE', 'Əvvəlki VTE') },
    { id: 'mobility', type: 'boolean', points: 3, label: L('Azalmış mobilite (≥3 gün)', 'Azalmış mobillik (≥3 gün)') },
    { id: 'thrombophilia', type: 'boolean', points: 3, label: L('Bilinen trombofili', 'Məlum trombofiliya') },
    { id: 'trauma', type: 'boolean', points: 2, label: L('Son 1 ayda travma/cerrahi', 'Son 1 ayda travma/cərrahiyyə') },
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş ≥ 70', 'Yaş ≥ 70') },
    { id: 'cardioresp', type: 'boolean', points: 1, label: L('Kalp ve/veya solunum yetmezliği', 'Ürək və/və ya tənəffüs çatışmazlığı') },
    { id: 'miStroke', type: 'boolean', points: 1, label: L('Akut MI veya iskemik inme', 'Kəskin Mİ və ya işemik insult') },
    { id: 'infection', type: 'boolean', points: 1, label: L('Akut enfeksiyon / romatolojik hastalık', 'Kəskin infeksiya / revmatoloji xəstəlik') },
    { id: 'obesity', type: 'boolean', points: 1, label: L('Obezite (VKİ ≥ 30)', 'Piylənmə (BKİ ≥ 30)') },
    { id: 'hormonal', type: 'boolean', points: 1, label: L('Süregelen hormonal tedavi', 'Davam edən hormonal müalicə') },
  ],
  bands: [
    { min: 0, max: 3, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('< 4; düşük VTE riski; rutin farmakolojik profilaksi genellikle gerekmez.', '< 4; aşağı VTE riski; rutin farmakoloji profilaktika adətən lazım deyil.') },
    { min: 4, max: 20, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥ 4; yüksek risk; kontrendikasyon yoksa farmakolojik tromboprofilaksi.', '≥ 4; yüksək risk; əks-göstəriş yoxdursa farmakoloji tromboprofilaktika.') },
  ],
  references: ['Barbar S, et al. A risk assessment model for VTE in medical patients (Padua). J Thromb Haemost. 2010.'],
};
