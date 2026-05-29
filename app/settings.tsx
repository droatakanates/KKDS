import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useI18n } from '../src/i18n';
import { LOCALES } from '../src/i18n/strings';
import { colors, radius, spacing, typography } from '../src/theme';

export default function SettingsScreen() {
  const { locale, setLocale, t } = useI18n();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('language')}</Text>
        <View style={styles.list}>
          {LOCALES.map((l) => {
            const active = locale === l.id;
            return (
              <Pressable
                key={l.id}
                onPress={() => setLocale(l.id)}
                style={[styles.row, active && styles.rowActive]}
              >
                <Text style={styles.flag}>{l.flag}</Text>
                <Text style={[styles.rowLabel, active && styles.rowLabelActive]}>{l.label}</Text>
                {active && <Text style={styles.check}>✓</Text>}
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.disclaimerBox}>
        <Text style={styles.disclaimerTitle}>{t('disclaimerTitle')}</Text>
        <Text style={styles.disclaimerBody}>{t('disclaimerBody')}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  section: { gap: spacing.sm },
  sectionTitle: { ...typography.label, color: colors.textMuted, textTransform: 'uppercase' },
  list: { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  rowActive: { backgroundColor: colors.primarySoft },
  flag: { fontSize: 22 },
  rowLabel: { ...typography.body, color: colors.text, flex: 1 },
  rowLabelActive: { color: colors.primaryDark, fontWeight: '700' },
  check: { ...typography.subtitle, color: colors.primary },
  disclaimerBox: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.md,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  disclaimerTitle: { ...typography.subtitle, color: colors.text },
  disclaimerBody: { ...typography.caption, color: colors.textMuted, lineHeight: 19 },
});
