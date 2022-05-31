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

export const sampleText = `ID	Common Name	Scientific Name	Country
553548	Cape fox	Vulpes chama	El Salvador
790228	Great kiskadee	Pitangus sulphuratus	Indonesia
490832	Roadrunner, greater	Geococcyx californianus	United States
355392	Ringtail, common	Pseudocheirus peregrinus	Philippines
909470	Blackish oystercatcher	Haematopus ater	Brazil
469111	Capybara	Hydrochoerus hydrochaeris	China
994591	Little cormorant	Phalacrocorax niger	Czech Republic
117725	Eurasian badger	Meles meles	Indonesia
575786	Squirrel, european red	Sciurus vulgaris	United States
536202	Cattle egret	Bubulcus ibis	Albania
378264	Grey lourie	Lorythaixoides concolor	Tunisia
199810	Boa, columbian rainbow	Epicrates cenchria maurus	Indonesia
604570	Magpie, black-backed	Gymnorhina tibicen	Madagascar
879359	Crab, red lava	Graspus graspus	China
884438	Lion, african	Panthera leo	Brazil
031200	Mourning collared dove	Streptopelia decipiens	China
193773	Tropical buckeye butterfly	Junonia genoveua	France
873702	Waxbill, violet-eared	Uraeginthus granatina	Greece
379477	Golden eagle	Aquila chrysaetos	Indonesia
459328	Lizard, giant girdled	Cordylus giganteus	Iran
722445	Hedgehog, south african	Erinaceus frontalis	Guam
740221	Red-necked wallaby	Macropus rufogriseus	China
108341	Oryx, fringe-eared	Oryx gazella callotis	Kazakhstan
809811	Boa, cook's tree	Corallus hortulanus cooki	Ukraine
735100	Brown capuchin	Cebus apella	Finland
483145	Olive baboon	Papio cynocephalus	Indonesia
960482	Red deer	Cervus elaphus	China
487132	Worm snake (unidentified)	Carphophis sp.	China
646564	Quoll, spotted-tailed	Dasyurus maculatus	Burundi
882851	Springbuck	Antidorcas marsupialis	Yemen
582922	Frogmouth, tawny	Podargus strigoides	Philippines
441710	Lemming, arctic	Dicrostonyx groenlandicus	China
063622	White-tailed jackrabbit	Lepus townsendii	Sweden
841089	Red-shouldered glossy starling	Lamprotornis nitens	Indonesia
685277	Laughing dove	Streptopelia senegalensis	China
631569	North American beaver	Castor canadensis	Sweden
193340	Chickadee, black-capped	Parus atricapillus	Argentina
492641	Squirrel, malabar	Ratufa indica	Palestinian Territory
639015	Ant (unidentified)	unavailable	Palestinian Territory
663354	Adouri (unidentified)	unavailable	Poland
898895	Owl, madagascar hawk	Ninox superciliaris	Indonesia
390585	Red-knobbed coot	Fulica cristata	France
382581	Genet, common	Genetta genetta	Czech Republic
361628	Eastern diamondback rattlesnake	Crotalus adamanteus	Azerbaijan
040205	Insect, stick	Leprocaulinus vipera	Colombia
164354	Gull, swallow-tail	Creagrus furcatus	South Africa
712765	South American puma	Felis concolor	Colombia
353023	Squirrel, smith's bush	Paraxerus cepapi	China
949050	Common eland	Taurotagus oryx	Russia
329703	Jungle kangaroo	Macropus agilis	Bulgaria
946895	Black-tailed prairie dog	Cynomys ludovicianus	Laos
082049	Common duiker	Sylvicapra grimma	Indonesia
747888	Malagasy ground boa	Acrantophis madagascariensis	United States
878477	Jungle cat	Felis chaus	Indonesia
131080	Dassie	Dendrohyrax brucel	Poland
795160	Blacksmith plover	Vanellus armatus	Portugal
596494	Snowy sheathbill	Chionis alba	Indonesia
805414	Eagle, african fish	Haliaetus vocifer	Indonesia
560743	Southern right whale	Eubalaena australis	Morocco
088038	Red-billed toucan	Ramphastos tucanus	Iran
878198	Pheasant, common	Phasianus colchicus	Indonesia
487103	Stork, white	Ciconia ciconia	China
674782	Wild boar	Sus scrofa	Poland
612989	Heron, green	Butorides striatus	Indonesia
152433	Stanley bustard	Neotis denhami	Norway
544298	Grey fox	Vulpes cinereoargenteus	Germany
082928	Bat, madagascar fruit	Pteropus rufus	Kazakhstan
064618	Euro wallaby	Macropus robustus	Philippines
927566	Superb starling	Lamprotornis superbus	Portugal
930829	Greater blue-eared starling	Lamprotornis chalybaeus	Russia
377352	Alpaca	Lama pacos	China
078512	Peccary, white-lipped	Tayassu pecari	South Africa
075352	Cat, native	Dasyurus viverrinus	Indonesia
504786	Partridge, coqui	Francolinus coqui	Sweden
021362	Rose-ringed parakeet	Psittacula krameri	Albania
514139	Iguana, common green	Iguana iguana	China
562274	Ground legaan	Varanus sp.	Bosnia and Herzegovina
444532	Flamingo, lesser	Phoeniconaias minor	China
859503	Glider, squirrel	Petaurus norfolcensis	Vietnam
406052	Cape raven	Corvus albicollis	Thailand
420246	Glossy starling (unidentified)	Lamprotornis sp.	Austria
327793	Peacock, indian	Pavo cristatus	Luxembourg
646544	Owl, snowy	Nyctea scandiaca	Russia
620314	Cobra (unidentified)	Naja sp.	Brazil
572583	Zorro, common	Dusicyon thous	Indonesia
253156	Bird, bare-faced go away	Lorythaixoides concolor	Japan
328232	Southern tamandua	Tamandua tetradactyla	Indonesia
134224	Waxbill, blue	Uraeginthus angolensis	Indonesia
967983	Starling, cape	Lamprotornis nitens	Portugal
409148	Bird (unidentified)	unavailable	Thailand
683533	Dusky rattlesnake	Crotalus triseriatus	China
592144	Cat, long-tailed spotted	Felis wiedi or Leopardus weidi	Peru
653374	Egyptian vulture	Neophron percnopterus	Afghanistan
870407	Javanese cormorant	Phalacrocorax niger	Netherlands
976592	Raven, white-necked	Corvus albicollis	China
849268	Stork, woolly-necked	Ciconia episcopus	Peru
972186	Fox, silver-backed	Vulpes chama	Czech Republic
890471	Stone sheep	Ovis dalli stonei	Croatia
173417	White-tailed deer	Odocoilenaus virginianus	Zambia
664638	Butterfly (unidentified)	unavailable	North Korea`;
