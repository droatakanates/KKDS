import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** NEWS2 — ulusal erken uyarı skoru. */
export const news2: Calculator = {
  id: 'news2',
  category: 'infect',
  code: 'NEWS2',
  kind: 'additive',
  max: 20,
  name: L('NEWS2 Erken Uyarı Skoru', 'NEWS2 Erkən Xəbərdarlıq Balı'),
  subtitle: L('Klinik kötüleşme taraması', 'Klinik pisləşmə taraması'),
  use: L('Yatan hastalarda klinik kötüleşmeyi fizyolojik parametrelerle erken yakalar.', 'Yatan xəstələrdə klinik pisləşməni fizioloji parametrlərlə erkən aşkar edir.'),
  evidence: L('Royal College of Physicians, NEWS2, 2017.', 'Royal College of Physicians, NEWS2, 2017.'),
  metricLabel: L('Klinik risk', 'Klinik risk'),
  inputs: [
    { id: 'rr', type: 'single', default: 0, label: L('Solunum hızı', 'Tənəffüs sürəti'), options: [
      { value: 3.1, points: 3, label: L('≤ 8', '≤ 8') }, { value: 1.1, points: 1, label: L('9–11', '9–11') }, { value: 0, points: 0, label: L('12–20', '12–20') }, { value: 2.1, points: 2, label: L('21–24', '21–24') }, { value: 3.2, points: 3, label: L('≥ 25', '≥ 25') } ] },
    { id: 'spo2', type: 'single', default: 0, label: L('SpO₂ (ölçek 1)', 'SpO₂ (şkala 1)'), options: [
      { value: 0, points: 0, label: L('≥ 96', '≥ 96') }, { value: 1, points: 1, label: L('94–95', '94–95') }, { value: 2, points: 2, label: L('92–93', '92–93') }, { value: 3, points: 3, label: L('≤ 91', '≤ 91') } ] },
    { id: 'o2', type: 'boolean', points: 2, label: L('Ek oksijen', 'Əlavə oksigen') },
    { id: 'temp', type: 'single', default: 0, label: L('Ateş', 'Hərarət'), options: [
      { value: 3, points: 3, label: L('≤ 35.0', '≤ 35.0') }, { value: 1.1, points: 1, label: L('35.1–36.0', '35.1–36.0') }, { value: 0, points: 0, label: L('36.1–38.0', '36.1–38.0') }, { value: 1.2, points: 1, label: L('38.1–39.0', '38.1–39.0') }, { value: 2, points: 2, label: L('≥ 39.1', '≥ 39.1') } ] },
    { id: 'sbp', type: 'single', default: 0, label: L('Sistolik KB', 'Sistolik QT'), options: [
      { value: 3.1, points: 3, label: L('≤ 90', '≤ 90') }, { value: 2, points: 2, label: L('91–100', '91–100') }, { value: 1, points: 1, label: L('101–110', '101–110') }, { value: 0, points: 0, label: L('111–219', '111–219') }, { value: 3.2, points: 3, label: L('≥ 220', '≥ 220') } ] },
    { id: 'hr', type: 'single', default: 0, label: L('Kalp hızı', 'Ürək döyüntüsü'), options: [
      { value: 3.1, points: 3, label: L('≤ 40', '≤ 40') }, { value: 1.1, points: 1, label: L('41–50', '41–50') }, { value: 0, points: 0, label: L('51–90', '51–90') }, { value: 1.2, points: 1, label: L('91–110', '91–110') }, { value: 2, points: 2, label: L('111–130', '111–130') }, { value: 3.2, points: 3, label: L('≥ 131', '≥ 131') } ] },
    { id: 'consciousness', type: 'single', default: 0, label: L('Bilinç', 'Şüur'), options: [
      { value: 0, points: 0, label: L('Uyanık (A)', 'Oyaq (A)') }, { value: 3, points: 3, label: L('Yeni konfüzyon / V-P-U', 'Yeni konfuziya / V-P-U') } ] },
  ],
  bands: [
    { min: 0, max: 4, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0–4; düşük risk; rutin izlem (tek parametre 3 ise gözden geçir).', '0–4; aşağı risk; rutin izləmə (tək parametr 3-dürsə nəzərdən keçir).') },
    { min: 5, max: 6, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('5–6; orta risk; acil değerlendirme, izlem sıklığını artır.', '5–6; orta risk; təcili qiymətləndirmə, izləmə tezliyini artır.') },
    { min: 7, max: 20, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥7; yüksek risk; acil/kritik bakım ekibi değerlendirmesi.', '≥7; yüksək risk; təcili/kritik baxım komandası qiymətləndirməsi.') },
  ],
  references: ['Royal College of Physicians. National Early Warning Score (NEWS) 2. 2017.'],
};
