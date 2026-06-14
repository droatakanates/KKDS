import type { Calculator, CalcInput } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });
const q = (id: string, tr: string, az: string): CalcInput =>
  ({ id, type: 'number', min: 0, max: 10, step: 0.1, placeholder: '0', label: L(tr, az), unit: L('0–10', '0–10') });

/** BASDAI — aksiyel spondiloartrit hastalık aktivitesi. */
export const basdai: Calculator = {
  id: 'basdai',
  category: 'rheum',
  code: 'BASDAI',
  kind: 'formula',
  name: L('BASDAI', 'BASDAI'),
  subtitle: L('Spondiloartrit aktivitesi', 'Spondiloartrit aktivliyi'),
  use: L('Ankilozan spondilit / aksiyel SpA’da semptom şiddetini 6 soruyla ölçer (≥4 aktif hastalık).', 'Ankilozlaşan spondilit / aksial SpA-da simptom ağırlığını 6 sual ilə ölçür (≥4 aktiv xəstəlik).'),
  evidence: L('Garrett ve ark., 1994 (J Rheumatol).', 'Garrett və ark., 1994 (J Rheumatol).'),
  metricLabel: L('Aktivite', 'Aktivlik'),
  resultUnit: L('', ''),
  inputs: [
    q('fatigue', 'Yorgunluk', 'Yorğunluq'),
    q('spinal', 'Boyun/sırt/kalça ağrısı', 'Boyun/bel/bud ağrısı'),
    q('peripheral', 'Periferik eklem ağrısı/şişliği', 'Periferik oynaq ağrısı/şişkinliyi'),
    q('enthesitis', 'Dokunmada hassasiyet', 'Toxunmada həssaslıq'),
    q('msSeverity', 'Sabah tutukluğu şiddeti', 'Səhər sərtliyinin şiddəti'),
    q('msDuration', 'Sabah tutukluğu süresi (0 yok – 10 ≥2 saat)', 'Səhər sərtliyinin müddəti (0 yox – 10 ≥2 saat)'),
  ],
  formula: (v) => {
    const n = (k: string) => parseFloat(String(v[k]));
    const vals = ['fatigue', 'spinal', 'peripheral', 'enthesitis', 'msSeverity', 'msDuration'].map(n);
    if (vals.some(Number.isNaN)) return null;
    const [f, s, p, e, ms1, ms2] = vals;
    return Math.round(((f + s + p + e + (ms1 + ms2) / 2) / 5) * 100) / 100;
  },
  bands: [
    { min: -100, max: 3.999, tone: 'low', riskLabel: L('Düşük aktivite', 'Aşağı aktivlik'), advice: L('< 4; düşük hastalık aktivitesi.', '< 4; aşağı xəstəlik aktivliyi.') },
    { min: 4, max: 100000, tone: 'high', riskLabel: L('Aktif hastalık', 'Aktiv xəstəlik'), advice: L('≥ 4; aktif hastalık; tedaviyi gözden geçir (örn. biyolojik).', '≥ 4; aktiv xəstəlik; müalicəni nəzərdən keçir (məs. bioloji).') },
  ],
  references: ['Garrett S, et al. A new approach to defining disease status in AS: the BASDAI. J Rheumatol. 1994.'],
};
