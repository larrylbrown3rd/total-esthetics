import { NextResponse } from 'next/server';

const PRIMARY_HOST = 'www.total-esthetics.com';

/** Hostnames that should 308 to the hyphenated primary domain */
const LEGACY_HOSTS = new Set([
  'totalesthetics.com',
  'www.totalesthetics.com',
  'total-esthetics.vercel.app',
  'total-esthetics.com',
]);

export function middleware(request) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase() ?? '';

  if (host && host !== PRIMARY_HOST && LEGACY_HOSTS.has(host)) {
    const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${PRIMARY_HOST}`);
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
