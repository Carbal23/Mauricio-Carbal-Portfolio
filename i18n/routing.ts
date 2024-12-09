// ./i18n/routing.ts
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'es',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en': '/en',
      'es': '/es',
    },
  },
  pathnames: {
    '/': '/',
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
