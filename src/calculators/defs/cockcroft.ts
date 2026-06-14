import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Cockcroft-Gault — kreatinin klirensi (ilaç doz ayarı). */
export const cockcroft: Calculator = {
  id: 'cockcroft',
  category: 'neph',
  code: 'Cockcroft-Gault',
  kind: 'formula',
  name: L('Cockcroft-Gault KrKl', 'Cockcroft-Gault KrKl'),
  subtitle: L('Kreatinin klirensi', 'Kreatinin klirensi'),
  use: L(
    'Kreatinin klirensini tahmin ederek böbrek fonksiyonunu ve ilaç doz ayarını destekler.',
    'Kreatinin klirensini qiymətləndirərək böyrək funksiyasını və dərman doza tənzimini dəstəkləyir.',
  ),
  evidence: L('Cockcroft & Gault, 1976 (Nephron).', 'Cockcroft & Gault, 1976 (Nephron).'),
  metricLabel: L('Böbrek fonksiyonu', 'Böyrək funksiyası'),
  resultUnit: L('mL/dk', 'mL/dəq'),
  inputs: [
    { id: 'age', type: 'number', placeholder: '60', min: 18, max: 110, step: 1, label: L('Yaş', 'Yaş'), unit: L('yıl', 'il') },
    { id: 'weight', type: 'number', placeholder: '70', min: 30, max: 200, step: 1, label: L('Kilo', 'Çəki'), unit: L('kg', 'kq') },
    { id: 'scr', type: 'number', placeholder: '1.0', min: 0.1, max: 15, step: 0.1, label: L('Serum kreatinin', 'Serum kreatinin'), unit: L('mg/dL', 'mg/dL') },
    { id: 'sex', type: 'choice', default: 'm', label: L('Cinsiyet', 'Cins'), options: [
      { value: 'm', label: L('Erkek', 'Kişi') }, { value: 'f', label: L('Kadın', 'Qadın') } ] },
  ],
  formula: (v) => {
    const age = parseFloat(String(v.age));
    const wt = parseFloat(String(v.weight));
    const scr = parseFloat(String(v.scr));
    if ([age, wt, scr].some(Number.isNaN) || scr <= 0) return null;
    let crcl = ((140 - age) * wt) / (72 * scr);
    if (v.sex === 'f') crcl *= 0.85;
    return Math.round(crcl);
  },
  bands: [
    { min: 60, max: 100000, tone: 'low', riskLabel: L('Normal / hafif', 'Normal / yüngül'),
      advice: L('≥60 mL/dk; çoğu ilaç için doz ayarı gerekmez.', '≥60 mL/dəq; əksər dərmanlar üçün doza tənzimi lazım deyil.') },
    { min: 30, max: 59.999, tone: 'mid', riskLabel: L('Orta azalma', 'Orta azalma'),
      advice: L('30–59 mL/dk; renal atılımlı ilaçlarda doz ayarı.', '30–59 mL/dəq; renal ifrazlı dərmanlarda doza tənzimi.') },
    { min: 0, max: 29.999, tone: 'high', riskLabel: L('Ağır azalma', 'Ağır azalma'),
      advice: L('<30 mL/dk; ileri böbrek yetmezliği, dikkatli dozlama.', '<30 mL/dəq; irəli böyrək çatışmazlığı, diqqətli dozlama.') },
  ],
  references: ['Cockcroft DW, Gault MH. Prediction of creatinine clearance from serum creatinine. Nephron. 1976.'],
};
