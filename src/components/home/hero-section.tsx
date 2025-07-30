import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function HeroSection() {
	const t = useTranslations();

	return (
		<div
			className="rounded-xl bg-muted/50 p-8 text-center w-full"
			data-testid="hero-section"
		>
			<h1 className="text-4xl font-bold mb-4">{t("Portfolio.welcome")}</h1>
			<p className="text-xl text-muted-foreground mb-6">
				{t("Portfolio.subtitle")}
			</p>
			<div className="flex justify-center gap-4">
				<Button asChild>
					<Link href="/about" data-testid="hero-about-link">
						{t("Portfolio.learnMore")}
					</Link>
				</Button>
				<Button variant="outline" asChild>
					<Link href="/contact" data-testid="hero-contact-link">
						{t("Portfolio.getInTouch")}
					</Link>
				</Button>
			</div>
		</div>
	);
}
