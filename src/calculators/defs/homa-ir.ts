import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** HOMA-IR — insülin direnci tahmini. */
export const homaIr: Calculator = {
  id: 'homa-ir',
  category: 'endo',
  code: 'HOMA-IR',
  kind: 'formula',
  name: L('HOMA-IR', 'HOMA-IR'),
  subtitle: L('İnsülin direnci tahmini', 'İnsulin müqaviməti qiyməti'),
  use: L(
    'Açlık glukoz ve insülinden insülin direncini tahmin eder ([glukoz × insülin] / 405).',
    'Aclıq qlükoza və insulindən insulin müqavimətini qiymətləndirir ([qlükoza × insulin] / 405).',
  ),
  evidence: L('Matthews ve ark., 1985 (Diabetologia). Eşik popülasyona göre değişir.', 'Matthews və ark., 1985 (Diabetologia). Hədd populyasiyadan asılıdır.'),
  metricLabel: L('Yorum', 'Şərh'),
  resultUnit: L('', ''),
  inputs: [
    { id: 'glucose', type: 'number', placeholder: '100', min: 40, max: 500, step: 1, label: L('Açlık glukoz', 'Aclıq qlükoza'), unit: L('mg/dL', 'mg/dL') },
    { id: 'insulin', type: 'number', placeholder: '10', min: 1, max: 100, step: 0.1, label: L('Açlık insülin', 'Aclıq insulin'), unit: L('µU/mL', 'µU/mL') },
  ],
  formula: (v) => {
    const glu = parseFloat(String(v.glucose));
    const ins = parseFloat(String(v.insulin));
    if ([glu, ins].some(Number.isNaN)) return null;
    return Math.round(((glu * ins) / 405) * 100) / 100;
  },
  bands: [
    { min: -100, max: 2.499, tone: 'low', riskLabel: L('Normal', 'Normal'),
      advice: L('< 2.5; belirgin insülin direnci beklenmez.', '< 2.5; aydın insulin müqaviməti gözlənilmir.') },
    { min: 2.5, max: 5, tone: 'mid', riskLabel: L('Sınırda', 'Sərhəddə'),
      advice: L('2.5–5; olası insülin direnci; metabolik değerlendirme.', '2.5–5; ehtimal olunan insulin müqaviməti; metabolik qiymətləndirmə.') },
    { min: 5.001, max: 100000, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'),
      advice: L('> 5; belirgin insülin direnci.', '> 5; aydın insulin müqaviməti.') },
  ],
  references: ['Matthews DR, et al. Homeostasis model assessment (HOMA). Diabetologia. 1985.'],
};
