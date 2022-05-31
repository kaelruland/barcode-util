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
	{ value: 'qrcode', label: 'QR Code' },
	{ value: 'azteccode', label: 'Aztec Code' },
	{ value: 'code39ext', label: 'Code 39 Extended' },
	{ value: 'datamatrix', label: 'Datamatrix' }
].sort((a, b) => (a.label > b.label ? 1 : -1));

export const fontOptions = ['Arial', 'Times New Roman', 'Century Gothic', 'Consolas', 'Courier'];

export const sampleText = `product ID	description	slogan
4336250	Cranberries - Fresh	drive extensible metrics
9478079	Bagelers - Cinn / Brown	synthesize real-time markets
9150833	Pasta - Canelloni, Single Serve	expedite end-to-end applications
4555690	Buffalo - Short Rib Fresh	implement sexy e-markets
1735896	Melon - Watermelon Yellow	reinvent value-added solutions
5560556	Cheese - Cheddar, Medium	facilitate global applications
7216728	Pectin	maximize leading-edge infrastructures
1130578	Sauce - Plum	target impactful niches
8042797	Bread - Kimel Stick Poly	mesh next-generation e-business
2579865	Worcestershire Sauce	optimize web-enabled architectures
7083481	Muffin - Carrot Individual Wrap	e-enable revolutionary ROI
3223197	Pasta - Lasagna Noodle, Frozen	brand seamless web-readiness
8825565	Lychee - Canned	aggregate dot-com e-business
3955800	Pickles - Gherkins	optimize transparent e-business
1239934	Onions - Green	synergize e-business content
8328641	Ice Cream - Fudge Bars	redefine bricks-and-clicks methodologies
8440704	Lamb Leg - Bone - In Nz	whiteboard 24/7 methodologies
6031463	The Pop Shoppe - Root Beer	enhance dynamic systems
9211095	Wine - Baron De Rothschild	synergize out-of-the-box technologies
6728160	Bar - Granola Trail Mix Fruit Nut	iterate clicks-and-mortar e-services
1056387	Longos - Cheese Tortellini	strategize 24/365 deliverables
7336145	7up Diet, 355 Ml	enhance leading-edge e-services`;
