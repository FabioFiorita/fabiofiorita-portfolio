import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { AboutBio } from "@/components/about/about-bio";

// Mock next-intl
vi.mock("next-intl", () => ({
	useTranslations: () => (key: string) => mockTranslations[key] || key,
}));

const mockTranslations: Record<string, string> = {
	"Navigation.about": "About Me",
	"About.intro": "Intro text",
	"About.education": "Education info",
	"About.itsMedTime": "ItsMedTime details",
	"About.tastik": "Tastik experience",
	"About.technology": "Tech stack",
};

test("renders AboutBio with translated content and LinkedIn link", () => {
	render(<AboutBio />);

	expect(screen.getByText("About Me")).toBeInTheDocument();
	expect(screen.getByText("Intro text")).toBeInTheDocument();
	expect(screen.getByText("Education info")).toBeInTheDocument();
	expect(screen.getByText("ItsMedTime details")).toBeInTheDocument();
	expect(screen.getByText("Tastik experience")).toBeInTheDocument();
	expect(screen.getByText("Tech stack")).toBeInTheDocument();

	const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
	expect(linkedinLink).toHaveAttribute(
		"href",
		"https://www.linkedin.com/in/fabiofioritapontes/",
	);
});
