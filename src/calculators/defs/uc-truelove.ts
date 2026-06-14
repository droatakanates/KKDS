import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Truelove-Witts kriterleri — ülseratif kolit şiddet sınıflaması. */
export const ucTruelove: Calculator = {
  id: 'uc-truelove',
  category: 'gastro',
  code: 'Truelove-Witts',
  kind: 'formula',
  name: L('Truelove-Witts Kriterleri', 'Truelove-Witts Meyarları'),
  subtitle: L('ÜK şiddet sınıflaması', 'XK ağırlıq təsnifatı'),
  use: L('Ülseratif koliti hafif/orta/şiddetli olarak ayırır; akut şiddetli ÜK (ASUC) tanımının temelidir.', 'Xoralı koliti yüngül/orta/şiddətli kimi ayırır; kəskin şiddətli XK (ASUC) tərifinin əsasıdır.'),
  evidence: L('Truelove & Witts, 1955 (BMJ). Şiddetli: ≥6 kanlı dışkı + ≥1 sistemik bulgu.', 'Truelove & Witts, 1955 (BMJ). Şiddətli: ≥6 qanlı nəcis + ≥1 sistemik əlamət.'),
  metricLabel: L('Şiddet', 'Ağırlıq'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'stools', type: 'number', placeholder: '4', min: 0, max: 30, step: 1, label: L('Kanlı dışkı sayısı / gün', 'Qanlı nəcis sayı / gün') },
    { id: 'fever', type: 'boolean', points: 1, label: L('Ateş > 37.8°C', 'Hərarət > 37.8°C') },
    { id: 'tachy', type: 'boolean', points: 1, label: L('Nabız > 90/dk', 'Nəbz > 90/dəq') },
    { id: 'anemia', type: 'boolean', points: 1, label: L('Hemoglobin < 10.5 g/dL', 'Hemoglobin < 10.5 q/dL') },
    { id: 'esr', type: 'boolean', points: 1, label: L('ESR > 30 mm/saat', 'ESR > 30 mm/saat') },
  ],
  formula: (v) => {
    const stools = parseFloat(String(v.stools));
    if (Number.isNaN(stools)) return null;
    const systemic = [v.fever, v.tachy, v.anemia, v.esr].filter((x) => x === true).length;
    if (stools >= 6 && systemic >= 1) return 3; // şiddetli
    if (stools <= 4 && systemic === 0) return 1; // hafif
    return 2; // orta
  },
  bands: [
    { min: 1, max: 1, tone: 'low', riskLabel: L('Hafif', 'Yüngül'), metric: L('<4 dışkı, sistemik bulgu yok', '<4 nəcis, sistemik əlamət yox'), advice: L('Hafif hastalık; ayaktan tedavi sıklıkla uygundur.', 'Yüngül xəstəlik; ambulator müalicə çox vaxt uyğundur.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'), metric: L('Hafif ve şiddetli arası', 'Yüngül və şiddətli arası'), advice: L('Orta hastalık; yakın izlem.', 'Orta xəstəlik; yaxın izləmə.') },
    { min: 3, max: 3, tone: 'high', riskLabel: L('Şiddetli (ASUC)', 'Şiddətli (ASUC)'), metric: L('≥6 kanlı dışkı + sistemik', '≥6 qanlı nəcis + sistemik'), advice: L('Akut şiddetli ÜK; yatış, IV steroid, kurtarma tedavisi planı.', 'Kəskin şiddətli XK; hospitalizasiya, IV steroid, xilasedici müalicə planı.') },
  ],
  references: ['Truelove SC, Witts LJ. Cortisone in ulcerative colitis. BMJ. 1955.'],
};
