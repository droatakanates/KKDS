import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });
const b = (id: string, points: number, tr: string, az: string) =>
  ({ id, type: 'boolean' as const, points, label: L(tr, az) });

/** Caprini skoru — cerrahi/medikal hastada VTE risk değerlendirmesi (2005). */
export const caprini: Calculator = {
  id: 'caprini',
  category: 'vte',
  code: 'Caprini',
  kind: 'additive',
  max: 40,
  name: L('Caprini VTE Risk Skoru', 'Caprini VTE Risk Balı'),
  subtitle: L('Cerrahi/medikal VTE riski', 'Cərrahi/medikal VTE riski'),
  use: L('Cerrahi ve medikal hastalarda venöz tromboemboli riskini ve profilaksi düzeyini belirler.', 'Cərrahi və medikal xəstələrdə venoz tromboemboliya riskini və profilaktika səviyyəsini müəyyən edir.'),
  evidence: L('Caprini, 2005. Risk grubuna göre mekanik/farmakolojik profilaksi.', 'Caprini, 2005. Risk qrupuna görə mexaniki/farmakoloji profilaktika.'),
  metricLabel: L('Risk grubu', 'Risk qrupu'),
  inputs: [
    // 1 puan
    b('age41', 1, 'Yaş 41–60', 'Yaş 41–60'),
    b('minorsurg', 1, 'Minör cerrahi', 'Minor cərrahiyyə'),
    b('bmi25', 1, 'VKİ > 25', 'BKİ > 25'),
    b('swollen', 1, 'Bacakta şişlik', 'Ayaqda şişkinlik'),
    b('varicose', 1, 'Variköz venler', 'Varikoz venalar'),
    b('pregnancy', 1, 'Gebelik / postpartum', 'Hamiləlik / postpartum'),
    b('abortion', 1, 'Tekrarlayan/açıklanamayan düşük öyküsü', 'Təkrarlanan/izahsız düşük anamnezi'),
    b('ocp', 1, 'Oral kontraseptif / HRT', 'Oral kontraseptiv / HRT'),
    b('sepsis', 1, 'Sepsis (<1 ay)', 'Sepsis (<1 ay)'),
    b('lung', 1, 'Ciddi akciğer hastalığı / pnömoni (<1 ay)', 'Ciddi ağ ciyər xəstəliyi / pnevmoniya (<1 ay)'),
    b('copd', 1, 'Anormal pulmoner fonksiyon (KOAH)', 'Anormal pulmoner funksiya (XOAX)'),
    b('mi', 1, 'Akut miyokart infarktüsü', 'Kəskin miokard infarktı'),
    b('chf', 1, 'Konjestif kalp yetmezliği (<1 ay)', 'Konqestiv ürək çatışmazlığı (<1 ay)'),
    b('ibd', 1, 'İnflamatuvar bağırsak hastalığı öyküsü', 'İltihabi bağırsaq xəstəliyi anamnezi'),
    b('bedrest', 1, 'Yatak istirahatindeki medikal hasta', 'Yataq istirahətindəki medikal xəstə'),
    // 2 puan
    b('age61', 2, 'Yaş 61–74', 'Yaş 61–74'),
    b('arthroscopic', 2, 'Artroskopik cerrahi', 'Artroskopik cərrahiyyə'),
    b('majorsurg', 2, 'Majör açık cerrahi (>45 dk)', 'Böyük açıq cərrahiyyə (>45 dəq)'),
    b('laparoscopic', 2, 'Laparoskopik cerrahi (>45 dk)', 'Laparoskopik cərrahiyyə (>45 dəq)'),
    b('malignancy', 2, 'Malignite', 'Malignite'),
    b('confined', 2, 'Yatağa bağımlı (>72 saat)', 'Yatağa bağlı (>72 saat)'),
    b('cast', 2, 'İmmobilize alçı', 'İmmobilizə gips'),
    b('cvc', 2, 'Santral venöz kateter', 'Mərkəzi venoz kateter'),
    // 3 puan
    b('age75', 3, 'Yaş ≥ 75', 'Yaş ≥ 75'),
    b('prevvte', 3, 'VTE öyküsü', 'VTE anamnezi'),
    b('famvte', 3, 'Ailede VTE öyküsü', 'Ailədə VTE anamnezi'),
    b('factorv', 3, 'Faktör V Leiden', 'Faktor V Leiden'),
    b('prothrombin', 3, 'Protrombin 20210A', 'Protrombin 20210A'),
    b('lupus', 3, 'Lupus antikoagülan / antikardiyolipin', 'Lupus antikoaqulyant / antikardiolipin'),
    b('homocysteine', 3, 'Yüksek homosistein', 'Yüksək homosistein'),
    b('hit', 3, 'Heparin ilişkili trombositopeni', 'Heparin ilə əlaqəli trombositopeniya'),
    b('thrombophilia', 3, 'Diğer konjenital/edinsel trombofili', 'Digər doğuş/qazanılmış trombofiliya'),
    // 5 puan
    b('stroke', 5, 'İnme (<1 ay)', 'İnsult (<1 ay)'),
    b('arthroplasty', 5, 'Elektif majör alt ekstremite artroplastisi', 'Elektiv böyük aşağı ətraf artroplastikası'),
    b('fracture', 5, 'Kalça/pelvis/bacak kırığı', 'Bud/çanaq/ayaq sınığı'),
    b('spinal', 5, 'Akut spinal kord yaralanması (<1 ay)', 'Kəskin onurğa beyni zədəsi (<1 ay)'),
    b('trauma', 5, 'Çoklu travma (<1 ay)', 'Çoxsaylı travma (<1 ay)'),
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Çok düşük', 'Çox aşağı'), advice: L('0; erken mobilizasyon yeterli olabilir.', '0; erkən mobilizasiya kifayət ola bilər.') },
    { min: 1, max: 2, tone: 'low', riskLabel: L('Düşük', 'Aşağı'), advice: L('1–2; mekanik profilaksi (örn. basınçlı çorap) düşün.', '1–2; mexaniki profilaktika (məs. kompressiya corabı) düşün.') },
    { min: 3, max: 4, tone: 'mid', riskLabel: L('Orta', 'Orta'), advice: L('3–4; farmakolojik veya mekanik profilaksi öner.', '3–4; farmakoloji və ya mexaniki profilaktika tövsiyə et.') },
    { min: 5, max: 40, tone: 'high', riskLabel: L('Yüksek', 'Yüksək'), advice: L('≥ 5; farmakolojik profilaksi (± mekanik), uzatılmış süre düşün.', '≥ 5; farmakoloji profilaktika (± mexaniki), uzadılmış müddət düşün.') },
  ],
  references: ['Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon. 2005.'],
};
