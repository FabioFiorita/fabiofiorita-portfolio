import { expect, test } from "@playwright/test";

test.describe("Portfolio Website", () => {
	test("homepage has correct title", async ({ page }) => {
		await page.goto("/");

		// Expect the page to have a title containing the portfolio name
		await expect(page).toHaveTitle(/Fábio Fiorita/);
		// Also check that the home page content is visible
		await expect(page.getByTestId("home-page")).toBeVisible();
	});

	test("homepage displays hero section", async ({ page }) => {
		await page.goto("/");

		// Check that the hero section is visible
		await expect(page.getByTestId("hero-section")).toBeVisible();
	});

	test("navigation to about page works", async ({ page }) => {
		await page.goto("/");

		// Click on the about link in the hero section
		await page.getByTestId("hero-about-link").click();

		// Expect to be on the about page
		await expect(page).toHaveURL(/.*\/about/);
		await expect(page.getByTestId("about-page")).toBeVisible();
	});

	test("navigation to contact page works", async ({ page }) => {
		await page.goto("/");

		// Click on the contact link in the hero section
		await page.getByTestId("hero-contact-link").click();

		// Expect to be on the contact page
		await expect(page).toHaveURL(/.*\/contact/);
		await expect(page.getByTestId("contact-page")).toBeVisible();
	});

	test("app cards are displayed on homepage", async ({ page }) => {
		await page.goto("/");

		// Check that app cards are present
		await expect(page.getByTestId("app-card-itsmedtime")).toBeVisible();
		await expect(page.getByTestId("app-card-tastik")).toBeVisible();
	});

	test("language switcher functionality", async ({ page }) => {
		await page.goto("/");

		// Check that language switcher is present
		await expect(page.getByTestId("language-switcher")).toBeVisible();
	});

	test("theme toggle functionality", async ({ page }) => {
		await page.goto("/");

		// Check that theme toggle is present
		await expect(page.getByTestId("theme-toggle")).toBeVisible();
	});

	test("itsmedtime app page loads correctly", async ({ page }) => {
		await page.goto("/itsmedtime");

		// Expect the itsmedtime page to load
		await expect(page).toHaveURL(/.*\/itsmedtime/);
		await expect(page.getByTestId("itsmedtime-page")).toBeVisible();
	});

	test("tastik app page loads correctly", async ({ page }) => {
		await page.goto("/tastik");

		// Expect the tastik page to load
		await expect(page).toHaveURL(/.*\/tastik/);
		await expect(page.getByTestId("tastik-page")).toBeVisible();
	});
});
