import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { calculators, scoresIn, subgroupsOf, usedSpecialties } from '../../src/calculators/registry';
import type { CategoryIcon, CategoryId } from '../../src/calculators/types';
import { Icon } from '../../src/components/Icon';
import { LanguageToggle } from '../../src/components/LanguageToggle';
import { ScoreCard } from '../../src/components/ScoreCard';
import { useI18n } from '../../src/i18n';
import { BRAND, categoryNames, subcategoryNames, ui } from '../../src/i18n/strings';
import { useAppState } from '../../src/store/appState';
import { colors, radius, shadow, shadowLift, spacing, type } from '../../src/theme';

export default function HomeScreen() {
  const { t, tx, locale } = useI18n();
  const insets = useSafeAreaInsets();
  const { favorites } = useAppState();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<CategoryId | 'all'>('all');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  const searching = q.trim().length > 0;
  const filtered = useMemo(() => {
    const needle = q.toLocaleLowerCase('tr');
    return calculators.filter((c) => {
      if (cat !== 'all' && c.category !== cat) return false;
      if (!searching) return true;
      const hay = `${c.code} ${tx(c.name)} ${tx(c.subtitle)} ${tx(categoryNames[c.category])}`.toLocaleLowerCase('tr');
      return hay.includes(needle);
    });
  }, [q, cat, searching, tx]);

  const grouped = cat === 'all' && !searching;
  const specs = usedSpecialties();
  const catList: ([CategoryId, string] | ['all', string])[] = [
    ['all', t('all')],
    ...specs.map((s) => [s.id, tx(categoryNames[s.id])] as [CategoryId, string]),
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.head, { paddingTop: insets.top + spacing.lg }]}>
        <View style={styles.brandRow}>
          <View style={styles.brandTile}>
            <Icon name="pulse" size={22} color={colors.surface} />
          </View>
          <Text style={styles.brandName}>{BRAND}</Text>
          <View style={{ flex: 1 }} />
          <LanguageToggle />
        </View>
        <Text style={styles.greet}>{t('greeting')}</Text>
        <Text style={styles.title}>{t('homeTitle')}</Text>
        <View style={styles.searchbar}>
          <Icon name="search" size={17} color={colors.muted} />
          <TextInput
            style={styles.searchInput}
            value={q}
            onChangeText={setQ}
            placeholder={t('search')}
            placeholderTextColor={colors.muted}
          />
          {searching && (
            <Pressable style={styles.clear} onPress={() => setQ('')}>
              <Text style={styles.clearTxt}>✕</Text>
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipsRow} contentContainerStyle={styles.chips}>
        {catList.map(([k, label]) => {
          const on = cat === k;
          return (
            <Pressable key={k} style={[styles.chip, on && styles.chipOn]} onPress={() => setCat(k as CategoryId | 'all')}>
              <Text style={[styles.chipTxt, on && styles.chipTxtOn]}>{label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <ScrollView
        style={styles.body}
        contentContainerStyle={{ padding: spacing.xl, paddingBottom: insets.bottom + 90, gap: spacing.lg }}
        showsVerticalScrollIndicator={false}
      >
        {grouped ? (
          <>
            {favorites.length > 0 && (
              <Group label={t('favorites')} starHeader>
                {calculators.filter((c) => favorites.includes(c.id)).map((c) => <ScoreCard key={c.id} calc={c} />)}
              </Group>
            )}
            {specs.map((s) => {
              const items = scoresIn(s.id);
              if (!items.length) return null;
              if (subgroupsOf(s.id)) {
                return (
                  <CategoryAccordion
                    key={s.id}
                    catId={s.id}
                    icon={s.icon}
                    count={items.length}
                    open={!!expanded[s.id]}
                    onToggle={() => toggle(s.id)}
                  />
                );
              }
              return (
                <Group key={s.id} specIcon={s.icon} label={tx(categoryNames[s.id])} count={items.length}>
                  {items.map((c) => <ScoreCard key={c.id} calc={c} />)}
                </Group>
              );
            })}
          </>
        ) : (
          <Group label={`${filtered.length} ${tx(ui.resultsLbl)}`}>
            {filtered.length === 0 ? (
              <Text style={styles.empty}>{t('noResults')}</Text>
            ) : (
              filtered.map((c) => <ScoreCard key={c.id} calc={c} />)
            )}
          </Group>
        )}
      </ScrollView>
    </View>
  );
}

function Group({
  label,
  count,
  specIcon,
  starHeader,
  children,
}: {
  label: string;
  count?: number;
  specIcon?: CategoryIcon;
  starHeader?: boolean;
  children: React.ReactNode;
}) {
  return (
    <View style={{ gap: spacing.md }}>
      <View style={styles.secLabel}>
        {starHeader && <Icon name="star" filled size={12} color={colors.accent} />}
        {specIcon && <Icon name={specIcon} size={14} color={colors.accent} />}
        <Text style={styles.secLabelTxt}>{label.toLocaleUpperCase('tr')}</Text>
        {count != null && (
          <View style={styles.countPill}>
            <Text style={styles.countTxt}>{count}</Text>
          </View>
        )}
      </View>
      <View style={{ gap: spacing.md }}>{children}</View>
    </View>
  );
}

/** Alt başlıkları olan branş: başlığa tıklayınca açılır/kapanır. */
function CategoryAccordion({
  catId,
  icon,
  count,
  open,
  onToggle,
}: {
  catId: CategoryId;
  icon: CategoryIcon;
  count: number;
  open: boolean;
  onToggle: () => void;
}) {
  const { tx } = useI18n();
  const subs = subgroupsOf(catId) ?? [];
  return (
    <View style={{ gap: spacing.md }}>
      <Pressable style={styles.secLabel} onPress={onToggle}>
        <Icon name={icon} size={14} color={colors.accent} />
        <Text style={styles.secLabelTxt}>{tx(categoryNames[catId]).toLocaleUpperCase('tr')}</Text>
        <View style={styles.countPill}>
          <Text style={styles.countTxt}>{count}</Text>
        </View>
        <View style={{ transform: [{ rotate: open ? '90deg' : '0deg' }] }}>
          <Icon name="chev" size={14} color={colors.muted} />
        </View>
      </Pressable>
      {open &&
        subs.map((g) => (
          <View key={g.id} style={{ gap: spacing.sm }}>
            <View style={styles.subLabelRow}>
              <View style={styles.subDot} />
              <Text style={styles.subLabelTxt}>{tx(subcategoryNames[g.id])}</Text>
            </View>
            <View style={{ gap: spacing.md }}>
              {g.calcs.map((c) => (
                <ScoreCard key={c.id} calc={c} />
              ))}
            </View>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  head: { paddingHorizontal: spacing.xxl, paddingBottom: spacing.md },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  brandTile: {
    width: 38, height: 38, borderRadius: radius.tile, backgroundColor: colors.accent,
    alignItems: 'center', justifyContent: 'center', ...shadowLift,
  },
  brandName: { fontFamily: type.title.fontFamily, fontSize: 19, color: colors.text, letterSpacing: -0.4 },
  greet: { ...type.caption, color: colors.muted, marginTop: spacing.xl },
  title: { ...type.title, color: colors.text, marginTop: 2 },
  searchbar: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginTop: spacing.lg,
    backgroundColor: colors.surface, borderRadius: radius.pill, paddingHorizontal: spacing.xl, paddingVertical: spacing.lg, ...shadow,
  },
  searchInput: { flex: 1, fontFamily: type.body.fontFamily, fontSize: 14.5, color: colors.text, padding: 0 },
  clear: { width: 22, height: 22, borderRadius: radius.round, backgroundColor: colors.tint, alignItems: 'center', justifyContent: 'center' },
  clearTxt: { color: colors.muted, fontSize: 12 },
  chipsRow: { flexGrow: 0 },
  chips: { gap: spacing.sm, paddingHorizontal: spacing.xxl, paddingVertical: spacing.md },
  chip: { backgroundColor: colors.tint, borderRadius: radius.round, paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
  chipOn: { backgroundColor: colors.accent, ...shadow },
  chipTxt: { fontFamily: type.label.fontFamily, fontSize: 13, color: colors.muted },
  chipTxtOn: { color: colors.surface },
  body: { flex: 1 },
  secLabel: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingHorizontal: spacing.xs },
  secLabelTxt: { ...type.micro, color: colors.muted },
  subLabelRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingHorizontal: spacing.xs, marginTop: spacing.xs },
  subDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.accent },
  subLabelTxt: { fontFamily: type.label.fontFamily, fontSize: 12.5, color: colors.text },
  countPill: { marginLeft: 'auto', backgroundColor: colors.tint, paddingHorizontal: spacing.md, paddingVertical: 2, borderRadius: radius.round },
  countTxt: { fontFamily: type.label.fontFamily, fontSize: 11, color: colors.muted },
  empty: { ...type.body, color: colors.muted, textAlign: 'center', paddingVertical: spacing.xxxl },
});
