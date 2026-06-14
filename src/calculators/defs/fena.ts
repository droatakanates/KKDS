import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** FENa — fraksiyonel sodyum atılımı (AKI ayrımı). */
export const fena: Calculator = {
  id: 'fena',
  category: 'neph',
  code: 'FENa',
  kind: 'formula',
  name: L('Fraksiyonel Na Atılımı', 'Fraksion Na İfrazı'),
  subtitle: L('Akut böbrek hasarı ayrımı', 'Kəskin böyrək zədəsi ayrımı'),
  use: L(
    'Akut böbrek hasarında prerenal ile intrensek (ATN) ayrımını destekler (<%1 prerenal, >%2 intrensek).',
    'Kəskin böyrək zədəsində prerenal ilə intrinsik (ATN) ayrımını dəstəkləyir (<1% prerenal, >2% intrinsik).',
  ),
  evidence: L('Diüretik kullanımı ve KBH sonucu etkiler; klinikle yorumla.', 'Diuretik istifadəsi və BÇX nəticəni təsir edir; klinika ilə şərh et.'),
  metricLabel: L('Yorum', 'Şərh'),
  resultUnit: L('%', '%'),
  inputs: [
    { id: 'una', type: 'number', placeholder: '20', min: 1, max: 300, step: 1, label: L('İdrar sodyumu', 'Sidik natriumu'), unit: L('mmol/L', 'mmol/L') },
    { id: 'pna', type: 'number', placeholder: '140', min: 100, max: 180, step: 1, label: L('Plazma sodyumu', 'Plazma natriumu'), unit: L('mmol/L', 'mmol/L') },
    { id: 'ucr', type: 'number', placeholder: '100', min: 5, max: 500, step: 1, label: L('İdrar kreatinini', 'Sidik kreatinini'), unit: L('mg/dL', 'mg/dL') },
    { id: 'pcr', type: 'number', placeholder: '2.0', min: 0.1, max: 20, step: 0.1, label: L('Plazma kreatinini', 'Plazma kreatinini'), unit: L('mg/dL', 'mg/dL') },
  ],
  formula: (v) => {
    const una = parseFloat(String(v.una));
    const pna = parseFloat(String(v.pna));
    const ucr = parseFloat(String(v.ucr));
    const pcr = parseFloat(String(v.pcr));
    if ([una, pna, ucr, pcr].some(Number.isNaN) || pna <= 0 || ucr <= 0) return null;
    return Math.round(((una * pcr) / (pna * ucr)) * 100 * 100) / 100;
  },
  bands: [
    { min: -100, max: 0.999, tone: 'low', riskLabel: L('Prerenal', 'Prerenal'),
      advice: L('< %1; prerenal azotemi lehine (hipovolemi, düşük perfüzyon).', '< 1%; prerenal azotemiya xeyrinə (hipovolemiya, aşağı perfuziya).') },
    { min: 1, max: 2, tone: 'mid', riskLabel: L('Belirsiz', 'Qeyri-müəyyən'),
      advice: L('%1–2; ara değer, klinikle birlikte yorumla.', '1–2%; aralıq dəyər, klinika ilə birlikdə şərh et.') },
    { min: 2.001, max: 100000, tone: 'high', riskLabel: L('İntrensek', 'İntrinsik'),
      advice: L('> %2; intrensek hasar (ATN) lehine.', '> 2%; intrinsik zədə (ATN) xeyrinə.') },
  ],
  references: ['Espinel CH. The FENa test. JAMA. 1976.'],
};
