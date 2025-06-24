import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function AboutBio() {
	const t = useTranslations();

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex flex-col gap-4 items-start">
					<Image
						src="/memoji.png"
						alt="memoji"
						width={100}
						height={100}
						className="-ml-4 -mt-8"
					/>
					<div className="text-lg">{t("Navigation.about")}</div>
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 text-sm">
				<p>{t("About.intro")}</p>
				<p>{t("About.education")}</p>
				<p>{t("About.itsMedTime")}</p>
				<p>{t("About.tastik")}</p>
				<p>{t("About.technology")}</p>
			</CardContent>
			<CardFooter>
				<Button variant="outline" asChild>
					<Link
						href="https://www.linkedin.com/in/fabiofioritapontes/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
