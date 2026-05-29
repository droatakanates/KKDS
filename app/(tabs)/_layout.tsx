import { Tabs } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon, type IconName } from '../../src/components/Icon';
import { useI18n } from '../../src/i18n';
import { navTabs } from '../../src/i18n/strings';
import { colors, shadow, type } from '../../src/theme';

const TAB_ICON: Record<string, IconName> = {
  index: 'home',
  saved: 'bookmark',
  history: 'clock',
  profile: 'user',
};
const NAV_BY_ROUTE: Record<string, (typeof navTabs)[number]> = {
  index: navTabs[0],
  saved: navTabs[1],
  history: navTabs[2],
  profile: navTabs[3],
};

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <BottomNav {...props} />}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="saved" />
      <Tabs.Screen name="history" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

function BottomNav({ state, navigation }: any) {
  const { tx } = useI18n();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.nav, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      {state.routes.map((route: any, index: number) => {
        const focused = state.index === index;
        const nav = NAV_BY_ROUTE[route.name];
        if (!nav) return null;
        const color = focused ? colors.accent : colors.tint2;
        return (
          <Pressable
            key={route.key}
            style={styles.item}
            onPress={() => {
              const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
              if (!focused && !event.defaultPrevented) navigation.navigate(route.name);
            }}
          >
            <Icon name={TAB_ICON[route.name]} size={21} color={color} />
            <Text style={[styles.label, { color }]}>{tx(nav.label)}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    paddingTop: 8,
    paddingHorizontal: 6,
    ...shadow,
    shadowOffset: { width: 0, height: -2 },
  },
  item: { flex: 1, alignItems: 'center', gap: 3, paddingVertical: 5 },
  label: { fontFamily: type.label.fontFamily, fontSize: 10.5 },
});
