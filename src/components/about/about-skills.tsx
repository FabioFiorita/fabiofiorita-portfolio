import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSkills() {
	const t = useTranslations();
	const skills = [
		"Swift",
		"SwiftUI",
		"iOS Development",
		"Typescript",
		"React",
		"Next.js",
		"UI/UX Design",
		"Tailwind",
		"Node",
		"NestJS",
		"Prisma",
		"SwiftData",
		"Core Data",
		"Firebase",
		"Supabase",
		"Docker",
	];
	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("About.skills", { defaultValue: "Skills" })}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2">
					{skills.map((skill) => (
						<Badge key={skill}>{skill}</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
