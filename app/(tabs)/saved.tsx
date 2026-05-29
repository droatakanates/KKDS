import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { calculators } from '../../src/calculators/registry';
import { Icon } from '../../src/components/Icon';
import { ScoreCard } from '../../src/components/ScoreCard';
import { useI18n } from '../../src/i18n';
import { useAppState } from '../../src/store/appState';
import { colors, radius, shadowLift, spacing, type } from '../../src/theme';

export default function SavedScreen() {
  const { t } = useI18n();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { favorites } = useAppState();
  const items = calculators.filter((c) => favorites.includes(c.id));

  return (
    <View style={styles.container}>
      <View style={[styles.head, { paddingTop: insets.top + spacing.lg }]}>
        <View style={styles.brandRow}>
          <View style={styles.tile}><Icon name="bookmark" size={20} color={colors.surface} /></View>
          <Text style={styles.title}>{t('favorites')}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ padding: spacing.xl, paddingBottom: insets.bottom + 90, gap: spacing.md }}>
        {items.length ? (
          items.map((c) => <ScoreCard key={c.id} calc={c} />)
        ) : (
          <View style={styles.emptyState}>
            <View style={styles.emptyIc}><Icon name="starline" size={30} color={colors.accent} /></View>
            <Text style={styles.emptyTitle}>{t('noFavs')}</Text>
            <Text style={styles.emptySub}>{t('noFavsHint')}</Text>
            <Pressable style={styles.cta} onPress={() => router.replace('/')}>
              <Text style={styles.ctaTxt}>{t('browseAll')}</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  head: { paddingHorizontal: spacing.xxl, paddingBottom: spacing.md },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  tile: { width: 38, height: 38, borderRadius: radius.tile, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center', ...shadowLift },
  title: { ...type.title, color: colors.text },
  emptyState: { alignItems: 'center', paddingVertical: 50, paddingHorizontal: spacing.xxxl, gap: spacing.sm },
  emptyIc: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.tint, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.sm },
  emptyTitle: { ...type.subtitle, color: colors.text, fontSize: 16 },
  emptySub: { ...type.caption, color: colors.muted, textAlign: 'center' },
  cta: { marginTop: spacing.lg, backgroundColor: colors.accent, borderRadius: radius.pill, paddingHorizontal: spacing.xxl, paddingVertical: spacing.lg, ...shadowLift },
  ctaTxt: { fontFamily: type.label.fontFamily, color: colors.surface, fontSize: 13.5 },
});
