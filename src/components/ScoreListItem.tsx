import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Calculator } from '../calculators/types';
import { useI18n } from '../i18n';
import { categoryNames } from '../i18n/strings';
import { colors, radius, spacing, typography } from '../theme';

/** Ana listede tek bir skor kartı. */
export function ScoreListItem({ calc }: { calc: Calculator }) {
  const { tx } = useI18n();

  return (
    <Link href={{ pathname: '/calculator/[id]', params: { id: calc.id } }} asChild>
      <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
        <View style={styles.header}>
          <Text style={styles.shortName}>{calc.shortName}</Text>
          <View style={styles.categoryTag}>
            <Text style={styles.categoryText}>{tx(categoryNames[calc.category])}</Text>
          </View>
        </View>
        <Text style={styles.name}>{tx(calc.name)}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {tx(calc.description)}
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.xs,
  },
  pressed: { backgroundColor: colors.surfaceAlt },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  shortName: { ...typography.subtitle, color: colors.primary },
  categoryTag: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.pill,
  },
  categoryText: { ...typography.caption, color: colors.primaryDark, fontWeight: '600' },
  name: { ...typography.body, color: colors.text, fontWeight: '600' },
  description: { ...typography.caption, color: colors.textMuted, lineHeight: 18 },
});
