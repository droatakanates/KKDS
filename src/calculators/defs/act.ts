import type { Calculator, CalcInput } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });
const item = (id: string, tr: string, az: string): CalcInput =>
  ({ id, type: 'number', min: 1, max: 5, step: 1, placeholder: '5', label: L(tr, az), unit: L('1–5', '1–5') });

/** ACT — Astım Kontrol Testi. */
export const act: Calculator = {
  id: 'act',
  category: 'pulm',
  code: 'ACT',
  kind: 'additive',
  max: 25,
  name: L('ACT (Astım Kontrol Testi)', 'ACT (Astma Nəzarət Testi)'),
  subtitle: L('Astım kontrolü', 'Astma nəzarəti'),
  use: L('Son 4 haftada astım kontrolünü 5 maddeyle (her biri 1–5) değerlendirir (≥20 kontrollü).', 'Son 4 həftədə astma nəzarətini 5 bənd ilə (hər biri 1–5) qiymətləndirir (≥20 nəzarətli).'),
  evidence: L('Nathan ve ark., 2004 (J Allergy Clin Immunol).', 'Nathan və ark., 2004 (J Allergy Clin Immunol).'),
  metricLabel: L('Kontrol düzeyi', 'Nəzarət səviyyəsi'),
  inputs: [
    item('work', 'İş/okul kısıtlılığı (1 her zaman – 5 hiç)', 'İş/məktəb məhdudluğu (1 həmişə – 5 heç)'),
    item('breath', 'Nefes darlığı sıklığı (1 çok – 5 hiç)', 'Təngnəfəslik tezliyi (1 çox – 5 heç)'),
    item('night', 'Gece uyanma (1 ≥4 gece – 5 hiç)', 'Gecə oyanma (1 ≥4 gecə – 5 heç)'),
    item('reliever', 'Kurtarıcı ilaç kullanımı (1 çok – 5 hiç)', 'Xilasedici dərman istifadəsi (1 çox – 5 heç)'),
    item('control', 'Genel kontrol algısı (1 hiç – 5 tam)', 'Ümumi nəzarət hissi (1 heç – 5 tam)'),
  ],
  bands: [
    { min: 5, max: 15, tone: 'high', riskLabel: L('Kötü kontrol', 'Pis nəzarət'), advice: L('≤ 15; kötü kontrol; tedaviyi yükselt, tetikleyicileri gözden geçir.', '≤ 15; pis nəzarət; müalicəni artır, tetikləyiciləri nəzərdən keçir.') },
    { min: 16, max: 19, tone: 'mid', riskLabel: L('Kısmi kontrol', 'Qismən nəzarət'), advice: L('16–19; tam kontrol değil; tedaviyi gözden geçir.', '16–19; tam nəzarət deyil; müalicəni nəzərdən keçir.') },
    { min: 20, max: 25, tone: 'low', riskLabel: L('Kontrollü', 'Nəzarətli'), advice: L('≥ 20; astım iyi kontrol altında.', '≥ 20; astma yaxşı nəzarətdədir.') },
  ],
  references: ['Nathan RA, et al. Development of the Asthma Control Test. J Allergy Clin Immunol. 2004.'],
};
