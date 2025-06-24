import { DevelopmentApproach } from "@/components/home/development-approach";
import { FeaturedApps } from "@/components/home/featured-apps";
import { HeroSection } from "@/components/home/hero-section";

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
