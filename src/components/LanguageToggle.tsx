import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useI18n } from '../i18n';
import { LOCALES } from '../i18n/strings';
import { colors, radius, shadow, type } from '../theme';

/** TR / AZ / KIB dilleri arasında geçiş yapan kompakt hap. */
export function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  return (
    <View style={styles.wrap}>
      {LOCALES.map((l) => {
        const on = locale === l.id;
        return (
          <Pressable key={l.id} style={[styles.btn, on && styles.btnOn]} onPress={() => setLocale(l.id)}>
            <Text style={[styles.txt, on && styles.txtOn]}>{l.short}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', gap: 2, padding: 4, backgroundColor: colors.surface, borderRadius: radius.round, ...shadow },
  btn: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: radius.round },
  btnOn: { backgroundColor: colors.accent },
  txt: { fontFamily: type.label.fontFamily, fontSize: 11.5, color: colors.muted },
  txtOn: { color: colors.surface },
});
