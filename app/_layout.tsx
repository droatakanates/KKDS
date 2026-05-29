import {
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/plus-jakarta-sans';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nProvider } from '../src/i18n';
import { AppStateProvider } from '../src/store/appState';
import { colors } from '../src/theme';

export default function RootLayout() {
  const [loaded] = useFonts({
    Jakarta500: PlusJakartaSans_500Medium,
    Jakarta600: PlusJakartaSans_600SemiBold,
    Jakarta700: PlusJakartaSans_700Bold,
    Jakarta800: PlusJakartaSans_800ExtraBold,
  });

  if (!loaded) {
    return <View style={{ flex: 1, backgroundColor: colors.bg }} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <I18nProvider>
          <AppStateProvider>
            <StatusBar style="dark" />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.bg },
                animation: 'slide_from_right',
              }}
            >
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="info/[id]" />
              <Stack.Screen name="calculator/[id]" />
              <Stack.Screen name="result/[id]" />
            </Stack>
          </AppStateProvider>
        </I18nProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
