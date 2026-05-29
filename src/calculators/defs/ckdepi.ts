import type { Calculator, InputValues } from '../types';

/** eGFR — CKD-EPI 2021 (ırk değişkeni içermeyen) denklemi. */
export const ckdepi: Calculator = {
  id: 'ckdepi',
  category: 'neph',
  code: 'eGFR',
  kind: 'formula',
  resultUnit: { tr: 'mL/dk/1.73m²', az: 'mL/dəq/1.73m²', 'tr-CY': 'mL/dk/1.73m²' },
  name: { tr: 'eGFR (CKD-EPI 2021)', az: 'eGFR (CKD-EPI 2021)', 'tr-CY': 'eGFR (CKD-EPI 2021)' },
  subtitle: { tr: 'Tahmini böbrek fonksiyonu', az: 'Təxmini böyrək funksiyası', 'tr-CY': 'Tahmini böbrek fonksiyonu' },
  use: {
    tr: 'Serum kreatininden tahmini GFR hesaplayarak böbrek fonksiyonunu değerlendirir ve KBH evresini belirler.',
    az: 'Serum kreatininindən təxmini GFR hesablayaraq böyrək funksiyasını qiymətləndirir və BÇX mərhələsini müəyyən edir.',
    'tr-CY': 'Serum kreatininden tahmini GFR hesaplayarak böbrek fonksiyonunu değerlendirir ve KBH evresini belirler.',
  },
  evidence: {
    tr: 'Inker ve ark., 2021 (NEJM). Irk değişkeni içermeyen güncel CKD-EPI denklemi.',
    az: 'Inker və ark., 2021 (NEJM). İrq dəyişəni olmayan güncəl CKD-EPI tənliyi.',
    'tr-CY': 'Inker ve ark., 2021 (NEJM). Irk değişkeni içermeyen güncel CKD-EPI denklemi.',
  },
  metricLabel: { tr: 'KBH evresi', az: 'BÇX mərhələsi', 'tr-CY': 'KBH evresi' },
  inputs: [
    { id: 'scr', type: 'number', placeholder: '1.0', min: 0.1, max: 20, step: 0.1,
      label: { tr: 'Serum kreatinin', az: 'Serum kreatinin', 'tr-CY': 'Serum kreatinin' },
      unit: { tr: 'mg/dL', az: 'mg/dL', 'tr-CY': 'mg/dL' } },
    { id: 'age', type: 'number', placeholder: '60', min: 18, max: 110, step: 1,
      label: { tr: 'Yaş', az: 'Yaş', 'tr-CY': 'Yaş' },
      unit: { tr: 'yıl', az: 'il', 'tr-CY': 'yıl' } },
    { id: 'sex', type: 'choice', default: 'f',
      label: { tr: 'Cinsiyet', az: 'Cins', 'tr-CY': 'Cinsiyet' },
      options: [
        { value: 'f', label: { tr: 'Kadın', az: 'Qadın', 'tr-CY': 'Kadın' } },
        { value: 'm', label: { tr: 'Erkek', az: 'Kişi', 'tr-CY': 'Erkek' } },
      ] },
  ],
  formula: (v: InputValues) => {
    const scr = parseFloat(String(v.scr));
    const age = parseFloat(String(v.age));
    if (!scr || !age) return null;
    const female = v.sex === 'f';
    const k = female ? 0.7 : 0.9;
    const a = female ? -0.241 : -0.302;
    const mn = Math.min(scr / k, 1);
    const mx = Math.max(scr / k, 1);
    let e = 142 * Math.pow(mn, a) * Math.pow(mx, -1.2) * Math.pow(0.9938, age);
    if (female) e *= 1.012;
    return e;
  },
  bands: [
    { min: 90, max: 100000, tone: 'low',
      riskLabel: { tr: 'Evre G1', az: 'Mərhələ G1', 'tr-CY': 'Evre G1' },
      metric: { tr: 'Normal/yüksek', az: 'Normal/yüksək', 'tr-CY': 'Normal/yüksek' },
      advice: { tr: 'Böbrek fonksiyonu korunmuş.', az: 'Böyrək funksiyası qorunub.', 'tr-CY': 'Böbrek fonksiyonu korunmuş.' } },
    { min: 60, max: 89.999, tone: 'low',
      riskLabel: { tr: 'Evre G2', az: 'Mərhələ G2', 'tr-CY': 'Evre G2' },
      metric: { tr: 'Hafif azalma', az: 'Yüngül azalma', 'tr-CY': 'Hafif azalma' },
      advice: { tr: 'Böbrek fonksiyonu korunmuş.', az: 'Böyrək funksiyası qorunub.', 'tr-CY': 'Böbrek fonksiyonu korunmuş.' } },
    { min: 45, max: 59.999, tone: 'mid',
      riskLabel: { tr: 'Evre G3a', az: 'Mərhələ G3a', 'tr-CY': 'Evre G3a' },
      metric: { tr: 'Hafif-orta azalma', az: 'Yüngül-orta azalma', 'tr-CY': 'Hafif-orta azalma' },
      advice: { tr: 'Nefroloji takibi; ilaç dozlarını gözden geçir.', az: 'Nefrologiya izləmi; dərman dozalarını yenidən nəzərdən keçir.', 'tr-CY': 'Nefroloji takibi; ilaç dozlarını gözden geçir.' } },
    { min: 30, max: 44.999, tone: 'mid',
      riskLabel: { tr: 'Evre G3b', az: 'Mərhələ G3b', 'tr-CY': 'Evre G3b' },
      metric: { tr: 'Orta-ağır azalma', az: 'Orta-ağır azalma', 'tr-CY': 'Orta-ağır azalma' },
      advice: { tr: 'Nefroloji takibi; ilaç dozlarını gözden geçir.', az: 'Nefrologiya izləmi; dərman dozalarını yenidən nəzərdən keçir.', 'tr-CY': 'Nefroloji takibi; ilaç dozlarını gözden geçir.' } },
    { min: 15, max: 29.999, tone: 'high',
      riskLabel: { tr: 'Evre G4', az: 'Mərhələ G4', 'tr-CY': 'Evre G4' },
      metric: { tr: 'Ağır azalma', az: 'Ağır azalma', 'tr-CY': 'Ağır azalma' },
      advice: { tr: 'İleri KBH; nefroloji sevki gerekli.', az: 'İrəliləmiş BÇX; nefrologiyaya yönləndirmə lazımdır.', 'tr-CY': 'İleri KBH; nefroloji sevki gerekli.' } },
    { min: 0, max: 14.999, tone: 'high',
      riskLabel: { tr: 'Evre G5', az: 'Mərhələ G5', 'tr-CY': 'Evre G5' },
      metric: { tr: 'Böbrek yetmezliği', az: 'Böyrək çatışmazlığı', 'tr-CY': 'Böbrek yetmezliği' },
      advice: { tr: 'İleri KBH; nefroloji sevki gerekli.', az: 'İrəliləmiş BÇX; nefrologiyaya yönləndirmə lazımdır.', 'tr-CY': 'İleri KBH; nefroloji sevki gerekli.' } },
  ],
  references: ['Inker LA, et al. New creatinine- and cystatin C-based equations. NEJM. 2021.'],
};
