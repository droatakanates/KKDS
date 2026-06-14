import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** HEART skoru — acil serviste göğüs ağrısı risk tabakalaması. */
export const heart: Calculator = {
  id: 'heart',
  category: 'cardio',
  code: 'HEART',
  kind: 'additive',
  max: 10,
  name: L('HEART Skoru', 'HEART Balı'),
  subtitle: L('Göğüs ağrısı MACE riski', 'Sinə ağrısı MACE riski'),
  use: L('Acil servise göğüs ağrısıyla başvuran hastada 6 haftalık majör kardiyak olay (MACE) riskini öngörür.', 'Sinə ağrısı ilə təcili xidmətə müraciət edən xəstədə 6 həftəlik MACE riskini proqnozlaşdırır.'),
  evidence: L('Six ve ark., 2008; Backus ve ark., 2013.', 'Six və ark., 2008; Backus və ark., 2013.'),
  metricLabel: L('6 haftalık MACE', '6 həftəlik MACE'),
  inputs: [
    { id: 'history', type: 'single', default: 0, label: L('Öykü', 'Anamnez'), options: [
      { value: 0, points: 0, label: L('Hafif şüpheli', 'Az şübhəli') }, { value: 1, points: 1, label: L('Orta şüpheli', 'Orta şübhəli') }, { value: 2, points: 2, label: L('Yüksek şüpheli', 'Yüksək şübhəli') } ] },
    { id: 'ecg', type: 'single', default: 0, label: L('EKG', 'EKQ'), options: [
      { value: 0, points: 0, label: L('Normal', 'Normal') }, { value: 1, points: 1, label: L('Non-spesifik repolarizasyon', 'Qeyri-spesifik repolarizasiya') }, { value: 2, points: 2, label: L('Belirgin ST deviasyonu', 'Aşkar ST deviasiyası') } ] },
    { id: 'age', type: 'single', default: 0, label: L('Yaş', 'Yaş'), options: [
      { value: 0, points: 0, label: L('< 45', '< 45') }, { value: 1, points: 1, label: L('45–64', '45–64') }, { value: 2, points: 2, label: L('≥ 65', '≥ 65') } ] },
    { id: 'risk', type: 'single', default: 0, label: L('Risk faktörleri', 'Risk amilləri'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('1–2 faktör', '1–2 amil') }, { value: 2, points: 2, label: L('≥3 faktör veya bilinen ateroskleroz', '≥3 amil və ya məlum ateroskleroz') } ] },
    { id: 'troponin', type: 'single', default: 0, label: L('Troponin', 'Troponin'), options: [
      { value: 0, points: 0, label: L('≤ normal', '≤ normal') }, { value: 1, points: 1, label: L('1–3× normal', '1–3× normal') }, { value: 2, points: 2, label: L('> 3× normal', '> 3× normal') } ] },
  ],
  bands: [
    { min: 0, max: 3, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('~%1.7', '~1.7%'), advice: L('Düşük risk; erken taburculuk düşünülebilir.', 'Aşağı risk; erkən evə buraxılma düşünülə bilər.') },
    { min: 4, max: 6, tone: 'mid', riskLabel: L('Orta', 'Orta'), metric: L('~%16.6', '~16.6%'), advice: L('Orta risk; gözlem, seri troponin, ileri tetkik.', 'Orta risk; müşahidə, seriyalı troponin, əlavə müayinə.') },
    { min: 7, max: 10, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('~%50', '~50%'), advice: L('Yüksek risk; erken invaziv strateji değerlendir.', 'Yüksək risk; erkən invaziv strategiya qiymətləndir.') },
  ],
  references: ['Backus BE, et al. A prospective validation of the HEART score. Int J Cardiol. 2013.'],
};
