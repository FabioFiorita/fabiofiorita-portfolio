import { ContactCard } from "@/components/contact-card";

export default function ContactPage() {
	return (
		<main className="p-8">
			<div className="flex flex-col justify-center items-center mb-8 gap-8 w-full">
				<ContactCard />
			</div>
		</main>
	);
}
