import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** STOP-BANG — obstrüktif uyku apnesi riski taraması. */
export const stopbang: Calculator = {
  id: 'stopbang',
  category: 'pulm',
  code: 'STOP-BANG',
  kind: 'additive',
  max: 8,
  name: L('STOP-BANG', 'STOP-BANG'),
  subtitle: L('Uyku apnesi riski', 'Yuxu apnesi riski'),
  use: L(
    'Obstrüktif uyku apnesi (OUAS) olasılığını sekiz evet/hayır kriteriyle tarar.',
    'Obstruktiv yuxu apnesi (OYAS) ehtimalını səkkiz bəli/xeyr meyarla tarayır.',
  ),
  evidence: L('Chung ve ark., 2008 (Anesthesiology).', 'Chung və ark., 2008 (Anesthesiology).'),
  metricLabel: L('OUAS riski', 'OYAS riski'),
  inputs: [
    { id: 'snore', type: 'boolean', points: 1, label: L('Yüksek sesle horlama', 'Yüksək səslə xoruldama') },
    { id: 'tired', type: 'boolean', points: 1, label: L('Gündüz yorgunluk / uykululuk', 'Gündüz yorğunluq / yuxululuq') },
    { id: 'observed', type: 'boolean', points: 1, label: L('Gözlenen apne', 'Müşahidə olunan apne') },
    { id: 'pressure', type: 'boolean', points: 1, label: L('Hipertansiyon', 'Hipertoniya') },
    { id: 'bmi', type: 'boolean', points: 1, label: L('VKİ > 35 kg/m²', 'BKİ > 35 kq/m²') },
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş > 50', 'Yaş > 50') },
    { id: 'neck', type: 'boolean', points: 1, label: L('Boyun çevresi > 40 cm', 'Boyun çevrəsi > 40 sm') },
    { id: 'gender', type: 'boolean', points: 1, label: L('Erkek cinsiyet', 'Kişi cinsi') },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Düşük', 'Aşağı'),
      advice: L('OUAS olasılığı düşük.', 'OYAS ehtimalı aşağı.') },
    { min: 3, max: 4, tone: 'mid', riskLabel: L('Orta', 'Orta'),
      advice: L('Orta risk; klinik değerlendirme / ileri test düşün.', 'Orta risk; klinik qiymətləndirmə / əlavə test düşün.') },
    { min: 5, max: 8, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('Yüksek OUAS olasılığı; polisomnografi önerilir.', 'Yüksək OYAS ehtimalı; polisomnoqrafiya tövsiyə olunur.') },
  ],
  references: ['Chung F, et al. STOP-BANG questionnaire to screen for obstructive sleep apnea. Anesthesiology. 2008.'],
};
