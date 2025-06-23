import { Home, Mail, Shield, Smartphone, Store, User } from "lucide-react";
import { useTranslations } from "next-intl";
import {
	Sidebar,
	SidebarContent,
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

export function AppSidebar() {
	const t = useTranslations();

	const portfolioData = {
		owner: {
			name: "Fábio Fiorita",
			title: t("Owner.title"),
		},
		navigation: [
			{
				title: t("Navigation.general"),
				items: [
					{
						title: t("Navigation.about"),
						url: "/about",
						icon: User,
					},
					{
						title: t("Navigation.contact"),
						url: "/contact",
						icon: Mail,
					},
				],
			},
		],
		apps: [
			{
				title: t("Apps.itsMedTime.title"),
				url: "/itsmedtime",
				icon: Smartphone,
				items: [
					{
						title: t("Apps.itsMedTime.title"),
						url: "/itsmedtime",
					},
					{
						title: t("Apps.appStore"),
						url: "/itsmedtime/app-store",
						icon: Store,
					},
					{
						title: t("Apps.privacyPolicy"),
						url: "/itsmedtime/privacy",
						icon: Shield,
					},
				],
			},
			{
				title: t("Apps.tastik.title"),
				url: "/tastik",
				icon: Smartphone,
				items: [
					{
						title: t("Apps.tastik.title"),
						url: "/tastik",
					},
					{
						title: t("Apps.appStore"),
						url: "/tastik/app-store",
						icon: Store,
					},
					{
						title: t("Apps.privacyPolicy"),
						url: "/tastik/privacy",
						icon: Shield,
					},
				],
			},
		],
	};

	return (
		<Sidebar>
			<SidebarHeader className="border-b border-sidebar-border">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="/" className="font-semibold">
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
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				{/* General Navigation */}
				{portfolioData.navigation.map((section) => (
					<SidebarGroup key={section.title}>
						<SidebarGroupLabel>{section.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{section.items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}

				{/* Apps */}
				{portfolioData.apps.map((app) => (
					<SidebarGroup key={app.title}>
						<SidebarGroupLabel>{app.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<a href={app.url}>
											<app.icon />
											<span>{app.title}</span>
										</a>
									</SidebarMenuButton>
									<SidebarMenuSub>
										{app.items.slice(1).map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton asChild>
													<a href={subItem.url}>
														{subItem.icon && <subItem.icon />}
														<span>{subItem.title}</span>
													</a>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
