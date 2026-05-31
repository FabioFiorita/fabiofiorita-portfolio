import {
	AppWindow,
	Archive,
	ArrowRight,
	Calculator,
	Check,
	Cloud,
	Download,
	FileText,
	KanbanSquare,
	Layers,
	ListChecks,
	Lock,
	Palette,
	Search,
	Share2,
	Shield,
	Sparkles,
	SquareStack,
	Tag,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import {
	CalculatorMockup,
	GroceriesMockup,
	KanbanMockup,
	MultiMockup,
	SimpleMockup,
	WidgetPreview,
} from "@/components/tastik-landing/mockups";
import { PhoneFrame } from "@/components/tastik-landing/phone-frame";

const APP_STORE =
	"https://apps.apple.com/gb/app/tastik-tasks-and-lists/id6459197048";

export function TastikLanding() {
	return (
		<div
			className="tastik-landing min-h-screen bg-background"
			data-testid="tastik-page"
		>
			<Hero />
			<TrustStrip />
			<ListShapes />
			<SmartAdd />
			<PrivacyCard />
			<Templates />
			<WidgetsShortcuts />
			<SeriousDetails />
			<Pro />
			<FinalCTA />
		</div>
	);
}

function Hero() {
	const t = useTranslations("TastikLanding");
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-background to-[var(--tastik-primary-soft)]/40">
			<div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 md:grid-cols-2 md:gap-8 md:pb-28 md:pt-20">
				<div className="flex flex-col justify-center">
					<h1 className="text-balance text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[52px] md:text-[60px]">
						{t("hero_title_a")}
						<span className="text-[var(--tastik-primary)]">
							{t("hero_title_b")}
						</span>
					</h1>
					<p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground">
						{t("hero_lead")}
					</p>
					<div className="mt-7 flex flex-wrap items-center gap-3">
						<a
							href={APP_STORE}
							target="_blank"
							rel="noreferrer"
							className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-5 text-[14.5px] font-semibold text-background transition-transform hover:-translate-y-0.5"
						>
							{t("hero_cta_appstore")}
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</a>
						<Link
							href="/tastik/privacy"
							className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-5 text-[14.5px] font-semibold transition-colors hover:bg-muted"
						>
							{t("hero_cta_privacy")}
						</Link>
					</div>
					<div className="mt-6 flex flex-wrap items-center gap-4 text-[12.5px] text-muted-foreground">
						<span className="inline-flex items-center gap-1.5">
							<Lock className="h-3.5 w-3.5" /> {t("hero_chip_no_account")}
						</span>
						<span className="inline-flex items-center gap-1.5">
							<Cloud className="h-3.5 w-3.5" /> {t("hero_chip_icloud")}
						</span>
						<span className="inline-flex items-center gap-1.5">
							<Shield className="h-3.5 w-3.5" /> {t("hero_chip_no_ads")}
						</span>
					</div>
				</div>

				<div className="relative flex items-center justify-center">
					<div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
						<div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--tastik-primary)]/20" />
					</div>
					<PhoneFrame>
						<GroceriesMockup />
					</PhoneFrame>
					<div className="absolute -left-4 bottom-8 hidden w-[220px] rotate-[-4deg] sm:block md:-left-6">
						<div className="rounded-2xl bg-[var(--tastik-primary)] p-3 text-white shadow-xl">
							<div className="text-[10.5px] font-semibold uppercase tracking-wider opacity-80">
								{t("hero_card_bills_title")}
							</div>
							<div className="mt-1 text-[22px] font-bold tracking-tight">
								{t("hero_card_bills_amount")}
							</div>
							<div className="text-[10.5px] opacity-80">
								{t("hero_card_bills_sub")}
							</div>
							<div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
								<div className="h-full w-3/5 rounded-full bg-white/80" />
							</div>
						</div>
					</div>
					<div className="absolute -right-2 top-10 hidden w-[210px] rotate-[5deg] md:block">
						<div className="rounded-2xl bg-card p-3 shadow-xl ring-1 ring-border">
							<div className="flex items-center gap-2">
								<Sparkles className="h-3.5 w-3.5 text-[var(--tastik-primary)]" />
								<div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">
									{t("hero_card_smart_title")}
								</div>
							</div>
							<p className="mt-1.5 text-[12px] leading-snug text-foreground">
								{t("hero_card_smart_input")}
							</p>
							<div className="mt-2 flex flex-wrap gap-1">
								{(t.raw("hero_card_smart_tags") as string[]).map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-[var(--tastik-primary-soft)] px-2 py-0.5 text-[10px] font-medium text-[var(--tastik-primary-deep)]"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function TrustStrip() {
	const t = useTranslations("TastikLanding");
	const items = [
		{ icon: Lock, label: t("trust_no_account") },
		{ icon: Shield, label: t("trust_no_ads") },
		{ icon: Cloud, label: t("trust_icloud") },
		{ icon: Zap, label: t("trust_iphone") },
	];
	return (
		<section className="border-y border-border/60 bg-muted/30">
			<div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-6 md:grid-cols-4">
				{items.map((it) => (
					<div
						key={it.label}
						className="flex items-center gap-2.5 text-[13px] text-muted-foreground"
					>
						<it.icon className="h-4 w-4 text-[var(--tastik-primary)]" />
						<span className="font-medium text-foreground">{it.label}</span>
					</div>
				))}
			</div>
		</section>
	);
}

