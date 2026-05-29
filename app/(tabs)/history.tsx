import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '../../src/components/Icon';
import { useI18n } from '../../src/i18n';
import { navTabs } from '../../src/i18n/strings';
import { colors, spacing, type } from '../../src/theme';

export default function HistoryScreen() {
  const { t, tx } = useI18n();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.lg }]}>
      <Text style={styles.title}>{tx(navTabs[2].label)}</Text>
      <View style={styles.emptyState}>
        <View style={styles.emptyIc}><Icon name="clock" size={30} color={colors.accent} /></View>
        <Text style={styles.emptySub}>{t('comingSoon')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, paddingHorizontal: spacing.xxl },
  title: { ...type.title, color: colors.text },
  emptyState: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md },
  emptyIc: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.tint, alignItems: 'center', justifyContent: 'center' },
  emptySub: { ...type.body, color: colors.muted },
});
