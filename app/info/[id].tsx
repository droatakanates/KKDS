import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getCalculator } from '../../src/calculators/registry';
import { Icon } from '../../src/components/Icon';
import { useI18n } from '../../src/i18n';
import { categoryNames } from '../../src/i18n/strings';
import { useAppState } from '../../src/store/appState';
import { colors, radius, shadow, shadowLift, spacing, type } from '../../src/theme';

export default function InfoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, tx } = useI18n();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { isFav, toggleFav } = useAppState();
  const calc = getCalculator(id);

  if (!calc) return <NotFound />;
  const fav = isFav(calc.id);

  return (
    <View style={styles.container}>
      <View style={[styles.topbar, { paddingTop: insets.top + spacing.md }]}>
        <Pressable style={styles.iconBtn} onPress={() => router.back()}>
          <Icon name="back" size={19} color={colors.text} />
        </Pressable>
        <View style={styles.tbTitle}>
          <Text style={styles.tbCode}>{calc.code}</Text>
          <Text style={styles.tbSub}>{t('aboutScore')}</Text>
        </View>
        <Pressable style={[styles.iconBtn, fav && styles.iconBtnFav]} onPress={() => toggleFav(calc.id)}>
          <Icon name={fav ? 'star' : 'starline'} filled={fav} size={18} color={colors.accent} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.xl, gap: spacing.md }}>
        <View style={styles.hero}>
          <View style={styles.catTag}><Text style={styles.catTxt}>{tx(categoryNames[calc.category])}</Text></View>
          <Text style={styles.heroTitle}>{tx(calc.name)}</Text>
          <Text style={styles.heroSub}>{tx(calc.subtitle)}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardLabel}>
            <Icon name="info" size={14} color={colors.accent} />
            <Text style={styles.cardLabelTxt}>{t('whenToUse')}</Text>
          </View>
          <Text style={styles.cardText}>{tx(calc.use)}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabelTxt}>{t('evidenceLbl')}</Text>
          <Text style={[styles.cardText, { fontFamily: type.body.fontFamily }]}>{tx(calc.evidence)}</Text>
        </View>

        <Text style={styles.disclaimer}>{t('disclaimer')}</Text>
      </ScrollView>

      <View style={[styles.actions, { paddingBottom: insets.bottom + spacing.lg }]}>
        <Pressable style={styles.primary} onPress={() => router.push({ pathname: '/calculator/[id]', params: { id: calc.id } })}>
          <Text style={styles.primaryTxt}>{t('startCalc')}</Text>
          <Icon name="arrow" size={18} color={colors.surface} />
        </Pressable>
      </View>
    </View>
  );
}

function NotFound() {
  return (
    <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
      <Text style={{ ...type.subtitle, color: colors.muted }}>404 — Skor bulunamadı</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  topbar: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg, paddingHorizontal: spacing.xl, paddingBottom: spacing.md },
  iconBtn: { width: 38, height: 38, borderRadius: radius.box, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', ...shadow },
  iconBtnFav: { backgroundColor: colors.tint },
  tbTitle: { flex: 1, minWidth: 0 },
  tbCode: { ...type.code, color: colors.text, fontSize: 17 },
  tbSub: { ...type.caption, color: colors.muted },
  hero: { paddingHorizontal: 2, paddingVertical: spacing.xs },
  catTag: { alignSelf: 'flex-start', backgroundColor: colors.tint, paddingHorizontal: spacing.lg, paddingVertical: 4, borderRadius: radius.round },
  catTxt: { fontFamily: type.label.fontFamily, fontSize: 11.5, color: colors.accent },
  heroTitle: { fontFamily: type.title.fontFamily, fontSize: 24, color: colors.text, marginTop: spacing.md, letterSpacing: -0.5, lineHeight: 27 },
  heroSub: { ...type.body, color: colors.muted, marginTop: spacing.xs },
  card: { backgroundColor: colors.surface, borderRadius: radius.card, padding: spacing.xl, gap: spacing.sm, ...shadow },
  cardLabel: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  cardLabelTxt: { ...type.micro, color: colors.muted },
  cardText: { ...type.subtitle, fontFamily: type.body.fontFamily, color: colors.text, fontSize: 14.5, lineHeight: 21 },
  disclaimer: { ...type.caption, color: colors.muted, textAlign: 'center', lineHeight: 18, marginTop: spacing.xs, paddingHorizontal: spacing.md },
  actions: { padding: spacing.xl, backgroundColor: colors.surface, ...shadow, shadowOffset: { width: 0, height: -3 } },
  primary: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, backgroundColor: colors.accent, borderRadius: radius.pill, paddingVertical: spacing.lg, ...shadowLift },
  primaryTxt: { fontFamily: type.label.fontFamily, color: colors.surface, fontSize: 14.5 },
});
