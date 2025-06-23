import { DevelopmentApproach } from "@/components/development-approach";
import { FeaturedApps } from "@/components/featured-apps";
import { HeroSection } from "@/components/hero-section";

export default function HomePage() {
	return (
		<main className="p-8">
			<div className="flex flex-col justify-center items-center mb-8 gap-8 w-full">
				<HeroSection />
				<FeaturedApps />
				<DevelopmentApproach />
			</div>
		</main>
	);
}
