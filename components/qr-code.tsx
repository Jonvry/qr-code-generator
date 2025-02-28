"use client";

import { DownloadIcon } from "@/components/svg-icon";
import { useOptions } from "./use-options";
import { Form } from "./form";

export function QRCode() {
	const { ref, inputRef, options, fileExt, handleChange, handleFileChange, onDownloadClick, onExtensionChange } =
		useOptions();

	return (
		<section className="md:grid md:grid-cols-2 gap-12 mt-10">
			<Form inputRef={inputRef} options={options} handleChange={handleChange} handleFileChange={handleFileChange} />
			<div className="grid gap-4 place-content-center mt-8 md:mt-0">
				<div className="size-full overflow-hidden">
					<div ref={ref} />
				</div>

				<div className="flex gap-4 mx-auto">
					<button
						type="button"
						onClick={onDownloadClick}
						className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer outline-none focus:ring focus:ring-blue-500"
					>
						<DownloadIcon /> Download
					</button>
					<label htmlFor="font-medium" className="sr-only" />
					<select
						onChange={onExtensionChange}
						value={fileExt}
						className="px-3 py-2 border border-gray-300 rounded-md font-medium text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					>
						<option value="svg">SVG</option>
						<option value="png">PNG</option>
						<option value="jpeg">JPEG</option>
						<option value="webp">WEBP</option>
					</select>
				</div>
			</div>
		</section>
	);
}

// dotsOptions: {
// 	color: "red",
// 	type: "rounded",
// },
// cornersSquareOptions: {
// 	color: "blue",
// 	type: "extra-rounded",
// },
// cornersDotOptions: {
// 	color: "green",
// },

// dotsOptions: {
// 	type: "dots",
// 	color: "#000000",
// 	gradient: {
// 		type: "radial",
// 		colorStops: [
// 			{ offset: 0, color: "#000000" },
// 			{ offset: 100, color: "#000000" },
// 		],
// 	},
// 	roundSize: true,
// },
