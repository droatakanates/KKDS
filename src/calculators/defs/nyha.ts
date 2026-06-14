import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** NYHA fonksiyonel sınıflaması — kalp yetmezliği semptom şiddeti. */
export const nyha: Calculator = {
  id: 'nyha',
  category: 'cardio',
  code: 'NYHA',
  kind: 'additive',
  max: 4,
  name: L('NYHA Fonksiyonel Sınıf', 'NYHA Funksional Sinif'),
  subtitle: L('Kalp yetmezliği semptomları', 'Ürək çatışmazlığı simptomları'),
  use: L(
    'Kalp yetmezliğinde semptomları efor kapasitesine göre I–IV olarak derecelendirir.',
    'Ürək çatışmazlığında simptomları efor tutumuna görə I–IV kimi dərəcələndirir.',
  ),
  evidence: L('New York Heart Association sınıflaması.', 'New York Heart Association təsnifatı.'),
  metricLabel: L('Sınıf', 'Sinif'),
  inputs: [
    { id: 'class', type: 'single', default: 1, label: L('Sınıf', 'Sinif'), options: [
      { value: 1, points: 1, label: L('I — kısıtlama yok', 'I — məhdudiyyət yox') },
      { value: 2, points: 2, label: L('II — hafif kısıtlama', 'II — yüngül məhdudiyyət') },
      { value: 3, points: 3, label: L('III — belirgin kısıtlama', 'III — nəzərəçarpan məhdudiyyət') },
      { value: 4, points: 4, label: L('IV — istirahatte semptom', 'IV — istirahətdə simptom') },
    ] },
  ],
  bands: [
    { min: 1, max: 1, tone: 'low', riskLabel: L('Sınıf I', 'Sinif I'),
      advice: L('Olağan efor semptom oluşturmuyor.', 'Adi efor simptom yaratmır.') },
    { min: 2, max: 2, tone: 'low', riskLabel: L('Sınıf II', 'Sinif II'),
      advice: L('Olağan eforda hafif semptom.', 'Adi eforda yüngül simptom.') },
    { min: 3, max: 3, tone: 'mid', riskLabel: L('Sınıf III', 'Sinif III'),
      advice: L('Hafif eforda semptom; tedavi yoğunlaştırılmalı.', 'Az eforda simptom; müalicə gücləndirilməli.') },
    { min: 4, max: 4, tone: 'high', riskLabel: L('Sınıf IV', 'Sinif IV'),
      advice: L('İstirahatte semptom; ileri kalp yetmezliği.', 'İstirahətdə simptom; irəliləmiş ürək çatışmazlığı.') },
  ],
  references: ['The Criteria Committee of the New York Heart Association. 1994.'],
};
