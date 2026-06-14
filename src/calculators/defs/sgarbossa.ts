import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Sgarbossa kriterleri — LBBB / ventriküler pacing zemininde MI tanısı. */
export const sgarbossa: Calculator = {
  id: 'sgarbossa',
  category: 'cardio',
  code: 'Sgarbossa',
  kind: 'additive',
  max: 10,
  name: L('Sgarbossa Kriterleri', 'Sgarbossa Meyarları'),
  subtitle: L('LBBB’de MI tanısı', 'LBBB-də Mİ diaqnozu'),
  use: L('Sol dal bloğu veya pace ritmi zemininde akut MI tanısını destekler (≥3 puan anlamlı).', 'Sol qol bloku və ya peys ritmi fonunda kəskin Mİ diaqnozunu dəstəkləyir (≥3 bal əhəmiyyətli).'),
  evidence: L('Sgarbossa ve ark., 1996 (NEJM).', 'Sgarbossa və ark., 1996 (NEJM).'),
  metricLabel: L('Yorum', 'Şərh'),
  inputs: [
    { id: 'concordantste', type: 'boolean', points: 5, label: L('Konkordan ST elevasyonu ≥ 1 mm', 'Konkordant ST elevasiyası ≥ 1 mm') },
    { id: 'concordantstd', type: 'boolean', points: 3, label: L('V1–V3 konkordan ST depresyonu ≥ 1 mm', 'V1–V3 konkordant ST depressiyası ≥ 1 mm') },
    { id: 'discordantste', type: 'boolean', points: 2, label: L('Diskordan ST elevasyonu ≥ 5 mm', 'Diskordant ST elevasiyası ≥ 5 mm') },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Kriter karşılanmadı', 'Meyar qarşılanmadı'), advice: L('< 3; akut MI için yeterli özgüllük yok; klinikle değerlendir.', '< 3; kəskin Mİ üçün kifayət spesifiklik yox; klinika ilə qiymətləndir.') },
    { min: 3, max: 10, tone: 'high', riskLabel: L('MI lehine', 'Mİ xeyrinə'), advice: L('≥ 3; akut MI ile uyumlu, yüksek özgüllük.', '≥ 3; kəskin Mİ ilə uyğun, yüksək spesifiklik.') },
  ],
  references: ['Sgarbossa EB, et al. Electrocardiographic diagnosis of evolving AMI in the presence of LBBB. NEJM. 1996.'],
};
