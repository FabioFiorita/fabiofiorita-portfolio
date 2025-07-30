import { Lightbulb, Shield, Smartphone, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DevelopmentApproach() {
	const t = useTranslations();

	const approaches = [
		{
			icon: Smartphone,
			key: "iosFirst",
		},
		{
			icon: Shield,
			key: "privacy",
		},
		{
			icon: Zap,
			key: "modern",
		},
		{
			icon: Lightbulb,
			key: "userCentered",
		},
	];

	return (
		<div className="space-y-4" data-testid="development-approach-card">
			<div className="text-center">
				<h2 className="text-2xl font-bold mb-2">
					{t("DevelopmentApproach.title")}
				</h2>
				<p className="text-muted-foreground">
					{t("DevelopmentApproach.subtitle")}
				</p>
			</div>
			<div className="grid gap-4 md:grid-cols-2">
				{approaches.map((approach) => (
					<Card key={approach.key} className="border-l-4 border-l-primary-500">
						<CardHeader className="pb-3">
							<CardTitle className="flex items-center gap-2 text-lg">
								<approach.icon className="size-5 text-primary-600 dark:text-primary-400" />
								{t(`DevelopmentApproach.approaches.${approach.key}.title`)}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-sm">
								{t(
									`DevelopmentApproach.approaches.${approach.key}.description`,
								)}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
