import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });
const b = (id: string, points: number, tr: string, az: string) =>
  ({ id, type: 'boolean' as const, points, label: L(tr, az) });

/** PSI / PORT — pnömoni şiddet indeksi. */
export const psi: Calculator = {
  id: 'psi',
  category: 'pulm',
  code: 'PSI',
  kind: 'additive',
  max: 400,
  name: L('PSI / PORT Skoru', 'PSI / PORT Balı'),
  subtitle: L('Pnömoni şiddet indeksi', 'Pnevmoniya ağırlıq indeksi'),
  use: L('Toplum kökenli pnömonide 30 günlük mortalite riskini ve risk sınıfını (I–V) belirler. Yaş puanı = yaş (kadında −10).', 'İcma mənşəli pnevmoniyada 30 günlük ölüm riskini və risk sinfini (I–V) müəyyən edir. Yaş balı = yaş (qadında −10).'),
  evidence: L('Fine ve ark., 1997 (NEJM).', 'Fine və ark., 1997 (NEJM).'),
  metricLabel: L('Risk sınıfı', 'Risk sinifi'),
  inputs: [
    { id: 'age', type: 'number', placeholder: '65', min: 18, max: 120, step: 1, label: L('Yaş (puan olarak eklenir)', 'Yaş (bal kimi əlavə olunur)'), unit: L('yıl', 'il') },
    { id: 'female', type: 'single', default: 0, label: L('Cinsiyet', 'Cins'), options: [
      { value: 0, points: 0, label: L('Erkek', 'Kişi') }, { value: -10, points: -10, label: L('Kadın (−10)', 'Qadın (−10)') } ] },
    b('nursing', 10, 'Bakımevi sakini', 'Baxım evi sakini'),
    b('neoplastic', 30, 'Neoplastik hastalık', 'Neoplastik xəstəlik'),
    b('liver', 20, 'Karaciğer hastalığı', 'Qaraciyər xəstəliyi'),
    b('chf', 10, 'Konjestif kalp yetmezliği', 'Konqestiv ürək çatışmazlığı'),
    b('cva', 10, 'Serebrovasküler hastalık', 'Serebrovaskulyar xəstəlik'),
    b('renal', 10, 'Böbrek hastalığı', 'Böyrək xəstəliyi'),
    b('ams', 20, 'Bilinç değişikliği', 'Şüur dəyişikliyi'),
    b('rr', 20, 'Solunum ≥ 30/dk', 'Tənəffüs ≥ 30/dəq'),
    b('sbp', 20, 'SKB < 90 mmHg', 'SAT < 90 mmHg'),
    b('temp', 15, 'Ateş < 35°C veya ≥ 40°C', 'Hərarət < 35°C və ya ≥ 40°C'),
    b('pulse', 10, 'Nabız ≥ 125/dk', 'Nəbz ≥ 125/dəq'),
    b('ph', 30, 'Arteriyel pH < 7.35', 'Arterial pH < 7.35'),
    b('bun', 20, 'BUN ≥ 30 mg/dL', 'BUN ≥ 30 mg/dL'),
    b('na', 20, 'Sodyum < 130 mmol/L', 'Natrium < 130 mmol/L'),
    b('glucose', 10, 'Glukoz ≥ 250 mg/dL', 'Qlükoza ≥ 250 mg/dL'),
    b('hct', 10, 'Hematokrit < %30', 'Hematokrit < 30%'),
    b('pao2', 10, 'PaO₂ < 60 mmHg / SaO₂ < %90', 'PaO₂ < 60 mmHg / SaO₂ < 90%'),
    b('effusion', 10, 'Plevral efüzyon', 'Plevral efüzyon'),
  ],
  bands: [
    { min: -100, max: 70, tone: 'low', riskLabel: L('Sınıf I–II', 'Sinif I–II'), metric: L('~%0.6–0.7', '~0.6–0.7%'), advice: L('Düşük risk; genellikle ayaktan tedavi.', 'Aşağı risk; adətən ambulator müalicə.') },
    { min: 71, max: 90, tone: 'mid', riskLabel: L('Sınıf III', 'Sinif III'), metric: L('~%2.8', '~2.8%'), advice: L('Kısa gözlem / dikkatli ayaktan tedavi.', 'Qısa müşahidə / diqqətli ambulator müalicə.') },
    { min: 91, max: 130, tone: 'high', riskLabel: L('Sınıf IV', 'Sinif IV'), metric: L('~%8.2', '~8.2%'), advice: L('Hastaneye yatış önerilir.', 'Hospitalizasiya tövsiyə olunur.') },
    { min: 131, max: 1000, tone: 'high', riskLabel: L('Sınıf V', 'Sinif V'), metric: L('~%29', '~29%'), advice: L('Yüksek mortalite; yatış, yoğun bakım değerlendir.', 'Yüksək ölüm; hospitalizasiya, reanimasiya qiymətləndir.') },
  ],
  references: ['Fine MJ, et al. A prediction rule to identify low-risk patients with CAP. NEJM. 1997.'],
};
