import { Home, ListCheck, Mail, Pill, Shield, Store, User } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

export function AppSidebar() {
	const t = useTranslations();
	const portfolioData = usePortfolioData();

	return (
		<Sidebar>
			<SidebarHeader className="border-b border-sidebar-border">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href="/" className="font-semibold">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Home className="size-4" />
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">
										{portfolioData.owner.name}
									</span>
									<span className="text-xs text-sidebar-foreground/70">
										{portfolioData.owner.title}
									</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				{portfolioData.navigation.map((section) => (
					<SidebarGroup key={section.title}>
						<SidebarGroupLabel>{section.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{section.items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<Link href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}

				{portfolioData.apps.map((app) => (
					<SidebarGroup key={app.key}>
						<SidebarGroupLabel>{t(`Apps.${app.key}.title`)}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link href={app.url}>
											<app.icon />
											<span>{t(`Apps.${app.key}.title`)}</span>
										</Link>
									</SidebarMenuButton>
									<SidebarMenuSub>
										{app.items.slice(1).map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												{subItem.isExternalLink ? (
													<SidebarMenuSubButton asChild>
														<a
															href={subItem.url}
															target="_blank"
															rel="noopener noreferrer"
														>
															{subItem.icon && <subItem.icon />}
															<span>{subItem.title}</span>
														</a>
													</SidebarMenuSubButton>
												) : (
													<SidebarMenuSubButton asChild>
														<Link href={subItem.url}>
															{subItem.icon && <subItem.icon />}
															<span className="flex">
																{subItem.title === "privacyPolicy"
																	? t("Apps.privacyPolicy")
																	: subItem.title}
															</span>
														</Link>
													</SidebarMenuSubButton>
												)}
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<ThemeToggle />
					</SidebarMenuItem>
					<SidebarMenuItem>
						<LanguageSwitcher />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
