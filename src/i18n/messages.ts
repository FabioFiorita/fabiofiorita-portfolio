type Locale = "en" | "pt";

interface Translations {
	Owner: {
		title: string;
	};
	Navigation: {
		general: string;
		about: string;
		contact: string;
	};
	Apps: {
		itsMedTime: { title: string };
		tastik: { title: string };
		appStore: string;
		privacyPolicy: string;
	};
}

export const translations: Record<Locale, Translations> = {
	en: {
		Owner: { title: "App Developer" },
		Navigation: {
			general: "General",
			about: "About",
			contact: "Contact",
		},
		Apps: {
			itsMedTime: { title: "ItsMedTime" },
			tastik: { title: "Tastik" },
			appStore: "App Store",
			privacyPolicy: "Privacy Policy",
		},
	},
	pt: {
		Owner: { title: "Desenvolvedor de Apps" },
		Navigation: {
			general: "Geral",
			about: "Sobre",
			contact: "Contato",
		},
		Apps: {
			itsMedTime: { title: "ItsMedTime" },
			tastik: { title: "Tastik" },
			appStore: "App Store",
			privacyPolicy: "Política de Privacidade",
		},
	},
};
