import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** SCCAI — Basit Klinik Kolit Aktivite İndeksi (Walmsley, 1998). */
export const ucSccai: Calculator = {
  id: 'uc-sccai',
  category: 'gastro',
  code: 'SCCAI',
  kind: 'additive',
  max: 19,
  name: L('SCCAI', 'SCCAI'),
  subtitle: L('ÜK klinik aktivite (endoskopisiz)', 'XK klinik aktivlik (endoskopiyasız)'),
  use: L('Ülseratif kolit aktivitesini yalnızca klinik bulgularla ölçer; hasta tarafından da doldurulabilir.', 'Xoralı kolit aktivliyini yalnız klinik əlamətlərlə ölçür; xəstə tərəfindən də doldurula bilər.'),
  evidence: L('Walmsley ve ark., 1998 (Gut). Remisyon genellikle ≤2.', 'Walmsley və ark., 1998 (Gut). Remissiya adətən ≤2.'),
  metricLabel: L('Aktivite', 'Aktivlik'),
  inputs: [
    { id: 'day', type: 'single', default: 0, label: L('Gündüz dışkılama', 'Gündüz nəcis'), options: [
      { value: 0, points: 0, label: L('1–3', '1–3') }, { value: 1, points: 1, label: L('4–6', '4–6') }, { value: 2, points: 2, label: L('7–9', '7–9') }, { value: 3, points: 3, label: L('>9', '>9') } ] },
    { id: 'night', type: 'single', default: 0, label: L('Gece dışkılama', 'Gecə nəcis'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('1–3', '1–3') }, { value: 2, points: 2, label: L('4–6', '4–6') } ] },
    { id: 'urgency', type: 'single', default: 0, label: L('Dışkılama aciliyeti', 'Nəcis təcililiyi'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Acele', 'Tələsmə') }, { value: 2, points: 2, label: L('Hemen tuvalete', 'Dərhal tualetə') }, { value: 3, points: 3, label: L('İnkontinans', 'İnkontinensiya') } ] },
    { id: 'blood', type: 'single', default: 0, label: L('Dışkıda kan', 'Nəcisdə qan'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 1, points: 1, label: L('Eser', 'İz') }, { value: 2, points: 2, label: L('Zaman zaman belirgin', 'Hərdən aşkar') }, { value: 3, points: 3, label: L('Genellikle belirgin', 'Adətən aşkar') } ] },
    { id: 'wellbeing', type: 'single', default: 0, label: L('Genel iyilik hâli', 'Ümumi sağlamlıq'), options: [
      { value: 0, points: 0, label: L('Çok iyi', 'Çox yaxşı') }, { value: 1, points: 1, label: L('Biraz kötü', 'Bir az pis') }, { value: 2, points: 2, label: L('Kötü', 'Pis') }, { value: 3, points: 3, label: L('Çok kötü', 'Çox pis') }, { value: 4, points: 4, label: L('Berbat', 'Dəhşətli') } ] },
    { id: 'extra', type: 'number', placeholder: '0', min: 0, max: 5, step: 1, label: L('Ekstraintestinal bulgu sayısı', 'Ekstraintestinal əlamət sayı'), hint: L('Her biri +1 (artrit, üveit, eritema nodozum, piyoderma)', 'Hər biri +1 (artrit, uveit, eritema nodozum, piodermiya)') },
  ],
  bands: [
    { min: 0, max: 2, tone: 'low', riskLabel: L('Remisyon', 'Remissiya'), advice: L('≤2; klinik remisyon.', '≤2; klinik remissiya.') },
    { min: 3, max: 4, tone: 'mid', riskLabel: L('Hafif', 'Yüngül'), advice: L('3–4; hafif aktivite.', '3–4; yüngül aktivlik.') },
    { min: 5, max: 19, tone: 'high', riskLabel: L('Aktif', 'Aktiv'), advice: L('≥5; aktif hastalık; tedaviyi gözden geçir.', '≥5; aktiv xəstəlik; müalicəni nəzərdən keçir.') },
  ],
  references: ['Walmsley RS, et al. A simple clinical colitis activity index. Gut. 1998.'],
};
