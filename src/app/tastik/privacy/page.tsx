import { PrivacyPolicy } from "@/components/app-page/privacy-policy";

export default function PrivacyPage() {
	return (
		<main className="p-8">
			<div className="flex flex-col justify-center items-center mb-8 gap-8 w-full">
				<PrivacyPolicy appName="tastik" />
			</div>
		</main>
	);
}
