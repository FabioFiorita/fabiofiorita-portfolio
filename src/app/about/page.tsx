import { AboutBio } from "@/components/about/about-bio";
import { AboutFocusAreas } from "@/components/about/about-focus-areas";
import { AboutSkills } from "@/components/about/about-skills";

export default function AboutPage() {
	return (
		<main className="p-8" data-testid="about-page">
			<div className="flex flex-col justify-center items-center mb-8 gap-8 w-full">
				<AboutBio />
				<div className="grid gap-4 md:grid-cols-2 w-full">
					<AboutSkills />
					<AboutFocusAreas />
				</div>
			</div>
		</main>
	);
}
