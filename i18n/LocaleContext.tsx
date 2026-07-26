import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { SupportedLocale, LocaleContextType, TranslationContent } from './types';
import { ptBR } from './pt-BR';
import { en } from './en';

const translations: Record<SupportedLocale, TranslationContent> = {
  'pt-BR': ptBR,
  en: en,
};

const getBrowserLocale = (): SupportedLocale => {
  if (typeof window === 'undefined') return 'pt-BR';

  // Check localStorage first
  const stored = localStorage.getItem('locale') as SupportedLocale | null;
  if (stored && (stored === 'pt-BR' || stored === 'en')) {
    return stored;
  }

  // Fall back to browser language
  const browserLang = navigator.language;
  if (browserLang.startsWith('pt')) return 'pt-BR';
  return 'en';
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<SupportedLocale>('pt-BR');

  useEffect(() => {
    setLocaleState(getBrowserLocale());
  }, []);

  const setLocale = useCallback((newLocale: SupportedLocale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  }, []);

  const value: LocaleContextType = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
