// ./i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { cookies } from 'next/headers';

type Locale = 'es' | 'en';

export default getRequestConfig(async () => {
    const localeCookie = (cookies()).get('locale');
    let locale = localeCookie ? localeCookie.value : 'es';
  

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

