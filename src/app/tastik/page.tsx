import type { Metadata } from "next";
import { TastikLanding } from "@/components/tastik-landing";

export default function TastikPage() {
	return <TastikLanding />;
}

export const metadata: Metadata = {
	title: "Tastik — Private, local-first lists for iPhone",
	description:
		"Tastik makes every list feel made for the job. Five list shapes, Smart Add, widgets, tags, and totals. No Tastik account required.",
};
