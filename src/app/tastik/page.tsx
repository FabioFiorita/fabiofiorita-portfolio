"use client";

import { useTranslations } from "next-intl";
import { AppFeatures } from "@/components/app-page/app-features";
import { AppHeader } from "@/components/app-page/app-header";
import { QuickActions } from "@/components/app-page/quick-actions";
import { type TechIcon, TechStack } from "@/components/app-page/tech-stack";

export default function TastikPage() {
	const t = useTranslations();

	const features = [
		"feature1",
		"feature2",
		"feature3",
		"feature4",
		"feature5",
		"feature6",
		"feature7",
	].map((_, index) => {
		const featureKey = `Apps.tastik.features.${index}`;
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
					image="/tastik.svg"
					title={t("Apps.tastik.title")}
					category={t("Apps.tastik.category")}
					platform="iOS 18+"
					framework="SwiftUI"
					description={t("Apps.tastik.longDescription")}
				/>

				<QuickActions
					storeUrl="https://apps.apple.com/gb/app/tastik-tasks-and-lists/id6459197048"
					privacyUrl="/tastik/privacy"
				/>

				<AppFeatures features={features} />

				<TechStack title={t("AppPage.techStack.title")} techs={techFeatures} />
			</div>
		</main>
	);
}
