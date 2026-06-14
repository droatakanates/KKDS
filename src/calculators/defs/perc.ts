import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** PERC kuralı — düşük olasılıkta PE dışlama. */
export const perc: Calculator = {
  id: 'perc',
  category: 'vte',
  code: 'PERC',
  kind: 'additive',
  max: 8,
  name: L('PERC Kuralı', 'PERC Qaydası'),
  subtitle: L('Düşük olasılıkta PE dışlama', 'Aşağı ehtimalda PE istisnası'),
  use: L(
    'Klinik olasılığı düşük hastalarda 8 kriterin tamamı negatifse PE’yi ileri test olmadan dışlar.',
    'Klinik ehtimalı aşağı xəstələrdə 8 meyarın hamısı mənfidirsə PE-ni əlavə test olmadan istisna edir.',
  ),
  evidence: L('Kline ve ark., 2004 (J Thromb Haemost).', 'Kline və ark., 2004 (J Thromb Haemost).'),
  metricLabel: L('Sonuç', 'Nəticə'),
  inputs: [
    { id: 'age', type: 'boolean', points: 1, label: L('Yaş ≥ 50', 'Yaş ≥ 50') },
    { id: 'hr', type: 'boolean', points: 1, label: L('Kalp hızı ≥ 100/dk', 'Ürək döyüntüsü ≥ 100/dəq') },
    { id: 'sao2', type: 'boolean', points: 1, label: L('SaO₂ < %95', 'SaO₂ < 95%') },
    { id: 'legswelling', type: 'boolean', points: 1, label: L('Tek taraflı bacak şişliği', 'Birtərəfli ayaq şişkinliyi') },
    { id: 'hemoptysis', type: 'boolean', points: 1, label: L('Hemoptizi', 'Hemoptiz') },
    { id: 'surgery', type: 'boolean', points: 1, label: L('Son 4 hafta cerrahi / travma', 'Son 4 həftə cərrahiyyə / travma') },
    { id: 'priorvte', type: 'boolean', points: 1, label: L('Önceki PE / DVT', 'Əvvəlki PE / DVT') },
    { id: 'hormone', type: 'boolean', points: 1, label: L('Östrojen / hormon kullanımı', 'Estrogen / hormon istifadəsi') },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('PERC negatif', 'PERC mənfi'), metric: L('PE dışlanabilir', 'PE istisna edilə bilər'),
      advice: L('Tüm kriterler negatif; düşük olasılıkta PE dışlanabilir, D-dimer gerekmez.', 'Bütün meyarlar mənfi; aşağı ehtimalda PE istisna edilə bilər, D-dimer lazım deyil.') },
    { min: 1, max: 8, tone: 'mid', riskLabel: L('PERC pozitif', 'PERC müsbət'), metric: L('PE dışlanamaz', 'PE istisna edilə bilməz'),
      advice: L('En az bir kriter pozitif; PERC ile dışlanamaz, D-dimer / görüntüleme gerekir.', 'Ən azı bir meyar müsbət; PERC ilə istisna edilə bilməz, D-dimer / görüntüləmə lazımdır.') },
  ],
  references: ['Kline JA, et al. Clinical criteria to prevent unnecessary diagnostic testing in ED patients with suspected PE. J Thromb Haemost. 2004.'],
};
