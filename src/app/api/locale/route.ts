import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { locale } = await request.json();
	const cookieStore = await cookies();

	if (!["en", "pt"].includes(locale)) {
		return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
	}

	cookieStore.set("locale", locale, {
		path: "/",
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge: 60 * 60 * 24 * 365, // 1 year
	});

	return NextResponse.json({ success: true });
}
