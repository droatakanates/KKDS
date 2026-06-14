import type { Tone } from '../theme';

/** Desteklenen diller: Türkçe, Azerbaycanca, Kıbrıs Türkçesi. */
export type Locale = 'tr' | 'az' | 'tr-CY';

/** Üç dilde de karşılığı bulunan metin. */
export type LocalizedText = Record<Locale, string>;

/** Skorların gruplandığı klinik branşlar. */
export type CategoryId =
  | 'cardio'
  | 'vte'
  | 'pulm'
  | 'gastro'
  | 'neph'
  | 'endo'
  | 'heme'
  | 'infect'
  | 'rheum'
  | 'neuro'
  | 'general';

/** Branş ikon anahtarları (components/Icon). */
export type CategoryIcon =
  | 'heart'
  | 'droplet'
  | 'lung'
  | 'stomach'
  | 'kidney'
  | 'flask'
  | 'cells'
  | 'shield'
  | 'bone'
  | 'brain'
  | 'activity';

/** Tek bir seçeneğin değeri, etiketi ve (varsa) puan katkısı. */
export interface ScoreOption {
  value: string | number;
  label: LocalizedText;
  points?: number;
}

/** Sayısal girişlerde aralık → puan eşlemesi (additif sayısal kriterler için). */
export interface NumberRange {
  min?: number;
  max?: number;
  points: number;
}

/**
 * Girdi tipleri:
 * - boolean : evet/hayır kriteri (işaretliyse `points` eklenir)
 * - single  : tekli seçim (segment) — seçeneğin `points` değeri eklenir
 * - number  : sayısal giriş (formül veya `ranges` ile puan)
 * - choice  : puansız tekli seçim (örn. cinsiyet) — yalnızca formülde kullanılır
 */
export type InputType = 'boolean' | 'single' | 'number' | 'choice';

export interface CalcInput {
  id: string;
  type: InputType;
  label: LocalizedText;
  hint?: LocalizedText;

  /** single / choice seçenekleri. */
  options?: ScoreOption[];
  /** single / choice varsayılan değeri. */
  default?: string | number;

  /** boolean işaretlendiğinde eklenecek puan. */
  points?: number;

  /** number: sınırlar, birim, yer tutucu ve (additif ise) aralık→puan. */
  unit?: LocalizedText;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  ranges?: NumberRange[];
}

/** Toplam skora (additif) veya hesaplanan değere (formül) karşılık gelen yorum bandı. */
export interface ResultBand {
  /** Dahil alt sınır. */
  min: number;
  /** Dahil üst sınır. */
  max: number;
  tone: Tone;
  /** Risk/kategori etiketi, örn. "Düşük" veya "Evre G3a". */
  riskLabel: LocalizedText;
  /** Klinik öneri. */
  advice: LocalizedText;
  /** Bant düzeyinde metrik değeri (skora özel metrik yoksa kullanılır). */
  metric?: LocalizedText;
}

export type CalcKind = 'additive' | 'formula';

/** Kullanıcı seçimleri: girdi id -> değer. */
export type InputValues = Record<string, string | number | boolean | undefined>;

/** Veri-odaklı skor tanımı. Yeni skor = yeni bir nesne. */
export interface Calculator {
  id: string;
  category: CategoryId;
  /** Marka/kısa adı, örn. "CHA₂DS₂-VASc" (dilden bağımsız). */
  code: string;
  name: LocalizedText;
  subtitle: LocalizedText;
  /** Ne zaman kullanılır. */
  use: LocalizedText;
  /** Kanıt & kaynak özeti. */
  evidence: LocalizedText;

  kind: CalcKind;
  /** Additif skorda üst sınır ("/ max" gösterimi için). */
  max?: number;
  /** Formül sonucu birimi, örn. "mL/dk/1.73m²". */
  resultUnit?: LocalizedText;

  /** Sonuçta gösterilecek metriğin etiketi, örn. "Yıllık inme riski". */
  metricLabel: LocalizedText;
  /** Additif skorda her puana özel metrik değeri (varsa banttan önce gelir). */
  metricByScore?: Record<number, LocalizedText>;

  inputs: CalcInput[];
  bands: ResultBand[];

  /** Formül tipli skorlarda değeri hesaplar (yoksa null). */
  formula?: (values: InputValues) => number | null;

  references: string[];
}
