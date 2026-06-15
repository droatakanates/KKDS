import type { CategoryIcon, CategoryId, Calculator } from './types';
import { chadsvasc } from './defs/chadsvasc';
import { hasbled } from './defs/hasbled';
import { chads2 } from './defs/chads2';
import { killip } from './defs/killip';
import { nyha } from './defs/nyha';
import { wells } from './defs/wells';
import { wellsDvt } from './defs/wells-dvt';
import { spesi } from './defs/spesi';
import { perc } from './defs/perc';
import { curb65 } from './defs/curb65';
import { stopbang } from './defs/stopbang';
import { qsofa } from './defs/qsofa';
import { sirs } from './defs/sirs';
import { centor } from './defs/centor';
import { childPugh } from './defs/child-pugh';
import { bisap } from './defs/bisap';
import { meld, meldNa } from './defs/meld';
import { maddrey } from './defs/maddrey';
import { gahs } from './defs/gahs';
import { fib4 } from './defs/fib4';
import { apri } from './defs/apri';
import { nafld } from './defs/nafld';
import { aims65 } from './defs/aims65';
import { rockall } from './defs/rockall';
import { westHaven } from './defs/west-haven';
import { ranson } from './defs/ranson';
import { harveyBradshaw } from './defs/harvey-bradshaw';
import { partialMayo } from './defs/partial-mayo';
import { ucMayo } from './defs/uc-mayo';
import { ucTruelove } from './defs/uc-truelove';
import { ucSccai } from './defs/uc-sccai';
import { ucLichtiger } from './defs/uc-lichtiger';
import { ucMes } from './defs/uc-mes';
import { ucUceis } from './defs/uc-uceis';
import { ucRobarts } from './defs/uc-robarts';
import { ucUcdai } from './defs/uc-ucdai';
import { ucTravis } from './defs/uc-travis';
import { ucHo } from './defs/uc-ho';
import { ucPucai } from './defs/uc-pucai';
import { gcs } from './defs/gcs';
import { ckdepi } from './defs/ckdepi';
import { cockcroft } from './defs/cockcroft';
import { anionGap } from './defs/anion-gap';
import { correctedCalcium } from './defs/corrected-calcium';
import { correctedSodium } from './defs/corrected-sodium';
import { winters } from './defs/winters';
import { osmolarGap } from './defs/osmolar-gap';
import { serumOsmolarity } from './defs/serum-osmolarity';
import { fena } from './defs/fena';
import { homaIr } from './defs/homa-ir';
import { fourTs } from './defs/four-ts';
import { isthDic } from './defs/isth-dic';
import { plasmic } from './defs/plasmic';
import { ecog } from './defs/ecog';
import { karnofsky } from './defs/karnofsky';
import { mascc } from './defs/mascc';
import { khorana } from './defs/khorana';
import { ipi } from './defs/ipi';
import { flipi } from './defs/flipi';
import { issMyeloma } from './defs/iss-myeloma';
import { binet } from './defs/binet';
import { rai } from './defs/rai';
import { heart } from './defs/heart';
import { timiNstemi } from './defs/timi-nstemi';
import { timiStemi } from './defs/timi-stemi';
import { sgarbossa } from './defs/sgarbossa';
import { orbit } from './defs/orbit';
import { padua } from './defs/padua';
import { improveVte } from './defs/improve-vte';
import { hestia } from './defs/hestia';
import { caprini } from './defs/caprini';
import { mmrc } from './defs/mmrc';
import { cat } from './defs/cat';
import { act } from './defs/act';
import { epworth } from './defs/epworth';
import { light } from './defs/light';
import { smartcop } from './defs/smartcop';
import { bode } from './defs/bode';
import { gold } from './defs/gold';
import { psi } from './defs/psi';
import { fourC } from './defs/four-c';
import { news2 } from './defs/news2';
import { sofa } from './defs/sofa';
import { das28 } from './defs/das28';
import { sledai } from './defs/sledai';
import { basdai } from './defs/basdai';
import { asdas } from './defs/asdas';
import { ffs } from './defs/ffs';
import { charlson } from './defs/charlson';
import { cam } from './defs/cam';
import { ciwa } from './defs/ciwa';

/**
 * Tüm skorların kayıt defteri.
 * Yeni skor eklemek için: defs/ altına dosya oluştur ve buraya ekle.
 */
