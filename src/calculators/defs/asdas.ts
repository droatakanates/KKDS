import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** ASDAS-CRP — aksiyel spondiloartrit hastalık aktivitesi. */
export const asdas: Calculator = {
  id: 'asdas',
  category: 'rheum',
  code: 'ASDAS-CRP',
  kind: 'formula',
  name: L('ASDAS-CRP', 'ASDAS-CRP'),
  subtitle: L('Spondiloartrit aktivitesi', 'Spondiloartrit aktivliyi'),
  use: L('Aksiyel spondiloartritte CRP temelli birleşik hastalık aktivitesi skorunu hesaplar.', 'Aksial spondiloartritdə CRP əsaslı birləşmiş xəstəlik aktivliyi balını hesablayır.'),
  evidence: L('Lukas ve ark., 2009 (Ann Rheum Dis). CRP mg/L.', 'Lukas və ark., 2009 (Ann Rheum Dis). CRP mg/L.'),
  metricLabel: L('Aktivite düzeyi', 'Aktivlik səviyyəsi'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'backpain', type: 'number', placeholder: '0', min: 0, max: 10, step: 0.1, label: L('Bel ağrısı (0–10)', 'Bel ağrısı (0–10)') },
    { id: 'morning', type: 'number', placeholder: '0', min: 0, max: 10, step: 0.1, label: L('Sabah tutukluğu (0–10)', 'Səhər sərtliyi (0–10)') },
    { id: 'global', type: 'number', placeholder: '0', min: 0, max: 10, step: 0.1, label: L('Hasta global (0–10)', 'Xəstə qlobal (0–10)') },
    { id: 'peripheral', type: 'number', placeholder: '0', min: 0, max: 10, step: 0.1, label: L('Periferik ağrı/şişlik (0–10)', 'Periferik ağrı/şişkinlik (0–10)') },
    { id: 'crp', type: 'number', placeholder: '5', min: 0, max: 300, step: 0.1, label: L('CRP', 'CRP'), unit: L('mg/L', 'mg/L') },
  ],
  formula: (v) => {
    const n = (k: string) => parseFloat(String(v[k]));
    const vals = ['backpain', 'morning', 'global', 'peripheral', 'crp'].map(n);
    if (vals.some(Number.isNaN)) return null;
    const [bp, ms, gh, pp, crp] = vals;
    const s = 0.12 * bp + 0.06 * ms + 0.11 * gh + 0.07 * pp + 0.58 * Math.log(crp + 1);
    return Math.round(s * 100) / 100;
  },
  bands: [
    { min: -100, max: 1.299, tone: 'low', riskLabel: L('İnaktif', 'Qeyri-aktiv'), advice: L('< 1.3; inaktif hastalık.', '< 1.3; qeyri-aktiv xəstəlik.') },
    { min: 1.3, max: 2.1, tone: 'mid', riskLabel: L('Düşük aktivite', 'Aşağı aktivlik'), advice: L('1.3–2.1; düşük aktivite.', '1.3–2.1; aşağı aktivlik.') },
    { min: 2.101, max: 3.5, tone: 'high', riskLabel: L('Yüksek aktivite', 'Yüksək aktivlik'), advice: L('2.1–3.5; yüksek aktivite.', '2.1–3.5; yüksək aktivlik.') },
    { min: 3.501, max: 100000, tone: 'high', riskLabel: L('Çok yüksek', 'Çox yüksək'), advice: L('> 3.5; çok yüksek aktivite; tedaviyi yoğunlaştır.', '> 3.5; çox yüksək aktivlik; müalicəni gücləndir.') },
  ],
  references: ['Lukas C, et al. Development of an ASAS-endorsed disease activity score (ASDAS). Ann Rheum Dis. 2009.'],
};
