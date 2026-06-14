import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** PLASMIC skoru — TTP (ADAMTS13 eksikliği) olasılığı. */
export const plasmic: Calculator = {
  id: 'plasmic',
  category: 'heme',
  code: 'PLASMIC',
  kind: 'additive',
  max: 7,
  name: L('PLASMIC Skoru', 'PLASMIC Balı'),
  subtitle: L('TTP olasılığı', 'TTP ehtimalı'),
  use: L('Trombotik mikroanjiyopatide ağır ADAMTS13 eksikliği (TTP) olasılığını tahmin eder.', 'Trombotik mikroangiopatiyada ağır ADAMTS13 çatışmazlığı (TTP) ehtimalını qiymətləndirir.'),
  evidence: L('Bendapudi ve ark., 2017 (Lancet Haematol).', 'Bendapudi və ark., 2017 (Lancet Haematol).'),
  metricLabel: L('TTP olasılığı', 'TTP ehtimalı'),
  inputs: [
    { id: 'plt', type: 'boolean', points: 1, label: L('Trombosit < 30 ×10⁹/L', 'Trombosit < 30 ×10⁹/L') },
    { id: 'hemolysis', type: 'boolean', points: 1, label: L('Hemoliz bulgusu', 'Hemoliz əlaməti'), hint: L('Retikülosit >%2.5 / haptoglobin saptanamaz / indirekt bil >2', 'Retikulosit >2.5% / haptoglobin təyin olunmur / indirekt bil >2') },
    { id: 'nocancer', type: 'boolean', points: 1, label: L('Aktif kanser YOK', 'Aktiv xərçəng YOX') },
    { id: 'notransplant', type: 'boolean', points: 1, label: L('Organ/kök hücre nakli YOK', 'Orqan/kök hüceyrə transplantı YOX') },
    { id: 'mcv', type: 'boolean', points: 1, label: L('MCV < 90 fL', 'MCV < 90 fL') },
    { id: 'inr', type: 'boolean', points: 1, label: L('INR < 1.5', 'INR < 1.5') },
    { id: 'cr', type: 'boolean', points: 1, label: L('Kreatinin < 2.0 mg/dL', 'Kreatinin < 2.0 mg/dL') },
  ],
  bands: [
    { min: 0, max: 4, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0–4; TTP düşük olasılık; alternatif TMA nedenleri.', '0–4; TTP aşağı ehtimal; alternativ TMA səbəbləri.') },
    { min: 5, max: 5, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('5; orta olasılık; ADAMTS13 gönder, klinikle değerlendir.', '5; orta ehtimal; ADAMTS13 göndər, klinika ilə qiymətləndir.') },
    { min: 6, max: 7, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('6–7; yüksek olasılık; plazma değişimini geciktirme.', '6–7; yüksək ehtimal; plazma dəyişimini gecikdirmə.') },
  ],
  references: ['Bendapudi PK, et al. Derivation and validation of the PLASMIC score. Lancet Haematol. 2017.'],
};
