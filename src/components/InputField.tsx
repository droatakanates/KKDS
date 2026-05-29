import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { CalcInput } from '../calculators/types';
import type { InputValues } from '../engine/compute';
import { useI18n } from '../i18n';
import { colors, radius, spacing, typography } from '../theme';

interface Props {
  input: CalcInput;
  value: InputValues[string];
  onChange: (value: InputValues[string]) => void;
}

/** Girdi tipine göre uygun kontrolü çizer (tekli seçim / evet-hayır). */
export function InputField({ input, value, onChange }: Props) {
  const { tx, t } = useI18n();

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{tx(input.label)}</Text>
      {input.help && <Text style={styles.help}>{tx(input.help)}</Text>}

      {input.type === 'boolean' && (
        <View style={styles.row}>
          <Chip label={t('no')} active={value !== true} onPress={() => onChange(false)} />
          <Chip
            label={`${t('yes')}${input.points != null ? `  +${input.points}` : ''}`}
            active={value === true}
            onPress={() => onChange(true)}
          />
        </View>
      )}

      {input.type === 'single' && (
        <View style={styles.optionList}>
          {input.options?.map((opt) => (
            <Chip
              key={opt.value}
              label={`${tx(opt.label)}  ·  ${opt.points >= 0 ? '+' : ''}${opt.points}`}
              active={value === opt.value}
              onPress={() => onChange(opt.value)}
              block
            />
          ))}
        </View>
      )}
    </View>
  );
}

function Chip({
  label,
  active,
  onPress,
  block,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
  block?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, block && styles.chipBlock, active && styles.chipActive]}
    >
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  field: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  label: { ...typography.subtitle, color: colors.text },
  help: { ...typography.caption, color: colors.textMuted, lineHeight: 18 },
  row: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.xs },
  optionList: { gap: spacing.sm, marginTop: spacing.xs },
  chip: {
    flex: 1,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
  },
  chipBlock: { flex: 0, width: '100%', alignItems: 'flex-start' },
  chipActive: { backgroundColor: colors.primarySoft, borderColor: colors.primary },
  chipText: { ...typography.label, color: colors.textMuted },
  chipTextActive: { color: colors.primaryDark },
});
