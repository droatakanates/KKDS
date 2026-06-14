import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Wells Skoru — Derin Ven Trombozu (DVT) klinik olasılığı. */
export const wellsDvt: Calculator = {
  id: 'wells-dvt',
  category: 'vte',
  code: 'Wells (DVT)',
  kind: 'additive',
  max: 8,
  name: L('Wells Skoru (DVT)', 'Wells Balı (DVT)'),
  subtitle: L('Derin ven trombozu olasılığı', 'Dərin vena trombozu ehtimalı'),
  use: L(
    'Bacakta DVT şüphesinde klinik ön-test olasılığını belirler; D-dimer / ultrason kararını yönlendirir.',
    'Ayaqda DVT şübhəsində klinik öncə-test ehtimalını müəyyən edir; D-dimer / ultrasəs qərarını yönləndirir.',
  ),
  evidence: L('Wells ve ark., 2003 (NEJM).', 'Wells və ark., 2003 (NEJM).'),
  metricLabel: L('Klinik olasılık', 'Klinik ehtimal'),
  inputs: [
    { id: 'cancer', type: 'boolean', points: 1, label: L('Aktif kanser', 'Aktiv xərçəng') },
    { id: 'paralysis', type: 'boolean', points: 1, label: L('Paralizi / parezi / alçı', 'İflic / parez / gips') },
    { id: 'bedrest', type: 'boolean', points: 1, label: L('≥3 gün yatak / son 12 hf cerrahi', '≥3 gün yataq / son 12 həftə cərrahiyyə') },
    { id: 'tender', type: 'boolean', points: 1, label: L('Derin ven trasesinde hassasiyet', 'Dərin vena boyunca həssaslıq') },
    { id: 'swelling', type: 'boolean', points: 1, label: L('Tüm bacakta şişlik', 'Bütün ayaqda şişkinlik') },
    { id: 'calf', type: 'boolean', points: 1, label: L('Baldır çapı >3 cm fazla', 'Baldır çevrəsi >3 sm çox') },
    { id: 'edema', type: 'boolean', points: 1, label: L('Gode bırakan ödem', 'Çuxur qoyan ödem') },
    { id: 'veins', type: 'boolean', points: 1, label: L('Yüzeyel kollateral venler', 'Səthi kollateral venalar') },
    { id: 'prevdvt', type: 'boolean', points: 1, label: L('Önceki belgelenmiş DVT', 'Əvvəlki sənədləşmiş DVT') },
    { id: 'alt', type: 'boolean', points: -2, label: L('DVT kadar olası alternatif tanı', 'DVT qədər ehtimallı alternativ diaqnoz') },
  ],
  bands: [
    { min: -2, max: 0, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('DVT olası değil', 'DVT ehtimalsız'),
      advice: L('D-dimer ile dışla; düşük olasılık.', 'D-dimer ilə istisna et; aşağı ehtimal.') },
    { min: 1, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'), metric: L('Orta olasılık', 'Orta ehtimal'),
      advice: L('D-dimer ve/veya kompresyon ultrasonu.', 'D-dimer və/və ya kompressiya ultrasəsi.') },
    { min: 3, max: 8, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('DVT olası', 'DVT ehtimallı'),
      advice: L('Kompresyon ultrasonu önerilir.', 'Kompressiya ultrasəsi tövsiyə olunur.') },
  ],
  references: ['Wells PS, et al. Evaluation of D-dimer in suspected DVT. NEJM. 2003.'],
};
