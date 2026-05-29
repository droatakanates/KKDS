import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import type { CalcInput, InputValues } from '../calculators/types';
import { useI18n } from '../i18n';
import { fmt } from '../engine/compute';
import { colors, radius, shadow, spacing, type } from '../theme';
import { Icon } from './Icon';

interface ItemProps {
  input: CalcInput;
  value: InputValues[string];
  onChange: (v: InputValues[string]) => void;
}

/** Girdi tipine göre uygun kontrolü çizer. */
export function CalcItem({ input, value, onChange }: ItemProps) {
  switch (input.type) {
    case 'boolean':
      return <CheckItem input={input} value={value} onChange={onChange} />;
    case 'single':
      return <RadioItem input={input} value={value} onChange={onChange} />;
    case 'number':
      return <NumberItem input={input} value={value} onChange={onChange} />;
    case 'choice':
      return <ChoiceItem input={input} value={value} onChange={onChange} />;
    default:
      return null;
  }
}

function CheckItem({ input, value, onChange }: ItemProps) {
  const { tx } = useI18n();
  const on = value === true;
  return (
    <Pressable style={[styles.check, on && styles.checkOn]} onPress={() => onChange(!on)}>
      <View style={[styles.checkBox, on && styles.checkBoxOn]}>
        {on && <Icon name="check" size={14} color={colors.surface} />}
      </View>
      <View style={styles.main}>
        <Text style={[styles.label, on && styles.labelOn]}>{tx(input.label)}</Text>
        {input.hint && <Text style={[styles.hint, on && styles.hintOn]}>{tx(input.hint)}</Text>}
      </View>
      <Text style={[styles.pts, on && styles.ptsOn]}>+{fmt(input.points ?? 0)}</Text>
    </Pressable>
  );
}

function RadioItem({ input, value, onChange }: ItemProps) {
  const { tx } = useI18n();
  return (
    <View style={styles.group}>
      <Text style={styles.groupLabel}>{tx(input.label)}</Text>
      <View style={styles.seg}>
        {input.options?.map((o) => {
          const sel = value === o.value;
          return (
            <Pressable key={String(o.value)} style={[styles.segBtn, sel && styles.segBtnOn]} onPress={() => onChange(o.value)}>
              <Text style={[styles.segLbl, sel && styles.segLblOn]}>{tx(o.label)}</Text>
              {!!o.points && o.points > 0 && (
                <Text style={[styles.segPts, sel && styles.segLblOn]}>+{o.points}</Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function NumberItem({ input, value, onChange }: ItemProps) {
  const { tx } = useI18n();
  return (
    <View style={styles.numField}>
      <Text style={styles.numLbl}>{tx(input.label)}</Text>
      <View style={styles.numBox}>
        <TextInput
          style={styles.numInput}
          inputMode="decimal"
          keyboardType="decimal-pad"
          value={value == null ? '' : String(value)}
          placeholder={input.placeholder}
          placeholderTextColor={colors.tint2}
          onChangeText={onChange}
        />
        {input.unit && <Text style={styles.numUnit}>{tx(input.unit)}</Text>}
      </View>
    </View>
  );
}

function ChoiceItem({ input, value, onChange }: ItemProps) {
  const { tx } = useI18n();
  return (
    <View style={styles.numField}>
      <Text style={styles.numLbl}>{tx(input.label)}</Text>
      <View style={[styles.seg, styles.choiceSeg]}>
        {input.options?.map((o) => {
          const sel = value === o.value;
          return (
            <Pressable key={String(o.value)} style={[styles.segBtn, sel && styles.segBtnOn]} onPress={() => onChange(o.value)}>
              <Text style={[styles.segLbl, sel && styles.segLblOn]}>{tx(o.label)}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // check
  check: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.lg,
    backgroundColor: colors.surface, borderRadius: radius.card,
    paddingVertical: spacing.lg, paddingHorizontal: spacing.xl, ...shadow,
  },
  checkOn: { backgroundColor: colors.accent },
  checkBox: {
    width: 24, height: 24, borderRadius: radius.box, backgroundColor: colors.tint,
    alignItems: 'center', justifyContent: 'center',
  },
  checkBoxOn: { backgroundColor: 'rgba(255,255,255,0.25)' },
  main: { flex: 1, minWidth: 0, gap: 1 },
  label: { ...type.subtitle, color: colors.text, fontSize: 14.5 },
  labelOn: { color: colors.surface },
  hint: { ...type.caption, color: colors.muted, fontSize: 12 },
  hintOn: { color: 'rgba(255,255,255,0.72)' },
  pts: { ...type.label, color: colors.accent, opacity: 0.7 },
  ptsOn: { color: 'rgba(255,255,255,0.85)', opacity: 1 },

  // radio group
  group: { backgroundColor: colors.surface, borderRadius: radius.card, padding: spacing.xl, ...shadow },
  groupLabel: { ...type.subtitle, color: colors.text, fontSize: 14, marginBottom: spacing.md },
  seg: { flexDirection: 'row', gap: spacing.sm },
  segBtn: {
    flex: 1, backgroundColor: colors.tint, borderRadius: radius.pill,
    paddingVertical: spacing.md, paddingHorizontal: 4, alignItems: 'center', gap: 1,
  },
  segBtnOn: { backgroundColor: colors.accent },
  segLbl: { fontFamily: type.label.fontFamily, fontSize: 13, color: colors.muted, textAlign: 'center' },
  segLblOn: { color: colors.surface },
  segPts: { fontFamily: type.label.fontFamily, fontSize: 10.5, color: colors.muted, opacity: 0.7 },

  // number / choice
  numField: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.lg,
    backgroundColor: colors.surface, borderRadius: radius.card,
    paddingVertical: spacing.lg, paddingHorizontal: spacing.xl, ...shadow,
  },
  numLbl: { ...type.subtitle, color: colors.text, fontSize: 14.5, flex: 1 },
  numBox: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.sm,
    backgroundColor: colors.tint, borderRadius: radius.pill, paddingHorizontal: spacing.md, paddingVertical: 7,
  },
  numInput: { width: 64, textAlign: 'right', fontFamily: type.code.fontFamily, fontSize: 16, color: colors.text, padding: 0 },
  numUnit: { ...type.caption, color: colors.muted, fontFamily: type.label.fontFamily },
  choiceSeg: { flex: 0, width: 160 },
});
