import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Harvey-Bradshaw İndeksi — Crohn hastalığı aktivitesi. */
export const harveyBradshaw: Calculator = {
  id: 'harvey-bradshaw',
  category: 'gastro',
  code: 'Harvey-Bradshaw',
  kind: 'additive',
  max: 20,
  name: L('Harvey-Bradshaw İndeksi', 'Harvey-Bradshaw İndeksi'),
  subtitle: L('Crohn hastalığı aktivitesi', 'Crohn xəstəliyi aktivliyi'),
  use: L(
    'Crohn hastalığında klinik aktiviteyi laboratuvar gerektirmeden değerlendirir (CDAI’nin basit hâli).',
    'Crohn xəstəliyində klinik aktivliyi laborator tələb etmədən qiymətləndirir (CDAI-nin sadə forması).',
  ),
  evidence: L('Harvey & Bradshaw, 1980 (Lancet).', 'Harvey & Bradshaw, 1980 (Lancet).'),
  metricLabel: L('Aktivite', 'Aktivlik'),
  inputs: [
    { id: 'wellbeing', type: 'single', default: 0, label: L('Genel iyilik hâli', 'Ümumi sağlamlıq'), options: [
      { value: 0, points: 0, label: L('Çok iyi', 'Çox yaxşı') }, { value: 1, points: 1, label: L('Biraz kötü', 'Bir az pis') }, { value: 2, points: 2, label: L('Kötü', 'Pis') }, { value: 3, points: 3, label: L('Çok kötü', 'Çox pis') }, { value: 4, points: 4, label: L('Berbat', 'Dəhşətli') } ] },
    { id: 'pain', type: 'single', default: 0, label: L('Karın ağrısı', 'Qarın ağrısı'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Hafif', 'Yüngül') }, { value: 2, points: 2, label: L('Orta', 'Orta') }, { value: 3, points: 3, label: L('Şiddetli', 'Şiddətli') } ] },
    { id: 'stools', type: 'number', placeholder: '0', min: 0, max: 20, step: 1, label: L('Sıvı dışkı sayısı (gün)', 'Maye nəcis sayı (gün)') },
    { id: 'mass', type: 'single', default: 0, label: L('Abdominal kitle', 'Abdominal kütlə'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Şüpheli', 'Şübhəli') }, { value: 2, points: 2, label: L('Belirgin', 'Aşkar') }, { value: 3, points: 3, label: L('Belirgin + hassas', 'Aşkar + həssas') } ] },
    { id: 'complications', type: 'number', placeholder: '0', min: 0, max: 8, step: 1, label: L('Komplikasyon sayısı', 'Ağırlaşma sayı'), hint: L('Her biri +1 (artralji, üveit, eritema nodozum, fissür, fistül, abse, aftöz ülser, piyoderma)', 'Hər biri +1 (artralji, uveit, eritema nodozum, fissura, fistula, abses, aftöz xora, piodermiya)') },
  ],
  bands: [
    { min: 0, max: 4, tone: 'low', riskLabel: L('Remisyon', 'Remissiya'),
      advice: L('< 5; klinik remisyon.', '< 5; klinik remissiya.') },
    { min: 5, max: 7, tone: 'mid', riskLabel: L('Hafif', 'Yüngül'),
      advice: L('5–7; hafif aktivite.', '5–7; yüngül aktivlik.') },
    { min: 8, max: 20, tone: 'high', riskLabel: L('Orta-ağır', 'Orta-ağır'),
      advice: L('≥ 8; orta-ağır aktivite; tedaviyi gözden geçir.', '≥ 8; orta-ağır aktivlik; müalicəni nəzərdən keçir.') },
  ],
  references: ['Harvey RF, Bradshaw JM. A simple index of Crohn’s-disease activity. Lancet. 1980.'],
};
