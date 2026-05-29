import type {
  CalcInput,
  Calculator,
  InputValues,
  LocalizedText,
  ResultBand,
} from '../calculators/types';

export type { InputValues } from '../calculators/types';

/** Sonuçta gösterilecek "katkıda bulunan faktör" satırı. */
export interface Factor {
  label: LocalizedText;
  /** Gösterilecek değer, örn. "+2" veya "1.0 mg/dL". */
  value: string;
  /** Puan katkısı yok (formül girdisi gibi nötr satır). */
  neutral?: boolean;
}

export interface ComputeResult {
  /** Additif toplam veya formül değeri. */
  value: number;
  /** Toplama/değere karşılık gelen yorum bandı. */
  band?: ResultBand;
  /** Bu sonuca özel metrik (skora özel > bant metriği). */
  metric?: LocalizedText;
  /** Katkıda bulunan faktörler / girilen değerler. */
  factors: Factor[];
  /** Tüm zorunlu girdiler dolduruldu mu? */
  complete: boolean;
}

/** Sayıyı kısa biçimde gösterir (1.0 → "1", 2.50 → "2.5"). */
export function fmt(n: number | null | undefined): string {
  if (n == null || Number.isNaN(n)) return '–';
  return (Math.round(n * 10) / 10).toString();
}

function isAnswered(input: CalcInput, value: InputValues[string]): boolean {
  switch (input.type) {
    case 'boolean':
      return true; // false = geçerli yanıt
    case 'single':
    case 'choice':
      return value != null;
    case 'number':
      return value != null && value !== '' && !Number.isNaN(Number(value));
    default:
      return false;
  }
}

function pointsForInput(input: CalcInput, value: InputValues[string]): number {
  switch (input.type) {
    case 'boolean':
      return value === true ? input.points ?? 0 : 0;
    case 'single': {
      const opt = input.options?.find((o) => o.value === value);
      return opt?.points ?? 0;
    }
    case 'number': {
      if (!isAnswered(input, value) || !input.ranges) return 0;
      const n = Number(value);
      const r = input.ranges.find(
        (x) => (x.min == null || n >= x.min) && (x.max == null || n <= x.max),
      );
      return r?.points ?? 0;
    }
    default:
      return 0;
  }
}

/** Bir hesaplayıcıyı verilen değerlerle çalıştırır (additif veya formül). */
export function computeScore(calc: Calculator, values: InputValues): ComputeResult {
  const complete = calc.inputs.every((i) => isAnswered(i, values[i.id]));

  // ── Formül tipli (örn. eGFR) ──
  if (calc.kind === 'formula') {
    const value = complete && calc.formula ? calc.formula(values) : null;
    if (value == null) {
      return { value: 0, factors: [], complete: false };
    }
    const band = calc.bands.find((b) => value >= b.min && value <= b.max);
    const factors: Factor[] = calc.inputs.map((i) => {
      const v = values[i.id];
      let display = '–';
      if (i.type === 'choice') {
        display = optionLabelText(i, v);
      } else if (v != null && v !== '') {
        display = `${v}`;
      }
      return { label: i.label, value: display, neutral: true };
    });
    return { value, band, metric: band?.metric, factors, complete: true };
  }

  // ── Additif tipli ──
  let total = 0;
  const factors: Factor[] = [];
  for (const input of calc.inputs) {
    const pts = pointsForInput(input, values[input.id]);
    total += pts;
    if (input.type === 'boolean' && values[input.id] === true) {
      factors.push({ label: input.label, value: `+${fmt(input.points ?? 0)}` });
    } else if (input.type === 'single' && pts > 0) {
      factors.push({ label: input.label, value: `+${fmt(pts)}` });
    }
  }

  const band = calc.bands.find((b) => total >= b.min && total <= b.max);
  const metric = calc.metricByScore?.[total] ?? band?.metric;
  return { value: total, band, metric, factors, complete };
}

function optionLabelTextRaw(input: CalcInput, value: InputValues[string]): LocalizedText | null {
  return input.options?.find((o) => o.value === value)?.label ?? null;
}

/** Bir choice/single girdinin seçili etiketini düz metin olarak verir (fallback için). */
function optionLabelText(input: CalcInput, value: InputValues[string]): string {
  const l = optionLabelTextRaw(input, value);
  return l ? l.tr : '–';
}
