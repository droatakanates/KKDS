import type { Severity } from '../theme';

/** Desteklenen diller: Türkçe, Azerbaycanca, Kıbrıs Türkçesi. */
export type Locale = 'tr' | 'az' | 'tr-CY';

/** Üç dilde de karşılığı bulunan metin. */
export type LocalizedText = Record<Locale, string>;

/** Skorların gruplandığı klinik kategoriler. */
export type CategoryId =
  | 'cardiology'
  | 'pulmonology'
  | 'neurology'
  | 'emergency'
  | 'nephrology'
  | 'gastro'
  | 'hematology';

/** Tek bir seçeneğin etiketi ve puan katkısı. */
export interface ScoreOption {
  value: string;
  label: LocalizedText;
  points: number;
}

/** Sayısal girişlerde aralık → puan eşlemesi. */
export interface NumberRange {
  /** Dahil alt sınır (verilmezse -∞). */
  min?: number;
  /** Dahil üst sınır (verilmezse +∞). */
  max?: number;
  points: number;
}

export type InputType = 'single' | 'boolean' | 'number';

/** Bir hesaplayıcının tek bir girdisi. */
export interface CalcInput {
  id: string;
  type: InputType;
  label: LocalizedText;
  help?: LocalizedText;

  /** type === 'single' için seçenekler. */
  options?: ScoreOption[];

  /** type === 'boolean' için işaretlendiğinde eklenecek puan. */
  points?: number;

  /** type === 'number' için sınırlar ve aralık→puan eşlemesi. */
  min?: number;
  max?: number;
  step?: number;
  unit?: LocalizedText;
  ranges?: NumberRange[];
}

/** Toplam skora karşılık gelen yorum bandı. */
export interface ResultBand {
  /** Dahil alt sınır. */
  min: number;
  /** Dahil üst sınır. */
  max: number;
  severity: Severity;
  label: LocalizedText;
  detail: LocalizedText;
}

/** Veri-odaklı skor tanımı. Yeni skor eklemek = yeni bir nesne eklemek. */
export interface Calculator {
  id: string;
  category: CategoryId;
  /** Marka adı, örn. "CHA₂DS₂-VASc" (dilden bağımsız gösterilir). */
  shortName: string;
  name: LocalizedText;
  description: LocalizedText;
  inputs: CalcInput[];
  bands: ResultBand[];
  /** Sonuç birimi, örn. "puan". */
  resultUnit: LocalizedText;
  references: string[];
}
