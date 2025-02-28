import { Options } from "qr-code-styling";
import { NegativeIcon, PositiveIcon } from "@/components/svg-icon";

type FormProps = {
	inputRef: React.RefObject<HTMLInputElement | null>;
	options: Options;
	handleChange: (field: keyof Options, value: string | number) => void;
	handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Form({ inputRef, options, handleChange, handleFileChange }: FormProps) {
	return (
		<form className="grid gap-4">
			<label htmlFor="data" className="grid gap-1 font-medium">
				Text or URL
				<input
					type="text"
					id="data"
					value={options.data ?? ""}
					maxLength={400}
					onChange={(e) => handleChange("data", e.target.value)}
					placeholder="Enter a text or URL"
					className="px-3 py-1.5 rounded-lg outline-none ring ring-gray-300 focus:ring-2 focus:ring-blue-500"
				/>
			</label>

			<label htmlFor="image" className="grid gap-1 font-medium">
				Image
				<input
					type="file"
					id="files"
					onChange={handleFileChange}
					ref={inputRef}
					accept=".jpg, .jpeg, .png, .webp, .svg"
					hidden
				/>
				<button
					type="button"
					aria-label="Select an image file"
					onClick={() => inputRef.current?.click()}
					className="px-3 py-1.5 text-sm font-medium rounded-lg bg-zinc-100 w-fit outline-none ring ring-gray-300 focus:ring-2 focus:ring-blue-500"
				>
					Select Image
				</button>
			</label>

			{/* Width Input */}
			<div className="grid gap-2">
				<label htmlFor="width" className="font-medium">
					Width
				</label>
				<div className="flex items-center gap-4">
					<button
						type="button"
						aria-label="Decrease width"
						onClick={() => handleChange("width", (options.width ?? 90) - 10)}
						disabled={(options.width ?? 90) <= 90}
						className={`${
							(options.width ?? 90) <= 90 ? "opacity-60 cursor-default" : ""
						} focus:rounded-full outline-none focus:ring-2 focus:ring-blue-500`}
					>
						<NegativeIcon />
					</button>

					<input
						type="text"
						inputMode="numeric"
						min="90"
						max="300"
						id="width"
						value={options.width ?? 90}
						onChange={(e) => handleChange("width", Number(e.target.value))}
						placeholder="Enter a Width"
						className="text-center px-3 py-1.5 rounded-lg w-20 outline-none ring ring-gray-300 focus:ring-2 focus:ring-blue-500"
					/>

					<button
						type="button"
						aria-label="Increase width"
						onClick={() => handleChange("width", (options.width ?? 90) + 10)}
						disabled={(options.width ?? 90) >= 300}
						className={`${
							(options.width ?? 90) >= 300 ? "opacity-60 cursor-default" : ""
						} focus:rounded-full outline-none focus:ring-2 focus:ring-blue-500`}
					>
						<PositiveIcon />
					</button>
				</div>
			</div>

			{/* Height Input */}
			<div className="grid gap-2">
				<label htmlFor="height" className="font-medium">
					Height
				</label>
				<div className="flex items-center gap-4">
					<button
						type="button"
						aria-label="Decrease height"
						onClick={() => handleChange("height", (options.height ?? 90) - 10)}
						disabled={(options.height ?? 90) <= 90}
						className={`${
							(options.height ?? 90) <= 90 ? "opacity-60 cursor-default" : ""
						} focus:rounded-full outline-none focus:ring-2 focus:ring-blue-500`}
					>
						<NegativeIcon />
					</button>

					<input
						type="text"
						inputMode="numeric"
						min="90"
						max="300"
						id="height"
						value={options.height ?? 90}
						onChange={(e) => handleChange("height", Number(e.target.value))}
						placeholder="Enter a height"
						className="text-center px-3 py-1.5 rounded-lg w-20 outline-none ring ring-gray-300 focus:ring-2 focus:ring-blue-500"
					/>

					<button
						type="button"
						aria-label="Increase height"
						onClick={() => handleChange("height", (options.height ?? 90) + 10)}
						disabled={(options.height ?? 90) >= 300}
						className={`${
							(options.height ?? 90) >= 300 ? "opacity-60 cursor-default" : ""
						} focus:rounded-full outline-none focus:ring-2 focus:ring-blue-500`}
					>
						<PositiveIcon />
					</button>
				</div>
			</div>

			{/* Margin Input */}
			<div className="grid gap-2">
				<label htmlFor="margin" className="font-medium">
					Margin
				</label>
				<div className="flex items-center gap-4">
					<button
						type="button"
						aria-label="Decrease margin"
						onClick={() => handleChange("margin", (options.margin ?? 0) - 2)}
						disabled={(options.margin ?? 0) <= 0}
						className={`${
							(options.margin ?? 0) <= 0 ? "opacity-60 cursor-default" : ""
						} focus:rounded-full outline-none focus:ring-2 focus:ring-blue-500`}
					>
						<NegativeIcon />
					</button>

					<input
						type="text"
						inputMode="numeric"
						min="0"
						max="90"
						id="margin"
						value={options.margin ?? 0}
						onChange={(e) => handleChange("margin", Number(e.target.value))}
						placeholder="Enter margin"
						className="text-center px-3 py-1.5 rounded-lg w-20 outline-none ring ring-gray-300 focus:ring-2 focus:ring-blue-500"
					/>

					<button
						type="button"
						aria-label="Increase margin"
						onClick={() => handleChange("margin", (options.margin ?? 0) + 2)}
						disabled={(options.margin ?? 0) >= 90}
						className={`${
							(options.margin ?? 0) >= 90 ? "opacity-60 cursor-default" : ""
						} focus:rounded-full outline-none focus:ring-2 focus:ring-blue-500`}
					>
						<PositiveIcon />
					</button>
				</div>
			</div>

			{/* Background Color */}
			<label htmlFor="background-color" className="flex gap-2 font-medium w-fit">
				Background Color
				<input
					type="color"
					aria-label="Select background color"
					id="background-color"
					value={options.backgroundOptions?.color ?? "#ffffff"}
					onChange={(e) => handleChange("backgroundOptions", e.target.value)}
					className="outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</label>
		</form>
	);
}
