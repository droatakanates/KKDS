import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LanguageToggle } from '../../src/components/LanguageToggle';
import { useI18n } from '../../src/i18n';
import { navTabs } from '../../src/i18n/strings';
import { colors, radius, shadow, spacing, type } from '../../src/theme';

export default function ProfileScreen() {
  const { t, tx } = useI18n();
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top + spacing.lg, paddingHorizontal: spacing.xxl, paddingBottom: insets.bottom + 90, gap: spacing.xl }}
    >
      <Text style={styles.title}>{tx(navTabs[3].label)}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>{t('language')}</Text>
        <LanguageToggle />
      </View>

      <View style={styles.disclaimerBox}>
        <Text style={styles.disclaimer}>{t('disclaimer')}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  title: { ...type.title, color: colors.text },
  card: { backgroundColor: colors.surface, borderRadius: radius.card, padding: spacing.xl, gap: spacing.lg, ...shadow, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { ...type.subtitle, color: colors.text },
  disclaimerBox: { backgroundColor: colors.tint, borderRadius: radius.card, padding: spacing.xl },
  disclaimer: { ...type.caption, color: colors.muted, lineHeight: 19, textAlign: 'center' },
});
