import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

export function ContactCard() {
	const t = useTranslations();

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle className="flex flex-col gap-4 items-start">
					<div className="text-lg">{t("Navigation.contact")}</div>
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 text-sm">
				<p>{t("Contact.message")}</p>
			</CardContent>
			<CardFooter className="flex flex-col gap-2 items-start">
				<Button asChild>
					<Link href="mailto:fabiolfp@gmail.com">{t("Contact.sendEmail")}</Link>
				</Button>
				<p className="text-xs">Email: fabiolfp@gmail.com</p>
			</CardFooter>
		</Card>
	);
}
