import { FeatureShowcase } from "./feature-showcase";

interface Feature {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	reverse?: boolean;
}

interface AppFeaturesProps {
	features: Feature[];
}

export function AppFeatures({ features }: AppFeaturesProps) {
	return (
		<div className="space-y-16">
			{features.map((feature) => (
				<FeatureShowcase
					key={feature.title}
					title={feature.title}
					description={feature.description}
					imageSrc={feature.imageSrc}
					imageAlt={feature.imageAlt}
					reverse={feature.reverse}
				/>
			))}
		</div>
	);
}
