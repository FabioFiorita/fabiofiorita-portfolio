import Image from "next/image";

function ScreenshotMockup({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="relative h-full w-full">
			<Image
				src={src}
				alt={alt}
				fill
				sizes="(max-width: 768px) 240px, 280px"
				className="object-contain"
			/>
		</div>
	);
}

export function GroceriesMockup() {
	return (
		<ScreenshotMockup
			src="/tastik/en/stepper.png"
			alt="Tastik stepper list for groceries"
		/>
	);
}

export function SimpleMockup() {
	return (
		<ScreenshotMockup
			src="/tastik/en/quickItems.png"
			alt="Tastik simple checklist"
		/>
	);
}

export function CalculatorMockup() {
	return (
		<ScreenshotMockup
			src="/tastik/en/calculator.png"
			alt="Tastik calculator list with running total"
		/>
	);
}

export function KanbanMockup() {
	return (
		<ScreenshotMockup src="/tastik/en/kanban.png" alt="Tastik kanban board" />
	);
}

export function MultiMockup() {
	return (
		<ScreenshotMockup
			src="/tastik/en/multi.png"
			alt="Tastik multi list with mixed item types"
		/>
	);
}

export function WidgetPreview() {
	return (
		<div className="rounded-2xl bg-card p-4 ring-1 ring-border">
			<div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">
				Weekly Groceries
			</div>
			<div className="mt-3 space-y-2">
				{[
					{ done: true, label: "Avocados", qty: "×2" },
					{ done: true, label: "Sourdough", qty: "" },
					{ done: false, label: "Greek yogurt", qty: "×2" },
					{ done: false, label: "Cold brew", qty: "×3" },
				].map((row) => (
					<div key={row.label} className="flex items-center gap-2">
						<div
							className={
								row.done
									? "h-3.5 w-3.5 rounded-full bg-[var(--tastik-primary)]"
									: "h-3.5 w-3.5 rounded-full border-2 border-border"
							}
						/>
						<span
							className={
								row.done
									? "flex-1 text-[12.5px] text-muted-foreground line-through"
									: "flex-1 text-[12.5px]"
							}
						>
							{row.label}
						</span>
						{row.qty && (
							<span className="text-[11px] font-semibold text-muted-foreground">
								{row.qty}
							</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
