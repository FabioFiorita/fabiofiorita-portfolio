import { Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactCard() {
	const t = useTranslations();

	return (
		<div className="max-w-2xl mx-auto space-y-6">
			<div className="text-center space-y-3">
				<h1 className="text-3xl font-bold">{t("Navigation.contact")}</h1>
			</div>

			<Card>
				<CardContent className="px-8 space-y-6 text-center">
					<p className="text-muted-foreground leading-relaxed">
						{t("Contact.message")}
					</p>

					<div className="flex flex-col items-center gap-3">
						<Button asChild size="lg">
							<Link href="mailto:fabiolfp@gmail.com">
								<Mail className="size-4" />
								{t("Contact.sendEmail")}
							</Link>
						</Button>
						<a
							href="mailto:fabiolfp@gmail.com"
							className="text-sm text-muted-foreground hover:text-primary hover:underline"
						>
							fabiolfp@gmail.com
						</a>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
