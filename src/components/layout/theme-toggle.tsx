"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button variant="ghost" size="sm" className="w-full justify-start gap-2">
				<Sun className="size-4" />
				<span>Theme</span>
			</Button>
		);
	}

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="w-full justify-start gap-2"
		>
			{theme === "dark" ? (
				<Sun className="size-4" />
			) : (
				<Moon className="size-4" />
			)}
			<span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
		</Button>
	);
}
