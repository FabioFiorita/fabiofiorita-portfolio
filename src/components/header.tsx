"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
	const t = useTranslations();
	const pathname = usePathname();
	const segments = pathname.split("/").filter(Boolean);

	return (
		<header className="flex h-12 shrink-0 items-center gap-2 px-4 border-b">
			<SidebarTrigger className="-ml-1" />
			<Separator orientation="vertical" className="max-h-4" />
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<Link href="/">{t("Navigation.portfolio")}</Link>
					</BreadcrumbItem>
					{segments.map((segment, idx) => {
						const href = `/${segments.slice(0, idx + 1).join("/")}`;
						const isLast = idx === segments.length - 1;
						const label = t(`Navigation.${segment}`);
						return (
							<div key={href} className="flex flex-row gap-2 items-center">
								<BreadcrumbSeparator className="h-full" />
								<BreadcrumbItem>
									{isLast ? (
										<BreadcrumbPage>{label}</BreadcrumbPage>
									) : (
										<Link href={href}>{label}</Link>
									)}
								</BreadcrumbItem>
							</div>
						);
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</header>
	);
}
