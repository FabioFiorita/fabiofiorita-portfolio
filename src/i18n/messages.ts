type Locale = "en" | "pt";

interface Translations {
	Owner: {
		title: string;
	};
	Preferences: {
		lightMode: string;
		darkMode: string;
		systemMode: string;
		theme: string;
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
			longDescription: string;
			features: {
				title: string;
				description: string;
				imageSrc: string;
				imageAlt: string;
				reverse: boolean;
			}[];
		};
		tastik: {
			title: string;
			category: string;
			shortDescription: string;
			longDescription: string;
			features: {
				title: string;
				description: string;
				imageSrc: string;
				imageAlt: string;
				reverse: boolean;
			}[];
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
	AppPage: {
		quickActions: {
			appStore: string;
		};
		techStack: {
			title: string;
			features: {
				icon: "Smartphone" | "Cloud" | "Zap" | "Shield";
				title: string;
				description: string;
			}[];
		};
	};
}

export const translations: Record<Locale, Translations> = {
	en: {
		Owner: { title: "App Developer" },
		Preferences: {
			lightMode: "Light Mode",
			darkMode: "Dark Mode",
			systemMode: "System",
			theme: "Theme",
		},
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
				"Hi, I'm Fábio — an iOS developer based in São José dos Campos, Brazil.",
			education:
				"I have a degree in Computer Engineering from Inatel and a passion for creating intuitive solutions that simplify everyday life.",
			itsMedTime:
				"The ItsMedTime app was born in 2021 while I was still in college. It was inspired by a real need in my own family: my father, who takes medications regularly, struggled with generic reminder applications. This motivated me to create a tailored solution designed to simplify medication routines with greater clarity, control, and flexibility. Since then, I've nurtured and refined the project with great care, and today it stands as one of my proudest achievements.",
			tastik:
				"In 2023, I launched Tastik, an app dedicated to organizing daily tasks and lists — from shopping and quick expenses to recurring notes. The idea came from the absence of a simple yet versatile app that could consolidate various types of customized lists in one convenient place.",
			technology:
				"I build all my applications exclusively for iOS using Swift, SwiftUI, and SwiftData, always incorporating the latest Apple technologies. My goal is to deliver modern, private, and user-friendly experiences — always attentive to user feedback and continuously improving with every update.",
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
					"Everything you need to manage your meds, simply and smartly: track schedules, get important reminders, keep an eye on your history and stock, and stay on top of your health routine with ease.",
				longDescription:
					"ItsMedTime makes medication management straightforward. Track every prescription, set reminders, and keep your routine running smoothly. The app monitors your intake and marks each dose as taken on time, late, or missed, so you always know how you’re doing. Plus, you’ll get notified when your supply is running low, so you’re never caught off guard. Everything syncs with iCloud for peace of mind, wherever you are.",
				features: [
					{
						title: "Medication List",
						description:
							"Your routine always in sight. View your medications with upcoming doses, remaining stock, and intake status — all in a clear and interactive interface.",
						imageSrc: "/itsmedtime/en/list.png",
						imageAlt:
							"ItsMedTime medication list showing Ibuprofen, Losartan, and Vitamin D with dosages and status",
						reverse: false,
					},
					{
						title: "Charts",
						description:
							"Understand your habits with data. Track your progress, treatment adherence, and even medication expenses through simple and informative charts.",
						imageSrc: "/itsmedtime/en/charts.png",
						imageAlt:
							"ItsMedTime reports screen showing ingestion status chart and medication usage statistics",
						reverse: true,
					},
					{
						title: "History",
						description:
							"Complete and organized records. View the history of intakes and refills by day, including amounts paid and detailed data by medication.",
						imageSrc: "/itsmedtime/en/calendar.png",
						imageAlt:
							"ItsMedTime history screen with calendar view and medication intake records",
						reverse: false,
					},
					{
						title: "Interactive Widgets",
						description:
							"Quick access, right on the screen. Mark doses and check your schedules without even opening the app — with widgets on the home and lock screen.",
						imageSrc: "/itsmedtime/en/widgets.png",
						imageAlt:
							"iOS home screen showing ItsMedTime widgets with medication schedules and quick actions",
						reverse: true,
					},
					{
						title: "Critical Notifications",
						description:
							"Alerts you actually receive. Get reminders that work even with your iPhone on silent or Do Not Disturb mode. Never miss an important dose.",
						imageSrc: "/itsmedtime/en/notification.png",
						imageAlt:
							"iPhone lock screen showing critical medication reminder notification for Ibuprofen",
						reverse: false,
					},
				],
			},
			tastik: {
				title: "Tastik",
				category: "Productivity",
				shortDescription:
					"Tastik is the flexible list app for everything that doesn't fit in your calendar. Make checklists, track numbers, manage budgets, and organize projects—all your way, all in one place.",
				longDescription:
					"Tastik helps you organize life's moving parts without the pressure of dates or reminders. Make simple checklists, track quantities, manage budgets, or split tasks into stages. Mix and match features to fit your style—combine checkboxes, steppers, totals, and sections in any list. Your lists are always just a tap away, thanks to interactive widgets on your home screen. Whether you're planning a trip, tracking habits, managing a project, or just keeping up with groceries, Tastik keeps it easy, flexible, and always organized.",
				features: [
					{
						title: "All Your Lists in One Place",
						description:
							"Create, favorite, and access any list you want—projects, shopping, personal goals, and more. Everything's organized and easy to find, so you're always ready for what's next.",
						imageSrc: "/tastik/en/home.png",
						imageAlt: "Tastik home screen showing multiple lists organized.",
						reverse: false,
					},
					{
						title: "Simple Checklists",
						description:
							"Make classic to-do lists for anything. Add tasks, check them off, and see your progress. Perfect for daily routines, reminders, or just clearing your mind.",
						imageSrc: "/tastik/en/quickItems.png",
						imageAlt: "Tastik showing a checklist with quick items.",
						reverse: true,
					},
					{
						title: "Track Quantities Fast",
						description:
							"Keep up with what you need—groceries, supplies, or inventory. Adjust numbers on the fly. No more running out or overbuying.",
						imageSrc: "/tastik/en/stepper.png",
						imageAlt: "Tastik stepper control for counting items.",
						reverse: false,
					},
					{
						title: "Budgets Made Easy",
						description:
							"Track spending, savings, and expenses all in one place. No spreadsheets, just clear numbers and categories so you always know where your money's going.",
						imageSrc: "/tastik/en/calculator.png",
						imageAlt: "Tastik calculator for quick calculations in lists.",
						reverse: true,
					},
					{
						title: "See Progress at a Glance",
						description:
							"Organize tasks into To Do, Doing, and Done. Move things through each stage and watch your project come together, step by step.",
						imageSrc: "/tastik/en/kanban.png",
						imageAlt: "Tastik kanban board to organize tasks.",
						reverse: false,
					},
					{
						title: "Mix Lists, Your Way",
						description:
							"Combine checklists, numbers, notes, and more. Build the exact list you need for any plan—packing, trips, ideas, or anything you want to organize.",
						imageSrc: "/tastik/en/multi.png",
						imageAlt: "Tastik showcasing multiple types of lists.",
						reverse: true,
					},
					{
						title: "Lists Always Handy",
						description:
							"Check off or update your lists straight from your home screen. Widgets let you see and edit without even opening the app.",
						imageSrc: "/tastik/en/widgets.png",
						imageAlt: "Tastik interactive widgets on the home screen.",
						reverse: false,
					},
				],
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
			subtitle: "I'm Fábio Fiorita — a Computer Engineer and iOS App Developer",
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
						"Building native iOS applications with Swift and SwiftUI, following Apple's Human Interface Guidelines and best practices.",
				},
				privacy: {
					title: "Privacy by Design",
					description:
						"Designing with privacy in mind — using local storage, secure data handling, and transparent practices.",
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
		AppPage: {
			quickActions: {
				appStore: "View on App Store",
			},
			techStack: {
				title: "Built with Modern iOS Technologies",
				features: [
					{
						icon: "Smartphone",
						title: "Native iOS Experience",
						description: "Fast, smooth, and fully integrated with your iPhone",
					},
					{
						icon: "Cloud",
						title: "iCloud Sync",
						description:
							"Your data safely updated on your device and your iCloud account",
					},
					{
						icon: "Zap",
						title: "Interactive Widgets",
						description:
							"Perform various app actions directly from the home screen",
					},
					{
						icon: "Shield",
						title: "Privacy First",
						description:
							"Data encrypted and stored locally and in your iCloud account",
					},
				],
			},
		},
	},
	pt: {
		Owner: { title: "Desenvolvedor de Aplicativos" },
		Preferences: {
			lightMode: "Modo Claro",
			darkMode: "Modo Escuro",
			systemMode: "Sistema",
			theme: "Tema",
		},
		Navigation: {
			general: "Geral",
			about: "Sobre",
			contact: "Contato",
			portfolio: "Portfólio",
			itsmedtime: "MeuMedicamento",
			tastik: "Tastik",
			privacy: "Política de Privacidade",
		},
		About: {
			skills: "Habilidades",
			focusArea: "Áreas de Foco",
			intro:
				"Oi, sou o Fábio — desenvolvedor iOS de São José dos Campos, Brasil.",
			education:
				"Formado em Engenharia de Computação pelo Inatel, tenho paixão por criar soluções intuitivas que simplificam o dia a dia.",
			itsMedTime:
				"O aplicativo MeuMedicamento nasceu em 2021, enquanto eu ainda estava na faculdade. A inspiração veio de uma necessidade real na minha própria família: meu pai, que toma remédios regularmente, não se adaptava bem a aplicativos genéricos de lembrete. Foi então que surgiu a ideia de criar uma solução específica, pensada para tornar essa rotina mais clara, controlada e flexível. Desde então, venho desenvolvendo o projeto com muito cuidado, e hoje ele é um dos meus principais trabalhos.",
			tastik:
				"Em 2023, lancei também o Tastik, um aplicativo focado em organizar tarefas e listas diárias — como compras, gastos rápidos ou anotações recorrentes. A ideia surgiu da falta de um aplicativo simples e versátil, capaz de reunir diferentes tipos de listas personalizadas em um só lugar.",
			technology:
				"Desenvolvo todos os meus aplicativos exclusivamente para iOS, com Swift, SwiftUI e SwiftData, usando sempre as tecnologias mais recentes da Apple. Meu foco é entregar experiências modernas, privadas e intuitivas — sempre ouvindo os usuários e aprimorando a cada versão.",
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
					"Tudo que você precisa pra cuidar dos seus remédios, de um jeito simples e inteligente: controle horários, receba alertas importantes, acompanhe seu histórico e estoque, e mantenha sua rotina de saúde sempre em dia.",
				longDescription:
					"O MeuMedicamento deixa sua rotina de saúde mais fácil. Veja todos os seus medicamentos, doses e quantidades em uma tela só. Marque cada dose como tomada no horário, atrasada ou perdida, e acompanhe seu progresso sem complicação. Receba lembretes que funcionam até no silencioso, e saiba quando é hora de comprar mais. Com relatórios visuais e histórico completo, você tem o controle de verdade, sem mistério.",
				features: [
					{
						title: "Lista de Medicamentos",
						description:
							"Sua rotina sempre à vista. Visualize seus medicamentos com as próximas doses, estoque restante e status de ingestão — tudo em uma interface clara e interativa.",
						imageSrc: "/itsmedtime/pt/list.png",
						imageAlt:
							"Lista de medicamentos do ItsMedTime mostrando Ibuprofeno, Losartana e Vitamina D com dosagens e status",
						reverse: false,
					},
					{
						title: "Gráficos",
						description:
							"Entenda seus hábitos com dados. Acompanhe seu progresso, adesão ao tratamento e até despesas com medicamentos por meio de gráficos simples e informativos.",
						imageSrc: "/itsmedtime/pt/charts.png",
						imageAlt:
							"Tela de relatórios do ItsMedTime mostrando gráfico de status de ingestão e estatísticas de uso de medicamentos",
						reverse: true,
					},
					{
						title: "Histórico",
						description:
							"Registros completos e organizados. Visualize o histórico de ingestões e recargas por dia, incluindo valores pagos e dados detalhados por medicamento.",
						imageSrc: "/itsmedtime/pt/calendar.png",
						imageAlt:
							"Tela de histórico do ItsMedTime com visão de calendário e registros de ingestão de medicamentos",
						reverse: false,
					},
					{
						title: "Widgets Interativos",
						description:
							"Acesso rápido, direto na tela. Marque doses e verifique seus horários sem precisar abrir o aplicativo — com widgets na tela de início e de bloqueio.",
						imageSrc: "/itsmedtime/pt/widgets.png",
						imageAlt:
							"Tela inicial do iOS mostrando widgets do ItsMedTime com horários de medicamentos e ações rápidas",
						reverse: true,
					},
					{
						title: "Notificações Críticas",
						description:
							"Alertas que você realmente recebe. Receba lembretes que funcionam mesmo com o iPhone no modo silencioso ou Não Perturbe. Nunca mais perca uma dose importante.",
						imageSrc: "/itsmedtime/pt/notification.png",
						imageAlt:
							"Tela de bloqueio do iPhone mostrando notificação crítica de lembrete de medicamento para Ibuprofeno",
						reverse: false,
					},
				],
			},
			tastik: {
				title: "Tastik",
				category: "Produtividade",
				shortDescription:
					"Tastik é o app de listas flexível pra tudo que não cabe na agenda. Faça checklists, controle quantidades, gerencie gastos e organize projetos—do seu jeito, tudo num só lugar.",
				longDescription:
					"O Tastik te ajuda a organizar a vida sem pressão de datas ou alarmes. Faça checklists simples, controle quantidades, gerencie orçamentos ou divida tarefas em etapas. Misture funções como caixas de seleção, contadores, totais e seções em qualquer lista. Suas listas ficam sempre a um toque, com widgets interativos na tela inicial. Seja pra planejar uma viagem, acompanhar hábitos, gerenciar projetos ou só manter as compras em dia, o Tastik deixa tudo fácil, flexível e sempre organizado.",
				features: [
					{
						title: "Todas as suas listas em um só lugar",
						description:
							"Crie, favorite e acesse qualquer lista—projetos, compras, metas pessoais, o que quiser. Tudo organizado e fácil de achar, pronto pra quando você precisar.",
						imageSrc: "/tastik/pt/home.png",
						imageAlt:
							"Tela inicial do Tastik mostrando várias listas organizadas.",
						reverse: false,
					},
					{
						title: "Checklists simples",
						description:
							"Monte listas de tarefas pra tudo. Adicione, marque como feito e veja o progresso. Ótimo pra rotina, lembretes ou só pra esvaziar a mente.",
						imageSrc: "/tastik/pt/quickItems.png",
						imageAlt: "Tastik mostrando uma checklist com itens rápidos.",
						reverse: true,
					},
					{
						title: "Controle quantidades de maneira rápida",
						description:
							"Veja o que precisa—mercado, materiais, estoque. Ajuste os números num instante. Sem estresse de faltar ou exagerar.",
						imageSrc: "/tastik/pt/stepper.png",
						imageAlt: "Controle de stepper do Tastik para contagem de itens.",
						reverse: false,
					},
					{
						title: "Orçamento sem complicação",
						description:
							"Acompanhe gastos, economias e despesas num só lugar. Nada de planilha, só números claros e categorias pra saber pra onde vai seu dinheiro.",
						imageSrc: "/tastik/pt/calculator.png",
						imageAlt: "Calculadora do Tastik para cálculos rápidos em listas.",
						reverse: true,
					},
					{
						title: "Veja o progresso num relance",
						description:
							"Organize tarefas em A Fazer, Fazendo e Feito. Arraste de etapa em etapa e veja o projeto ganhando forma, aos poucos.",
						imageSrc: "/tastik/pt/kanban.png",
						imageAlt: "Quadro kanban do Tastik para organizar tarefas.",
						reverse: false,
					},
					{
						title: "Misture listas do seu jeito",
						description:
							"Junte checklists, números, notas e o que mais quiser. Monte a lista perfeita pra viagem, ideias, qualquer plano.",
						imageSrc: "/tastik/pt/multi.png",
						imageAlt: "Tastik exibindo múltiplos tipos de listas.",
						reverse: true,
					},
					{
						title: "Listas sempre à mão",
						description:
							"Atualize suas listas direto da tela inicial. Widgets deixam tudo acessível sem nem abrir o app.",
						imageSrc: "/tastik/pt/widgets.png",
						imageAlt: "Widgets interativos do Tastik na tela inicial.",
						reverse: false,
					},
				],
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
						title: "Compras no Aplicativo",
						body: "Utilizamos o serviço terceirizado RevenueCat para gerenciar compras no aplicativo, que pode coletar dados sobre seu dispositivo e uso do aplicativo. Para mais informações sobre quais dados são coletados e como são utilizados, consulte a política de privacidade da RevenueCat.",
						button: "Política de Privacidade RevenueCat",
					},
					analytics: {
						title: "Análises",
						body: "{appName} utiliza o PostHog para análises, ajudando-nos a entender como os usuários interagem com o aplicativo e a melhorar a experiência. O PostHog coleta dados anônimos de uso, como aberturas do aplicativo, uso de recursos e relatórios de falhas. Esses dados nos ajudam a identificar pontos de melhoria e priorizar novas funcionalidades.",
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
			welcome: "Bem-vindo ao Meu Portfólio de Aplicativos",
			subtitle:
				"Sou Fábio Fiorita — Engenheiro de Computação e Desenvolvedor de Aplicativos iOS",
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
						"Construindo aplicativos nativos para iOS com Swift e SwiftUI, seguindo as diretrizes e melhores práticas da Apple.",
				},
				privacy: {
					title: "Privacidade por Design",
					description:
						"Desenvolvendo com foco em privacidade — usando armazenamento local, dados protegidos e práticas transparentes.",
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
				"Tem uma dúvida, sugestão ou feedback sobre meus aplicativos? Vou adorar ouvir você. Envie um e-mail para o endereço abaixo e responderei o quanto antes!",
			email: "fabiolfp@gmail.com",
			sendEmail: "Enviar E-mail",
		},
		AppPage: {
			quickActions: {
				appStore: "Ver na App Store",
			},
			techStack: {
				title: "Construído com Tecnologias Modernas do iOS",
				features: [
					{
						icon: "Smartphone",
						title: "Experiência Nativa iOS",
						description: "Rápido, fluido e integrado ao seu iPhone",
					},
					{
						icon: "Cloud",
						title: "Sincronização iCloud",
						description:
							"Seus dados seguros e atualizados no dispositivo e na sua conta iCloud",
					},
					{
						icon: "Zap",
						title: "Widgets Interativos",
						description:
							"Realize diversas ações do aplicativo direto da tela inicial",
					},
					{
						icon: "Shield",
						title: "Privacidade em Primeiro Lugar",
						description:
							"Dados criptografados e armazenados localmente e na sua conta iCloud",
					},
				],
			},
		},
	},
};
