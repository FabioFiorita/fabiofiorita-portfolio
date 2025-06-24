import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface AppHeaderProps {
	image: string;
	title: string;
	category: string;
	platform: string;
	framework: string;
	description: string;
}

export function AppHeader({
	image,
	title,
	category,
	platform,
	framework,
	description,
}: AppHeaderProps) {
	return (
		<div className="text-center space-y-4">
			<div className="flex justify-center">
				<Image
					src={image}
					alt={`${title} logo`}
					width={100}
					height={100}
					className="rounded-xl"
				/>
			</div>
			<div>
				<h1 className="text-4xl font-bold mb-2">{title}</h1>
				<div className="flex justify-center gap-2 mb-4">
					<Badge variant="secondary">{category}</Badge>
					<Badge variant="outline">{platform}</Badge>
					<Badge variant="outline">{framework}</Badge>
				</div>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
					{description}
				</p>
			</div>
		</div>
	);
}
