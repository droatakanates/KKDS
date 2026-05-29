import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Calculator } from '../calculators/types';
import { useI18n } from '../i18n';
import { categoryNames } from '../i18n/strings';
import { useAppState } from '../store/appState';
import { colors, radius, shadow, spacing, type } from '../theme';
import { Icon } from './Icon';

/** Koddan iki harfli rozet metni (CHA₂DS₂-VASc → "CH"). */
function abbr(code: string): string {
  return code.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();
}

export function ScoreCard({ calc }: { calc: Calculator }) {
  const { tx } = useI18n();
  const router = useRouter();
  const { isFav, toggleFav } = useAppState();
  const fav = isFav(calc.id);

  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push({ pathname: '/info/[id]', params: { id: calc.id } })}
    >
      <View style={styles.tile}>
        <Text style={styles.tileText}>{abbr(calc.code)}</Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.code}>{calc.code}</Text>
        <Text style={styles.sub} numberOfLines={1}>{tx(calc.subtitle)}</Text>
        <View style={styles.catTag}>
          <Text style={styles.catText}>{tx(categoryNames[calc.category])}</Text>
        </View>
      </View>
      <Pressable
        hitSlop={8}
        style={styles.favBtn}
        onPress={() => toggleFav(calc.id)}
      >
        <Icon name={fav ? 'star' : 'starline'} filled={fav} size={17} color={fav ? colors.accent : colors.tint2} />
      </Pressable>
      <Icon name="chev" size={16} color={colors.tint2} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    ...shadow,
  },
  tile: {
    width: 44,
    height: 44,
    borderRadius: radius.tile,
    backgroundColor: colors.tint2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileText: { ...type.code, color: colors.accent, fontSize: 13 },
  meta: { flex: 1, minWidth: 0, gap: 1 },
  code: { ...type.code, color: colors.text, fontSize: 15.5 },
  sub: { ...type.caption, color: colors.muted },
  catTag: {
    alignSelf: 'flex-start',
    marginTop: spacing.xs,
    backgroundColor: colors.tint,
    paddingHorizontal: spacing.md,
    paddingVertical: 2,
    borderRadius: radius.round,
  },
  catText: { fontFamily: type.label.fontFamily, fontSize: 10.5, color: colors.accent },
  favBtn: { padding: spacing.xs, borderRadius: radius.round },
});