function ListShapes() {
	const t = useTranslations("TastikLanding");
	const shapes = [
		{
			icon: ListChecks,
			color: "var(--chart-1)",
			name: t("shape_simple"),
			desc: t("shape_simple_desc"),
			mock: <SimpleMockup />,
		},
		{
			icon: SquareStack,
			color: "var(--chart-2)",
			name: t("shape_stepper"),
			desc: t("shape_stepper_desc"),
			mock: <GroceriesMockup />,
		},
		{
			icon: Calculator,
			color: "var(--chart-3)",
			name: t("shape_calc"),
			desc: t("shape_calc_desc"),
			mock: <CalculatorMockup />,
		},
		{
			icon: KanbanSquare,
			color: "var(--chart-4)",
			name: t("shape_kanban"),
			desc: t("shape_kanban_desc"),
			mock: <KanbanMockup />,
		},
		{
			icon: Layers,
			color: "var(--chart-5)",
			name: t("shape_multi"),
			desc: t("shape_multi_desc"),
			mock: <MultiMockup />,
		},
	];
	return (
		<section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
			<SectionEyebrow>{t("shapes_eyebrow")}</SectionEyebrow>
			<SectionTitle>{t("shapes_title")}</SectionTitle>
			<SectionLead>{t("shapes_lead")}</SectionLead>

			<div className="mt-12 grid gap-4 md:grid-cols-3">
				{shapes.map((s, i) => (
					<div
						key={s.name}
						className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm transition-transform hover:-translate-y-1 ${
							i === 3 ? "md:col-span-2" : ""
						}`}
					>
						<div className="flex items-center gap-2">
							<div
								className="flex h-8 w-8 items-center justify-center rounded-lg"
								style={{
									backgroundColor: `color-mix(in oklch, ${s.color} 14%, transparent)`,
									color: s.color,
								}}
							>
								<s.icon className="h-4 w-4" />
							</div>
							<h3 className="text-[17px] font-semibold tracking-tight">
								{s.name}
							</h3>
						</div>
						<p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
							{s.desc}
						</p>
						<div className="mt-5 -mb-16 origin-top scale-[0.78]">
							<PhoneFrame>{s.mock}</PhoneFrame>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function SmartAdd() {
	const t = useTranslations("TastikLanding");
	const labels = t.raw("smart_items") as string[];
	const kinds: ("task" | "note" | "pack")[] = [
		"task",
		"note",
		"pack",
		"pack",
		"pack",
		"task",
		"task",
	];
	const items = labels.map((label, i) => ({
		label,
		kind: kinds[i],
		total: i === 5 ? t("smart_budget_total") : undefined,
	}));
	return (
		<section className="border-y border-border/60 bg-muted/30">
			<div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
				<div>
					<SectionEyebrow>
						<Sparkles className="mr-1 inline h-3 w-3" /> {t("smart_eyebrow")}
					</SectionEyebrow>
					<SectionTitle>{t("smart_title")}</SectionTitle>
					<p className="mt-4 text-[16.5px] leading-relaxed text-muted-foreground">
						{t("smart_lead")}
					</p>
					<ul className="mt-6 space-y-2.5 text-[14.5px]">
						{[t("smart_b1"), t("smart_b2"), t("smart_b3"), t("smart_b4")].map(
							(line) => (
								<li key={line} className="flex items-start gap-2.5">
									<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--tastik-primary-soft)] text-[var(--tastik-primary-deep)]">
										<Check className="h-3 w-3" />
									</span>
									<span>{line}</span>
								</li>
							),
						)}
					</ul>
				</div>
				<div className="relative">
					<div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
						<div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
							{t("smart_you_typed")}
						</div>
						<div className="mt-2 rounded-2xl bg-muted p-4 text-[14px] leading-relaxed">
							{t("smart_input")}
						</div>
						<div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-[var(--tastik-primary-deep)]">
							{t("smart_result_label")}
						</div>
						<div className="mt-2 space-y-1.5">
							{items.map((it) => (
								<div
									key={it.label}
									className="flex items-center gap-2 rounded-lg bg-background px-3 py-2 ring-1 ring-border"
								>
									{it.total ? (
										<span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">
											{t("smart_total_label")}
										</span>
									) : it.kind === "note" ? (
										<span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
											{t("smart_note_label")}
										</span>
									) : (
										<div className="h-4 w-4 rounded-full border-2 border-border" />
									)}
									<span className="flex-1 text-[13.5px]">{it.label}</span>
									{it.total && (
										<span className="text-[13px] font-semibold text-foreground">
											{it.total}
										</span>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function PrivacyCard() {
	const t = useTranslations("TastikLanding");
	const chips = [
		t("privacy_chip_no_account"),
		t("privacy_chip_no_tracking"),
		t("privacy_chip_no_ads"),
		t("privacy_chip_no_selling"),
		t("privacy_chip_local"),
		t("privacy_chip_icloud"),
	];
	return (
		<section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
			<div className="grid gap-12 md:grid-cols-2 md:items-center">
				<div className="order-2 md:order-1">
					<div className="relative overflow-hidden rounded-3xl border border-border bg-[var(--tastik-primary)] p-8 text-white shadow-sm">
						<Shield className="h-10 w-10 opacity-80" />
						<div className="mt-6 grid grid-cols-2 gap-3 text-[13px]">
							{chips.map((label) => (
								<div
									key={label}
									className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 backdrop-blur"
								>
									<Check className="h-3.5 w-3.5" /> {label}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="order-1 md:order-2">
					<SectionEyebrow>
						<Lock className="mr-1 inline h-3 w-3" /> {t("privacy_eyebrow")}
					</SectionEyebrow>
					<SectionTitle>{t("privacy_title")}</SectionTitle>
					<p className="mt-4 text-[16.5px] leading-relaxed text-muted-foreground">
						{t("privacy_lead")}
					</p>
					<Link
						href="/tastik/privacy"
						className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--tastik-primary)] hover:underline"
					>
						{t("privacy_read_more")} <ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}

function Templates() {
	const t = useTranslations("TastikLanding");
	const templates = t.raw("tpl_items") as string[];
	return (
		<section className="border-y border-border/60 bg-muted/30">
			<div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
				<SectionEyebrow>{t("tpl_eyebrow")}</SectionEyebrow>
				<SectionTitle>{t("tpl_title")}</SectionTitle>
				<SectionLead>{t("tpl_lead")}</SectionLead>
				<div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
					{templates.map((label) => (
						<div
							key={label}
							className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm transition-colors hover:bg-[var(--tastik-primary-soft)]"
						>
							<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--tastik-primary-soft)] text-[var(--tastik-primary-deep)]">
								<ListChecks className="h-4 w-4" />
							</div>
							<span className="text-[13.5px] font-medium">{label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function WidgetsShortcuts() {
	const t = useTranslations("TastikLanding");
	return (
		<section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
			<div className="grid gap-12 md:grid-cols-2 md:items-center">
				<div>
					<SectionEyebrow>
						<AppWindow className="mr-1 inline h-3 w-3" /> {t("widgets_eyebrow")}
					</SectionEyebrow>
					<SectionTitle>{t("widgets_title")}</SectionTitle>
					<p className="mt-4 text-[16.5px] leading-relaxed text-muted-foreground">
						{t("widgets_lead")}
					</p>
					<div className="mt-6 grid grid-cols-2 gap-3 text-[13.5px]">
						{[
							{ i: Zap, label: t("widgets_b1") },
							{ i: AppWindow, label: t("widgets_b2") },
							{ i: KanbanSquare, label: t("widgets_b3") },
							{ i: SquareStack, label: t("widgets_b4") },
						].map((x) => (
							<div
								key={x.label}
								className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-3"
							>
								<x.i className="mt-0.5 h-4 w-4 text-[var(--tastik-primary)]" />
								<span>{x.label}</span>
							</div>
						))}
					</div>
				</div>
				<div className="relative">
					<div className="rounded-3xl border border-border bg-gradient-to-b from-background to-[var(--tastik-primary-soft)]/40 p-6 shadow-sm">
						<div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
							{t("widgets_home_screen")}
						</div>
						<div className="mt-3">
							<WidgetPreview />
						</div>
						<div className="mt-4 grid grid-cols-3 gap-3">
							<SmallWidget
								label={t("widget_pack_title")}
								sub={t("widget_pack_sub")}
							/>
							<SmallWidget
								label={t("widget_board_title")}
								sub={t("widget_board_sub")}
							/>
							<SmallWidget
								label={t("widget_gift_title")}
								sub={t("widget_gift_sub")}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function SmallWidget({ label, sub }: { label: string; sub: string }) {
	return (
		<div className="rounded-xl bg-card p-3 shadow-sm ring-1 ring-border">
			<div className="text-[9.5px] font-semibold uppercase tracking-wider text-muted-foreground">
				{label}
			</div>
			<div className="mt-2 flex items-center gap-1.5">
				<div className="h-2.5 w-2.5 rounded-full border-2 border-border" />
				<div className="h-1.5 flex-1 rounded-full bg-muted" />
			</div>
			<div className="mt-1 flex items-center gap-1.5">
				<div className="h-2.5 w-2.5 rounded-full bg-[var(--tastik-primary)]" />
				<div className="h-1.5 flex-1 rounded-full bg-muted" />
			</div>
			<div className="mt-2 text-[10px] text-muted-foreground">{sub}</div>
		</div>
	);
}

function SeriousDetails() {
	const t = useTranslations("TastikLanding");
	const items = [
		{ i: Tag, label: t("d_tags") },
		{ i: FileText, label: t("d_notes") },
		{ i: Search, label: t("d_search") },
		{ i: Check, label: t("d_hide") },
		{ i: ListChecks, label: t("d_sort") },
		{ i: SquareStack, label: t("d_bulk") },
		{ i: Download, label: t("d_md") },
		{ i: Share2, label: t("d_share") },
		{ i: Archive, label: t("d_archive") },
		{ i: Palette, label: t("d_custom") },
	];
	return (
		<section className="border-t border-border/60 bg-muted/30">
			<div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
				<SectionEyebrow>{t("details_eyebrow")}</SectionEyebrow>
				<SectionTitle>{t("details_title")}</SectionTitle>
				<div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
					{items.map((it) => (
						<div
							key={it.label}
							className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm"
						>
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--tastik-primary-soft)] text-[var(--tastik-primary-deep)]">
								<it.i className="h-4 w-4" />
							</div>
							<span className="text-[13.5px] font-medium">{it.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Pro() {
	const t = useTranslations("TastikLanding");
	const pro = [
		t("pro_pro_1"),
		t("pro_pro_2"),
		t("pro_pro_3"),
		t("pro_pro_4"),
		t("pro_pro_5"),
		t("pro_pro_6"),
		t("pro_pro_7"),
	];
	const free = [
		t("pro_free_1"),
		t("pro_free_2"),
		t("pro_free_3"),
		t("pro_free_4"),
	];
	return (
		<section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
			<SectionEyebrow>{t("pro_eyebrow")}</SectionEyebrow>
			<SectionTitle>{t("pro_title")}</SectionTitle>
			<SectionLead>{t("pro_lead")}</SectionLead>

			<div className="mt-10 grid gap-5 md:grid-cols-2">
				<div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
					<div className="flex items-center justify-between">
						<h3 className="text-[20px] font-semibold tracking-tight">
							{t("pro_free_heading")}
						</h3>
						<span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
							{t("pro_free_tag")}
						</span>
					</div>
					<p className="mt-2 text-[13.5px] text-muted-foreground">
						{t("pro_free_desc")}
					</p>
					<ul className="mt-6 space-y-2.5">
						{free.map((line) => (
							<li key={line} className="flex items-start gap-2.5 text-[14px]">
								<Check className="mt-0.5 h-4 w-4 text-muted-foreground" />{" "}
								{line}
							</li>
						))}
					</ul>
				</div>
				<div className="relative overflow-hidden rounded-3xl border border-[var(--tastik-primary)]/40 bg-[var(--tastik-primary)] p-7 text-white shadow-xl">
					<div className="flex items-center justify-between">
						<h3 className="text-[20px] font-semibold tracking-tight">
							{t("pro_pro_heading")}
						</h3>
						<span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur">
							{t("pro_pro_tag")}
						</span>
					</div>
					<p className="mt-2 text-[13.5px] opacity-90">{t("pro_pro_desc")}</p>
					<ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
						{pro.map((line) => (
							<li key={line} className="flex items-start gap-2.5 text-[14px]">
								<Check className="mt-0.5 h-4 w-4" /> {line}
							</li>
						))}
					</ul>
					<a
						href={APP_STORE}
						target="_blank"
						rel="noreferrer"
						className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-background px-5 text-[14px] font-semibold text-foreground transition-transform hover:-translate-y-0.5"
					>
						{t("hero_cta_appstore")} <ArrowRight className="h-4 w-4" />
					</a>
				</div>
			</div>
		</section>
	);
}

function FinalCTA() {
	const t = useTranslations("TastikLanding");
	return (
		<section className="border-t border-border/60 bg-muted/30">
			<div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
				<h2 className="text-balance text-[34px] font-bold tracking-tight md:text-[44px]">
					{t("final_title")}
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-pretty text-[16px] text-muted-foreground">
					{t("final_lead")}
				</p>
				<div className="mt-7 flex flex-wrap justify-center gap-3">
					<a
						href={APP_STORE}
						target="_blank"
						rel="noreferrer"
						className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-[14.5px] font-semibold text-background transition-transform hover:-translate-y-0.5"
					>
						{t("hero_cta_appstore")} <ArrowRight className="h-4 w-4" />
					</a>
					<Link
						href="/tastik/support"
						className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-5 text-[14.5px] font-semibold hover:bg-muted"
					>
						{t("final_support")}
					</Link>
				</div>
			</div>
		</section>
	);
}

function SectionEyebrow({ children }: { children: ReactNode }) {
	return (
		<div className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[var(--tastik-primary)]">
			{children}
		</div>
	);
}
function SectionTitle({ children }: { children: ReactNode }) {
	return (
		<h2 className="mt-3 text-balance text-[32px] font-bold leading-[1.1] tracking-tight md:text-[44px]">
			{children}
		</h2>
	);
}
function SectionLead({ children }: { children: ReactNode }) {
	return (
		<p className="mt-4 max-w-2xl text-pretty text-[16.5px] leading-relaxed text-muted-foreground">
			{children}
		</p>
	);
}
