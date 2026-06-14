import type { Calculator, CalcInput } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });
const item = (id: string, tr: string, az: string): CalcInput =>
  ({ id, type: 'number', min: 0, max: 3, step: 1, placeholder: '0', label: L(tr, az), unit: L('0–3', '0–3') });

/** Epworth Uykululuk Skalası. */
export const epworth: Calculator = {
  id: 'epworth',
  category: 'pulm',
  code: 'Epworth',
  kind: 'additive',
  max: 24,
  name: L('Epworth Uykululuk Skalası', 'Epworth Yuxululuq Şkalası'),
  subtitle: L('Gündüz uykululuk', 'Gündüz yuxululuq'),
  use: L('Çeşitli durumlarda uyuklama eğilimini 8 maddeyle (her biri 0–3) ölçer (>10 aşırı uykululuk).', 'Müxtəlif vəziyyətlərdə mürgüləmə meylini 8 bənd ilə (hər biri 0–3) ölçür (>10 həddən artıq yuxululuq).'),
  evidence: L('Johns, 1991 (Sleep).', 'Johns, 1991 (Sleep).'),
  metricLabel: L('Uykululuk', 'Yuxululuq'),
  inputs: [
    item('reading', 'Otururken okurken', 'Otururkən oxuyarkən'),
    item('tv', 'Televizyon izlerken', 'Televizora baxarkən'),
    item('public', 'Toplum içinde otururken', 'İctimai yerdə otururkən'),
    item('passenger', 'Arabada yolcu olarak (1 saat)', 'Avtomobildə sərnişin kimi (1 saat)'),
    item('lying', 'Öğleden sonra uzanınca', 'Günortadan sonra uzananda'),
    item('talking', 'Otururken konuşurken', 'Otururkən danışarkən'),
    item('lunch', 'Alkolsüz öğle yemeğinden sonra', 'Alkoqolsuz nahardan sonra'),
    item('traffic', 'Trafikte dururken (araçta)', 'Trafikdə dayananda (avtomobildə)'),
  ],
  bands: [
    { min: 0, max: 10, tone: 'low', riskLabel: L('Normal', 'Normal'), advice: L('≤ 10; normal gündüz uyanıklığı.', '≤ 10; normal gündüz oyaqlığı.') },
    { min: 11, max: 15, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('11–15; orta düzeyde aşırı uykululuk.', '11–15; orta səviyyədə həddən artıq yuxululuq.') },
    { min: 16, max: 24, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥ 16; belirgin uykululuk; uyku değerlendirmesi öner.', '≥ 16; aşkar yuxululuq; yuxu qiymətləndirməsi tövsiyə et.') },
  ],
  references: ['Johns MW. A new method for measuring daytime sleepiness: the Epworth sleepiness scale. Sleep. 1991.'],
};
