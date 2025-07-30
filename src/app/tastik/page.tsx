import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { AppFeatures } from "@/components/app-page/app-features";
import { AppHeader } from "@/components/app-page/app-header";
import { QuickActions } from "@/components/app-page/quick-actions";
import { TechStack } from "@/components/app-page/tech-stack";
import { useAppFeatures } from "@/hooks/use-app-features";

export default function TastikPage() {
	const t = useTranslations();
	const { features, techFeatures } = useAppFeatures({
		appKey: "tastik",
		featureCount: 7,
	});

	return (
		<main className="p-8" data-testid="tastik-page">
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

export const metadata: Metadata = {
	title: "Tastik",
	description:
		"Tastik is the flexible list app for everything that doesn't fit in your calendar. Make checklists, track numbers, manage budgets, and organize projects—all your way, all in one place.",
};
