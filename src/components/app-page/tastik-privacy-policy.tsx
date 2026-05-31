import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";

export function TastikPrivacyPolicy() {
	const t = useTranslations("Apps.tastikPrivacy");

	return (
		<div className="max-w-4xl mx-auto space-y-6">
			<div className="text-center space-y-3">
				<h1 className="text-3xl font-bold">{t("title")}</h1>
			</div>

			<Card>
				<CardContent className="px-8 space-y-8">
					<div className="text-center">
						<p className="text-sm text-muted-foreground">{t("lastUpdated")}</p>
					</div>

					<div className="space-y-3 text-foreground leading-relaxed">
						<p>{t("intro.p1")}</p>
						<p>{t("intro.p2")}</p>
						<p className="text-muted-foreground">{t("intro.p3")}</p>
					</div>

					<div className="space-y-8">
						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("sections.data.title")}
							</h2>
							<div className="space-y-3 text-muted-foreground leading-relaxed">
								<p>{t("sections.data.p1")}</p>
								<p>{t("sections.data.p2")}</p>
								<p>{t("sections.data.p3")}</p>
							</div>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("sections.account.title")}
							</h2>
							<div className="space-y-3 text-muted-foreground leading-relaxed">
								<p>{t("sections.account.p1")}</p>
								<p>{t("sections.account.p2")}</p>
							</div>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("sections.icloud.title")}
							</h2>
							<div className="space-y-3 text-muted-foreground leading-relaxed">
								<p>{t("sections.icloud.p1")}</p>
								<p>{t("sections.icloud.p2")}</p>
								<p>{t("sections.icloud.p3")}</p>
							</div>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("sections.noCollect.title")}
							</h2>
							<div className="space-y-3 text-muted-foreground leading-relaxed">
								<p>{t("sections.noCollect.p1")}</p>
								<ul className="list-disc space-y-1 pl-5">
									<li>{t("sections.noCollect.bullets.b1")}</li>
									<li>{t("sections.noCollect.bullets.b2")}</li>
									<li>{t("sections.noCollect.bullets.b3")}</li>
									<li>{t("sections.noCollect.bullets.b4")}</li>
								</ul>
							</div>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("sections.purchases.title")}
							</h2>
							<div className="space-y-3 text-muted-foreground leading-relaxed">
								<p>{t("sections.purchases.p1")}</p>
								<p>{t("sections.purchases.p2")}</p>
								<p>{t("sections.purchases.p3")}</p>
							</div>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("sections.diag.title")}
							</h2>
							<div className="space-y-3 text-muted-foreground leading-relaxed">
								<p>{t("sections.diag.p1")}</p>
								<p>{t("sections.diag.p2")}</p>
							</div>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("sections.delete.title")}
							</h2>
							<div className="space-y-3 text-muted-foreground leading-relaxed">
								<p>{t("sections.delete.p1")}</p>
								<p>{t("sections.delete.p2")}</p>
								<p>{t("sections.delete.p3")}</p>
							</div>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("sections.changes.title")}
							</h2>
							<div className="space-y-3 text-muted-foreground leading-relaxed">
								<p>{t("sections.changes.p1")}</p>
								<p>{t("sections.changes.p2")}</p>
							</div>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-3">
								{t("sections.contact.title")}
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								{t("sections.contact.intro")}{" "}
								<a
									href={`mailto:${t("sections.contact.email")}`}
									className="text-primary hover:underline"
								>
									{t("sections.contact.email")}
								</a>
								.
							</p>
						</section>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
