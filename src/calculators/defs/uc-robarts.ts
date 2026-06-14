import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Robarts Histopatoloji İndeksi (RHI) — ÜK histolojik aktivite. */
export const ucRobarts: Calculator = {
  id: 'uc-robarts',
  category: 'gastro',
  code: 'Robarts (RHI)',
  kind: 'additive',
  max: 33,
  name: L('Robarts Histopatoloji İndeksi', 'Robarts Histopatologiya İndeksi'),
  subtitle: L('ÜK histolojik aktivite', 'XK histoloji aktivlik'),
  use: L('Dört histolojik maddeyle ülseratif kolit aktivitesini puanlar; klinik çalışmalarda yaygındır.', 'Dörd histoloji bəndlə xoralı kolit aktivliyini qiymətləndirir; klinik tədqiqatlarda geniş yayılıb.'),
  evidence: L('Mosli ve ark., 2017 (Gut). RHI = 1×kronik infiltrat + 2×LP nötrofil + 3×epitel nötrofil + 5×erozyon/ülser.', 'Mosli və ark., 2017 (Gut). RHI = 1×xronik infiltrat + 2×LP neytrofil + 3×epitel neytrofil + 5×eroziya/xora.'),
  metricLabel: L('Histolojik aktivite', 'Histoloji aktivlik'),
  inputs: [
    { id: 'chronic', type: 'single', default: 0, label: L('Kronik inflamatuvar infiltrat (×1)', 'Xronik iltihabi infiltrat (×1)'), options: [
      { value: 0, points: 0, label: L('0 — artış yok', '0 — artım yox') }, { value: 1, points: 1, label: L('1 — hafif', '1 — yüngül') }, { value: 2, points: 2, label: L('2 — orta', '2 — orta') }, { value: 3, points: 3, label: L('3 — belirgin', '3 — aşkar') } ] },
    { id: 'lpNeutro', type: 'single', default: 0, label: L('Lamina propria nötrofili (×2)', 'Lamina propria neytrofili (×2)'), options: [
      { value: 0, points: 0, label: L('0 — yok', '0 — yox') }, { value: 1, points: 2, label: L('1 — hafif', '1 — yüngül') }, { value: 2, points: 4, label: L('2 — orta', '2 — orta') }, { value: 3, points: 6, label: L('3 — belirgin', '3 — aşkar') } ] },
    { id: 'epiNeutro', type: 'single', default: 0, label: L('Epitelde nötrofil (×3)', 'Epitelda neytrofil (×3)'), options: [
      { value: 0, points: 0, label: L('0 — yok', '0 — yox') }, { value: 1, points: 3, label: L('1 — <%5 kript', '1 — <5% kript') }, { value: 2, points: 6, label: L('2 — <%50 kript', '2 — <50% kript') }, { value: 3, points: 9, label: L('3 — >%50 kript', '3 — >50% kript') } ] },
    { id: 'erosion', type: 'single', default: 0, label: L('Erozyon / ülserasyon (×5)', 'Eroziya / xoralaşma (×5)'), options: [
      { value: 0, points: 0, label: L('0 — yok', '0 — yox') }, { value: 1, points: 5, label: L('1 — iyileşen epitel', '1 — sağalan epitel') }, { value: 2, points: 10, label: L('2 — erozyon', '2 — eroziya') }, { value: 3, points: 15, label: L('3 — ülser / granülasyon', '3 — xora / qranulyasiya') } ] },
  ],
  bands: [
    { min: 0, max: 3, tone: 'low', riskLabel: L('Remisyon', 'Remissiya'), advice: L('Düşük skor; histolojik iyileşmeye yakın.', 'Aşağı bal; histoloji sağalmaya yaxın.') },
    { min: 4, max: 9, tone: 'mid', riskLabel: L('Hafif-orta', 'Yüngül-orta'), advice: L('Orta histolojik aktivite.', 'Orta histoloji aktivlik.') },
    { min: 10, max: 33, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('Yüksek histolojik aktivite.', 'Yüksək histoloji aktivlik.') },
  ],
  references: ['Mosli MH, et al. Development and validation of a histological index (RHI). Gut. 2017.'],
};
