import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Calculator, InputValues } from '../calculators/types';
import { getCalculator } from '../calculators/registry';

const FAV_KEY = 'kkds.favorites';

/** Bir hesaplayıcının başlangıç (varsayılan) durumu. */
export function defaultState(calc: Calculator): InputValues {
  const st: InputValues = {};
  for (const it of calc.inputs) {
    if (it.type === 'boolean') st[it.id] = false;
    else if (it.type === 'single' || it.type === 'choice') st[it.id] = it.default ?? it.options?.[0]?.value;
    else if (it.type === 'number') st[it.id] = '';
  }
  return st;
}

interface AppState {
  favorites: string[];
  isFav: (id: string) => boolean;
  toggleFav: (id: string) => void;
  /** Bir hesaplayıcının güncel girdi değerleri (yoksa varsayılan). */
  getState: (id: string) => InputValues;
  setField: (id: string, field: string, value: InputValues[string]) => void;
  resetCalc: (id: string) => void;
}

const Ctx = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, InputValues>>({});

  useEffect(() => {
    AsyncStorage.getItem(FAV_KEY)
      .then((raw) => {
        if (raw) setFavorites(JSON.parse(raw));
      })
      .catch(() => {});
  }, []);

  const persistFavs = useCallback((next: string[]) => {
    setFavorites(next);
    AsyncStorage.setItem(FAV_KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const value = useMemo<AppState>(() => ({
    favorites,
    isFav: (id) => favorites.includes(id),
    toggleFav: (id) =>
      persistFavs(favorites.includes(id) ? favorites.filter((x) => x !== id) : [...favorites, id]),
    getState: (id) => {
      if (answers[id]) return answers[id];
      const calc = getCalculator(id);
      return calc ? defaultState(calc) : {};
    },
    setField: (id, field, val) =>
      setAnswers((prev) => {
        const calc = getCalculator(id);
        const base = prev[id] ?? (calc ? defaultState(calc) : {});
        return { ...prev, [id]: { ...base, [field]: val } };
      }),
    resetCalc: (id) =>
      setAnswers((prev) => {
        const calc = getCalculator(id);
        return { ...prev, [id]: calc ? defaultState(calc) : {} };
      }),
  }), [favorites, answers, persistFavs]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAppState(): AppState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useAppState, AppStateProvider içinde kullanılmalı');
  return ctx;
}
