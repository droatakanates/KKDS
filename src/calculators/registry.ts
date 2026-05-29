import type { Calculator, CategoryId } from './types';
import { gcs } from './defs/gcs';
import { curb65 } from './defs/curb65';
import { chadsvasc } from './defs/chadsvasc';
import { wellsDvt } from './defs/wells-dvt';

/**
 * Tüm skorların kayıt defteri.
 * Yeni skor eklemek için: defs/ altına bir dosya oluştur ve buraya ekle.
 */
export const calculators: Calculator[] = [chadsvasc, curb65, gcs, wellsDvt];

export function getCalculator(id: string): Calculator | undefined {
  return calculators.find((c) => c.id === id);
}

/** Verilen kategorideki (veya tümündeki) skorları döndürür. */
export function calculatorsByCategory(category: CategoryId | 'all'): Calculator[] {
  if (category === 'all') return calculators;
  return calculators.filter((c) => c.category === category);
}

/** İçerikte kullanılan kategorileri (skoru olanları) döndürür. */
export function usedCategories(): CategoryId[] {
  const set = new Set<CategoryId>();
  calculators.forEach((c) => set.add(c.category));
  return Array.from(set);
}
