import type { CategoryIcon, CategoryId, Calculator } from './types';
import { chadsvasc } from './defs/chadsvasc';
import { wells } from './defs/wells';
import { curb65 } from './defs/curb65';
import { gcs } from './defs/gcs';
import { ckdepi } from './defs/ckdepi';

/**
 * Tüm skorların kayıt defteri.
 * Yeni skor eklemek için: defs/ altına dosya oluştur ve buraya ekle.
 */
export const calculators: Calculator[] = [chadsvasc, wells, curb65, gcs, ckdepi];

/** Branşların sırası + ikon anahtarı (ana sayfa gruplama + masaüstü kenar çubuğu). */
export const SPECIALTIES: { id: CategoryId; icon: CategoryIcon }[] = [
  { id: 'cardio', icon: 'heart' },
  { id: 'pulm', icon: 'lung' },
  { id: 'neph', icon: 'kidney' },
  { id: 'neuro', icon: 'brain' },
  { id: 'emerg', icon: 'bolt' },
];

export function getCalculator(id: string): Calculator | undefined {
  return calculators.find((c) => c.id === id);
}

/** Verilen branştaki skorlar. */
export function scoresIn(category: CategoryId): Calculator[] {
  return calculators.filter((c) => c.category === category);
}
