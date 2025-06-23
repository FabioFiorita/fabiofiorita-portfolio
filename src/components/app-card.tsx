import { ExternalLink, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

interface AppCardProps {
	title: string;
	category: string;
	description: string;
	detailsUrl: string;
	appStoreUrl: string;
}

export function AppCard({
	title,
	category,
	description,
	detailsUrl,
	appStoreUrl,
}: AppCardProps) {
	const t = useTranslations();

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center gap-2">
					<Smartphone className="size-6" />
					<CardTitle>{title}</CardTitle>
					<Badge>{category}</Badge>
				</div>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex gap-2">
					<Button size="sm" asChild>
						<a href={detailsUrl}>{t("Portfolio.viewDetails")}</a>
					</Button>
					<Button size="sm" variant="outline" asChild>
						<a href={appStoreUrl}>
							<ExternalLink className="size-4 mr-1" />
							App Store
						</a>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
