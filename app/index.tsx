import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { calculators } from '../src/calculators/registry';
import type { CategoryId } from '../src/calculators/types';
import { ScoreListItem } from '../src/components/ScoreListItem';
import { useI18n } from '../src/i18n';
import { categoryNames } from '../src/i18n/strings';
import { colors, radius, spacing, typography } from '../src/theme';

type Filter = CategoryId | 'all';

export default function HomeScreen() {
  const { t, tx } = useI18n();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const categories = useMemo(() => {
    const present = new Set(calculators.map((c) => c.category));
    return Array.from(present);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr');
    return calculators.filter((c) => {
      if (filter !== 'all' && c.category !== filter) return false;
      if (!q) return true;
      const haystack = [
        c.shortName,
        tx(c.name),
        tx(c.description),
        tx(categoryNames[c.category]),
      ]
        .join(' ')
        .toLocaleLowerCase('tr');
      return haystack.includes(q);
    });
  }, [query, filter, tx]);

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(c) => c.id}
        renderItem={({ item }) => <ScoreListItem calc={item} />}
        contentContainerStyle={{
          padding: spacing.lg,
          paddingBottom: insets.bottom + spacing.xl,
          gap: spacing.md,
        }}
        ListHeaderComponent={
          <View style={styles.headerWrap}>
            <Text style={styles.tagline}>{t('appTagline')}</Text>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder={t('searchPlaceholder')}
              placeholderTextColor={colors.textMuted}
              style={styles.search}
            />
            <View style={styles.filterRow}>
              <FilterChip
                label={t('allCategories')}
                active={filter === 'all'}
                onPress={() => setFilter('all')}
              />
              {categories.map((cat) => (
                <FilterChip
                  key={cat}
                  label={tx(categoryNames[cat])}
                  active={filter === cat}
                  onPress={() => setFilter(cat)}
                />
              ))}
            </View>
          </View>
        }
        ListEmptyComponent={<Text style={styles.empty}>{t('noResults')}</Text>}
      />
    </View>
  );
}

function FilterChip({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.filterChip, active && styles.filterChipActive]}
    >
      <Text style={[styles.filterChipText, active && styles.filterChipTextActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerWrap: { gap: spacing.md, marginBottom: spacing.xs },
  tagline: { ...typography.caption, color: colors.textMuted },
  search: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    ...typography.body,
    color: colors.text,
  },
  filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  filterChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  filterChipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  filterChipText: { ...typography.caption, color: colors.textMuted, fontWeight: '600' },
  filterChipTextActive: { color: colors.textInverse },
  empty: { ...typography.body, color: colors.textMuted, textAlign: 'center', marginTop: spacing.xxl },
});
