import { useTranslations } from "next-intl";
import { AppCard } from "./app-card";

export function FeaturedApps() {
	const t = useTranslations();

	const appsData = [
		{
			title: t("Apps.itsMedTime.title"),
			category: t("Apps.itsMedTime.category"),
			description: t("Apps.itsMedTime.shortDescription"),
			detailsUrl: "/itsmedtime",
			appStoreUrl: "https://apps.apple.com/gb/app/itsmedtime/id1580757092",
		},
		{
			title: t("Apps.tastik.title"),
			category: t("Apps.tastik.category"),
			description: t("Apps.tastik.shortDescription"),
			detailsUrl: "/tastik",
			appStoreUrl:
				"https://apps.apple.com/gb/app/tastik-tasks-and-lists/id6459197048",
		},
	];

	return (
		<div className="grid gap-6 md:grid-cols-2 w-full">
			{appsData.map((app) => (
				<AppCard
					key={app.title}
					title={app.title}
					category={app.category}
					description={app.description}
					detailsUrl={app.detailsUrl}
					appStoreUrl={app.appStoreUrl}
				/>
			))}
		</div>
	);
}
