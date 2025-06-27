import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { AppFeatures } from "@/components/app-page/app-features";
import { AppHeader } from "@/components/app-page/app-header";
import { QuickActions } from "@/components/app-page/quick-actions";
import { type TechIcon, TechStack } from "@/components/app-page/tech-stack";

export default function ItsMedTimePage() {
	const t = useTranslations();

	const features = [
		"feature1",
		"feature2",
		"feature3",
		"feature4",
		"feature5",
	].map((_, index) => {
		const featureKey = `Apps.itsMedTime.features.${index}`;
		return {
			title: t(`${featureKey}.title`),
			description: t(`${featureKey}.description`),
			imageSrc: t(`${featureKey}.imageSrc`),
			imageAlt: t(`${featureKey}.imageAlt`),
			reverse: t.raw(`${featureKey}.reverse`),
		};
	});

	const techFeatures = ["feature1", "feature2", "feature3", "feature4"].map(
		(_, index) => {
			const featureKey = `AppPage.techStack.features.${index}`;
			return {
				icon: t(`${featureKey}.icon`) as TechIcon,
				title: t(`${featureKey}.title`),
				description: t(`${featureKey}.description`),
			};
		},
	);

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
