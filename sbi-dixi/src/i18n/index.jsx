import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { STRINGS } from './strings';

const LangContext = createContext(null);
const STORAGE_KEY = 'sbi-dixi-lang';

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'mr') return saved;
  } catch {
    /* storage unavailable — ignore */
  }
  return 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const t = useCallback((key) => STRINGS[lang]?.[key] ?? STRINGS.en[key] ?? key, [lang]);

  // Pick a localized field from { en, mr }, falling back to English.
  const loc = useCallback((field) => (field && typeof field === 'object' ? field[lang] ?? field.en : field), [lang]);

  const value = useMemo(() => ({ lang, setLang, t, loc }), [lang, t, loc]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
