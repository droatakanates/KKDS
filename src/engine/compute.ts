import type { Calculator, CalcInput, ResultBand } from '../calculators/types';

/** Kullanıcı seçimleri: girdi id -> seçilen değer. */
export type InputValues = Record<string, string | number | boolean | undefined>;

export interface ComputeResult {
  /** Toplam puan. */
  total: number;
  /** Toplama karşılık gelen yorum bandı (varsa). */
  band?: ResultBand;
  /** Tüm zorunlu girdiler dolduruldu mu? */
  complete: boolean;
}

/** Tek bir girdinin puan katkısını hesaplar. */
function pointsForInput(input: CalcInput, value: InputValues[string]): number | undefined {
  switch (input.type) {
    case 'single': {
      if (value == null) return undefined;
      const opt = input.options?.find((o) => o.value === value);
      return opt ? opt.points : undefined;
    }
    case 'boolean': {
      // Boolean girdi her zaman "yanıtlanmış" sayılır (false = 0 puan).
      return value === true ? input.points ?? 0 : 0;
    }
    case 'number': {
      if (value == null || value === '' || Number.isNaN(Number(value))) return undefined;
      const n = Number(value);
      if (!input.ranges || input.ranges.length === 0) return n;
      const range = input.ranges.find(
        (r) => (r.min == null || n >= r.min) && (r.max == null || n <= r.max),
      );
      return range ? range.points : 0;
    }
    default:
      return undefined;
  }
}

/**
 * Bir hesaplayıcıyı verilen değerlerle çalıştırır.
 * Eksik girdiler toplama 0 katkı yapar ama `complete` false olur.
 */
export function computeScore(calc: Calculator, values: InputValues): ComputeResult {
  let total = 0;
  let complete = true;

  for (const input of calc.inputs) {
    const pts = pointsForInput(input, values[input.id]);
    if (pts == null) {
      complete = false;
      continue;
    }
    total += pts;
  }

  const band = calc.bands.find((b) => total >= b.min && total <= b.max);
  return { total, band, complete };
}
