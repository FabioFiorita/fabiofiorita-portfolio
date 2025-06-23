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
		itsmedtime: string;
		tastik: string;
		privacy: string;
	};
	About: {
		skills: string;
		focusArea: string;
		intro: string;
		education: string;
		itsMedTime: string;
		tastik: string;
		technology: string;
		focusAreasList: {
			iOS: string;
			frontend: string;
			backend: string;
			ux: string;
		};
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
		privacy: {
			lastUpdated: string;
			sections: {
				personalData: {
					title: string;
					body: string;
				};
				inAppPurchases: {
					title: string;
					body: string;
					button: string;
				};
				analytics: {
					title: string;
					body: string;
					button: string;
				};
				contact: {
					title: string;
					body: string;
					button: string;
				};
			};
		};
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
	Contact: {
		message: string;
		email: string;
		sendEmail: string;
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
			itsmedtime: "ItsMedTime",
			tastik: "Tastik",
			privacy: "Privacy Policy",
		},
		About: {
			skills: "Skills",
			focusArea: "Focus Area",
			intro:
				"Hello! I'm Fabio, an iOS developer based in São José dos Campos, Brazil.",
			education:
				"I hold a degree in Computer Engineering from Inatel and am passionate about crafting practical and intuitive solutions that make everyday life easier.",
			itsMedTime:
				"The ItsMedTime app was born in 2021 while I was still in college. It was inspired by a real need in my own family: my father, who takes medications regularly, struggled with generic reminder apps. This motivated me to create a tailored solution designed to simplify medication routines with greater clarity, control, and flexibility. Since then, I've nurtured and refined the project with great care, and today it stands as one of my proudest achievements.",
			tastik:
				"In 2023, I launched Tastik, an app dedicated to organizing daily tasks and lists — from shopping and quick expenses to recurring notes. The idea came from the absence of a simple yet versatile app that could consolidate various types of customized lists in one convenient place.",
			technology:
				"All my apps are developed exclusively for iOS, leveraging Swift, SwiftUI, and SwiftData alongside the latest Apple technologies. My goal is to deliver modern, private, and user-friendly experiences — always attentive to user feedback and continuously improving with every update.",
			focusAreasList: {
				iOS: "iOS Development",
				frontend: "Frontend Development",
				backend: "Backend Development",
				ux: "User Experience Design",
			},
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
			privacy: {
				lastUpdated: "Last Updated: May 4, 2025",
				sections: {
					personalData: {
						title: "Personal Data",
						body: "We do not collect any personal data. Your personal data is stored locally on your device or in iCloud.",
					},
					inAppPurchases: {
						title: "In-App Purchases",
						body: "We use the third-party RevenueCat service to manage in-app purchases, which may collect data about your device and app usage. For more information on what data is collected and how it is used, please refer to the RevenueCat privacy policy.",
						button: "RevenueCat Privacy Policy",
					},
					analytics: {
						title: "Analytics",
						body: "{appName} uses PostHog for analytics to help us understand how users interact with the app and improve the user experience. PostHog collects anonymous usage data such as app opens, feature usage, and crash reports. This data helps us identify areas for improvement and prioritize new features.",
						button: "PostHog Privacy Policy",
					},
					contact: {
						title: "Contact",
						body: "If you have any questions or suggestions about our privacy policy, please contact us at fabiolfp@gmail.com.",
						button: "Contact Us",
					},
				},
			},
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
		Contact: {
			message:
				"Have a question, suggestion, or feedback about my applications? I'd love to hear from you! Please email the address below, and I'll get back to you as soon as possible.",
			email: "fabiolfp@gmail.com",
			sendEmail: "Send Email",
		},
	},
	pt: {
		Owner: { title: "Desenvolvedor de Apps" },
		Navigation: {
			general: "Geral",
			about: "Sobre",
			contact: "Contato",
			portfolio: "Portifólio",
			itsmedtime: "MeuMedicamento",
			tastik: "Tastik",
			privacy: "Política de Privacidade",
		},
		About: {
			skills: "Habilidades",
			focusArea: "Áreas de Foco",
			intro:
				"Olá! Sou Fabio, desenvolvedor iOS de São José dos Campos, Brasil.",
			education:
				"Sou formado em Engenharia de Computação pelo Inatel e tenho paixão por criar soluções práticas e intuitivas que facilitam o dia a dia.",
			itsMedTime:
				"O aplicativo ItsMedTime nasceu em 2021, enquanto eu ainda estava na faculdade. A inspiração veio de uma necessidade real na minha própria família: meu pai, que toma remédios regularmente, não se adaptava bem a apps genéricos de lembrete. Foi então que surgiu a ideia de criar uma solução específica, pensada para tornar essa rotina mais clara, controlada e flexível. Desde então, venho desenvolvendo o projeto com muito cuidado, e hoje ele é um dos meus principais trabalhos.",
			tastik:
				"Em 2023, lancei também o Tastik, um app focado em organizar tarefas e listas diárias — como compras, gastos rápidos ou anotações recorrentes. A ideia surgiu da falta de um app simples e versátil, capaz de reunir diferentes tipos de listas personalizadas em um só lugar.",
			technology:
				"Todos os meus aplicativos são desenvolvidos exclusivamente para iOS, utilizando Swift, SwiftUI e SwiftData, com as tecnologias mais recentes do ecossistema Apple. Meu foco é entregar experiências modernas, privadas e intuitivas — sempre ouvindo os usuários e aprimorando a cada versão.",
			focusAreasList: {
				iOS: "Desenvolvimento iOS",
				frontend: "Desenvolvimento Frontend",
				backend: "Desenvolvimento Backend",
				ux: "Design de Experiência do Usuário",
			},
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
			privacy: {
				lastUpdated: "Atualizado em: 4 de maio de 2025",
				sections: {
					personalData: {
						title: "Dados Pessoais",
						body: "Não coletamos nenhum dado pessoal. Seus dados pessoais são armazenados localmente no seu dispositivo ou no iCloud.",
					},
					inAppPurchases: {
						title: "Compras no App",
						body: "Utilizamos o serviço terceirizado RevenueCat para gerenciar compras no app, que pode coletar dados sobre seu dispositivo e uso do aplicativo. Para mais informações sobre quais dados são coletados e como são utilizados, consulte a política de privacidade da RevenueCat.",
						button: "Política de Privacidade RevenueCat",
					},
					analytics: {
						title: "Análises",
						body: "{appName} utiliza o PostHog para análises, ajudando-nos a entender como os usuários interagem com o app e a melhorar a experiência. O PostHog coleta dados anônimos de uso, como aberturas do app, uso de recursos e relatórios de falhas. Esses dados nos ajudam a identificar pontos de melhoria e priorizar novas funcionalidades.",
						button: "Política de Privacidade PostHog",
					},
					contact: {
						title: "Contato",
						body: "Se você tiver dúvidas ou sugestões sobre nossa política de privacidade, entre em contato pelo e-mail fabiolfp@gmail.com.",
						button: "Fale Conosco",
					},
				},
			},
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
		Contact: {
			message:
				"Tem uma pergunta, sugestão ou feedback sobre meus aplicativos? Adoraria ouvir você! Por favor, envie um e-mail para o endereço abaixo e retornarei o mais breve possível.",
			email: "fabiolfp@gmail.com",
			sendEmail: "Enviar E-mail",
		},
	},
};
