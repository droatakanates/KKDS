import type { Calculator } from '../types';

/** CURB-65 — toplum kökenli pnömoni şiddet skoru. */
export const curb65: Calculator = {
  id: 'curb65',
  category: 'pulmonology',
  shortName: 'CURB-65',
  name: {
    tr: 'CURB-65 Pnömoni Şiddet Skoru',
    az: 'CURB-65 Pnevmoniya Ağırlıq Balı',
    'tr-CY': 'CURB-65 Pnömoni Şiddet Skoru',
  },
  description: {
    tr: 'Toplum kökenli pnömonide mortalite riskini ve yatış kararını destekler.',
    az: 'İcma mənşəli pnevmoniyada ölüm riskini və hospitalizasiya qərarını dəstəkləyir.',
    'tr-CY': 'Toplum kökenli pnömonide mortalite riskini ve yatış kararını destekler.',
  },
  resultUnit: { tr: 'puan', az: 'bal', 'tr-CY': 'puan' },
  inputs: [
    {
      id: 'confusion',
      type: 'boolean',
      points: 1,
      label: { tr: 'Konfüzyon', az: 'Konfuziya', 'tr-CY': 'Konfüzyon' },
      help: {
        tr: 'Yeni başlayan bilinç bulanıklığı / oryantasyon bozukluğu.',
        az: 'Yeni başlayan şüur dumanlanması / oriyentasiya pozğunluğu.',
        'tr-CY': 'Yeni başlayan bilinç bulanıklığı / oryantasyon bozukluğu.',
      },
    },
    {
      id: 'urea',
      type: 'boolean',
      points: 1,
      label: { tr: 'Üre > 7 mmol/L (BUN > 19 mg/dL)', az: 'Sidik cövhəri > 7 mmol/L (BUN > 19 mg/dL)', 'tr-CY': 'Üre > 7 mmol/L (BUN > 19 mg/dL)' },
    },
    {
      id: 'resp',
      type: 'boolean',
      points: 1,
      label: { tr: 'Solunum sayısı ≥ 30/dk', az: 'Tənəffüs sayı ≥ 30/dəq', 'tr-CY': 'Solunum sayısı ≥ 30/dk' },
    },
    {
      id: 'bp',
      type: 'boolean',
      points: 1,
      label: {
        tr: 'SKB < 90 veya DKB ≤ 60 mmHg',
        az: 'SAT < 90 və ya DAT ≤ 60 mmHg',
        'tr-CY': 'SKB < 90 veya DKB ≤ 60 mmHg',
      },
    },
    {
      id: 'age',
      type: 'boolean',
      points: 1,
      label: { tr: 'Yaş ≥ 65', az: 'Yaş ≥ 65', 'tr-CY': 'Yaş ≥ 65' },
    },
  ],
  bands: [
    {
      min: 0,
      max: 1,
      severity: 'low',
      label: { tr: 'Düşük risk', az: 'Aşağı risk', 'tr-CY': 'Düşük risk' },
      detail: {
        tr: 'Düşük mortalite (~%1.5). Ayaktan tedavi düşünülebilir.',
        az: 'Aşağı ölüm riski (~1.5%). Ambulator müalicə düşünülə bilər.',
        'tr-CY': 'Düşük mortalite (~%1.5). Ayaktan tedavi düşünülebilir.',
      },
    },
    {
      min: 2,
      max: 2,
      severity: 'moderate',
      label: { tr: 'Orta risk', az: 'Orta risk', 'tr-CY': 'Orta risk' },
      detail: {
        tr: 'Orta mortalite (~%9). Kısa yatış / yakın takip önerilir.',
        az: 'Orta ölüm riski (~9%). Qısa hospitalizasiya / yaxın izləmə tövsiyə olunur.',
        'tr-CY': 'Orta mortalite (~%9). Kısa yatış / yakın takip önerilir.',
      },
    },
    {
      min: 3,
      max: 5,
      severity: 'high',
      label: { tr: 'Yüksek risk', az: 'Yüksək risk', 'tr-CY': 'Yüksek risk' },
      detail: {
        tr: 'Yüksek mortalite (%15–40). Hastaneye yatış, ≥4 için yoğun bakım değerlendirilmeli.',
        az: 'Yüksək ölüm riski (15–40%). Hospitalizasiya, ≥4 üçün reanimasiya qiymətləndirilməlidir.',
        'tr-CY': 'Yüksek mortalite (%15–40). Hastaneye yatış, ≥4 için yoğun bakım değerlendirilmeli.',
      },
    },
  ],
  references: [
    'Lim WS, et al. Defining community acquired pneumonia severity. Thorax. 2003.',
  ],
};
