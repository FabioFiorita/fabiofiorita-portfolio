"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const languages = [
	{ locale: "en", label: "English", flag: "🇺🇸" },
	{ locale: "pt", label: "Português", flag: "🇧🇷" },
] as const;

export function LanguageSwitcher() {
	const router = useRouter();
	const currentLocale = useLocale();

	const setLocale = async (newLocale: string) => {
		await fetch("/api/locale", {
			method: "POST",
			body: JSON.stringify({ locale: newLocale }),
			headers: { "Content-Type": "application/json" },
		});

		router.refresh();
	};

	const currentLanguage = languages.find((l) => l.locale === currentLocale);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="sm">
					{currentLanguage?.flag} {currentLanguage?.label}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{languages.map((language) => (
					<DropdownMenuItem
						key={language.locale}
						onClick={() => setLocale(language.locale)}
						disabled={currentLocale === language.locale}
					>
						<span className="mr-2">{language.flag}</span>
						{language.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
