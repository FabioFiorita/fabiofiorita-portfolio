import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

// Screenshots are localized: en visitors get /tastik/en/*, pt visitors /tastik/pt/*.
// Only "en" and "pt" image folders exist, so anything else falls back to "en".
function useScreenshotDir() {
	const locale = useLocale();
	return locale === "pt" ? "pt" : "en";
}

function ScreenshotMockup({ name, alt }: { name: string; alt: string }) {
	const dir = useScreenshotDir();
	return (
		<div className="relative h-full w-full">
			<Image
				src={`/tastik/${dir}/${name}.png`}
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
			name="smartadd"
			alt="Tastik groceries list with steppers and Smart Add"
		/>
	);
}

export function SimpleMockup() {
	return <ScreenshotMockup name="lists" alt="Tastik lists overview" />;
}

export function CalculatorMockup() {
	return (
		<ScreenshotMockup
			name="budget"
			alt="Tastik budget list with a running total"
		/>
	);
}

export function KanbanMockup() {
	return <ScreenshotMockup name="kanban" alt="Tastik kanban board" />;
}

export function MultiMockup() {
	return (
		<ScreenshotMockup
			name="reading"
			alt="Tastik multi list with mixed item types"
		/>
	);
}

export function WidgetPreview() {
	const t = useTranslations("TastikLanding");
	const labels = t.raw("widget_preview_items") as string[];
	const meta = [
		{ done: true, qty: "×2" },
		{ done: true, qty: "" },
		{ done: false, qty: "×2" },
		{ done: false, qty: "×3" },
	];
	const rows = labels.map((label, i) => ({ label, ...meta[i] }));
	return (
		<div className="rounded-2xl bg-card p-4 ring-1 ring-border">
			<div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">
				{t("widget_preview_title")}
			</div>
			<div className="mt-3 space-y-2">
				{rows.map((row) => (
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
