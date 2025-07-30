import { useTranslations } from "next-intl";
import type { TechIcon } from "@/components/app-page/tech-stack";

interface AppFeature {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	reverse?: boolean;
}

interface TechFeature {
	icon: TechIcon;
	title: string;
	description: string;
}

interface UseAppFeaturesOptions {
	appKey: string;
	featureCount: number;
	techFeatureCount?: number;
}

export function useAppFeatures({
	appKey,
	featureCount,
	techFeatureCount = 4,
}: UseAppFeaturesOptions) {
	const t = useTranslations();

	const features: AppFeature[] = Array.from(
		{ length: featureCount },
		(_, index) => {
			const featureKey = `Apps.${appKey}.features.${index}`;
			return {
				title: t(`${featureKey}.title`),
				description: t(`${featureKey}.description`),
				imageSrc: t(`${featureKey}.imageSrc`),
				imageAlt: t(`${featureKey}.imageAlt`),
				reverse: t.raw(`${featureKey}.reverse`) === true,
			};
		},
	);

	const techFeatures: TechFeature[] = Array.from(
		{ length: techFeatureCount },
		(_, index) => {
			const featureKey = `AppPage.techStack.features.${index}`;
			return {
				icon: t(`${featureKey}.icon`) as TechIcon,
				title: t(`${featureKey}.title`),
				description: t(`${featureKey}.description`),
			};
		},
	);

	return {
		features,
		techFeatures,
	};
}
