import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** DAS28-ESR — romatoid artrit hastalık aktivitesi. */
export const das28: Calculator = {
  id: 'das28',
  category: 'rheum',
  code: 'DAS28',
  kind: 'formula',
  name: L('DAS28-ESR', 'DAS28-ESR'),
  subtitle: L('RA hastalık aktivitesi', 'RA xəstəlik aktivliyi'),
  use: L('Romatoid artritte 28 eklem, ESR ve hasta global değerlendirmesiyle hastalık aktivitesini ölçer.', 'Romatoid artritdə 28 oynaq, ESR və xəstə qlobal qiymətləndirməsi ilə xəstəlik aktivliyini ölçür.'),
  evidence: L('Prevoo ve ark., 1995 (Arthritis Rheum).', 'Prevoo və ark., 1995 (Arthritis Rheum).'),
  metricLabel: L('Aktivite düzeyi', 'Aktivlik səviyyəsi'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'tjc', type: 'number', placeholder: '0', min: 0, max: 28, step: 1, label: L('Hassas eklem sayısı (0–28)', 'Həssas oynaq sayı (0–28)') },
    { id: 'sjc', type: 'number', placeholder: '0', min: 0, max: 28, step: 1, label: L('Şiş eklem sayısı (0–28)', 'Şiş oynaq sayı (0–28)') },
    { id: 'esr', type: 'number', placeholder: '20', min: 1, max: 150, step: 1, label: L('ESR (sedim)', 'ESR (çökmə)'), unit: L('mm/saat', 'mm/saat') },
    { id: 'gh', type: 'number', placeholder: '50', min: 0, max: 100, step: 1, label: L('Hasta global değerlendirmesi', 'Xəstə qlobal qiyməti'), unit: L('VAS 0–100', 'VAS 0–100') },
  ],
  formula: (v) => {
    const tjc = parseFloat(String(v.tjc));
    const sjc = parseFloat(String(v.sjc));
    const esr = parseFloat(String(v.esr));
    const gh = parseFloat(String(v.gh));
    if ([tjc, sjc, esr, gh].some(Number.isNaN) || esr <= 0) return null;
    const d = 0.56 * Math.sqrt(tjc) + 0.28 * Math.sqrt(sjc) + 0.70 * Math.log(esr) + 0.014 * gh;
    return Math.round(d * 100) / 100;
  },
  bands: [
    { min: -100, max: 2.599, tone: 'low', riskLabel: L('Remisyon', 'Remissiya'), advice: L('< 2.6; remisyon.', '< 2.6; remissiya.') },
    { min: 2.6, max: 3.2, tone: 'low', riskLabel: L('Düşük aktivite', 'Aşağı aktivlik'), advice: L('2.6–3.2; düşük hastalık aktivitesi.', '2.6–3.2; aşağı xəstəlik aktivliyi.') },
    { min: 3.201, max: 5.1, tone: 'mid', riskLabel: L('Orta aktivite', 'Orta aktivlik'), advice: L('3.2–5.1; orta aktivite; tedaviyi gözden geçir.', '3.2–5.1; orta aktivlik; müalicəni nəzərdən keçir.') },
    { min: 5.101, max: 100000, tone: 'high', riskLabel: L('Yüksek aktivite', 'Yüksək aktivlik'), advice: L('> 5.1; yüksek aktivite; tedaviyi yoğunlaştır.', '> 5.1; yüksək aktivlik; müalicəni gücləndir.') },
  ],
  references: ['Prevoo ML, et al. Modified disease activity scores (DAS28). Arthritis Rheum. 1995.'],
};
