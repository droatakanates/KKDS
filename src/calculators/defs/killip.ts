import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Killip sınıflaması — akut MI'da kalp yetmezliği şiddeti. */
export const killip: Calculator = {
  id: 'killip',
  category: 'cardio',
  code: 'Killip',
  kind: 'additive',
  max: 4,
  name: L('Killip Sınıflaması', 'Killip Təsnifatı'),
  subtitle: L('AMI’de kalp yetmezliği', 'AMI-də ürək çatışmazlığı'),
  use: L(
    'Akut miyokart infarktüsünde fizik muayeneye dayalı kalp yetmezliği şiddetini ve mortalite riskini sınıflar.',
    'Kəskin miokard infarktında fiziki müayinəyə əsaslanan ürək çatışmazlığını və ölüm riskini təsnif edir.',
  ),
  evidence: L('Killip & Kimball, 1967.', 'Killip & Kimball, 1967.'),
  metricLabel: L('Hastane mortalitesi', 'Xəstəxana ölümü'),
  inputs: [
    { id: 'class', type: 'single', default: 1, label: L('Sınıf', 'Sinif'), options: [
      { value: 1, points: 1, label: L('I — bulgu yok', 'I — əlamət yox') },
      { value: 2, points: 2, label: L('II — ral / S3', 'II — xırıltı / S3') },
      { value: 3, points: 3, label: L('III — pulmoner ödem', 'III — ağ ciyər ödemi') },
      { value: 4, points: 4, label: L('IV — kardiyojenik şok', 'IV — kardiogen şok') },
    ] },
  ],
  bands: [
    { min: 1, max: 1, tone: 'low', riskLabel: L('Sınıf I', 'Sinif I'), metric: L('~%6', '~6%'),
      advice: L('Konjesyon bulgusu yok; düşük mortalite.', 'Konqestiya əlaməti yox; aşağı ölüm.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Sınıf II', 'Sinif II'), metric: L('~%17', '~17%'),
      advice: L('Hafif-orta konjesyon; yakın izlem.', 'Yüngül-orta konqestiya; yaxın izləmə.') },
    { min: 3, max: 3, tone: 'high', riskLabel: L('Sınıf III', 'Sinif III'), metric: L('~%38', '~38%'),
      advice: L('Pulmoner ödem; agresif tedavi.', 'Ağ ciyər ödemi; aqressiv müalicə.') },
    { min: 4, max: 4, tone: 'high', riskLabel: L('Sınıf IV', 'Sinif IV'), metric: L('~%67', '~67%'),
      advice: L('Kardiyojenik şok; ileri destek / revaskülarizasyon.', 'Kardiogen şok; irəli dəstək / revaskulyarizasiya.') },
  ],
  references: ['Killip T, Kimball JT. Treatment of myocardial infarction in a CCU. Am J Cardiol. 1967.'],
};
