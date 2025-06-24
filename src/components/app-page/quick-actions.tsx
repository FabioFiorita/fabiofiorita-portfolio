import { ExternalLink, Shield } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
	storeUrl: string;
	privacyUrl: string;
}

export function QuickActions({ storeUrl, privacyUrl }: QuickActionsProps) {
	const t = useTranslations();

	return (
		<div className="flex justify-center gap-4">
			<Button size="lg" asChild>
				<a href={storeUrl} target="_blank" rel="noopener noreferrer">
					<ExternalLink className="size-4 mr-2" />
					{t("AppPage.quickActions.appStore")}
				</a>
			</Button>
			<Button variant="outline" size="lg" asChild>
				<Link href={privacyUrl}>
					<Shield className="size-4 mr-2" />
					{t("Apps.privacyPolicy")}
				</Link>
			</Button>
		</div>
	);
}
