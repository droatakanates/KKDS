import type { Calculator, CalcInput } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });
const item = (id: string, max: number, tr: string, az: string): CalcInput =>
  ({ id, type: 'number', min: 0, max, step: 1, placeholder: '0', label: L(tr, az), unit: L(`0–${max}`, `0–${max}`) });

/** CIWA-Ar — alkol yoksunluğu şiddeti. */
export const ciwa: Calculator = {
  id: 'ciwa',
  category: 'general',
  code: 'CIWA-Ar',
  kind: 'additive',
  max: 67,
  name: L('CIWA-Ar', 'CIWA-Ar'),
  subtitle: L('Alkol yoksunluğu şiddeti', 'Alkoqol abstinensiyası ağırlığı'),
  use: L('Alkol yoksunluğu şiddetini 10 maddeyle ölçer ve tedavi (benzodiyazepin) ihtiyacını yönlendirir.', 'Alkoqol abstinensiyasının ağırlığını 10 bənd ilə ölçür və müalicə (benzodiazepin) ehtiyacını yönləndirir.'),
  evidence: L('Sullivan ve ark., 1989 (Br J Addict).', 'Sullivan və ark., 1989 (Br J Addict).'),
  metricLabel: L('Şiddet', 'Ağırlıq'),
  inputs: [
    item('nausea', 7, 'Bulantı / kusma (0–7)', 'Ürəkbulanma / qusma (0–7)'),
    item('tremor', 7, 'Tremor (0–7)', 'Tremor (0–7)'),
    item('sweats', 7, 'Paroksismal terleme (0–7)', 'Paroksizmal tərləmə (0–7)'),
    item('anxiety', 7, 'Anksiyete (0–7)', 'Anksiyete (0–7)'),
    item('agitation', 7, 'Ajitasyon (0–7)', 'Ajitasiya (0–7)'),
    item('tactile', 7, 'Dokunsal bozukluk (0–7)', 'Toxunma pozğunluğu (0–7)'),
    item('auditory', 7, 'İşitsel bozukluk (0–7)', 'Eşitmə pozğunluğu (0–7)'),
    item('visual', 7, 'Görsel bozukluk (0–7)', 'Görmə pozğunluğu (0–7)'),
    item('headache', 7, 'Baş ağrısı (0–7)', 'Baş ağrısı (0–7)'),
    item('orientation', 4, 'Oryantasyon / bilinç (0–4)', 'Oriyentasiya / şüur (0–4)'),
  ],
  bands: [
    { min: 0, max: 8, tone: 'low', riskLabel: L('Minimal', 'Minimal'), advice: L('≤ 8; minimal yoksunluk; genellikle ilaç gerekmez.', '≤ 8; minimal abstinensiya; adətən dərman lazım deyil.') },
    { min: 9, max: 15, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('9–15; orta yoksunluk; semptom temelli benzodiyazepin düşün.', '9–15; orta abstinensiya; simptom əsaslı benzodiazepin düşün.') },
    { min: 16, max: 67, tone: 'high', riskLabel: L('Ağır', 'Ağır'), advice: L('≥ 16; ağır yoksunluk; tedavi ve yakın izlem (nöbet/deliryum tremens riski).', '≥ 16; ağır abstinensiya; müalicə və yaxın izləmə (tutma/delirium tremens riski).') },
  ],
  references: ['Sullivan JT, et al. Assessment of alcohol withdrawal: the revised CIWA-Ar. Br J Addict. 1989.'],
};
