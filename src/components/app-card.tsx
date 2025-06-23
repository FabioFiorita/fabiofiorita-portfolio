import { ExternalLink, Smartphone } from "lucide-react";
import Image from "next/image";
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
	image?: string;
}

export function AppCard({
	title,
	category,
	description,
	detailsUrl,
	appStoreUrl,
	image,
}: AppCardProps) {
	const t = useTranslations();

	return (
		<Card>
			<div className="flex justify-start items-start">
				{image && (
					<div className="flex items-start justify-center p-4">
						<Image
							src={image}
							alt={`${title} logo`}
							width={100}
							height={100}
							className="rounded-xl"
						/>
					</div>
				)}
				<div className="flex-1">
					<CardHeader>
						<div className="flex items-center gap-2">
							<CardTitle className="text-2xl">{title}</CardTitle>
							<Badge className="text-shadow-2xs">{category}</Badge>
						</div>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex gap-4 mt-4">
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
				</div>
			</div>
		</Card>
	);
}
