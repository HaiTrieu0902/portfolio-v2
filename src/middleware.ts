import { defaultLocale, locales } from '@/constants/locales';
import { NextResponse, type NextRequest } from 'next/server';
import { PATH_DEFAULT } from './constants/paths';
import { i18n } from './i18n-config';
import { getRequiredPermission } from './utils/permission';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocale(request) || defaultLocale;
  if (pathname === '/favicon.ico') {
    return new NextResponse(null, { status: 404 });
  }
  if (pathname.startsWith('/mockServiceWorker.js')) {
    return NextResponse.next();
  }
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  const requiredPermission = getRequiredPermission(pathname, locale);
  // Xóa kiểm tra quyền dựa trên cookie
  if (requiredPermission) {
    return NextResponse.redirect(new URL(`/${locale}${PATH_DEFAULT.error.forbidden}`, request.url));
  }
  if (pathnameHasLocale) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

/** Function to get the locale from the request **/
function getLocale(request: NextRequest): string {
  const localeRegex = new RegExp(`^/(${locales.map((l) => l.locale).join('|')})/`);
  const { pathname } = request.nextUrl;
  const urlLocale = pathname.match(localeRegex)?.[1];

  if (urlLocale && i18n.locales.includes(urlLocale)) {
    return urlLocale || defaultLocale;
  }

  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage.split(',').map((lang) => lang.split(';')[0].split('-')[0]);
    for (const preferredLocale of preferredLocales) {
      if (i18n.locales.includes(preferredLocale)) {
        return preferredLocale;
      }
    }
  }
  return defaultLocale;
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
