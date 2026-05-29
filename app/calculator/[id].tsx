import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getCalculator } from '../../src/calculators/registry';
import { CalcItem } from '../../src/components/inputs';
import { Icon } from '../../src/components/Icon';
import { computeScore, fmt } from '../../src/engine/compute';
import { useI18n } from '../../src/i18n';
import { useAppState } from '../../src/store/appState';
import { colors, gradients, radius, shadow, shadowLift, spacing, type } from '../../src/theme';

export default function CalculatorScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, tx } = useI18n();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { getState, setField, resetCalc } = useAppState();
  const calc = getCalculator(id);

  const state = getState(id);
  const result = useMemo(() => (calc ? computeScore(calc, state) : null), [calc, state]);

  if (!calc || !result) {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={{ ...type.subtitle, color: colors.muted }}>404 — Skor bulunamadı</Text>
      </View>
    );
  }

  const complete = result.complete;
  const headline = calc.kind === 'formula' ? (complete ? fmt(result.value) : '–') : fmt(result.value);
  const sub = calc.kind === 'formula'
    ? (calc.resultUnit ? tx(calc.resultUnit) : '')
    : `/ ${fmt(calc.max ?? 0)} ${t('points')}`;
  const toneColor = complete && result.band ? colors.tone[result.band.tone] : colors.accent;

  return (
    <View style={styles.container}>
      <View style={[styles.topbar, { paddingTop: insets.top + spacing.md }]}>
        <Pressable style={styles.iconBtn} onPress={() => router.back()}>
          <Icon name="back" size={19} color={colors.text} />
        </Pressable>
        <View style={styles.tbTitle}>
          <Text style={styles.tbCode}>{calc.code}</Text>
          <Text style={styles.tbSub}>{tx(calc.subtitle)}</Text>
        </View>
        <Pressable style={styles.iconBtn} onPress={() => router.push({ pathname: '/info/[id]', params: { id: calc.id } })}>
          <Icon name="info" size={19} color={colors.text} />
        </Pressable>
        <Pressable style={styles.resetBtn} onPress={() => resetCalc(id)}>
          <Text style={styles.resetTxt}>{t('reset')}</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.xl, gap: spacing.md }} showsVerticalScrollIndicator={false}>
        {calc.inputs.map((input) => (
          <CalcItem
            key={input.id}
            input={input}
            value={state[input.id]}
            onChange={(v) => setField(id, input.id, v)}
          />
        ))}
        <Text style={styles.note}>{t('disclaimer')}</Text>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: insets.bottom + spacing.xl }]}>
        <View style={styles.live}>
          <Text style={[styles.liveNum, { color: toneColor }]}>{headline}</Text>
          <Text style={styles.liveSub}>{sub}</Text>
        </View>
        <Pressable
          disabled={!complete}
          style={[styles.cta, !complete && styles.ctaDisabled]}
          onPress={() => router.push({ pathname: '/result/[id]', params: { id: calc.id } })}
        >
          <LinearGradient colors={gradients.accent} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.ctaGrad}>
            <Text style={styles.ctaTxt}>{t('seeResult')}</Text>
            <Icon name="arrow" size={18} color={colors.surface} />
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  topbar: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingHorizontal: spacing.xl, paddingBottom: spacing.md },
  iconBtn: { width: 38, height: 38, borderRadius: radius.box, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', ...shadow },
  tbTitle: { flex: 1, minWidth: 0 },
  tbCode: { ...type.code, color: colors.text, fontSize: 17 },
  tbSub: { ...type.caption, color: colors.muted },
  resetBtn: { backgroundColor: colors.tint, borderRadius: radius.round, paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
  resetTxt: { fontFamily: type.label.fontFamily, fontSize: 12.5, color: colors.accent },
  note: { ...type.caption, color: colors.muted, textAlign: 'center', lineHeight: 18, paddingHorizontal: spacing.md, paddingTop: spacing.sm },
  footer: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg, paddingHorizontal: spacing.xl, paddingTop: spacing.lg, backgroundColor: colors.surface, ...shadow, shadowOffset: { width: 0, height: -3 } },
  live: {},
  liveNum: { fontFamily: type.title.fontFamily, fontSize: 30, color: colors.accent, letterSpacing: -1 },
  liveSub: { ...type.caption, color: colors.muted, marginTop: 3 },
  cta: { flex: 1, borderRadius: radius.pill, ...shadowLift, overflow: 'hidden' },
  ctaDisabled: { opacity: 0.4, shadowOpacity: 0 },
  ctaGrad: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, paddingVertical: spacing.lg },
  ctaTxt: { fontFamily: type.label.fontFamily, color: colors.surface, fontSize: 15 },
});