export const calculators: Calculator[] = [
  // Kardiyoloji
  chadsvasc, hasbled, chads2, killip, nyha, heart, timiNstemi, timiStemi, sgarbossa, orbit,
  // Tromboemboli
  wells, wellsDvt, spesi, perc, padua, improveVte, hestia, caprini,
  // Solunum
  curb65, stopbang, psi, smartcop, mmrc, cat, act, epworth, light, bode, gold, fourC,
  // İnfeksiyon / Sepsis
  qsofa, sirs, centor, news2, sofa,
  // Gastro / Hepatoloji
  childPugh, meld, meldNa, maddrey, gahs, fib4, apri, nafld,
  aims65, rockall, westHaven, ranson, bisap, harveyBradshaw,
  // Ülseratif kolit
  ucTruelove, ucMayo, partialMayo, ucSccai, ucLichtiger, ucMes, ucUceis, ucRobarts, ucUcdai, ucTravis, ucHo, ucPucai,
  // Nöroloji
  gcs,
  // Nefroloji
  ckdepi, cockcroft, anionGap, correctedCalcium, correctedSodium, winters, osmolarGap, serumOsmolarity, fena,
  // Endokrin / Metabolik
  homaIr,
  // Hematoloji / Onkoloji
  fourTs, isthDic, plasmic, ecog, karnofsky, mascc, khorana, ipi, flipi, issMyeloma, binet, rai,
  // Romatoloji
  das28, sledai, basdai, asdas, ffs,
  // Genel Dahiliye / Geriatri
  charlson, cam, ciwa,
];

/** Branşların sırası + ikon anahtarı (ana sayfa gruplama + masaüstü kenar çubuğu). */
export const SPECIALTIES: { id: CategoryId; icon: CategoryIcon }[] = [
  { id: 'cardio', icon: 'heart' },
  { id: 'vte', icon: 'droplet' },
  { id: 'pulm', icon: 'lung' },
  { id: 'gastro', icon: 'stomach' },
  { id: 'neph', icon: 'kidney' },
  { id: 'endo', icon: 'flask' },
  { id: 'heme', icon: 'cells' },
  { id: 'infect', icon: 'shield' },
  { id: 'rheum', icon: 'bone' },
  { id: 'neuro', icon: 'brain' },
  { id: 'general', icon: 'activity' },
];

/**
 * Bazı branşların alt başlıkları (ana sayfada açılır gruplar).
 * Sıra burada belirlenir; her alt başlık ilgili skor id'lerini içerir.
 */
export const SUBCATEGORIES: Partial<Record<CategoryId, { id: string; calcIds: string[] }[]>> = {
  gastro: [
    { id: 'hepato', calcIds: ['child-pugh', 'meld', 'meld-na', 'maddrey', 'gahs', 'fib4', 'apri', 'nafld-fs', 'west-haven'] },
    { id: 'gibleed', calcIds: ['aims65', 'rockall'] },
    { id: 'pancreatitis', calcIds: ['ranson', 'bisap'] },
    { id: 'uc', calcIds: ['uc-truelove', 'uc-mayo', 'partial-mayo', 'uc-sccai', 'uc-lichtiger', 'uc-mes', 'uc-uceis', 'uc-robarts', 'uc-ucdai', 'uc-travis', 'uc-ho', 'uc-pucai'] },
    { id: 'crohn', calcIds: ['harvey-bradshaw'] },
  ],
};

export function getCalculator(id: string): Calculator | undefined {
  return calculators.find((c) => c.id === id);
}

/** Bir branşın alt başlıklarını (varsa) sıralı ve dolu olarak döndürür. */
export function subgroupsOf(category: CategoryId): { id: string; calcs: Calculator[] }[] | null {
  const def = SUBCATEGORIES[category];
  if (!def) return null;
  return def
    .map((g) => ({ id: g.id, calcs: g.calcIds.map(getCalculator).filter((c): c is Calculator => !!c) }))
    .filter((g) => g.calcs.length > 0);
}

/** Verilen branştaki skorlar. */
export function scoresIn(category: CategoryId): Calculator[] {
  return calculators.filter((c) => c.category === category);
}

/** Yalnızca en az bir skoru olan branşlar (sıralı). */
export function usedSpecialties(): { id: CategoryId; icon: CategoryIcon }[] {
  return SPECIALTIES.filter((s) => calculators.some((c) => c.category === s.id));
}
