import { Cloud, Shield, Smartphone, Zap } from "lucide-react";
import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { translations } from "@/i18n/messages";

export type TechIcon =
	(typeof translations.en.AppPage.techStack.features)[number]["icon"];

const iconMap: Record<string, React.ElementType> = {
	Smartphone,
	Cloud,
	Zap,
	Shield,
};

type Tech = (typeof translations.en.AppPage.techStack.features)[number];

interface TechStackProps {
	title: string;
	techs: readonly Tech[];
}

export function TechStack({ title, techs }: TechStackProps) {
	return (
		<Card className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 border-blue-200 dark:border-blue-800">
			<CardHeader>
				<CardTitle className="text-center text-2xl">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{techs.map((tech) => {
						const Icon = iconMap[tech.icon];
						return (
							<div key={tech.title} className="text-center space-y-2">
								{Icon && (
									<Icon className="size-8 mx-auto text-blue-600 dark:text-blue-400" />
								)}
								<h4 className="font-semibold">{tech.title}</h4>
								<p className="text-sm text-muted-foreground">
									{tech.description}
								</p>
							</div>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
}
