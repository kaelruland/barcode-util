export const defaultOptions: Options = {
	units: 'in',
	pageWidth: 8.5,
	pageHeight: 11,
	pageMarginTop: 0.5,
	pageMarginBottom: 0.5,
	pageMarginLeft: 0.5,
	pageMarginRight: 0.5,
	gridColumns: 4,
	gridRows: 5,
	transpose: false,
	cellMarginTop: 0.125,
	cellMarginRight: 0.125,
	cellMarginBottom: 0.125,
	cellMarginLeft: 0.125,
	cellJustifyContent: 'space-around',
	bcid: 'code128',
	barcodeValueIndex: 0,
	barcodeWidthPercent: 100,
	barcodeHeightPercent: 50,
	barcodePreserveAspectRatio: undefined,
	header: {
		show: false,
		format: '',
		style: {
			fontFamily: 'Arial',
			fontSize: '12pt'
		}
	},
	footer: {
		show: false,
		format: '',
		style: {
			fontFamily: 'Arial',
			fontSize: '12pt'
		}
	}
};

export const bcidOptions = [
	{ value: 'code128', label: 'Code 128', description: 'General-purpose linear barcode' },
	{ value: 'code39', label: 'Code 39', description: 'General-purpose linear barcode' },
	{ value: 'qrcode', label: 'QR Code' }
];

export const fontOptions = ['Arial', 'Times New Roman', 'Century Gothic', 'Consolas', 'Courier', 'monospace'];
