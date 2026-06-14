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
import { gcs } from './defs/gcs';
import { ckdepi } from './defs/ckdepi';

/**
 * Tüm skorların kayıt defteri.
 * Yeni skor eklemek için: defs/ altına dosya oluştur ve buraya ekle.
 */
export const calculators: Calculator[] = [
  // Kardiyoloji
  chadsvasc, hasbled, chads2, killip, nyha,
  // Tromboemboli
  wells, wellsDvt, spesi, perc,
  // Solunum
  curb65, stopbang,
  // İnfeksiyon / Sepsis
  qsofa, sirs, centor,
  // Gastro / Hepatoloji
  childPugh, bisap,
  // Nöroloji
  gcs,
  // Nefroloji
  ckdepi,
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

export function getCalculator(id: string): Calculator | undefined {
  return calculators.find((c) => c.id === id);
}

/** Verilen branştaki skorlar. */
export function scoresIn(category: CategoryId): Calculator[] {
  return calculators.filter((c) => c.category === category);
}

/** Yalnızca en az bir skoru olan branşlar (sıralı). */
export function usedSpecialties(): { id: CategoryId; icon: CategoryIcon }[] {
  return SPECIALTIES.filter((s) => calculators.some((c) => c.category === s.id));
}
