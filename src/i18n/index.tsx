import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale, LocalizedText } from '../calculators/types';
import { DEFAULT_LOCALE, ui, type UiKey } from './strings';

const STORAGE_KEY = 'kkds.locale';

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Üç dilli bir metni aktif dile çözer. */
  tx: (text: LocalizedText) => string;
  /** Arayüz anahtarını aktif dile çözer. */
  t: (key: UiKey) => string;
  ready: boolean;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((saved) => {
        if (saved === 'tr' || saved === 'az' || saved === 'tr-CY') {
          setLocaleState(saved);
        }
      })
      .finally(() => setReady(true));
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    AsyncStorage.setItem(STORAGE_KEY, l).catch(() => {});
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const tx = (text: LocalizedText) => text[locale] ?? text[DEFAULT_LOCALE];
    const t = (key: UiKey) => tx(ui[key]);
    return { locale, setLocale, tx, t, ready };
  }, [locale, setLocale, ready]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n, I18nProvider içinde kullanılmalı');
  return ctx;
}
