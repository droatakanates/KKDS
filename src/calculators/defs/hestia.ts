import type { Calculator } from '../types';

const L = (tr: string, az: string) => ({ tr, az, 'tr-CY': tr });

/** Hestia kriterleri — pulmoner embolide ayaktan tedavi uygunluğu. */
export const hestia: Calculator = {
  id: 'hestia',
  category: 'vte',
  code: 'Hestia',
  kind: 'additive',
  max: 11,
  name: L('Hestia Kriterleri', 'Hestia Meyarları'),
  subtitle: L('PE’de ayaktan tedavi uygunluğu', 'PE-də ambulator müalicə uyğunluğu'),
  use: L('Akut PE’de ayaktan (evde) tedaviye uygunluğu değerlendirir; herhangi bir kriter pozitifse yatış gerekir.', 'Kəskin PE-də ambulator (evdə) müalicəyə uyğunluğu qiymətləndirir; hər hansı meyar müsbətdirsə hospitalizasiya lazımdır.'),
  evidence: L('Zondag ve ark., 2011 (J Thromb Haemost).', 'Zondag və ark., 2011 (J Thromb Haemost).'),
  metricLabel: L('Sonuç', 'Nəticə'),
  inputs: [
    { id: 'unstable', type: 'boolean', points: 1, label: L('Hemodinamik instabilite', 'Hemodinamik qeyri-sabitlik') },
    { id: 'thrombolysis', type: 'boolean', points: 1, label: L('Tromboliz / embolektomi gereksinimi', 'Trombolizis / embolektomiya ehtiyacı') },
    { id: 'bleeding', type: 'boolean', points: 1, label: L('Aktif kanama / yüksek kanama riski', 'Aktiv qanaxma / yüksək qanaxma riski') },
    { id: 'oxygen', type: 'boolean', points: 1, label: L('SpO₂ >%90 için >24 saat O₂', 'SpO₂ >90% üçün >24 saat O₂') },
    { id: 'onac', type: 'boolean', points: 1, label: L('Antikoagülan altında gelişen PE', 'Antikoaqulyant altında inkişaf edən PE') },
    { id: 'pain', type: 'boolean', points: 1, label: L('>24 saat IV analjezi gerektiren ağrı', '>24 saat IV analgeziya tələb edən ağrı') },
    { id: 'medical', type: 'boolean', points: 1, label: L('Yatış gerektiren medikal/sosyal neden', 'Hospitalizasiya tələb edən medikal/sosial səbəb') },
    { id: 'crcl', type: 'boolean', points: 1, label: L('Kreatinin klirensi < 30 mL/dk', 'Kreatinin klirensi < 30 mL/dəq') },
    { id: 'liver', type: 'boolean', points: 1, label: L('Ağır karaciğer yetmezliği', 'Ağır qaraciyər çatışmazlığı') },
    { id: 'pregnancy', type: 'boolean', points: 1, label: L('Gebelik', 'Hamiləlik') },
    { id: 'hit', type: 'boolean', points: 1, label: L('HIT öyküsü', 'HIT anamnezi') },
  ],
  bands: [
    { min: 0, max: 0, tone: 'low', riskLabel: L('Ayaktan uygun', 'Ambulatora uyğun'), metric: L('Tüm kriterler negatif', 'Bütün meyarlar mənfi'), advice: L('Hiçbir kriter yok; seçilmiş hastada ayaktan tedavi düşünülebilir.', 'Heç bir meyar yox; seçilmiş xəstədə ambulator müalicə düşünülə bilər.') },
    { min: 1, max: 11, tone: 'high', riskLabel: L('Yatış gerekli', 'Hospitalizasiya lazım'), metric: L('≥1 kriter pozitif', '≥1 meyar müsbət'), advice: L('En az bir kriter pozitif; hastanede tedavi önerilir.', 'Ən azı bir meyar müsbət; xəstəxanada müalicə tövsiyə olunur.') },
  ],
  references: ['Zondag W, et al. Outpatient treatment in patients with acute PE: the Hestia study. J Thromb Haemost. 2011.'],
};
