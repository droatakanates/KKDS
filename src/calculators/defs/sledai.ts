import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });
const b = (id: string, points: number, tr: string, az: string) =>
  ({ id, type: 'boolean' as const, points, label: L(tr, az) });

/** SLEDAI-2K — sistemik lupus eritematozus aktivitesi. */
export const sledai: Calculator = {
  id: 'sledai',
  category: 'rheum',
  code: 'SLEDAI-2K',
  kind: 'additive',
  max: 105,
  name: L('SLEDAI-2K', 'SLEDAI-2K'),
  subtitle: L('SLE hastalık aktivitesi', 'SLE xəstəlik aktivliyi'),
  use: L('Son 10 günde sistemik lupus aktivitesini 24 maddeyle puanlar.', 'Son 10 gündə sistemik lupus aktivliyini 24 bənd ilə qiymətləndirir.'),
  evidence: L('Gladman ve ark., 2002 (J Rheumatol).', 'Gladman və ark., 2002 (J Rheumatol).'),
  metricLabel: L('Aktivite', 'Aktivlik'),
  inputs: [
    b('seizure', 8, 'Nöbet', 'Tutma'),
    b('psychosis', 8, 'Psikoz', 'Psixoz'),
    b('obs', 8, 'Organik beyin sendromu', 'Üzvi beyin sindromu'),
    b('visual', 8, 'Görsel bozukluk', 'Görmə pozğunluğu'),
    b('cranial', 8, 'Kraniyal sinir tutulumu', 'Kəllə siniri tutulması'),
    b('headache', 8, 'Lupus baş ağrısı', 'Lupus baş ağrısı'),
    b('cva', 8, 'Serebrovasküler olay', 'Serebrovaskulyar hadisə'),
    b('vasculitis', 8, 'Vaskülit', 'Vaskulit'),
    b('arthritis', 4, 'Artrit', 'Artrit'),
    b('myositis', 4, 'Miyozit', 'Miozit'),
    b('casts', 4, 'İdrar silendiri', 'Sidik silindri'),
    b('hematuria', 4, 'Hematüri', 'Hematuriya'),
    b('proteinuria', 4, 'Proteinüri', 'Proteinuriya'),
    b('pyuria', 4, 'Piyüri', 'Piuriya'),
    b('rash', 2, 'Döküntü', 'Səpki'),
    b('alopecia', 2, 'Alopesi', 'Alopesiya'),
    b('mucosal', 2, 'Mukozal ülser', 'Mukozal xora'),
    b('pleurisy', 2, 'Plörezi', 'Plevrit'),
    b('pericarditis', 2, 'Perikardit', 'Perikardit'),
    b('complement', 2, 'Düşük kompleman', 'Aşağı komplement'),
    b('dna', 2, 'Artmış DNA bağlanması', 'Artmış DNA bağlanması'),
    b('fever', 1, 'Ateş', 'Hərarət'),
    b('thrombocytopenia', 1, 'Trombositopeni', 'Trombositopeniya'),
    b('leukopenia', 1, 'Lökopeni', 'Lökopeniya'),
  ],
  bands: [
    { min: 0, max: 5, tone: 'low', riskLabel: L('Hafif/yok', 'Yüngül/yox'), advice: L('0–5; düşük aktivite.', '0–5; aşağı aktivlik.') },
    { min: 6, max: 10, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('6–10; orta aktivite.', '6–10; orta aktivlik.') },
    { min: 11, max: 105, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥11; yüksek aktivite; tedaviyi yoğunlaştır.', '≥11; yüksək aktivlik; müalicəni gücləndir.') },
  ],
  references: ['Gladman DD, et al. SLEDAI-2K. J Rheumatol. 2002.'],
};
