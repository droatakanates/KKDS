import type { Calculator } from '../types';

/** Wells Skoru — Derin Ven Trombozu (DVT) olasılığı. */
export const wellsDvt: Calculator = {
  id: 'wells-dvt',
  category: 'emergency',
  shortName: 'Wells (DVT)',
  name: {
    tr: 'Wells Skoru (DVT)',
    az: 'Wells Balı (DVT)',
    'tr-CY': 'Wells Skoru (DVT)',
  },
  description: {
    tr: 'Derin ven trombozu klinik olasılığını değerlendirir.',
    az: 'Dərin vena trombozunun klinik ehtimalını qiymətləndirir.',
    'tr-CY': 'Derin ven trombozu klinik olasılığını değerlendirir.',
  },
  resultUnit: { tr: 'puan', az: 'bal', 'tr-CY': 'puan' },
  inputs: [
    {
      id: 'cancer',
      type: 'boolean',
      points: 1,
      label: { tr: 'Aktif kanser', az: 'Aktiv xərçəng', 'tr-CY': 'Aktif kanser' },
    },
    {
      id: 'paralysis',
      type: 'boolean',
      points: 1,
      label: {
        tr: 'Paralizi / parezi veya alçı immobilizasyonu',
        az: 'İflic / parez və ya gips immobilizasiyası',
        'tr-CY': 'Paralizi / parezi veya alçı immobilizasyonu',
      },
    },
    {
      id: 'bedridden',
      type: 'boolean',
      points: 1,
      label: {
        tr: '≥3 gün yatak istirahati veya son 12 haftada majör cerrahi',
        az: '≥3 gün yataq istirahəti və ya son 12 həftədə böyük cərrahiyyə',
        'tr-CY': '≥3 gün yatak istirahati veya son 12 haftada majör cerrahi',
      },
    },
    {
      id: 'tenderness',
      type: 'boolean',
      points: 1,
      label: {
        tr: 'Derin ven trasesi boyunca hassasiyet',
        az: 'Dərin vena boyunca həssaslıq',
        'tr-CY': 'Derin ven trasesi boyunca hassasiyet',
      },
    },
    {
      id: 'swelling-leg',
      type: 'boolean',
      points: 1,
      label: { tr: 'Tüm bacakta şişlik', az: 'Bütün ayaqda şişkinlik', 'tr-CY': 'Tüm bacakta şişlik' },
    },
    {
      id: 'calf',
      type: 'boolean',
      points: 1,
      label: {
        tr: 'Baldır çevresi diğerinden >3 cm fazla',
        az: 'Baldır çevrəsi digərindən >3 sm çox',
        'tr-CY': 'Baldır çevresi diğerinden >3 cm fazla',
      },
    },
    {
      id: 'edema',
      type: 'boolean',
      points: 1,
      label: { tr: 'Gode bırakan ödem (semptomatik bacak)', az: 'Çuxur qoyan ödem (simptomatik ayaq)', 'tr-CY': 'Gode bırakan ödem (semptomatik bacak)' },
    },
    {
      id: 'veins',
      type: 'boolean',
      points: 1,
      label: { tr: 'Yüzeyel kollateral venler', az: 'Səthi kollateral venalar', 'tr-CY': 'Yüzeyel kollateral venler' },
    },
    {
      id: 'previous-dvt',
      type: 'boolean',
      points: 1,
      label: { tr: 'Daha önce belgelenmiş DVT', az: 'Əvvəllər sənədləşdirilmiş DVT', 'tr-CY': 'Daha önce belgelenmiş DVT' },
    },
    {
      id: 'alternative',
      type: 'boolean',
      points: -2,
      label: {
        tr: 'DVT kadar olası alternatif tanı',
        az: 'DVT qədər ehtimallı alternativ diaqnoz',
        'tr-CY': 'DVT kadar olası alternatif tanı',
      },
    },
  ],
  bands: [
    {
      min: -2,
      max: 0,
      severity: 'low',
      label: { tr: 'Düşük olasılık', az: 'Aşağı ehtimal', 'tr-CY': 'Düşük olasılık' },
      detail: {
        tr: 'DVT düşük olasılıklı. D-dimer ile dışlama düşünülebilir.',
        az: 'DVT aşağı ehtimallı. D-dimer ilə istisna düşünülə bilər.',
        'tr-CY': 'DVT düşük olasılıklı. D-dimer ile dışlama düşünülebilir.',
      },
    },
    {
      min: 1,
      max: 2,
      severity: 'moderate',
      label: { tr: 'Orta olasılık', az: 'Orta ehtimal', 'tr-CY': 'Orta olasılık' },
      detail: {
        tr: 'Orta olasılık. D-dimer ve/veya ultrason önerilir.',
        az: 'Orta ehtimal. D-dimer və/və ya ultrasəs tövsiyə olunur.',
        'tr-CY': 'Orta olasılık. D-dimer ve/veya ultrason önerilir.',
      },
    },
    {
      min: 3,
      max: 9,
      severity: 'high',
      label: { tr: 'Yüksek olasılık', az: 'Yüksək ehtimal', 'tr-CY': 'Yüksek olasılık' },
      detail: {
        tr: 'Yüksek olasılık. Doğrudan kompresyon ultrasonu önerilir.',
        az: 'Yüksək ehtimal. Birbaşa kompressiya ultrasəsi tövsiyə olunur.',
        'tr-CY': 'Yüksek olasılık. Doğrudan kompresyon ultrasonu önerilir.',
      },
    },
  ],
  references: [
    'Wells PS, et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. NEJM. 2003.',
  ],
};
