import { useTranslations } from "next-intl";
import { AppCard } from "./app-card";

export function FeaturedApps() {
	const t = useTranslations();

	const appsData = [
		{
			key: "itsMedTime",
			detailsUrl: "/itsmedtime",
			appStoreUrl: "https://apps.apple.com/gb/app/itsmedtime/id1580757092",
			image: "/itsmedtime.svg",
		},
		{
			key: "tastik",
			detailsUrl: "/tastik",
			appStoreUrl:
				"https://apps.apple.com/gb/app/tastik-tasks-and-lists/id6459197048",
			image: "/tastik.svg",
		},
	];

	return (
		<div className="grid gap-6 md:grid-cols-2 w-full">
			{appsData.map((app) => (
				<AppCard
					key={app.key}
					id={app.key.toLowerCase()}
					title={t(`Apps.${app.key}.title`)}
					category={t(`Apps.${app.key}.category`)}
					description={t(`Apps.${app.key}.shortDescription`)}
					detailsUrl={app.detailsUrl}
					appStoreUrl={app.appStoreUrl}
					image={app.image}
				/>
			))}
		</div>
	);
}
