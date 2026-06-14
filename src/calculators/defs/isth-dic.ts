import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** ISTH DIC skoru — aşikâr dissemine intravasküler koagülasyon. */
export const isthDic: Calculator = {
  id: 'isth-dic',
  category: 'heme',
  code: 'ISTH DIC',
  kind: 'additive',
  max: 8,
  name: L('ISTH DIC Skoru', 'ISTH DIC Balı'),
  subtitle: L('Aşikâr DİK tanısı', 'Aşkar DİK diaqnozu'),
  use: L('Altta yatan DİK ile ilişkili bozuklukta aşikâr (overt) DİK olasılığını puanlar (≥5 aşikâr DİK).', 'Altda yatan DİK ilə əlaqəli pozğunluqda aşkar DİK ehtimalını qiymətləndirir (≥5 aşkar DİK).'),
  evidence: L('Taylor ve ark., 2001 (ISTH).', 'Taylor və ark., 2001 (ISTH).'),
  metricLabel: L('Yorum', 'Şərh'),
  inputs: [
    { id: 'plt', type: 'single', default: 0, label: L('Trombosit (10⁹/L)', 'Trombosit (10⁹/L)'), options: [
      { value: 0, points: 0, label: L('≥ 100', '≥ 100') }, { value: 1, points: 1, label: L('50–100', '50–100') }, { value: 2, points: 2, label: L('< 50', '< 50') } ] },
    { id: 'fibrin', type: 'single', default: 0, label: L('Fibrin yıkım ürünü / D-dimer', 'Fibrin parçalanma / D-dimer'), options: [
      { value: 0, points: 0, label: L('Artış yok', 'Artım yox') }, { value: 2, points: 2, label: L('Orta artış', 'Orta artım') }, { value: 3, points: 3, label: L('Belirgin artış', 'Aşkar artım') } ] },
    { id: 'pt', type: 'single', default: 0, label: L('PT uzaması', 'PT uzanması'), options: [
      { value: 0, points: 0, label: L('< 3 sn', '< 3 san') }, { value: 1, points: 1, label: L('3–6 sn', '3–6 san') }, { value: 2, points: 2, label: L('> 6 sn', '> 6 san') } ] },
    { id: 'fibrinogen', type: 'single', default: 0, label: L('Fibrinojen', 'Fibrinogen'), options: [
      { value: 0, points: 0, label: L('≥ 1 g/L', '≥ 1 q/L') }, { value: 1, points: 1, label: L('< 1 g/L', '< 1 q/L') } ] },
  ],
  bands: [
    { min: 0, max: 4, tone: 'mid', riskLabel: L('Aşikâr DİK değil', 'Aşkar DİK deyil'), advice: L('< 5; aşikâr DİK yok; non-overt DİK için seri takip öner.', '< 5; aşkar DİK yox; non-overt DİK üçün seriyalı izləmə.') },
    { min: 5, max: 8, tone: 'high', riskLabel: L('Aşikâr DİK', 'Aşkar DİK'), advice: L('≥ 5; aşikâr DİK ile uyumlu; altta yatan nedeni tedavi et.', '≥ 5; aşkar DİK ilə uyğun; altda yatan səbəbi müalicə et.') },
  ],
  references: ['Taylor FB, et al. Towards definition, clinical and laboratory criteria for DIC. Thromb Haemost. 2001.'],
};
