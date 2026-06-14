import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Binet sınıflaması — kronik lenfositik lösemi (KLL). */
export const binet: Calculator = {
  id: 'binet',
  category: 'heme',
  code: 'Binet',
  kind: 'formula',
  name: L('Binet Sınıflaması (KLL)', 'Binet Təsnifatı (XLL)'),
  subtitle: L('KLL evrelemesi', 'XLL mərhələləməsi'),
  use: L('KLL’de hemoglobin, trombosit ve tutulan lenfoid alan sayısına göre evre (A/B/C) belirler.', 'XLL-də hemoglobin, trombosit və tutulan limfoid sahə sayına görə mərhələ (A/B/C) müəyyən edir.'),
  evidence: L('Binet ve ark., 1981 (Cancer). 5 alan: servikal, aksiller, inguinal (LAP), dalak, karaciğer.', 'Binet və ark., 1981 (Cancer). 5 sahə: servikal, qoltuqaltı, inqvinal (LAP), dalaq, qaraciyər.'),
  metricLabel: L('Evre', 'Mərhələ'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'hb', type: 'number', placeholder: '12', min: 4, max: 20, step: 0.1, label: L('Hemoglobin', 'Hemoglobin'), unit: L('g/dL', 'q/dL') },
    { id: 'plt', type: 'number', placeholder: '150', min: 5, max: 600, step: 1, label: L('Trombosit', 'Trombosit'), unit: L('10⁹/L', '10⁹/L') },
    { id: 'areas', type: 'number', placeholder: '2', min: 0, max: 5, step: 1, label: L('Tutulan lenfoid alan', 'Tutulan limfoid sahə'), unit: L('adet (0–5)', 'ədəd (0–5)') },
  ],
  formula: (v) => {
    const hb = parseFloat(String(v.hb));
    const plt = parseFloat(String(v.plt));
    const areas = parseFloat(String(v.areas));
    if ([hb, plt, areas].some(Number.isNaN)) return null;
    if (hb < 10 || plt < 100) return 3; // C
    if (areas >= 3) return 2; // B
    return 1; // A
  },
  bands: [
    { min: 1, max: 1, tone: 'low', riskLabel: L('Evre A', 'Mərhələ A'), metric: L('<3 alan, anemi/trombositopeni yok', '<3 sahə, anemiya/trombositopeniya yox'),
      advice: L('İyi prognoz; sıklıkla izlem.', 'Yaxşı proqnoz; çox vaxt izləmə.') },
    { min: 2, max: 2, tone: 'mid', riskLabel: L('Evre B', 'Mərhələ B'), metric: L('≥3 alan', '≥3 sahə'),
      advice: L('Ara prognoz.', 'Aralıq proqnoz.') },
    { min: 3, max: 3, tone: 'high', riskLabel: L('Evre C', 'Mərhələ C'), metric: L('Hb <10 veya trombosit <100', 'Hb <10 və ya trombosit <100'),
      advice: L('İleri evre; tedavi sıklıkla endike.', 'İrəli mərhələ; müalicə çox vaxt göstərişlidir.') },
  ],
  references: ['Binet JL, et al. A new prognostic classification of CLL. Cancer. 1981.'],
};
