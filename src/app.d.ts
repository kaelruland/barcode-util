/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {}

interface Item {
	id: number;
	values: Array<string>;
}

interface HeaderFooterOptions {
	show: boolean;
	format: string;
	style?: {
		fontFamily?: string;
		fontSize?: string;
	};
}

interface Options {
	units: string;
	pageWidth: number;
	pageHeight: number;
	pageMarginTop: number;
	pageMarginRight: number;
	pageMarginBottom: number;
	pageMarginLeft: number;
	gridColumns: number;
	gridRows: number;
	transpose: boolean;
	cellMarginTop: number;
	cellMarginRight: number;
	cellMarginBottom: number;
	cellMarginLeft: number;
	cellJustifyContent: string;
	bcid: string;
	barcodeValueIndex: number;
	barcodeWidthPercent: number;
	barcodeHeightPercent: number;
	barcodePreserveAspectRatio: 'width' | 'height' | undefined;
	header: HeaderFooterOptions;
	footer: HeaderFooterOptions;
}
