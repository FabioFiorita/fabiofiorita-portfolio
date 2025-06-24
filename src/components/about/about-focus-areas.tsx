import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutFocusAreas() {
	const t = useTranslations();
	const focusAreas = [
		t("About.focusAreasList.iOS"),
		t("About.focusAreasList.frontend"),
		t("About.focusAreasList.backend"),
		t("About.focusAreasList.ux"),
	];
	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("About.focusArea")}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					{focusAreas.map((area) => (
						<div key={area} className="flex items-center gap-2">
							<div className="w-2 h-2 bg-primary rounded-full"></div>
							<span>{area}</span>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
