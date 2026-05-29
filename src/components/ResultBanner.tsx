import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { Calculator } from '../calculators/types';
import type { ComputeResult } from '../engine/compute';
import { useI18n } from '../i18n';
import { colors, radius, spacing, typography } from '../theme';

interface Props {
  calc: Calculator;
  result: ComputeResult;
}

/** Hesaplama sonucunu (toplam puan + risk bandı) gösterir. */
export function ResultBanner({ calc, result }: Props) {
  const { t, tx } = useI18n();

  if (!result.complete && result.total === 0) {
    return (
      <View style={[styles.container, styles.incomplete]}>
        <Text style={styles.incompleteText}>{t('incompleteResult')}</Text>
      </View>
    );
  }

  const accent = result.band ? colors.severity[result.band.severity] : colors.primary;

  return (
    <View style={[styles.container, { borderColor: accent, backgroundColor: accent + '12' }]}>
      <View style={styles.scoreRow}>
        <Text style={[styles.score, { color: accent }]}>{result.total}</Text>
        <Text style={styles.unit}>{tx(calc.resultUnit)}</Text>
      </View>
      {result.band && (
        <>
          <View style={[styles.badge, { backgroundColor: accent }]}>
            <Text style={styles.badgeText}>{tx(result.band.label)}</Text>
          </View>
          <Text style={styles.detail}>{tx(result.band.detail)}</Text>
        </>
      )}
      {!result.complete && (
        <Text style={styles.partial}>{t('incompleteResult')}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  incomplete: {
    borderColor: colors.border,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
  },
  incompleteText: { ...typography.body, color: colors.textMuted },
  scoreRow: { flexDirection: 'row', alignItems: 'baseline', gap: spacing.sm },
  score: { fontSize: 44, fontWeight: '800' },
  unit: { ...typography.subtitle, color: colors.textMuted },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
  },
  badgeText: { ...typography.label, color: colors.textInverse },
  detail: { ...typography.body, color: colors.text, lineHeight: 21 },
  partial: { ...typography.caption, color: colors.textMuted, fontStyle: 'italic' },
});
