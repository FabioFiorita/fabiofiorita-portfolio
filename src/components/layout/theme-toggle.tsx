"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
	const t = useTranslations();
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button
				variant="ghost"
				size="sm"
				className="w-full justify-start gap-2"
				data-testid="theme-toggle"
			>
				<Sun className="size-4" />
				<span>{t("Preferences.theme")}</span>
			</Button>
		);
	}

	const icon =
		theme === "dark" ? (
			<Sun className="size-4" />
		) : theme === "light" ? (
			<Moon className="size-4" />
		) : (
			<Laptop className="size-4" />
		);
	const label =
		theme === "dark"
			? t("Preferences.lightMode")
			: theme === "light"
				? t("Preferences.darkMode")
				: t("Preferences.systemMode");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					className="w-full justify-start gap-2"
					data-testid="theme-toggle"
				>
					{icon}
					<span>{label}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start">
				<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
					<DropdownMenuRadioItem value="light">
						<Moon className="size-4 mr-2" />
						{t("Preferences.lightMode")}
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="dark">
						<Sun className="size-4 mr-2" />
						{t("Preferences.darkMode")}
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="system">
						<Laptop className="size-4 mr-2" />
						{t("Preferences.systemMode")}
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
