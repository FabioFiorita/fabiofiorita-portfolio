import { expect, test } from "@playwright/test";

test.describe("Homepage UI", () => {
	test("homepage has correct title", async ({ page }) => {
		await page.goto("/");
		await expect(page).toHaveTitle(/Fábio Fiorita/);
		await expect(page.getByTestId("home-page")).toBeVisible();
	});

	test("homepage displays hero section", async ({ page }) => {
		await page.goto("/");
		await expect(page.getByTestId("hero-section")).toBeVisible();
	});

	test("app cards are displayed on homepage", async ({ page }) => {
		await page.goto("/");
		await expect(page.getByTestId("app-card-itsmedtime")).toBeVisible();
		await expect(page.getByTestId("app-card-tastik")).toBeVisible();
	});

	test("development approach card is displayed", async ({ page }) => {
		await page.goto("/");
		await expect(page.getByTestId("development-approach-card")).toBeVisible();
	});
});

test.describe("Homepage Navigation", () => {
	test("about button navigates to about page", async ({ page }) => {
		await page.goto("/");
		await page.getByTestId("hero-about-link").click();
		await expect(page).toHaveURL(/\/about$/);
		await expect(page.getByTestId("about-page")).toBeVisible();
	});

	test("contact button navigates to contact page", async ({ page }) => {
		await page.goto("/");
		await page.getByTestId("hero-contact-link").click();
		await expect(page).toHaveURL(/\/contact$/);
		await expect(page.getByTestId("contact-page")).toBeVisible();
	});

	test("itsmedtime card 'see details' navigates to /itsmedtime", async ({
		page,
	}) => {
		await page.goto("/");
		await page.getByTestId("app-card-itsmedtime-see-details").click();
		await expect(page).toHaveURL("/itsmedtime");
		await expect(page.getByTestId("itsmedtime-page")).toBeVisible();
	});

	test("itsmedtime app store button redirects to App Store", async ({
		page,
	}) => {
		await page.goto("/");
		const [newPage] = await Promise.all([
			page.context().waitForEvent("page"),
			page.getByTestId("app-card-itsmedtime-appstore").click(),
		]);
		await expect(newPage).toHaveURL(/apps\.apple\.com/);
		await newPage.close();
	});

	test("tastik card 'see details' navigates to /tastik", async ({ page }) => {
		await page.goto("/");
		await page.getByTestId("app-card-tastik-see-details").click();
		await expect(page).toHaveURL("/tastik");
		await expect(page.getByTestId("tastik-page")).toBeVisible();
	});

	test("tastik app store button redirects to App Store", async ({ page }) => {
		await page.goto("/");
		const [newPage] = await Promise.all([
			page.context().waitForEvent("page"),
			page.getByTestId("app-card-tastik-appstore").click(),
		]);
		await expect(newPage).toHaveURL(/apps\.apple\.com/);
		await newPage.close();
	});
});
