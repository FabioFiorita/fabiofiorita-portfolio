import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

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
							width={80}
							height={80}
							className="rounded-xl"
						/>
					</div>
				)}
				<div className="flex-1 flex flex-col justify-between min-h-52">
					<CardHeader>
						<div className="flex flex-col items-start lg:flex-row lg:items-center gap-2">
							<CardTitle className="text-2xl">{title}</CardTitle>
							<Badge className="text-shadow-2xs">{category}</Badge>
						</div>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex gap-4 mt-4">
							<Button size="sm" asChild>
								<Link href={detailsUrl}>{t("Portfolio.viewDetails")}</Link>
							</Button>
							<Button size="sm" variant="outline" asChild>
								<a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
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
