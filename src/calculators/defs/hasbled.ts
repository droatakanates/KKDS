import type { Calculator } from '../types';

const yesNo = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** HAS-BLED — antikoagülasyon altında majör kanama riski. */
export const hasbled: Calculator = {
  id: 'hasbled',
  category: 'cardio',
  code: 'HAS-BLED',
  kind: 'additive',
  max: 9,
  name: yesNo('HAS-BLED Kanama Skoru', 'HAS-BLED Qanaxma Balı'),
  subtitle: yesNo('Antikoagülanda kanama riski', 'Antikoaqulyantda qanaxma riski'),
  use: yesNo(
    'Atriyal fibrilasyonda oral antikoagülasyon altında 1 yıllık majör kanama riskini tahmin eder.',
    'Atriyal fibrilyasyonda oral antikoaqulyasiya altında 1 illik böyük qanaxma riskini qiymətləndirir.',
  ),
  evidence: yesNo('Pisters ve ark., 2010 (Chest).', 'Pisters və ark., 2010 (Chest).'),
  metricLabel: yesNo('Kanama riski', 'Qanaxma riski'),
  inputs: [
    { id: 'htn', type: 'boolean', points: 1, label: yesNo('Hipertansiyon (SKB >160)', 'Hipertoniya (SAT >160)') },
    { id: 'renal', type: 'boolean', points: 1, label: yesNo('Anormal böbrek fonksiyonu', 'Anormal böyrək funksiyası'), hint: yesNo('Diyaliz, transplant veya Kr >2.26 mg/dL', 'Dializ, transplant və ya Kr >2.26 mg/dL') },
    { id: 'liver', type: 'boolean', points: 1, label: yesNo('Anormal karaciğer fonksiyonu', 'Anormal qaraciyər funksiyası'), hint: yesNo('Siroz veya bilirubin >2× / AST-ALT >3×', 'Siroz və ya bilirubin >2× / AST-ALT >3×') },
    { id: 'stroke', type: 'boolean', points: 1, label: yesNo('İnme öyküsü', 'İnsult anamnezi') },
    { id: 'bleeding', type: 'boolean', points: 1, label: yesNo('Kanama öyküsü / yatkınlığı', 'Qanaxma anamnezi / meyli') },
    { id: 'inr', type: 'boolean', points: 1, label: yesNo('Labil INR', 'Qeyri-sabit INR'), hint: yesNo('TTR <%60', 'TTR <60%') },
    { id: 'elderly', type: 'boolean', points: 1, label: yesNo('Yaş > 65', 'Yaş > 65') },
    { id: 'drugs', type: 'boolean', points: 1, label: yesNo('İlaç (antiplatelet / NSAİİ)', 'Dərman (antiaqreqant / QSİİ)') },
    { id: 'alcohol', type: 'boolean', points: 1, label: yesNo('Alkol (≥8 birim/hafta)', 'Alkoqol (≥8 vahid/həftə)') },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: yesNo('Düşük', 'Aşağı'), metric: yesNo('Düşük kanama riski', 'Aşağı qanaxma riski'),
      advice: yesNo('Antikoagülasyon görece güvenli; rutin takip.', 'Antikoaqulyasiya nisbətən təhlükəsiz; rutin izləmə.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: yesNo('Orta', 'Orta'), metric: yesNo('Orta kanama riski', 'Orta qanaxma riski'),
      advice: yesNo('Dikkatli izlem; düzeltilebilir faktörleri gözden geçir.', 'Diqqətli izləmə; düzəldilə bilən amilləri nəzərdən keçir.') },
    { min: 3, max: 9, tone: 'high', riskLabel: yesNo('Yüksek', 'Yüksək'), metric: yesNo('Yüksek kanama riski', 'Yüksək qanaxma riski'),
      advice: yesNo('≥3: yüksek risk. Düzeltilebilir faktörleri ele al, yakın izlem.', '≥3: yüksək risk. Düzəldilə bilən amilləri aradan qaldır, yaxın izləmə.') },
  ],
  references: ['Pisters R, et al. A novel user-friendly bleeding risk score (HAS-BLED). Chest. 2010.'],
};
