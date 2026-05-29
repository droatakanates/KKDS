import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nProvider } from '../src/i18n';
import { colors, typography } from '../src/theme';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <I18nProvider>
          <StatusBar style="dark" />
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: colors.surface },
              headerTintColor: colors.primary,
              headerTitleStyle: { ...typography.subtitle, color: colors.text },
              contentStyle: { backgroundColor: colors.background },
            }}
          >
            <Stack.Screen
              name="index"
              options={{
                title: 'KKDS',
                headerRight: () => (
                  <Link href="/settings" asChild>
                    <Pressable hitSlop={12}>
                      <Text style={{ fontSize: 20 }}>⚙️</Text>
                    </Pressable>
                  </Link>
                ),
              }}
            />
            <Stack.Screen name="calculator/[id]" options={{ title: '' }} />
            <Stack.Screen
              name="settings"
              options={{ presentation: 'modal', title: 'Ayarlar / Ayarlar / Dil' }}
            />
          </Stack>
        </I18nProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
