import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { AboutBio } from "@/components/about/about-bio";

// Mock next-intl
vi.mock("next-intl", () => ({
	useTranslations: () => (key: string) => mockTranslations[key] || key,
}));

// Mock Next.js Image component
vi.mock("next/image", () => ({
	__esModule: true,
	// biome-ignore lint/a11y/useAltText: <It is used as a mock>
	// biome-ignore lint/performance/noImgElement: <It is used as a mock>
	default: (props: any) => <img {...props} />,
}));

const mockTranslations: Record<string, string> = {
	"Navigation.about": "About Me",
	"About.intro": "Intro text",
	"About.education": "Education info",
	"About.itsMedTime": "ItsMedTime details",
	"About.tastik": "Tastik experience",
	"About.technology": "Tech stack",
};

describe("AboutBio", () => {
	afterEach(() => {
		vi.clearAllMocks();
		vi.clearAllTimers();
		vi.useRealTimers();
	});

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

	test("renders memoji image with correct attributes", () => {
		render(<AboutBio />);

		const memojiImages = screen.getAllByAltText("memoji");
		const memojiImage = memojiImages[0]; // Get the first one

		expect(memojiImage).toBeInTheDocument();
		expect(memojiImage).toHaveAttribute("src", "/memoji.png");
		expect(memojiImage).toHaveAttribute("width", "100");
		expect(memojiImage).toHaveAttribute("height", "100");
	});

	test("renders LinkedIn link with correct attributes", () => {
		render(<AboutBio />);

		const linkedinLinks = screen.getAllByRole("link", { name: /LinkedIn/i });
		const linkedinLink = linkedinLinks[0]; // Get the first one

		expect(linkedinLink).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/fabiofioritapontes/",
		);
		expect(linkedinLink).toHaveAttribute("target", "_blank");
		expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
	});

	test("renders LinkedIn link with outline styling", () => {
		render(<AboutBio />);

		const linkedinLinks = screen.getAllByRole("link", { name: /LinkedIn/i });
		const linkedinLink = linkedinLinks[0]; // Get the first one

		expect(linkedinLink).toBeInTheDocument();
		// Check for outline variant styling (the class might be different in the actual component)
		expect(linkedinLink).toHaveClass("border");
	});

	test("renders card structure correctly", () => {
		render(<AboutBio />);

		// Check that the card structure is rendered
		const aboutMeElements = screen.getAllByText("About Me");
		expect(aboutMeElements[0]).toBeInTheDocument();

		// The card should contain all the content sections
		const introTextElements = screen.getAllByText("Intro text");
		expect(introTextElements[0]).toBeInTheDocument();

		const educationElements = screen.getAllByText("Education info");
		expect(educationElements[0]).toBeInTheDocument();

		const itsMedTimeElements = screen.getAllByText("ItsMedTime details");
		expect(itsMedTimeElements[0]).toBeInTheDocument();

		const tastikElements = screen.getAllByText("Tastik experience");
		expect(tastikElements[0]).toBeInTheDocument();

		const techStackElements = screen.getAllByText("Tech stack");
		expect(techStackElements[0]).toBeInTheDocument();

		// Check that the LinkedIn link is present
		const linkedinLinks = screen.getAllByRole("link", { name: /LinkedIn/i });
		expect(linkedinLinks[0]).toBeInTheDocument();
	});
});
