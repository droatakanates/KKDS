import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** ECOG performans durumu. */
export const ecog: Calculator = {
  id: 'ecog',
  category: 'heme',
  code: 'ECOG',
  kind: 'additive',
  max: 5,
  name: L('ECOG Performans Durumu', 'ECOG Performans Statusu'),
  subtitle: L('Fonksiyonel durum', 'Funksional status'),
  use: L('Onkoloji hastasının günlük yaşam fonksiyonelliğini 0–5 olarak derecelendirir.', 'Onkoloji xəstəsinin gündəlik funksionallığını 0–5 kimi dərəcələndirir.'),
  evidence: L('Oken ve ark., 1982 (ECOG/Zubrod).', 'Oken və ark., 1982 (ECOG/Zubrod).'),
  metricLabel: L('Performans', 'Performans'),
  inputs: [
    { id: 'ps', type: 'single', default: 0, label: L('Performans durumu', 'Performans statusu'), options: [
      { value: 0, points: 0, label: L('0 — tam aktif', '0 — tam aktiv') },
      { value: 1, points: 1, label: L('1 — hafif kısıtlı, ayaktan iş', '1 — yüngül məhdud, yüngül iş') },
      { value: 2, points: 2, label: L('2 — ayakta >%50, iş yapamaz', '2 — ayaqda >50%, işləyə bilmir') },
      { value: 3, points: 3, label: L('3 — yatak/sandalyede >%50', '3 — yataq/oturacaqda >50%') },
      { value: 4, points: 4, label: L('4 — tamamen yatağa bağımlı', '4 — tamamilə yatağa bağlı') },
      { value: 5, points: 5, label: L('5 — ölüm', '5 — ölüm') } ] },
  ],
  bands: [
    { min: 0, max: 1, tone: 'low', riskLabel: L('İyi', 'Yaxşı'), advice: L('İyi performans; çoğu tedaviye uygun.', 'Yaxşı performans; əksər müalicəyə uyğun.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('Orta performans; tedavi kararını bireyselleştir.', 'Orta performans; müalicə qərarını fərdiləşdir.') },
    { min: 3, max: 5, tone: 'high', riskLabel: L('Kötü', 'Pis'), advice: L('Kötü performans; agresif tedaviye genellikle uygun değil.', 'Pis performans; aqressiv müalicəyə adətən uyğun deyil.') },
  ],
  references: ['Oken MM, et al. Toxicity and response criteria of the ECOG. Am J Clin Oncol. 1982.'],
};
