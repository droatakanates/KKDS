import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** mMRC dispne skalası. */
export const mmrc: Calculator = {
  id: 'mmrc',
  category: 'pulm',
  code: 'mMRC',
  kind: 'additive',
  max: 4,
  name: L('mMRC Dispne Skalası', 'mMRC Dispnoe Şkalası'),
  subtitle: L('Nefes darlığı derecesi', 'Təngnəfəslik dərəcəsi'),
  use: L('KOAH ve diğer solunum hastalıklarında nefes darlığının işlevsel etkisini derecelendirir.', 'XOAX və digər tənəffüs xəstəliklərində təngnəfəsliyin funksional təsirini dərəcələndirir.'),
  evidence: L('Modified Medical Research Council dispne skalası.', 'Modified Medical Research Council dispnoe şkalası.'),
  metricLabel: L('Derece', 'Dərəcə'),
  inputs: [
    { id: 'grade', type: 'single', default: 0, label: L('Derece', 'Dərəcə'), options: [
      { value: 0, points: 0, label: L('0 — sadece ağır eforda', '0 — yalnız ağır eforda') },
      { value: 1, points: 1, label: L('1 — acele/yokuşta', '1 — tələsərkən/yoxuşda') },
      { value: 2, points: 2, label: L('2 — düz yolda yavaş / durur', '2 — düz yolda yavaş / dayanır') },
      { value: 3, points: 3, label: L('3 — ~100 m sonra durur', '3 — ~100 m sonra dayanır') },
      { value: 4, points: 4, label: L('4 — evden çıkamaz / giyinirken', '4 — evdən çıxa bilmir / geyinərkən') } ] },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('Hafif', 'Yüngül'), advice: L('Az semptom yükü.', 'Az simptom yükü.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('mMRC ≥2; daha semptomatik grup (GOLD).', 'mMRC ≥2; daha simptomatik qrup (GOLD).') },
    { min: 3, max: 4, tone: 'high', riskLabel: L('Ağır', 'Ağır'), advice: L('Belirgin dispne; tedaviyi ve rehabilitasyonu gözden geçir.', 'Aşkar dispnoe; müalicə və reabilitasiyanı nəzərdən keçir.') },
  ],
  references: ['Fletcher CM. mMRC dyspnea scale.'],
};
