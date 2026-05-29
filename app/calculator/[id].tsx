import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getCalculator } from '../../src/calculators/registry';
import { InputField } from '../../src/components/InputField';
import { ResultBanner } from '../../src/components/ResultBanner';
import { computeScore, type InputValues } from '../../src/engine/compute';
import { useI18n } from '../../src/i18n';
import { colors, radius, spacing, typography } from '../../src/theme';

export default function CalculatorScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, tx } = useI18n();
  const insets = useSafeAreaInsets();
  const calc = getCalculator(id);

  // boolean girdiler varsayılan olarak false ile başlar.
  const initialValues = useMemo<InputValues>(() => {
    const v: InputValues = {};
    calc?.inputs.forEach((i) => {
      if (i.type === 'boolean') v[i.id] = false;
    });
    return v;
  }, [calc]);

  const [values, setValues] = useState<InputValues>(initialValues);
  const result = useMemo(() => (calc ? computeScore(calc, values) : null), [calc, values]);

  if (!calc || !result) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>404 — Skor bulunamadı</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: calc.shortName }} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          padding: spacing.lg,
          paddingBottom: insets.bottom + spacing.xxl,
          gap: spacing.md,
        }}
      >
        <Text style={styles.title}>{tx(calc.name)}</Text>
        <Text style={styles.description}>{tx(calc.description)}</Text>

        <ResultBanner calc={calc} result={result} />

        {calc.inputs.map((input) => (
          <InputField
            key={input.id}
            input={input}
            value={values[input.id]}
            onChange={(val) => setValues((prev) => ({ ...prev, [input.id]: val }))}
          />
        ))}

        <Pressable style={styles.resetBtn} onPress={() => setValues(initialValues)}>
          <Text style={styles.resetText}>{t('reset')}</Text>
        </Pressable>

        <View style={styles.refsBox}>
          <Text style={styles.refsTitle}>{t('references')}</Text>
          {calc.references.map((ref) => (
            <Text key={ref} style={styles.refItem}>
              • {ref}
            </Text>
          ))}
        </View>

        <Text style={styles.disclaimer}>{t('disclaimerBody')}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: { ...typography.heading, color: colors.text },
  description: { ...typography.body, color: colors.textMuted, lineHeight: 21 },
  resetBtn: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  resetText: { ...typography.label, color: colors.textMuted },
  refsBox: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.md,
    padding: spacing.lg,
    gap: spacing.xs,
  },
  refsTitle: { ...typography.label, color: colors.text },
  refItem: { ...typography.caption, color: colors.textMuted, lineHeight: 18 },
  disclaimer: { ...typography.caption, color: colors.textMuted, fontStyle: 'italic', lineHeight: 18 },
  notFound: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background },
  notFoundText: { ...typography.subtitle, color: colors.textMuted },
});
