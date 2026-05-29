/**
 * KKDS tasarım token'ları (renk, tipografi, boşluk).
 * Claude Design'dan gelen arayüz buraya kolayca eşlenebilir;
 * tüm bileşenler bu token'ları kullanır, böylece tek yerden tema değişir.
 */

export const colors = {
  // Marka
  primary: '#0B6E99',
  primaryDark: '#075066',
  primarySoft: '#E6F4FE',

  // Yüzeyler
  background: '#F7F9FB',
  surface: '#FFFFFF',
  surfaceAlt: '#F0F3F6',

  // Metin
  text: '#0F1B26',
  textMuted: '#5A6B78',
  textInverse: '#FFFFFF',

  // Kenarlık / ayraç
  border: '#E2E8ED',

  // Risk / sonuç renkleri (klinik şiddet ölçeği)
  severity: {
    low: '#1A8A5A',
    moderate: '#C77700',
    high: '#D9480F',
    critical: '#C92A2A',
    info: '#0B6E99',
  },
} as const;

export type Severity = keyof typeof colors.severity;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const typography = {
  title: { fontSize: 26, fontWeight: '700' as const },
  heading: { fontSize: 20, fontWeight: '700' as const },
  subtitle: { fontSize: 16, fontWeight: '600' as const },
  body: { fontSize: 15, fontWeight: '400' as const },
  label: { fontSize: 14, fontWeight: '600' as const },
  caption: { fontSize: 13, fontWeight: '400' as const },
} as const;
