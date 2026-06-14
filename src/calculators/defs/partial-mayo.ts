import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Parsiyel Mayo Skoru — ülseratif kolit aktivitesi (endoskopisiz). */
export const partialMayo: Calculator = {
  id: 'partial-mayo',
  category: 'gastro',
  code: 'Parsiyel Mayo',
  kind: 'additive',
  max: 9,
  name: L('Parsiyel Mayo Skoru', 'Parsial Mayo Balı'),
  subtitle: L('Ülseratif kolit aktivitesi', 'Xoralı kolit aktivliyi'),
  use: L(
    'Ülseratif kolitte hastalık aktivitesini endoskopi gerektirmeden (dışkılama, kanama, hekim değerlendirmesi) ölçer.',
    'Xoralı kolitdə xəstəlik aktivliyini endoskopiyasız (nəcis, qanaxma, həkim qiymətləndirməsi) ölçür.',
  ),
  evidence: L('Lewis ve ark.; Mayo skorunun parsiyel (endoskopisiz) hâli.', 'Lewis və ark.; Mayo balının parsial (endoskopiyasız) forması.'),
  metricLabel: L('Aktivite', 'Aktivlik'),
  inputs: [
    { id: 'stool', type: 'single', default: 0, label: L('Dışkılama sıklığı', 'Nəcis tezliyi'), options: [
      { value: 0, points: 0, label: L('Normal', 'Normal') }, { value: 1, points: 1, label: L('1–2 fazla', '1–2 çox') }, { value: 2, points: 2, label: L('3–4 fazla', '3–4 çox') }, { value: 3, points: 3, label: L('≥5 fazla', '≥5 çox') } ] },
    { id: 'bleeding', type: 'single', default: 0, label: L('Rektal kanama', 'Rektal qanaxma'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Çizgi tarzı', 'Zolaq şəklində') }, { value: 2, points: 2, label: L('Belirgin', 'Aşkar') }, { value: 3, points: 3, label: L('Çoğunlukla kan', 'Əsasən qan') } ] },
    { id: 'global', type: 'single', default: 0, label: L('Hekim global değerlendirmesi', 'Həkim qlobal qiymətləndirməsi'), options: [
      { value: 0, points: 0, label: L('Normal', 'Normal') }, { value: 1, points: 1, label: L('Hafif', 'Yüngül') }, { value: 2, points: 2, label: L('Orta', 'Orta') }, { value: 3, points: 3, label: L('Ağır', 'Ağır') } ] },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Remisyon', 'Remissiya'),
      advice: L('≤ 2; klinik remisyon.', '≤ 2; klinik remissiya.') },
    { min: 3, max: 5, tone: 'mid', riskLabel: L('Hafif', 'Yüngül'),
      advice: L('3–5; hafif aktivite.', '3–5; yüngül aktivlik.') },
    { min: 6, max: 9, tone: 'high', riskLabel: L('Orta-ağır', 'Orta-ağır'),
      advice: L('≥ 6; orta-ağır aktivite; tedaviyi yoğunlaştır.', '≥ 6; orta-ağır aktivlik; müalicəni gücləndir.') },
  ],
  references: ['Lewis JD, et al. Use of the partial Mayo score to assess UC activity.'],
};
