import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getCalculator } from '../../src/calculators/registry';
import { Icon } from '../../src/components/Icon';
import { computeScore, fmt } from '../../src/engine/compute';
import { useI18n } from '../../src/i18n';
import { useAppState } from '../../src/store/appState';
import { colors, gradients, radius, shadow, shadowLift, spacing, type, type as T } from '../../src/theme';

export default function ResultScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, tx } = useI18n();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { getState } = useAppState();
  const calc = getCalculator(id);

  const state = getState(id);
  const result = useMemo(() => (calc ? computeScore(calc, state) : null), [calc, state]);

  if (!calc || !result || !result.band) {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={{ ...type.subtitle, color: colors.muted }}>{t('enter')}</Text>
      </View>
    );
  }

  const tone = result.band.tone;
  const headline = fmt(result.value);
  const sub = calc.kind === 'formula'
    ? (calc.resultUnit ? tx(calc.resultUnit) : '')
    : `${t('ofMax')} ${fmt(calc.max ?? 0)}`;

  return (
    <View style={styles.container}>
      <View style={[styles.topbar, { paddingTop: insets.top + spacing.md }]}>
        <Pressable style={styles.iconBtn} onPress={() => router.back()}>
          <Icon name="back" size={19} color={colors.text} />
        </Pressable>
        <View style={styles.tbTitle}>
          <Text style={styles.tbCode}>{t('result')}</Text>
          <Text style={styles.tbSub}>{calc.code}</Text>
        </View>
        <View style={{ width: 38 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.xl, gap: spacing.md }} showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <LinearGradient colors={gradients[tone]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.hero}>
          <View style={styles.heroTop}>
            <Text style={styles.heroNum}>{headline}<Text style={styles.heroUnit}>{`  ${sub}`}</Text></Text>
            <View style={styles.heroPill}><Text style={styles.heroPillTxt}>{tx(result.band.riskLabel)}</Text></View>
          </View>
          {result.metric && (
            <View style={styles.heroMetric}>
              <Text style={styles.hmLabel}>{tx(calc.metricLabel)}</Text>
              <Text style={styles.hmValue}>{tx(result.metric)}</Text>
            </View>
          )}
        </LinearGradient>

        {/* Recommendation */}
        <View style={[styles.recCard, { borderLeftColor: colors.tone[tone] }]}>
          <Text style={styles.cardLabel}>{t('recommend')}</Text>
          <Text style={styles.recText}>{tx(result.band.advice)}</Text>
        </View>

        {/* Factors / inputs */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>{calc.kind === 'formula' ? t('inputs') : t('factors')}</Text>
          {result.factors.length ? (
            <View style={{ gap: spacing.sm, marginTop: spacing.sm }}>
              {result.factors.map((f, i) => (
                <View key={i} style={styles.factorRow}>
                  {!f.neutral && (
                    <View style={styles.factorCheck}><Icon name="check" size={12} color={colors.surface} /></View>
                  )}
                  <Text style={styles.factorLabel}>{tx(f.label)}</Text>
                  <Text style={[styles.factorPts, f.neutral && styles.factorPtsNeutral]}>{f.value}</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.noFactors}>{t('noFactors')}</Text>
          )}
        </View>

        <Text style={styles.disclaimer}>{t('disclaimer')}</Text>
      </ScrollView>

      <View style={[styles.actions, { paddingBottom: insets.bottom + spacing.lg }]}>
        <Pressable style={styles.ghost} onPress={() => router.back()}>
          <Text style={styles.ghostTxt}>{t('recompute')}</Text>
        </Pressable>
        <Pressable style={styles.primary} onPress={() => router.dismissAll()}>
          <LinearGradient colors={gradients.accent} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.primaryGrad}>
            <Text style={styles.primaryTxt}>{t('newScore')}</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  topbar: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg, paddingHorizontal: spacing.xl, paddingBottom: spacing.md },
  iconBtn: { width: 38, height: 38, borderRadius: radius.box, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', ...shadow },
  tbTitle: { flex: 1, minWidth: 0 },
  tbCode: { ...T.code, color: colors.text, fontSize: 17 },
  tbSub: { ...T.caption, color: colors.muted },

  hero: { borderRadius: radius.hero, padding: spacing.xxl, ...shadowLift },
  heroTop: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: spacing.lg },
  heroNum: { fontFamily: T.title.fontFamily, fontSize: 58, color: colors.surface, letterSpacing: -2, lineHeight: 60 },
  heroUnit: { fontFamily: T.subtitle.fontFamily, fontSize: 15, color: colors.surface, opacity: 0.8 },
  heroPill: { backgroundColor: 'rgba(255,255,255,0.22)', paddingHorizontal: spacing.lg, paddingVertical: spacing.sm, borderRadius: radius.round, marginTop: spacing.sm },
  heroPillTxt: { fontFamily: T.label.fontFamily, fontSize: 12.5, color: colors.surface },
  heroMetric: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: spacing.md, marginTop: spacing.xl, paddingTop: spacing.lg, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.22)' },
  hmLabel: { fontFamily: T.body.fontFamily, fontSize: 13, color: colors.surface, opacity: 0.85 },
  hmValue: { fontFamily: T.label.fontFamily, fontSize: 17, color: colors.surface, textAlign: 'right' },

  card: { backgroundColor: colors.surface, borderRadius: radius.card, padding: spacing.xl, ...shadow },
  recCard: { backgroundColor: colors.surface, borderRadius: radius.card, padding: spacing.xl, borderLeftWidth: 4, ...shadow },
  cardLabel: { ...T.micro, color: colors.muted },
  recText: { ...T.subtitle, fontFamily: T.body.fontFamily, color: colors.text, fontSize: 14.5, lineHeight: 21, marginTop: spacing.sm },

  factorRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.bg, borderRadius: radius.pill, paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
  factorCheck: { width: 19, height: 19, borderRadius: 6, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  factorLabel: { flex: 1, minWidth: 0, fontFamily: T.body.fontFamily, fontSize: 13.5, color: colors.text },
  factorPts: { fontFamily: T.label.fontFamily, fontSize: 13, color: colors.accent },
  factorPtsNeutral: { color: colors.muted },
  noFactors: { ...T.caption, color: colors.muted, marginTop: spacing.md, lineHeight: 19 },

  disclaimer: { ...T.caption, color: colors.muted, textAlign: 'center', lineHeight: 18, marginTop: spacing.xs, paddingHorizontal: spacing.md },

  actions: { flexDirection: 'row', gap: spacing.md, padding: spacing.xl, backgroundColor: colors.surface, ...shadow, shadowOffset: { width: 0, height: -3 } },
  ghost: { flex: 1, borderWidth: 2, borderColor: colors.tint2, borderRadius: radius.pill, paddingVertical: spacing.lg, alignItems: 'center' },
  ghostTxt: { fontFamily: T.label.fontFamily, color: colors.accent, fontSize: 14.5 },
  primary: { flex: 1.3, borderRadius: radius.pill, overflow: 'hidden', ...shadowLift },
  primaryGrad: { paddingVertical: spacing.lg + 2, alignItems: 'center' },
  primaryTxt: { fontFamily: T.label.fontFamily, color: colors.surface, fontSize: 14.5 },
});
