type Locale = "en" | "pt";

interface Translations {
	Owner: {
		title: string;
	};
	Navigation: {
		general: string;
		about: string;
		contact: string;
		portfolio: string;
	};
	Apps: {
		itsMedTime: {
			title: string;
			category: string;
			shortDescription: string;
		};
		tastik: {
			title: string;
			category: string;
			shortDescription: string;
		};
		privacyPolicy: string;
	};
	Portfolio: {
		welcome: string;
		subtitle: string;
		learnMore: string;
		getInTouch: string;
		viewDetails: string;
	};
	DevelopmentApproach: {
		title: string;
		subtitle: string;
		approaches: {
			iosFirst: { title: string; description: string };
			privacy: { title: string; description: string };
			modern: { title: string; description: string };
			userCentered: { title: string; description: string };
		};
	};
}

export const translations: Record<Locale, Translations> = {
	en: {
		Owner: { title: "App Developer" },
		Navigation: {
			general: "General",
			about: "About",
			contact: "Contact",
			portfolio: "Portfolio",
		},
		Apps: {
			itsMedTime: {
				title: "ItsMedTime",
				category: "Health",
				shortDescription:
					"A user-friendly app that helps you track medications, manage schedules, and improve adherence for better health outcomes.",
			},
			tastik: {
				title: "Tastik",
				category: "Productivity",
				shortDescription:
					"An app for creating customizable lists with easy organization to help boost productivity and simplify planning your day.",
			},
			privacyPolicy: "Privacy Policy",
		},
		Portfolio: {
			welcome: "Welcome to My App Portfolio",
			subtitle:
				"Hello, I'm Fábio Fiorita, Computer Engineer and Mobile Application Developer",
			learnMore: "About Me",
			getInTouch: "Get In Touch",
			viewDetails: "View Details",
		},
		DevelopmentApproach: {
			title: "My Development Philosophy",
			subtitle: "How I craft iOS applications",
			approaches: {
				iosFirst: {
					title: "iOS-First Development",
					description:
						"Building native iOS apps with Swift and SwiftUI, following Apple's Human Interface Guidelines and best practices.",
				},
				privacy: {
					title: "Privacy by Design",
					description:
						"Implementing privacy-first architecture with secure data handling, local storage, and transparent data practices.",
				},
				modern: {
					title: "Modern iOS Features",
					description:
						"Leveraging iOS capabilities including interactive widgets, SwiftData, and iCloud synchronization.",
				},
				userCentered: {
					title: "User-Centered Experience",
					description:
						"Creating intuitive interfaces that feel natural to iOS users while solving real-world problems effectively.",
				},
			},
		},
	},
	pt: {
		Owner: { title: "Desenvolvedor de Apps" },
		Navigation: {
			general: "Geral",
			about: "Sobre",
			contact: "Contato",
			portfolio: "Portifólio",
		},
		Apps: {
			itsMedTime: {
				title: "MeuMedicamento",
				category: "Saúde",
				shortDescription:
					"Um app fácil de usar que ajuda você a controlar medicamentos, gerenciar horários e melhorar a adesão para melhores resultados de saúde.",
			},
			tastik: {
				title: "Tastik",
				category: "Produtividade",
				shortDescription:
					"Um aplicativo para criar listas personalizáveis, com organização fácil, para ajudar a aumentar a produtividade e simplificar o planejamento do dia.",
			},
			privacyPolicy: "Política de Privacidade",
		},
		Portfolio: {
			welcome: "Bem-vindo ao Meu Portfólio de Apps",
			subtitle:
				"Olá, sou Fábio Fiorita, Engenheiro de Computação e Desenvolvedor de Aplicativos Móveis",
			learnMore: "Sobre Mim",
			getInTouch: "Entre em Contato",
			viewDetails: "Ver Detalhes",
		},
		DevelopmentApproach: {
			title: "Minha Filosofia de Desenvolvimento",
			subtitle: "Como crio aplicativos iOS",
			approaches: {
				iosFirst: {
					title: "Desenvolvimento iOS-First",
					description:
						"Construindo apps nativos para iOS com Swift e SwiftUI, seguindo as diretrizes e melhores práticas da Apple.",
				},
				privacy: {
					title: "Privacidade por Design",
					description:
						"Implementando arquitetura com privacidade em primeiro lugar, dados seguros, armazenamento local e práticas transparentes.",
				},
				modern: {
					title: "Recursos Modernos do iOS",
					description:
						"Aproveitando recursos do iOS, incluindo widgets interativos, SwiftData e sincronização iCloud.",
				},
				userCentered: {
					title: "Experiência Centrada no Usuário",
					description:
						"Criando interfaces intuitivas que parecem naturais para usuários iOS enquanto resolvem problemas reais de forma eficaz.",
				},
			},
		},
	},
};
