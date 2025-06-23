import { ExternalLink, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PrivacyPolicyProps {
	appName: "itsMedTime" | "tastik";
}

export function PrivacyPolicy({ appName }: PrivacyPolicyProps) {
	const t = useTranslations();

	return (
		<div className="max-w-4xl mx-auto space-y-6">
			<div className="text-center space-y-2">
				<h1 className="text-3xl font-bold">{t("Apps.privacyPolicy")}</h1>
				<p className="text-muted-foreground">{t(`Apps.${appName}.title`)}</p>
			</div>

			<Card>
				<CardContent className="px-8 space-y-8">
					<div className="text-center">
						<p className="text-sm text-muted-foreground">
							{t("Apps.privacy.lastUpdated")}
						</p>
					</div>

					<div className="space-y-6">
						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("Apps.privacy.sections.personalData.title")}
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								{t("Apps.privacy.sections.personalData.body")}
							</p>
						</section>

						<section className="space-y-4">
							<h2 className="text-xl font-semibold mb-3">
								{t("Apps.privacy.sections.inAppPurchases.title")}
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								{t("Apps.privacy.sections.inAppPurchases.body")}
							</p>
							<Button variant="outline" size="sm" asChild>
								<a
									href="https://www.revenuecat.com/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2"
								>
									{t("Apps.privacy.sections.inAppPurchases.button")}
									<ExternalLink className="size-3" />
								</a>
							</Button>
						</section>

						<section className="space-y-4">
							<h2 className="text-xl font-semibold mb-3">
								{t("Apps.privacy.sections.analytics.title")}
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								{t("Apps.privacy.sections.analytics.body", {
									appName: t(`Apps.${appName}.title`),
								})}
							</p>
							<Button variant="outline" size="sm" asChild>
								<a
									href="https://posthog.com/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2"
								>
									{t("Apps.privacy.sections.analytics.button")}
									<ExternalLink className="size-3" />
								</a>
							</Button>
						</section>

						<section className="space-y-4">
							<h2 className="text-xl font-semibold mb-3">
								{t("Apps.privacy.sections.contact.title")}
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								{t("Apps.privacy.sections.contact.body")}
							</p>
							<Button variant="outline" size="sm" asChild>
								<a
									href="mailto:fabiolfp@gmail.com"
									className="inline-flex items-center gap-2"
								>
									<Mail className="size-4" />
									{t("Apps.privacy.sections.contact.button")}
								</a>
							</Button>
						</section>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
