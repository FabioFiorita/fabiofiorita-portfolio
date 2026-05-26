import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"relative mx-auto aspect-[9/19.5] w-full max-w-[280px]",
				className,
			)}
		>
			{children}
		</div>
	);
}
