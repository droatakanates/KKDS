import type { Calculator, CalcInput } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });
const item = (id: string, tr: string, az: string): CalcInput =>
  ({ id, type: 'number', min: 0, max: 5, step: 1, placeholder: '0', label: L(tr, az), unit: L('0–5', '0–5') });

/** CAT — KOAH Değerlendirme Testi. */
export const cat: Calculator = {
  id: 'cat',
  category: 'pulm',
  code: 'CAT',
  kind: 'additive',
  max: 40,
  name: L('CAT (KOAH Değerlendirme Testi)', 'CAT (XOAX Qiymətləndirmə Testi)'),
  subtitle: L('KOAH semptom yükü', 'XOAX simptom yükü'),
  use: L('KOAH’ın günlük yaşam üzerindeki etkisini 8 maddeyle (her biri 0–5) ölçer.', 'XOAX-ın gündəlik həyata təsirini 8 bənd ilə (hər biri 0–5) ölçür.'),
  evidence: L('Jones ve ark., 2009 (Eur Respir J).', 'Jones və ark., 2009 (Eur Respir J).'),
  metricLabel: L('Etki düzeyi', 'Təsir səviyyəsi'),
  inputs: [
    item('cough', 'Öksürük (0 hiç – 5 sürekli)', 'Öskürək (0 heç – 5 daimi)'),
    item('phlegm', 'Balgam (0 yok – 5 dolu)', 'Bəlğəm (0 yox – 5 dolu)'),
    item('chest', 'Göğüste sıkışma (0 – 5)', 'Sinədə sıxılma (0 – 5)'),
    item('breath', 'Yokuş/merdivende nefes darlığı (0 – 5)', 'Yoxuş/pilləkəndə təngnəfəslik (0 – 5)'),
    item('activity', 'Ev işlerinde kısıtlılık (0 – 5)', 'Ev işlərində məhdudluq (0 – 5)'),
    item('confidence', 'Evden çıkma güveni (0 – 5)', 'Evdən çıxma inamı (0 – 5)'),
    item('sleep', 'Uyku (0 iyi – 5 kötü)', 'Yuxu (0 yaxşı – 5 pis)'),
    item('energy', 'Enerji (0 yüksek – 5 hiç)', 'Enerji (0 yüksək – 5 heç)'),
  ],
  bands: [
    { min: 0, max: 9, tone: 'low', riskLabel: L('Düşük etki', 'Aşağı təsir'), advice: L('< 10; düşük semptom yükü.', '< 10; aşağı simptom yükü.') },
    { min: 10, max: 20, tone: 'mid', riskLabel: L('Orta etki', 'Orta təsir'), advice: L('10–20; orta etki (GOLD’da daha semptomatik grup).', '10–20; orta təsir (GOLD-da daha simptomatik qrup).') },
    { min: 21, max: 40, tone: 'high', riskLabel: L('Yüksek etki', 'Yüksək təsir'), advice: L('> 20; yüksek/çok yüksek etki; tedaviyi yoğunlaştır.', '> 20; yüksək/çox yüksək təsir; müalicəni gücləndir.') },
  ],
  references: ['Jones PW, et al. Development and first validation of the COPD Assessment Test. Eur Respir J. 2009.'],
};
