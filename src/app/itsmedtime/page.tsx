import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { AppFeatures } from "@/components/app-page/app-features";
import { AppHeader } from "@/components/app-page/app-header";
import { QuickActions } from "@/components/app-page/quick-actions";
import { TechStack } from "@/components/app-page/tech-stack";
import { useAppFeatures } from "@/hooks/use-app-features";

export default function ItsMedTimePage() {
	const t = useTranslations();
	const { features, techFeatures } = useAppFeatures({
		appKey: "itsMedTime",
		featureCount: 5,
	});

	return (
		<main className="p-8">
			<div className="flex flex-col justify-center items-center mb-8 gap-8 w-full">
				<AppHeader
					image="/itsmedtime.svg"
					title={t("Apps.itsMedTime.title")}
					category={t("Apps.itsMedTime.category")}
					platform="iOS 18+"
					framework="SwiftUI"
					description={t("Apps.itsMedTime.longDescription")}
				/>

				<QuickActions
					storeUrl="https://apps.apple.com/gb/app/itsmedtime/id1580757092"
					privacyUrl="/itsmedtime/privacy"
				/>

				<AppFeatures features={features} />

				<TechStack title={t("AppPage.techStack.title")} techs={techFeatures} />
			</div>
		</main>
	);
}

export const metadata: Metadata = {
	title: "ItsMedTime",
	description:
		"Everything you need to manage your meds, simply and smartly: track schedules, get important reminders, keep an eye on your history and stock, and stay on top of your health routine with ease.",
};
