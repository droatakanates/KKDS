import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Karnofsky performans skalası. */
export const karnofsky: Calculator = {
  id: 'karnofsky',
  category: 'heme',
  code: 'Karnofsky',
  kind: 'additive',
  max: 100,
  name: L('Karnofsky Performans Skalası', 'Karnofsky Performans Şkalası'),
  subtitle: L('Fonksiyonel durum (%)', 'Funksional status (%)'),
  use: L('Hastanın fonksiyonel durumunu %100 (normal) ile %0 (ölüm) arasında derecelendirir.', 'Xəstənin funksional statusunu 100% (normal) ilə 0% (ölüm) arasında dərəcələndirir.'),
  evidence: L('Karnofsky & Burchenal, 1949.', 'Karnofsky & Burchenal, 1949.'),
  metricLabel: L('Performans', 'Performans'),
  inputs: [
    { id: 'kps', type: 'single', default: 100, label: L('Karnofsky (%)', 'Karnofsky (%)'), options: [
      { value: 100, points: 100, label: L('100 — normal, yakınma yok', '100 — normal, şikayət yox') },
      { value: 90, points: 90, label: L('90 — hafif belirti', '90 — yüngül əlamət') },
      { value: 80, points: 80, label: L('80 — çabayla normal aktivite', '80 — səylə normal aktivlik') },
      { value: 70, points: 70, label: L('70 — kendine bakar, çalışamaz', '70 — özünə baxır, işləyə bilmir') },
      { value: 60, points: 60, label: L('60 — ara sıra yardım gerek', '60 — bəzən kömək lazım') },
      { value: 50, points: 50, label: L('50 — sık yardım ve bakım', '50 — tez-tez kömək və qulluq') },
      { value: 40, points: 40, label: L('40 — engelli, özel bakım', '40 — əlil, xüsusi qulluq') },
      { value: 30, points: 30, label: L('30 — ağır engelli, hastane', '30 — ağır əlil, xəstəxana') },
      { value: 20, points: 20, label: L('20 — çok hasta, destek şart', '20 — çox xəstə, dəstək şərt') },
      { value: 10, points: 10, label: L('10 — ölüm yakın', '10 — ölüm yaxın') },
      { value: 0, points: 0, label: L('0 — ölüm', '0 — ölüm') } ] },
  ],
  bands: [
    { min: 80, max: 100, tone: 'low', riskLabel: L('İyi', 'Yaxşı'), advice: L('Normal aktiviteyi sürdürebiliyor.', 'Normal aktivliyi davam etdirir.') },
    { min: 50, max: 79, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('Değişen düzeyde yardım gerekiyor.', 'Dəyişən səviyyədə kömək lazımdır.') },
    { min: 0, max: 49, tone: 'high', riskLabel: L('Kötü', 'Pis'), advice: L('Kendine bakamıyor; yoğun destek gerekir.', 'Özünə baxa bilmir; intensiv dəstək lazımdır.') },
  ],
  references: ['Karnofsky DA, Burchenal JH. The clinical evaluation of chemotherapeutic agents in cancer. 1949.'],
};
