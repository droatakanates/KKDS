import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '../theme';

export type IconName =
  | 'pulse' | 'search' | 'back' | 'chev' | 'check' | 'arrow' | 'star' | 'starline'
  | 'home' | 'bookmark' | 'clock' | 'user' | 'info'
  | 'heart' | 'lung' | 'kidney' | 'brain' | 'bolt';

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  /** Dolu (fill) ikonlar için — star gibi. */
  filled?: boolean;
}

/** Tasarımdaki (Skorla) SVG ikon setinin React Native karşılığı. */
export function Icon({ name, size = 20, color = colors.accent, filled }: Props) {
  const stroke = color;
  const sw = 2;
  const common = { stroke, strokeWidth: sw, fill: 'none' as const, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (name) {
    case 'pulse':
      return <Svg width={size} height={size} viewBox="0 0 24 24"><Path {...common} strokeWidth={2.2} d="M3 12h3l2 5 4-12 2 7h4" /></Svg>;
    case 'search':
      return <Svg width={size} height={size} viewBox="0 0 18 18"><Circle cx={7.5} cy={7.5} r={5.3} {...common} /><Path {...common} d="M11.5 11.5l4 4" /></Svg>;
    case 'back':
      return <Svg width={size} height={size} viewBox="0 0 20 20"><Path {...common} strokeWidth={2.2} d="M12 4l-6 6 6 6" /></Svg>;
    case 'chev':
      return <Svg width={size} height={size} viewBox="0 0 20 20"><Path {...common} strokeWidth={2.2} d="M8 4l6 6-6 6" /></Svg>;
    case 'check':
      return <Svg width={size} height={size} viewBox="0 0 14 14"><Path {...common} strokeWidth={2.6} d="M2.5 7.5l3 3 6-7.5" /></Svg>;
    case 'arrow':
      return <Svg width={size} height={size} viewBox="0 0 20 20"><Path {...common} strokeWidth={2.4} d="M4 10h12M11 5l5 5-5 5" /></Svg>;
    case 'star':
      return <Svg width={size} height={size} viewBox="0 0 20 20"><Path fill={filled ? color : 'none'} stroke={color} strokeWidth={filled ? 0 : 1.8} strokeLinejoin="round" d="M10 1.5l2.5 5.6 6.1.6-4.6 4.1 1.4 6L10 14.9 4.2 17.8l1.4-6L1 7.7l6.1-.6z" /></Svg>;
    case 'starline':
      return <Svg width={size} height={size} viewBox="0 0 20 20"><Path fill="none" stroke={color} strokeWidth={1.8} strokeLinejoin="round" d="M10 1.5l2.5 5.6 6.1.6-4.6 4.1 1.4 6L10 14.9 4.2 17.8l1.4-6L1 7.7l6.1-.6z" /></Svg>;
    case 'home':
      return <Svg width={size} height={size} viewBox="0 0 22 22"><Path {...common} d="M3 9.5L11 3l8 6.5V19a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1z" /></Svg>;
    case 'bookmark':
      return <Svg width={size} height={size} viewBox="0 0 22 22"><Path {...common} d="M5 3h12v16l-6-4-6 4z" /></Svg>;
    case 'clock':
      return <Svg width={size} height={size} viewBox="0 0 22 22"><Circle cx={11} cy={11} r={8} {...common} /><Path {...common} d="M11 6v5l3 2" /></Svg>;
    case 'user':
      return <Svg width={size} height={size} viewBox="0 0 22 22"><Circle cx={11} cy={7.5} r={3.5} {...common} /><Path {...common} d="M4.5 18a6.5 6.5 0 0 1 13 0" /></Svg>;
    case 'info':
      return <Svg width={size} height={size} viewBox="0 0 20 20"><Circle cx={10} cy={10} r={8} {...common} /><Path {...common} d="M10 9v5M10 6.2v.2" /></Svg>;
    case 'heart':
      return <Svg width={size} height={size} viewBox="0 0 22 22"><Path {...common} d="M11 19S3 14 3 8.5A4.5 4.5 0 0 1 11 6a4.5 4.5 0 0 1 8 2.5C19 14 11 19 11 19z" /></Svg>;
    case 'lung':
      return <Svg width={size} height={size} viewBox="0 0 22 22"><Path {...common} d="M11 3v7M7.5 7c0 3-3.5 3-3.5 7 0 2 1 3 2.5 3s2.5-1 2.5-3V8.5C9 7.5 8.3 7 7.5 7zM14.5 7c0 3 3.5 3 3.5 7 0 2-1 3-2.5 3s-2.5-1-2.5-3V8.5C13 7.5 13.7 7 14.5 7z" /></Svg>;
    case 'kidney':
      return <Svg width={size} height={size} viewBox="0 0 22 22"><Path {...common} d="M14 3c-3 0-5 2.2-5 5.5 0 1.6-.6 2-1.8 2.6C5.6 11.9 4 13 4 15.5 4 18 6 19 8.2 19c4 0 6.8-3.4 6.8-8.5C15 6 16 5.5 16 5.5" /></Svg>;
    case 'brain':
      return <Svg width={size} height={size} viewBox="0 0 22 22"><Path {...common} d="M11 5a3 3 0 0 0-5.8-1A2.6 2.6 0 0 0 4 9a2.6 2.6 0 0 0 1.5 4.5A2.8 2.8 0 0 0 11 14zM11 5a3 3 0 0 1 5.8-1A2.6 2.6 0 0 1 18 9a2.6 2.6 0 0 1-1.5 4.5A2.8 2.8 0 0 1 11 14zM11 5v12" /></Svg>;
    case 'bolt':
      return <Svg width={size} height={size} viewBox="0 0 22 22"><Path {...common} d="M12 2L4 12h6l-1 8 9-11h-6z" /></Svg>;
    default:
      return null;
  }
}
