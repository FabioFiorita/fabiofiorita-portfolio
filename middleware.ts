import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "pt"];
const defaultLocale = "en";

function getLocale(request: NextRequest) {
	const acceptLang = request.headers.get("accept-language");
	if (!acceptLang) return defaultLocale;
	const preferred = acceptLang.split(",")[0].split("-")[0];
	return locales.includes(preferred) ? preferred : defaultLocale;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);
	if (pathnameHasLocale) return;

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ["/((?!_next).*)"],
};
