import { ListCheck, Mail, Pill, Shield, Store, User } from "lucide-react";
import { useTranslations } from "next-intl";

export function usePortfolioData() {
	const t = useTranslations();

	return {
		owner: {
			name: "Fábio Fiorita",
			title: t("Owner.title"),
		},
		navigation: [
			{
				title: t("Navigation.general"),
				items: [
					{
						title: t("Navigation.about"),
						url: "/about",
						icon: User,
					},
					{
						title: t("Navigation.contact"),
						url: "/contact",
						icon: Mail,
					},
				],
			},
		],
		apps: [
			{
				key: "itsMedTime",
				url: "/itsmedtime",
				icon: Pill,
				items: [
					{
						title: "itsMedTime",
						url: "/itsmedtime",
					},
					{
						title: "App Store",
						url: "https://apps.apple.com/gb/app/itsmedtime/id1580757092",
						icon: Store,
						isExternalLink: true,
					},
					{
						title: "privacyPolicy",
						url: "/itsmedtime/privacy",
						icon: Shield,
					},
				],
			},
			{
				key: "tastik",
				url: "/tastik",
				icon: ListCheck,
				items: [
					{
						title: "tastik",
						url: "/tastik",
					},
					{
						title: "App Store",
						url: "https://apps.apple.com/gb/app/tastik-tasks-and-lists/id6459197048",
						icon: Store,
						isExternalLink: true,
					},
					{
						title: "privacyPolicy",
						url: "/tastik/privacy",
						icon: Shield,
					},
				],
			},
		],
	};
}
