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
		support: string;
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
		tastikPrivacy: {
			badge: string;
			title: string;
			lastUpdated: string;
			intro: {
				p1: string;
				p2: string;
				p3: string;
			};
			sections: {
				data: { title: string; p1: string; p2: string; p3: string };
				account: { title: string; p1: string; p2: string };
				icloud: { title: string; p1: string; p2: string; p3: string };
				noCollect: {
					title: string;
					p1: string;
					bullets: { b1: string; b2: string; b3: string; b4: string };
				};
				purchases: { title: string; p1: string; p2: string; p3: string };
				diag: { title: string; p1: string; p2: string };
				delete: { title: string; p1: string; p2: string; p3: string };
				changes: { title: string; p1: string; p2: string };
				contact: { title: string; intro: string; email: string };
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
	TastikLanding: {
		hero_title_a: string;
		hero_title_b: string;
		hero_lead: string;
		hero_cta_appstore: string;
		hero_cta_privacy: string;
		hero_chip_no_account: string;
		hero_chip_icloud: string;
		hero_chip_no_ads: string;
		hero_card_bills_title: string;
		hero_card_bills_amount: string;
		hero_card_bills_sub: string;
		hero_card_smart_title: string;
		hero_card_smart_input: string;
		hero_card_smart_tags: string[];
		trust_no_account: string;
		trust_no_ads: string;
		trust_icloud: string;
		trust_iphone: string;
		shapes_eyebrow: string;
		shapes_title: string;
		shapes_lead: string;
		shape_simple: string;
		shape_simple_desc: string;
		shape_stepper: string;
		shape_stepper_desc: string;
		shape_calc: string;
		shape_calc_desc: string;
		shape_kanban: string;
		shape_kanban_desc: string;
		shape_multi: string;
		shape_multi_desc: string;
		smart_eyebrow: string;
		smart_title: string;
		smart_lead: string;
		smart_b1: string;
		smart_b2: string;
		smart_b3: string;
		smart_b4: string;
		smart_you_typed: string;
		smart_input: string;
		smart_result_label: string;
		smart_total_label: string;
		smart_note_label: string;
		smart_items: string[];
		smart_budget_total: string;
		privacy_eyebrow: string;
		privacy_title: string;
		privacy_lead: string;
		privacy_read_more: string;
		privacy_chip_no_account: string;
		privacy_chip_no_tracking: string;
		privacy_chip_no_ads: string;
		privacy_chip_no_selling: string;
		privacy_chip_local: string;
		privacy_chip_icloud: string;
		tpl_eyebrow: string;
		tpl_title: string;
		tpl_lead: string;
		tpl_items: string[];
		widgets_eyebrow: string;
		widgets_title: string;
		widgets_lead: string;
		widgets_b1: string;
		widgets_b2: string;
		widgets_b3: string;
		widgets_b4: string;
		widgets_home_screen: string;
		widget_preview_title: string;
		widget_preview_items: string[];
		widget_pack_title: string;
		widget_pack_sub: string;
		widget_board_title: string;
		widget_board_sub: string;
		widget_gift_title: string;
		widget_gift_sub: string;
		details_eyebrow: string;
		details_title: string;
		d_tags: string;
		d_notes: string;
		d_search: string;
		d_hide: string;
		d_sort: string;
		d_bulk: string;
		d_md: string;
		d_share: string;
		d_archive: string;
		d_custom: string;
		pro_eyebrow: string;
		pro_title: string;
		pro_lead: string;
		pro_free_heading: string;
		pro_free_tag: string;
		pro_free_desc: string;
		pro_free_1: string;
		pro_free_2: string;
		pro_free_3: string;
		pro_free_4: string;
		pro_pro_heading: string;
		pro_pro_tag: string;
		pro_pro_desc: string;
		pro_pro_1: string;
		pro_pro_2: string;
		pro_pro_3: string;
		pro_pro_4: string;
		pro_pro_5: string;
		pro_pro_6: string;
		pro_pro_7: string;
		final_title: string;
		final_lead: string;
		final_support: string;
		support_title: string;
		support_lead_a: string;
		support_cta: string;
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
			support: "Support",
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
				"I build all my applications exclusively for iOS using Swift, SwiftUI, and a local-first SQLite data layer with iCloud sync, always incorporating the latest Apple technologies. My goal is to deliver modern, private, and user-friendly experiences — always attentive to user feedback and continuously improving with every update.",
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
			tastikPrivacy: {
				badge: "Privacy",
				title: "Privacy Policy",
				lastUpdated: "Last updated: May 26, 2026",
				intro: {
					p1: "If you opened this page, you probably care about your privacy.",
					p2: "We do too.",
					p3: "Tastik was designed to be a private, local-first app. Your lists are personal, and they should stay under your control. That is why Tastik does not require an account, does not ask you to sign in, and does not store your lists on our own servers.",
				},
				sections: {
					data: {
						title: "Your data",
						p1: "Tastik stores your lists, items, tags, notes, quantities, amounts, and related app data locally on your device.",
						p2: "If iCloud sync is enabled on your device, Tastik may sync your data through your personal iCloud account so your lists can be available across your Apple devices.",
						p3: "We do not operate a Tastik server that stores your list content.",
					},
					account: {
						title: "No account required",
						p1: "Tastik does not require you to create an account.",
						p2: "This means we do not collect your name, email address, password, or login credentials to use the app.",
					},
					icloud: {
						title: "iCloud sync",
						p1: "Tastik uses Apple's iCloud infrastructure to sync your data between your own devices.",
						p2: "Your iCloud data is managed by Apple and tied to your Apple ID. Tastik does not have direct access to your Apple ID, iCloud account, or iCloud credentials.",
						p3: "If you disable iCloud for Tastik, your data may remain only on your device.",
					},
					noCollect: {
						title: "What Tastik does not collect",
						p1: "Tastik does not collect, sell, rent, or share your personal list content.",
						bullets: {
							b1: "We do not use your lists for advertising.",
							b2: "We do not read your lists.",
							b3: "We do not track the items you create.",
							b4: "We do not sell your data.",
						},
					},
					purchases: {
						title: "Purchases",
						p1: "Tastik may offer Tastik Pro as a one-time purchase to unlock additional functionality.",
						p2: "Purchases are processed by Apple through the App Store. Tastik does not receive, process, or store your full payment card information.",
						p3: "Apple may provide Tastik with limited purchase-related entitlement information, such as whether Tastik Pro is active, restored, refunded, or revoked.",
					},
					diag: {
						title: "Diagnostics and app performance",
						p1: "Depending on your device settings, Apple may share crash reports or diagnostic information with developers to help improve app stability.",
						p2: "These reports are used to fix bugs and improve Tastik. They are not used to identify you personally or inspect your list content.",
					},
					delete: {
						title: "Data deletion",
						p1: "Because Tastik is local-first, you control your data.",
						p2: "You can delete lists or items directly inside the app.",
						p3: "You can also remove Tastik data by deleting the app from your device. If iCloud sync is enabled, some synced data may remain in iCloud until removed through Apple's iCloud settings or by deleting the data from all synced devices.",
					},
					changes: {
						title: "Changes to this policy",
						p1: "We may update this Privacy Policy if Tastik's features or data handling change.",
						p2: "If we make meaningful changes, we will update the policy inside the app.",
					},
					contact: {
						title: "Contact",
						intro:
							"If you have questions about privacy or how Tastik handles data, contact us at",
						email: "fabiolfp@gmail.com",
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
						"Leveraging iOS capabilities including interactive widgets, local-first SQLite storage, and iCloud synchronization.",
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
		TastikLanding: {
			hero_title_a: "Tastik makes every list feel ",
			hero_title_b: "made for the job.",
			hero_lead:
				"Create private, local-first lists with checkboxes, counters, totals, Kanban boards, mixed item types, tags, widgets, shortcuts, and Smart Add. No account required.",
			hero_cta_appstore: "View on the App Store",
			hero_cta_privacy: "Read the privacy policy",
			hero_chip_no_account: "No account",
			hero_chip_icloud: "Optional iCloud",
			hero_chip_no_ads: "No ads",
			hero_card_bills_title: "Monthly Bills",
			hero_card_bills_amount: "$1,824",
			hero_card_bills_sub: "Running total · 8 entries",
			hero_card_smart_title: "Smart Add",
			hero_card_smart_input:
				"avocados, sourdough, 2 greek yogurts, cold brew x3",
			hero_card_smart_tags: [
				"Avocados",
				"Sourdough",
				"Yogurt ×2",
				"Cold brew ×3",
			],
			trust_no_account: "No Tastik account",
			trust_no_ads: "No ads. Ever.",
			trust_icloud: "Optional iCloud sync",
			trust_iphone: "Made for iPhone",
			shapes_eyebrow: "Five list shapes",
			shapes_title: "One app. Every kind of list.",
			shapes_lead:
				"Most list apps give you one tool. Tastik gives every list the right shape — so groceries feel like groceries, budgets feel like budgets, and projects move forward.",
			shape_simple: "Simple",
			shape_simple_desc:
				"Tap to check items off. Great for packing lists, errands, and quick to-dos.",
			shape_stepper: "Stepper",
			shape_stepper_desc:
				"Track quantities with plus and minus controls. Ideal for groceries and routines.",
			shape_calc: "Calculator",
			shape_calc_desc:
				"Add and subtract values with a running total. Perfect for budgets, bills, and expenses.",
			shape_kanban: "Kanban",
			shape_kanban_desc:
				"Move items through To Do, In Progress, and Done. Built for projects and pipelines.",
			shape_multi: "Multi",
			shape_multi_desc:
				"Mix item types in one list. Keep links, counts, notes, tasks, and amounts side by side.",
			smart_eyebrow: "Smart Add",
			smart_title: "Turn a messy note into tidy items.",
			smart_lead:
				"On supported Apple Intelligence devices, Smart Add splits useful items out of natural language, preserves notes, matches existing tags, and keeps new Kanban items in To Do — so you can think out loud and ship a clean list.",
			smart_b1: "Write naturally — Smart Add does the parsing",
			smart_b2: "Preserves notes alongside extracted items",
			smart_b3: "Matches your existing tags automatically",
			smart_b4: "Always optional. Normal quick add stays put.",
			smart_you_typed: "You typed",
			smart_input:
				"Plan trip — book flights, 2 nights in Lisbon, packing list (passport, charger, sunscreen), budget around $1200, remember to call landlord.",
			smart_result_label: "Smart Add → Trip · Multi list",
			smart_total_label: "Total",
			smart_note_label: "Note",
			smart_items: [
				"Book flights",
				"2 nights in Lisbon",
				"Passport",
				"Charger",
				"Sunscreen",
				"Budget",
				"Call landlord",
			],
			smart_budget_total: "$1,200",
			privacy_eyebrow: "Local-first privacy",
			privacy_title: "Your lists. On your device.",
			privacy_lead:
				"Tastik was designed to be private from the start. It does not require an account, does not ask you to sign in, and does not store list content on Tastik servers. Lists live locally on your device and can sync through your personal iCloud account when enabled.",
			privacy_read_more: "Read the full privacy policy",
			privacy_chip_no_account: "No account",
			privacy_chip_no_tracking: "No tracking",
			privacy_chip_no_ads: "No ads",
			privacy_chip_no_selling: "No selling data",
			privacy_chip_local: "Local-first",
			privacy_chip_icloud: "Optional iCloud",
			tpl_eyebrow: "Starter templates",
			tpl_title: "Start fast. Customize everything.",
			tpl_lead:
				"Pick a practical template, then change anything: list type, icon, color, tags, and starter items. It's your list — Tastik just gives it a head start.",
			tpl_items: [
				"Weekly Groceries",
				"Trip Packing",
				"Workout Routine",
				"Party Budget",
				"Project Board",
				"Reading Queue",
				"Home Reset",
				"Meal Prep",
				"Monthly Bills",
				"Launch Plan",
				"Gift Ideas",
				"Study Sprint",
			],
			widgets_eyebrow: "Widgets · Shortcuts · Control Center",
			widgets_title: "Your lists, one tap away.",
			widgets_lead:
				"Keep important lists close with Home Screen and Lock Screen widgets. Open a list, jump straight to quick add, complete items, advance Kanban status, adjust stepper values, and use App Shortcuts for fast capture.",
			widgets_b1: "App Shortcuts for fast capture",
			widgets_b2: "Lock & Home Screen widgets",
			widgets_b3: "Advance Kanban from widget",
			widgets_b4: "Stepper adjust on widget",
			widgets_home_screen: "Home Screen",
			widget_preview_title: "Weekly Groceries",
			widget_preview_items: [
				"Avocados",
				"Sourdough",
				"Greek yogurt",
				"Cold brew",
			],
			widget_pack_title: "Trip Packing",
			widget_pack_sub: "5 of 12",
			widget_board_title: "Project Board",
			widget_board_sub: "3 doing",
			widget_gift_title: "Gift Ideas",
			widget_gift_sub: "8 saved",
			details_eyebrow: "Details for serious lists",
			details_title: "Powerful when you need it. Quiet when you don't.",
			d_tags: "Tags per list",
			d_notes: "Notes and URLs on items",
			d_search: "Search titles and notes",
			d_hide: "Hide completed items",
			d_sort: "Sort by date or name",
			d_bulk: "Bulk selection actions",
			d_md: "Export (Pro)",
			d_share: "Shared lists with CloudKit (Pro)",
			d_archive: "Archive & recover lists",
			d_custom: "Custom icons & colors (Pro)",
			pro_eyebrow: "Tastik Pro",
			pro_title: "One purchase. Yours forever.",
			pro_lead:
				"Tastik Pro unlocks all current and future Pro features with a one-time purchase. No subscription. Restore anytime.",
			pro_free_heading: "Free",
			pro_free_tag: "Get started",
			pro_free_desc: "Everything you need to keep simple lists, free forever.",
			pro_free_1: "3 active lists",
			pro_free_2: "100 total items",
			pro_free_3: "Simple and Stepper lists",
			pro_free_4: "3 tags per list",
			pro_pro_heading: "Tastik Pro",
			pro_pro_tag: "One-time purchase",
			pro_pro_desc: "No subscription · Restore anytime",
			pro_pro_1: "Unlimited active lists",
			pro_pro_2: "Unlimited items",
			pro_pro_3: "Starter list templates",
			pro_pro_4: "Calculator, Kanban, and Multi lists",
			pro_pro_5: "Unlimited tags",
			pro_pro_6: "Share and export lists",
			pro_pro_7: "Custom icons and colors",
			final_title: "Lists that fit the way you actually work.",
			final_lead:
				"Download Tastik on iPhone. No account, no setup screens — just open the app and start your first list.",
			final_support: "Get support",
			support_title: "Support",
			support_lead_a: "Need help with Tastik? Send an email to ",
			support_cta: "Email support",
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
			support: "Suporte",
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
				"Desenvolvo todos os meus aplicativos exclusivamente para iOS, com Swift, SwiftUI e uma camada de dados local com SQLite e sincronização via iCloud, usando sempre as tecnologias mais recentes da Apple. Meu foco é entregar experiências modernas, privadas e intuitivas — sempre ouvindo os usuários e aprimorando a cada versão.",
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
			tastikPrivacy: {
				badge: "Privacidade",
				title: "Política de Privacidade",
				lastUpdated: "Atualizado em: 26 de maio de 2026",
				intro: {
					p1: "Se você abriu esta página, provavelmente se importa com a sua privacidade.",
					p2: "Nós também.",
					p3: "O Tastik foi pensado para ser um app privado e local-first. Suas listas são pessoais, e devem permanecer sob seu controle. Por isso o Tastik não exige conta, não pede login e não armazena suas listas em servidores próprios.",
				},
				sections: {
					data: {
						title: "Seus dados",
						p1: "O Tastik guarda suas listas, itens, tags, notas, quantidades, valores e dados relacionados localmente no seu dispositivo.",
						p2: "Se a sincronização do iCloud estiver ativa no seu dispositivo, o Tastik pode sincronizar seus dados pela sua conta iCloud pessoal, para que as listas fiquem disponíveis nos seus dispositivos Apple.",
						p3: "Não operamos um servidor Tastik que armazene o conteúdo das suas listas.",
					},
					account: {
						title: "Sem necessidade de conta",
						p1: "O Tastik não exige a criação de conta.",
						p2: "Isso significa que não coletamos seu nome, e-mail, senha ou credenciais de login para usar o app.",
					},
					icloud: {
						title: "Sincronização iCloud",
						p1: "O Tastik usa a infraestrutura iCloud da Apple para sincronizar seus dados entre seus próprios dispositivos.",
						p2: "Seus dados no iCloud são gerenciados pela Apple e vinculados ao seu Apple ID. O Tastik não tem acesso direto ao seu Apple ID, conta iCloud ou credenciais do iCloud.",
						p3: "Se você desativar o iCloud para o Tastik, seus dados podem ficar apenas no seu dispositivo.",
					},
					noCollect: {
						title: "O que o Tastik não coleta",
						p1: "O Tastik não coleta, vende, aluga nem compartilha o conteúdo pessoal das suas listas.",
						bullets: {
							b1: "Não usamos suas listas para publicidade.",
							b2: "Não lemos suas listas.",
							b3: "Não rastreamos os itens que você cria.",
							b4: "Não vendemos seus dados.",
						},
					},
					purchases: {
						title: "Compras",
						p1: "O Tastik pode oferecer o Tastik Pro como compra única para liberar funcionalidades adicionais.",
						p2: "As compras são processadas pela Apple via App Store. O Tastik não recebe, processa nem armazena os dados completos do seu cartão.",
						p3: "A Apple pode fornecer ao Tastik informações limitadas de habilitação de compra, como se o Tastik Pro está ativo, restaurado, reembolsado ou revogado.",
					},
					diag: {
						title: "Diagnóstico e desempenho",
						p1: "Dependendo das configurações do seu dispositivo, a Apple pode compartilhar relatórios de falha ou diagnóstico com desenvolvedores para ajudar a melhorar a estabilidade.",
						p2: "Esses relatórios são usados para corrigir bugs e melhorar o Tastik. Não são usados para identificar você nem para inspecionar o conteúdo das suas listas.",
					},
					delete: {
						title: "Exclusão de dados",
						p1: "Como o Tastik é local-first, você controla seus dados.",
						p2: "Você pode excluir listas ou itens direto no app.",
						p3: "Você também pode remover os dados do Tastik apagando o app do dispositivo. Se a sincronização iCloud estiver ativa, alguns dados sincronizados podem permanecer no iCloud até serem removidos pelas configurações da Apple ou pela exclusão dos dados em todos os dispositivos sincronizados.",
					},
					changes: {
						title: "Alterações nesta política",
						p1: "Podemos atualizar esta Política de Privacidade se os recursos ou o tratamento de dados do Tastik mudarem.",
						p2: "Quando fizermos mudanças relevantes, atualizaremos a política dentro do app.",
					},
					contact: {
						title: "Contato",
						intro:
							"Se tiver dúvidas sobre privacidade ou como o Tastik trata os dados, escreva para",
						email: "fabiolfp@gmail.com",
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
						"Aproveitando recursos do iOS, incluindo widgets interativos, armazenamento local com SQLite e sincronização iCloud.",
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
		TastikLanding: {
			hero_title_a: "O Tastik faz cada lista parecer ",
			hero_title_b: "feita sob medida.",
			hero_lead:
				"Crie listas privadas e locais com caixas de seleção, contadores, totais, quadros Kanban, itens mistos, tags, widgets, atalhos e Smart Add. Não precisa de conta.",
			hero_cta_appstore: "Ver na App Store",
			hero_cta_privacy: "Leia a política de privacidade",
			hero_chip_no_account: "Sem conta",
			hero_chip_icloud: "iCloud opcional",
			hero_chip_no_ads: "Sem anúncios",
			hero_card_bills_title: "Contas Mensais",
			hero_card_bills_amount: "R$ 1.824",
			hero_card_bills_sub: "Total dinâmico · 8 itens",
			hero_card_smart_title: "Smart Add",
			hero_card_smart_input: "abacates, pão, 2 iogurtes gregos, café gelado x3",
			hero_card_smart_tags: ["Abacates", "Pão", "Iogurte ×2", "Café gelado ×3"],
			trust_no_account: "Sem conta Tastik",
			trust_no_ads: "Sem anúncios. Nunca.",
			trust_icloud: "Sync iCloud opcional",
			trust_iphone: "Feito para iPhone",
			shapes_eyebrow: "Cinco formatos de lista",
			shapes_title: "Um app. Todo tipo de lista.",
			shapes_lead:
				"A maioria dos apps de lista oferece uma só ferramenta. O Tastik dá a cada lista o formato certo — para que compras pareçam compras, orçamentos pareçam orçamentos e projetos andem.",
			shape_simple: "Simples",
			shape_simple_desc:
				"Toque para marcar itens. Ótima para malas, recados e tarefas rápidas.",
			shape_stepper: "Contador",
			shape_stepper_desc:
				"Acompanhe quantidades com botões de mais e menos. Ideal para compras e rotinas.",
			shape_calc: "Calculadora",
			shape_calc_desc:
				"Some e subtraia valores com total dinâmico. Perfeito para orçamentos, contas e despesas.",
			shape_kanban: "Kanban",
			shape_kanban_desc:
				"Mova itens entre A Fazer, Fazendo e Feito. Feito para projetos e pipelines.",
			shape_multi: "Misto",
			shape_multi_desc:
				"Combine tipos de item em uma só lista. Links, contagens, notas, tarefas e valores lado a lado.",
			smart_eyebrow: "Smart Add",
			smart_title: "Transforme uma nota bagunçada em itens organizados.",
			smart_lead:
				"Em dispositivos compatíveis com Apple Intelligence, o Smart Add separa itens úteis de texto natural, mantém anotações, combina tags existentes e coloca novos cartões Kanban em A Fazer — pense em voz alta e entregue uma lista limpa.",
			smart_b1: "Escreva naturalmente — o Smart Add interpreta",
			smart_b2: "Preserva anotações junto aos itens extraídos",
			smart_b3: "Combina automaticamente suas tags existentes",
			smart_b4: "Sempre opcional. O adicionar rápido normal continua igual.",
			smart_you_typed: "Você escreveu",
			smart_input:
				"Planejar viagem — comprar passagens, 2 noites em Lisboa, lista de mala (passaporte, carregador, protetor solar), orçamento de uns R$ 6000, lembrar de ligar para o síndico.",
			smart_result_label: "Smart Add → Viagem · Lista Mista",
			smart_total_label: "Total",
			smart_note_label: "Nota",
			smart_items: [
				"Comprar passagens",
				"2 noites em Lisboa",
				"Passaporte",
				"Carregador",
				"Protetor solar",
				"Orçamento",
				"Ligar para o síndico",
			],
			smart_budget_total: "R$ 6.000",
			privacy_eyebrow: "Privacidade local-first",
			privacy_title: "Suas listas. No seu dispositivo.",
			privacy_lead:
				"O Tastik foi pensado para ser privado desde o início. Não exige conta, não pede login e não guarda o conteúdo das suas listas em servidores Tastik. Elas ficam localmente no seu dispositivo e podem sincronizar pelo seu iCloud pessoal, quando ativado.",
			privacy_read_more: "Leia a política de privacidade completa",
			privacy_chip_no_account: "Sem conta",
			privacy_chip_no_tracking: "Sem rastreamento",
			privacy_chip_no_ads: "Sem anúncios",
			privacy_chip_no_selling: "Sem venda de dados",
			privacy_chip_local: "Local-first",
			privacy_chip_icloud: "iCloud opcional",
			tpl_eyebrow: "Modelos iniciais",
			tpl_title: "Comece rápido. Personalize tudo.",
			tpl_lead:
				"Escolha um modelo prático e mude o que quiser: tipo de lista, ícone, cor, tags e itens iniciais. A lista é sua — o Tastik só dá o ponto de partida.",
			tpl_items: [
				"Compras da Semana",
				"Mala de Viagem",
				"Rotina de Treino",
				"Orçamento da Festa",
				"Quadro do Projeto",
				"Fila de Leitura",
				"Reset da Casa",
				"Marmita da Semana",
				"Contas Mensais",
				"Plano de Lançamento",
				"Ideias de Presente",
				"Sprint de Estudos",
			],
			widgets_eyebrow: "Widgets · Atalhos · Central de Controle",
			widgets_title: "Suas listas a um toque.",
			widgets_lead:
				"Mantenha listas importantes por perto com widgets na Tela de Início e Tela Bloqueada. Abra uma lista, vá direto para o adicionar rápido, conclua itens, avance status no Kanban, ajuste contadores e use Atalhos do App para capturas rápidas.",
			widgets_b1: "Atalhos do App para captura rápida",
			widgets_b2: "Widgets de Tela de Início e Bloqueada",
			widgets_b3: "Avance o Kanban pelo widget",
			widgets_b4: "Ajuste o contador pelo widget",
			widgets_home_screen: "Tela de Início",
			widget_preview_title: "Compras da Semana",
			widget_preview_items: ["Abacates", "Pão", "Iogurte grego", "Café gelado"],
			widget_pack_title: "Mala de Viagem",
			widget_pack_sub: "5 de 12",
			widget_board_title: "Quadro do Projeto",
			widget_board_sub: "3 fazendo",
			widget_gift_title: "Ideias de Presente",
			widget_gift_sub: "8 salvos",
			details_eyebrow: "Detalhes para listas sérias",
			details_title: "Poderoso quando precisa. Silencioso quando não.",
			d_tags: "Tags por lista",
			d_notes: "Notas e URLs nos itens",
			d_search: "Busca por título e notas",
			d_hide: "Ocultar itens concluídos",
			d_sort: "Ordenar por data ou nome",
			d_bulk: "Ações em lote",
			d_md: "Exportar (Pro)",
			d_share: "Listas compartilhadas via CloudKit (Pro)",
			d_archive: "Arquivar e recuperar listas",
			d_custom: "Ícones e cores personalizados (Pro)",
			pro_eyebrow: "Tastik Pro",
			pro_title: "Uma compra. Sua para sempre.",
			pro_lead:
				"O Tastik Pro libera todos os recursos Pro atuais e futuros com uma compra única. Sem assinatura. Restaure quando quiser.",
			pro_free_heading: "Grátis",
			pro_free_tag: "Comece já",
			pro_free_desc:
				"Tudo que você precisa para manter listas simples, de graça para sempre.",
			pro_free_1: "3 listas ativas",
			pro_free_2: "100 itens no total",
			pro_free_3: "Listas Simples e Contador",
			pro_free_4: "3 tags por lista",
			pro_pro_heading: "Tastik Pro",
			pro_pro_tag: "Compra única",
			pro_pro_desc: "Sem assinatura · Restaure quando quiser",
			pro_pro_1: "Listas ativas ilimitadas",
			pro_pro_2: "Itens ilimitados",
			pro_pro_3: "Modelos iniciais de lista",
			pro_pro_4: "Calculadora, Kanban e Mista",
			pro_pro_5: "Tags ilimitadas",
			pro_pro_6: "Compartilhar e exportar listas",
			pro_pro_7: "Ícones e cores personalizados",
			final_title: "Listas que se encaixam no jeito que você trabalha.",
			final_lead:
				"Baixe o Tastik no iPhone. Sem conta, sem telas de configuração — basta abrir o app e começar sua primeira lista.",
			final_support: "Obter suporte",
			support_title: "Suporte",
			support_lead_a: "Precisa de ajuda com o Tastik? Envie um e-mail para ",
			support_cta: "Enviar e-mail",
		},
	},
};
