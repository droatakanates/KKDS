import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** PUCAI — Pediatrik Ülseratif Kolit Aktivite İndeksi (Turner, 2007). */
export const ucPucai: Calculator = {
  id: 'uc-pucai',
  category: 'gastro',
  code: 'PUCAI',
  kind: 'additive',
  max: 85,
  name: L('PUCAI', 'PUCAI'),
  subtitle: L('Pediatrik ÜK aktivitesi', 'Pediatrik XK aktivliyi'),
  use: L('Çocuklarda ülseratif kolit aktivitesini tamamen klinik parametrelerle ölçer.', 'Uşaqlarda xoralı kolit aktivliyini tamamilə klinik parametrlərlə ölçür.'),
  evidence: L('Turner ve ark., 2007 (Gastroenterology). Remisyon <10.', 'Turner və ark., 2007 (Gastroenterology). Remissiya <10.'),
  metricLabel: L('Aktivite', 'Aktivlik'),
  inputs: [
    { id: 'pain', type: 'single', default: 0, label: L('Karın ağrısı', 'Qarın ağrısı'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 5, points: 5, label: L('Göz ardı edilebilir', 'Nəzərə alınmaya bilər') }, { value: 10, points: 10, label: L('Göz ardı edilemez', 'Nəzərə alınmalıdır') } ] },
    { id: 'bleeding', type: 'single', default: 0, label: L('Rektal kanama', 'Rektal qanaxma'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 10, points: 10, label: L('Az (<%50 dışkıda)', 'Az (<50% nəcisdə)') }, { value: 20, points: 20, label: L('Çoğu dışkıda az', 'Çox nəcisdə az') }, { value: 30, points: 30, label: L('Çok miktarda (>%50)', 'Çox miqdarda (>50%)') } ] },
    { id: 'consistency', type: 'single', default: 0, label: L('Dışkı kıvamı', 'Nəcis konsistensiyası'), options: [
      { value: 0, points: 0, label: L('Şekilli', 'Formalı') }, { value: 5, points: 5, label: L('Kısmen şekilli', 'Qismən formalı') }, { value: 10, points: 10, label: L('Tamamen şekilsiz', 'Tamamilə formasız') } ] },
    { id: 'number', type: 'single', default: 0, label: L('24 saatte dışkı sayısı', '24 saatda nəcis sayı'), options: [
      { value: 0, points: 0, label: L('0–2', '0–2') }, { value: 5, points: 5, label: L('3–5', '3–5') }, { value: 10, points: 10, label: L('6–8', '6–8') }, { value: 15, points: 15, label: L('>8', '>8') } ] },
    { id: 'nocturnal', type: 'single', default: 0, label: L('Noktürnal dışkılama', 'Noktürnal nəcis'), options: [
      { value: 0, points: 0, label: L('Yok', 'Yox') }, { value: 10, points: 10, label: L('Var', 'Var') } ] },
    { id: 'activity', type: 'single', default: 0, label: L('Aktivite düzeyi', 'Aktivlik səviyyəsi'), options: [
      { value: 0, points: 0, label: L('Kısıtlama yok', 'Məhdudiyyət yox') }, { value: 5, points: 5, label: L('Ara sıra kısıtlama', 'Bəzən məhdudiyyət') }, { value: 10, points: 10, label: L('Belirgin kısıtlama', 'Aşkar məhdudiyyət') } ] },
  ],
  bands: [
    { min: 0, max: 9, tone: 'low', riskLabel: L('Remisyon', 'Remissiya'), advice: L('<10; klinik remisyon.', '<10; klinik remissiya.') },
    { min: 10, max: 34, tone: 'mid', riskLabel: L('Hafif', 'Yüngül'), advice: L('10–34; hafif aktivite.', '10–34; yüngül aktivlik.') },
    { min: 35, max: 64, tone: 'high', riskLabel: L('Orta', 'Orta'), advice: L('35–64; orta aktivite.', '35–64; orta aktivlik.') },
    { min: 65, max: 85, tone: 'high', riskLabel: L('Şiddetli', 'Şiddətli'), advice: L('≥65; şiddetli aktivite; ASUC yönetimi.', '≥65; şiddətli aktivlik; ASUC idarəetməsi.') },
  ],
  references: ['Turner D, et al. Development of a Pediatric Ulcerative Colitis Activity Index (PUCAI). Gastroenterology. 2007.'],
};
