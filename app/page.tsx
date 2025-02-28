import { QRCode } from "@/components/qr-code";

export default function Home() {
	return (
		<main className="md:grid md:place-items-center md:min-h-dvh md:px-6 xl:px-0 bg-zinc-100">
			<div className="w-full max-w-5xl mx-auto bg-white md:shadow-lg md:rounded-2xl md:border md:border-gray-300 px-4 py-12 md:px-12">
				<header className="text-center">
					<h1 className="text-3xl md:text-4xl font-bold text-zinc-800">QR Code Generator</h1>
					<p className="text-base font-medium">Generate QR codes</p>
				</header>
				<QRCode />
			</div>
		</main>
	);
}
