import { ArrowRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

const SUPPORT_EMAIL = "fabiolfp@gmail.com";

export default function SupportPage() {
	const t = useTranslations("TastikLanding");
	return (
		<main className="p-8" data-testid="tastik-support-page">
			<div className="mx-auto flex max-w-2xl flex-col items-start gap-6 py-12">
				<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
					<Mail className="h-5 w-5" />
				</div>
				<h1 className="text-[32px] font-bold leading-[1.1] tracking-tight md:text-[40px]">
					{t("support_title")}
				</h1>
				<p className="text-[16.5px] leading-relaxed text-muted-foreground">
					{t("support_lead_a")}
					<a
						href={`mailto:${SUPPORT_EMAIL}`}
						className="font-medium text-foreground underline underline-offset-4"
					>
						{SUPPORT_EMAIL}
					</a>
					.
				</p>
				<a
					href={`mailto:${SUPPORT_EMAIL}`}
					className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-5 text-[14.5px] font-semibold text-background transition-transform hover:-translate-y-0.5"
				>
					{t("support_cta")} <ArrowRight className="h-4 w-4" />
				</a>
			</div>
		</main>
	);
}

export const metadata: Metadata = {
	title: "Tastik — Support",
	description: "Get support for Tastik.",
};
