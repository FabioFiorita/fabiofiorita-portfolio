import Negotiator from "negotiator";
import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { translations } from "./messages";

const LOCALES = ["en", "pt"] as const;
type Locale = (typeof LOCALES)[number];

function isValidLocale(locale: string): locale is Locale {
	return LOCALES.includes(locale as Locale);
}

export default getRequestConfig(async () => {
	let locale: Locale = "en";

	try {
		const cookieStore = await cookies();
		const cookieLocale = cookieStore.get("locale")?.value;
		if (cookieLocale && isValidLocale(cookieLocale)) {
			locale = cookieLocale;
		} else {
			const headersList = await headers();
			const acceptLanguage = headersList.get("accept-language") ?? undefined;
			const languages = new Negotiator({
				headers: { "accept-language": acceptLanguage },
			}).languages();

			const preferredLocale = languages.find((lang) =>
				LOCALES.includes(lang.split("-")[0] as Locale),
			);

			if (preferredLocale) {
				locale = preferredLocale.split("-")[0] as Locale;
			}
		}
	} catch (error) {
		console.error("Error detecting locale:", error);
	}

	return {
		locale,
		messages: translations[locale],
	};
});
