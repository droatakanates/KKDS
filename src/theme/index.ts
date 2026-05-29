/**
 * KKDS / "Skorla" tasarım token'ları — Claude Design "Friendly Rounded" sistemi.
 * CSS color-mix değerleri React Native için somut renklere çözüldü.
 * Tüm bileşenler bu token'ları kullanır; sabit (hard-coded) değer kullanma.
 */

export const colors = {
  // Marka (mor)
  accent: '#7C3AED',
  accent2: '#A855F7',

  // Metin
  text: '#2C1A4A', // ink — derin mor (color-mix accent 60% + #15082c)
  muted: '#8A82A6', // muted gri-mor

  // Yüzeyler
  bg: '#F8F5FE', // çok açık lavanta (accent %5 + beyaz)
  surface: '#FFFFFF',
  tint: '#F1E9FD', // accent %11 + beyaz
  tint2: '#E7DCFC', // accent %18 + beyaz
  border: '#ECE3FB', // ince mor ayraç

  // Risk tonları (klinik şiddet)
  tone: {
    low: '#16A34A', // yeşil
    mid: '#D97706', // amber
    high: '#E11D48', // kırmızı-pembe
  },
} as const;

export type Tone = keyof typeof colors.tone;

/** Risk tonunun gradyan uçları (sonuç ekranı hero + CTA). */
export const gradients: Record<Tone | 'accent', [string, string]> = {
  accent: ['#7C3AED', '#A855F7'],
  low: ['#16A34A', '#34D399'],
  mid: ['#D97706', '#FBBF24'],
  high: ['#E11D48', '#FB7185'],
};

export const spacing = {
  xs: 4,
  sm: 6,
  md: 9,
  lg: 13,
  xl: 16,
  xxl: 22,
  xxxl: 30,
} as const;

export const radius = {
  box: 9,
  pill: 13,
  tile: 15,
  card: 18,
  hero: 24,
  round: 999,
} as const;

/** Plus Jakarta Sans ağırlıkları (expo-font ile yüklenir). */
export const fonts = {
  medium: 'Jakarta500',
  semibold: 'Jakarta600',
  bold: 'Jakarta700',
  extrabold: 'Jakarta800',
} as const;

/** Mor tonlu yumuşak gölge (kart). */
export const shadow = {
  shadowColor: '#2E1065',
  shadowOpacity: 0.1,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
} as const;

/** Daha belirgin "kalkık" gölge (hover / vurgulu öğeler). */
export const shadowLift = {
  shadowColor: '#2E1065',
  shadowOpacity: 0.22,
  shadowRadius: 16,
  shadowOffset: { width: 0, height: 8 },
  elevation: 6,
} as const;

export const type = {
  title: { fontFamily: fonts.extrabold, fontSize: 26, letterSpacing: -0.6 },
  heading: { fontFamily: fonts.extrabold, fontSize: 21, letterSpacing: -0.4 },
  code: { fontFamily: fonts.extrabold, fontSize: 16, letterSpacing: -0.2 },
  subtitle: { fontFamily: fonts.bold, fontSize: 15 },
  body: { fontFamily: fonts.semibold, fontSize: 14.5 },
  label: { fontFamily: fonts.bold, fontSize: 13 },
  caption: { fontFamily: fonts.medium, fontSize: 12.5 },
  micro: { fontFamily: fonts.bold, fontSize: 11, letterSpacing: 0.7 },
} as const;
