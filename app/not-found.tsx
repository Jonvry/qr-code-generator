import Link from "next/link";

export default function NotFound() {
	return (
		<main className="min-h-dvh grid place-content-center">
			<section className="grid gap-1">
				<h2 className="text-zinc-800 font-black text-4xl">Not Found</h2>
				<p className="text-sm">Could not find requested resource</p>
				<Link href="/" className="text-sm underline">
					<span className="flex items-center gap-1">
						<svg
							width={14}
							height={14}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
						Return Home
					</span>
				</Link>
			</section>
		</main>
	);
}
