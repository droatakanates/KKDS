import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** TIMI risk skoru — STEMI. */
export const timiStemi: Calculator = {
  id: 'timi-stemi',
  category: 'cardio',
  code: 'TIMI (STEMI)',
  kind: 'additive',
  max: 14,
  name: L('TIMI Risk Skoru (STEMI)', 'TIMI Risk Balı (STEMI)'),
  subtitle: L('ST yükselmeli MI', 'ST qalxmalı Mİ'),
  use: L('STEMI’de 30 günlük mortalite riskini öngörür.', 'STEMI-də 30 günlük ölüm riskini proqnozlaşdırır.'),
  evidence: L('Morrow ve ark., 2000 (Circulation).', 'Morrow və ark., 2000 (Circulation).'),
  metricLabel: L('30 günlük mortalite', '30 günlük ölüm'),
  inputs: [
    { id: 'age', type: 'single', default: 0, label: L('Yaş', 'Yaş'), options: [
      { value: 0, points: 0, label: L('< 65', '< 65') }, { value: 2, points: 2, label: L('65–74', '65–74') }, { value: 3, points: 3, label: L('≥ 75', '≥ 75') } ] },
    { id: 'history', type: 'boolean', points: 1, label: L('DM veya HT veya angina öyküsü', 'DM və ya HT və ya angina anamnezi') },
    { id: 'sbp', type: 'boolean', points: 3, label: L('SKB < 100 mmHg', 'SAT < 100 mmHg') },
    { id: 'hr', type: 'boolean', points: 2, label: L('Kalp hızı > 100/dk', 'Ürək döyüntüsü > 100/dəq') },
    { id: 'killip', type: 'boolean', points: 2, label: L('Killip sınıf II–IV', 'Killip sinif II–IV') },
    { id: 'weight', type: 'boolean', points: 1, label: L('Kilo < 67 kg', 'Çəki < 67 kq') },
    { id: 'anterior', type: 'boolean', points: 1, label: L('Anterior STE veya LBBB', 'Anterior STE və ya LBBB') },
    { id: 'time', type: 'boolean', points: 1, label: L('Tedaviye kadar süre > 4 saat', 'Müalicəyə qədər müddət > 4 saat') },
  ],
  bands: [
    { min: 0, max: 3, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('Düşük 30 günlük mortalite riski.', 'Aşağı 30 günlük ölüm riski.') },
    { min: 4, max: 6, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('Orta risk; yakın izlem.', 'Orta risk; yaxın izləmə.') },
    { min: 7, max: 14, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('Yüksek mortalite; agresif reperfüzyon ve yoğun izlem.', 'Yüksək ölüm; aqressiv reperfuziya və intensiv izləmə.') },
  ],
  references: ['Morrow DA, et al. TIMI risk score for STEMI. Circulation. 2000.'],
};
