import type { Calculator } from '../types';

/** CHA₂DS₂-VASc — atriyal fibrilasyonda inme riski. */
export const chadsvasc: Calculator = {
  id: 'chadsvasc',
  category: 'cardiology',
  shortName: 'CHA₂DS₂-VASc',
  name: {
    tr: 'CHA₂DS₂-VASc İnme Risk Skoru',
    az: 'CHA₂DS₂-VASc İnsult Risk Balı',
    'tr-CY': 'CHA₂DS₂-VASc İnme Risk Skoru',
  },
  description: {
    tr: 'Non-valvüler atriyal fibrilasyonda inme riskini ve antikoagülasyon kararını destekler.',
    az: 'Qeyri-valvulyar atriyal fibrilyasyonda insult riskini və antikoaqulyasiya qərarını dəstəkləyir.',
    'tr-CY': 'Non-valvüler atriyal fibrilasyonda inme riskini ve antikoagülasyon kararını destekler.',
  },
  resultUnit: { tr: 'puan', az: 'bal', 'tr-CY': 'puan' },
  inputs: [
    {
      id: 'chf',
      type: 'boolean',
      points: 1,
      label: { tr: 'Konjestif kalp yetmezliği', az: 'Konqestiv ürək çatışmazlığı', 'tr-CY': 'Konjestif kalp yetmezliği' },
    },
    {
      id: 'htn',
      type: 'boolean',
      points: 1,
      label: { tr: 'Hipertansiyon', az: 'Hipertoniya', 'tr-CY': 'Hipertansiyon' },
    },
    {
      id: 'age',
      type: 'single',
      label: { tr: 'Yaş', az: 'Yaş', 'tr-CY': 'Yaş' },
      options: [
        { value: 'lt65', points: 0, label: { tr: '< 65', az: '< 65', 'tr-CY': '< 65' } },
        { value: '65to74', points: 1, label: { tr: '65–74', az: '65–74', 'tr-CY': '65–74' } },
        { value: 'ge75', points: 2, label: { tr: '≥ 75', az: '≥ 75', 'tr-CY': '≥ 75' } },
      ],
    },
    {
      id: 'dm',
      type: 'boolean',
      points: 1,
      label: { tr: 'Diabetes mellitus', az: 'Şəkərli diabet', 'tr-CY': 'Diabetes mellitus' },
    },
    {
      id: 'stroke',
      type: 'boolean',
      points: 2,
      label: {
        tr: 'İnme / GİA / tromboemboli öyküsü',
        az: 'İnsult / KTH / tromboemboliya anamnezi',
        'tr-CY': 'İnme / GİA / tromboemboli öyküsü',
      },
    },
    {
      id: 'vascular',
      type: 'boolean',
      points: 1,
      label: { tr: 'Vasküler hastalık', az: 'Damar xəstəliyi', 'tr-CY': 'Vasküler hastalık' },
    },
    {
      id: 'sex',
      type: 'single',
      label: { tr: 'Cinsiyet', az: 'Cins', 'tr-CY': 'Cinsiyet' },
      options: [
        { value: 'male', points: 0, label: { tr: 'Erkek', az: 'Kişi', 'tr-CY': 'Erkek' } },
        { value: 'female', points: 1, label: { tr: 'Kadın', az: 'Qadın', 'tr-CY': 'Kadın' } },
      ],
    },
  ],
  bands: [
    {
      min: 0,
      max: 0,
      severity: 'low',
      label: { tr: 'Düşük risk', az: 'Aşağı risk', 'tr-CY': 'Düşük risk' },
      detail: {
        tr: 'Antikoagülasyon genellikle önerilmez.',
        az: 'Antikoaqulyasiya adətən tövsiyə olunmur.',
        'tr-CY': 'Antikoagülasyon genellikle önerilmez.',
      },
    },
    {
      min: 1,
      max: 1,
      severity: 'moderate',
      label: { tr: 'Orta risk', az: 'Orta risk', 'tr-CY': 'Orta risk' },
      detail: {
        tr: 'Oral antikoagülasyon değerlendirilebilir (özellikle erkekte).',
        az: 'Oral antikoaqulyasiya düşünülə bilər (xüsusilə kişilərdə).',
        'tr-CY': 'Oral antikoagülasyon değerlendirilebilir (özellikle erkekte).',
      },
    },
    {
      min: 2,
      max: 9,
      severity: 'high',
      label: { tr: 'Yüksek risk', az: 'Yüksək risk', 'tr-CY': 'Yüksek risk' },
      detail: {
        tr: 'Oral antikoagülasyon önerilir (kontrendikasyon yoksa).',
        az: 'Oral antikoaqulyasiya tövsiyə olunur (əks-göstəriş yoxdursa).',
        'tr-CY': 'Oral antikoagülasyon önerilir (kontrendikasyon yoksa).',
      },
    },
  ],
  references: [
    'Lip GYH, et al. Refining clinical risk stratification in atrial fibrillation. Chest. 2010.',
  ],
};
