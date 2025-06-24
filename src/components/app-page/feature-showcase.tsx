import Image from "next/image";

interface FeatureShowcaseProps {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	reverse?: boolean;
}

export function FeatureShowcase({
	title,
	description,
	imageSrc,
	imageAlt,
	reverse = false,
}: FeatureShowcaseProps) {
	return (
		<div
			className={`grid gap-8 md:grid-cols-2 items-center ${reverse ? "md:grid-flow-col-dense" : ""}`}
		>
			<div className={`space-y-4 ${reverse ? "md:col-start-2" : ""}`}>
				<h3 className="text-2xl font-bold">{title}</h3>
				<p className="text-muted-foreground leading-relaxed">{description}</p>
			</div>
			<div className={`flex justify-center ${reverse ? "md:col-start-1" : ""}`}>
				<div className="relative">
					<Image
						src={imageSrc || "/placeholder.svg"}
						alt={imageAlt}
						width={300}
						height={600}
						className="rounded-3xl shadow-2xl"
						priority
					/>
				</div>
			</div>
		</div>
	);
}
