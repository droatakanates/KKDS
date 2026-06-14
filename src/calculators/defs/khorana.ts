import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Khorana skoru — kemoterapi ilişkili VTE riski. */
export const khorana: Calculator = {
  id: 'khorana',
  category: 'heme',
  code: 'Khorana',
  kind: 'additive',
  max: 6,
  name: L('Khorana Skoru', 'Khorana Balı'),
  subtitle: L('Kanser ilişkili VTE riski', 'Xərçəng ilə əlaqəli VTE riski'),
  use: L('Ayaktan kemoterapi alan kanser hastalarında venöz tromboemboli riskini öngörür.', 'Ambulator kemoterapiya alan xərçəng xəstələrində venoz tromboemboliya riskini proqnozlaşdırır.'),
  evidence: L('Khorana ve ark., 2008 (Blood).', 'Khorana və ark., 2008 (Blood).'),
  metricLabel: L('VTE riski', 'VTE riski'),
  inputs: [
    { id: 'site', type: 'single', default: 0, label: L('Kanser bölgesi', 'Xərçəng yeri'), options: [
      { value: 2, points: 2, label: L('Çok yüksek risk (mide, pankreas)', 'Çox yüksək risk (mədə, mədəaltı vəz)') },
      { value: 1, points: 1, label: L('Yüksek risk (akciğer, lenfoma, jinekolojik, mesane, testis)', 'Yüksək risk (ağ ciyər, limfoma, ginekoloji, sidik kisəsi, xaya)') },
      { value: 0, points: 0, label: L('Diğer', 'Digər') } ] },
    { id: 'plt', type: 'boolean', points: 1, label: L('Trombosit ≥ 350 ×10⁹/L', 'Trombosit ≥ 350 ×10⁹/L') },
    { id: 'hb', type: 'boolean', points: 1, label: L('Hb < 10 g/dL veya ESA kullanımı', 'Hb < 10 q/dL və ya ESA istifadəsi') },
    { id: 'wbc', type: 'boolean', points: 1, label: L('Lökosit > 11 ×10⁹/L', 'Lökosit > 11 ×10⁹/L') },
    { id: 'bmi', type: 'boolean', points: 1, label: L('VKİ ≥ 35 kg/m²', 'BKİ ≥ 35 kq/m²') },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('0; düşük VTE riski.', '0; aşağı VTE riski.') },
    { min: 1, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('1–2; orta risk; tromboprofilaksiyi bireysel değerlendir.', '1–2; orta risk; tromboprofilaktikanı fərdi qiymətləndir.') },
    { min: 3, max: 6, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥ 3; yüksek risk; tromboprofilaksi düşün.', '≥ 3; yüksək risk; tromboprofilaktika düşün.') },
  ],
  references: ['Khorana AA, et al. Development of a predictive model for chemotherapy-associated thrombosis. Blood. 2008.'],
};
