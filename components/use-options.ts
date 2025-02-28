import { useEffect, useRef, useState } from "react";
import QRCodeStyling, { FileExtension, Options } from "qr-code-styling";

export function useOptions() {
	const [fileExt, setFileExt] = useState<FileExtension>("svg");
	const [qrCode, setQrCode] = useState<QRCodeStyling>();
	const ref = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [options, setOptions] = useState<Options>({
		width: 300,
		height: 300,
		type: "svg",
		data: "https://example.com",
		image: "",
		margin: 10,
		qrOptions: {
			typeNumber: 0,
			mode: "Byte",
			errorCorrectionLevel: "Q",
		},
		imageOptions: {
			hideBackgroundDots: true,
			imageSize: 0.4,
			margin: 10,
			crossOrigin: "anonymous",
			saveAsBlob: true,
		},

		backgroundOptions: {
			color: "#ffffff",
		},
	});

	useEffect(() => {
		setQrCode(new QRCodeStyling(options));
	}, [options]);

	useEffect(() => {
		if (ref.current) {
			qrCode?.append(ref.current);
		}
	}, [qrCode, ref]);

	useEffect(() => {
		if (!qrCode) return;
		qrCode?.update(options);
	}, [qrCode, options]);

	function handleChange(field: keyof Options, value: string | number) {
		if (["width", "height", "margin"].includes(field)) {
			let numValue = Number(value);
			if (isNaN(numValue)) return;

			// Define min and max limits
			const minMaxLimits: Record<string, { min: number; max: number }> = {
				width: { min: 90, max: 300 },
				height: { min: 90, max: 300 },
				margin: { min: 0, max: 100 },
			};

			// Clamp the value within the min/max range
			numValue = Math.max(minMaxLimits[field].min, Math.min(numValue, minMaxLimits[field].max));

			setOptions((prev) => ({ ...prev, [field]: numValue }));
		} else if (field === "backgroundOptions") {
			setOptions((prev) => ({ ...prev, backgroundOptions: { color: String(value) } }));
		} else {
			setOptions((prev) => ({ ...prev, [field]: value }));
		}
	}

	function onExtensionChange(event: React.ChangeEvent<HTMLSelectElement>) {
		setFileExt(event.target.value as FileExtension);
	}

	function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			setOptions((prevOptions) => ({
				...prevOptions,
				image: reader.result as string,
			}));
		};
		reader.readAsDataURL(file);
	}

	function onDownloadClick() {
		if (!qrCode) return;
		qrCode.download({ extension: fileExt });
	}

	return { options, ref, inputRef, fileExt, handleChange, onExtensionChange, handleFileChange, onDownloadClick };
}
