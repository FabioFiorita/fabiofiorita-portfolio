import { getDictionary } from "./dictionaries";

export default async function Page({
	params,
}: {
	params: { locale: "en" | "pt" };
}) {
	const dict = await getDictionary(params.locale);
	return <h1>{dict.greeting.replace("{name}", "Fabio")}</h1>;
}

export async function generateStaticParams() {
	return [{ locale: "en" }, { locale: "pt" }];
}
