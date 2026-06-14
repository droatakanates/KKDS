import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Travis / Oxford Kriterleri — ASUC'ta 3. gün kolektomi riski. */
export const ucTravis: Calculator = {
  id: 'uc-travis',
  category: 'gastro',
  code: 'Travis (Oxford)',
  kind: 'formula',
  name: L('Travis / Oxford Kriterleri', 'Travis / Oxford Meyarları'),
  subtitle: L('ASUC 3. gün kolektomi riski', 'ASUC 3-cü gün kolektomiya riski'),
  use: L('Akut şiddetli ÜK’de IV steroidin 3. gününde kolektomi/kurtarma tedavisi ihtiyacını öngörür.', 'Kəskin şiddətli XK-də IV steroidin 3-cü günündə kolektomiya/xilasedici müalicə ehtiyacını proqnozlaşdırır.'),
  evidence: L('Travis ve ark., 1996 (Gut). >8 dışkı/gün veya 3–8 dışkı + CRP >45 → ~%85 kolektomi.', 'Travis və ark., 1996 (Gut). >8 nəcis/gün və ya 3–8 nəcis + CRP >45 → ~85% kolektomiya.'),
  metricLabel: L('Kolektomi riski', 'Kolektomiya riski'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'stools', type: 'number', placeholder: '5', min: 0, max: 30, step: 1, label: L('3. gün dışkı sayısı / gün', '3-cü gün nəcis sayı / gün') },
    { id: 'crp', type: 'number', placeholder: '40', min: 0, max: 400, step: 1, label: L('CRP', 'CRP'), unit: L('mg/L', 'mg/L') },
  ],
  formula: (v) => {
    const stools = parseFloat(String(v.stools));
    const crp = parseFloat(String(v.crp));
    if ([stools, crp].some(Number.isNaN)) return null;
    if (stools > 8) return 1;
    if (stools >= 3 && crp > 45) return 1;
    return 0;
  },
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), metric: L('Kriter karşılanmadı', 'Meyar qarşılanmadı'), advice: L('Eşik aşılmadı; IV steroide yanıt izlemine devam.', 'Hədd keçilmədi; IV steroidə cavab izləməsi davam.') },
    { min: 1, max: 1, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), metric: L('~%85 kolektomi', '~85% kolektomiya'), advice: L('Yüksek kolektomi riski; kurtarma tedavisi (infliksimab/siklosporin) veya cerrahi planla.', 'Yüksək kolektomiya riski; xilasedici müalicə (infliksimab/siklosporin) və ya cərrahiyyə planla.') },
  ],
  references: ['Travis SP, et al. Predicting outcome in severe ulcerative colitis. Gut. 1996.'],
};
