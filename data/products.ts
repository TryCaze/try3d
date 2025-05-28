// data/products.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  descriptioncard: string;
  image: string;
  category: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  slug?: string;
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "svjetlece-jaje",
    name: "Svjetleće jaje",
    price: 4.99,
    description:
      "Dekorativno svjetleće jaje koje pruža toplu i umirujuću atmosferu. Idealan ukras za večernji kutak, blagovaonicu ili kao unikatni poklon. 3D printano u mrežastom uzorku s prostorom za malu LED svijeću.",
    descriptioncard:
      "Dekorativno jaje koje svijetli! Idealno za stvaranje opuštene atmosfere.",
    image: "/images/egg.jpg",
    category: "Elektronika",
    seoTitle: "Svjetleće 3D Printano Jaje | Atmosferska LED Dekoracija",
    seoDescription:
      "Stvori opuštajući ambijent sa svjetlećim 3D printanim jajetom – savršen ukras za svaki dom.",
    keywords: [
      "3D print",
      "svjetleće jaje",
      "LED dekoracija",
      "dekorativno svjetlo",
      "unikatni poklon",
    ],
    slug: "svjetlece-jaje",
  },
  {
    id: "zecarica",
    name: "Zecarica",
    price: 9.99,
    description:
      "Slatka 3D printana zečica koja drži košaricu – idealna za Uskrs ili kao stalni dekor u dječjoj sobi. Košarica je savršena za čokoladna jaja, bombone ili male sitnice.",
    descriptioncard:
      "Preslatka dekorativna zečica s košaricom za slatkiše ili sitnice.",
    image: "/images/products/rabbit.jpg",
    category: "Dekoracija",
    seoTitle: "Zecarica – 3D Printana Uskrsna Dekoracija",
    seoDescription:
      "Dodaj čaroliju Uskrsu ili sobi s ovom 3D printanom zečicom s košaricom – idealna za slatkiše!",
    keywords: [
      "zecarica",
      "3D print",
      "uskrsna dekoracija",
      "košarica",
      "dječji ukras",
      "zečica",
    ],
    slug: "zecarica",
  },
  {
    id: "zglobni-morski-pas",
    name: "Zglobni Morski Pas",
    price: 4.99,
    description:
      "Zabavan i fleksibilan 3D printani morski pas koji se savija po zglobovima. Savršen za igru, antistres igračku ili kao poklon ljubiteljima morskih stvorenja.",
    descriptioncard:
      "Fleksibilni morski pas koji se savija i 'pliva'! Super za igru i opuštanje.",
    image: "/images/products/shark.jpg",
    category: "Igre",
    seoTitle: "Zglobni Morski Pas – 3D Printana Igračka",
    seoDescription:
      "Zabavi se sa zglobnim morskim psom – savitljiva i jedinstvena 3D printana igračka za sve uzraste.",
    keywords: [
      "morski pas",
      "zglobna igračka",
      "3D print",
      "fidget igračka",
      "flexi shark",
      "plastična životinja",
    ],
    slug: "zglobni-morski-pas",
  },
  {
    id: "flexi-rex",
    name: "Flexi-rex",
    price: 3.99,
    description:
      "Savitljivi T-Rex kojeg svi obožavaju! Flexi-rex je 3D printana dinamična igračka koja se kreće zahvaljujući spojevima duž cijelog tijela. Odličan kao igračka, ukras ili antistres gadget.",
    descriptioncard:
      "Savršeno savitljiv T-Rex! Igračka koja se miče i zabavlja.",
    image: "/images/products/flexi-rex.jpg",
    category: "Igre",
    seoTitle: "Flexi-rex – Savitljivi T-Rex 3D Igračka",
    seoDescription:
      "Upoznaj Flexi-rexa – 3D printanu, savitljivu i zabavnu dinosaura igračku koja očarava sve uzraste.",
    keywords: [
      "flexi-rex",
      "3D dinosaura",
      "savitljiva igračka",
      "T-Rex",
      "3D print",
      "antistres",
    ],
    slug: "flexi-rex",
  },
  {
    id: "slagajuci-avion",
    name: "Slagajući avion",
    price: 2.99,
    description:
      "Sklopi svoj vlastiti mlazni avion iz jednog komada! Ovaj 3D printani model dolazi na 'ravi' i sastavlja se bez ljepila ili alata – idealan za djecu i odrasle koji vole makete.",
    descriptioncard:
      "Jednostavno sastavi vlastiti mlazni avion! Zabava za sve generacije.",
    image: "/images/products/airplane.jpg",
    category: "Igre",
    seoTitle: "Slagajući Avion – 3D Printani Model Za Sastavljanje",
    seoDescription:
      "Sastavi svoj avion iz jednog printa – jednostavno, brzo i zabavno za sve ljubitelje maketa.",
    keywords: [
      "slagajući avion",
      "3D model",
      "avion za sastavljanje",
      "maketa",
      "printani avion",
      "DIY avion",
    ],
    slug: "slagajuci-avion",
  },
  {
    id: "balance-tetris",
    name: "Balance Tetris – 3D Printana Igra Složive Ravnoteže",
    price: 11.99,
    descriptioncard:
      "Zabavna 3D printana igra ravnoteže nadahnuta Tetrisom! Slaži oblike na nestabilnu bazu i testiraj svoju preciznost i strpljenje. Idealno za sve uzraste!",
    description: `Izazovi svoju spretnost i strateško razmišljanje s Balance Tetrisom – 3D printanom igrom koja donosi novu dimenziju klasičnom Tetrisu. Slaži jedinstvene oblike na balansiranu bazu i pazi da konstrukcija ostane stabilna dok raste sve više. Savršeno za obiteljske večeri, zabave ili kao originalan poklon, ova igra pruža sate zabave i ponovne igre.

    Set sadrži:
    - Bazu za balansiranje
    - Komplet dijelova inspiriranih Tetrisom
    - Dodatne kocke sa 6 i 8 strana za raznoliku igru

    Printano kvalitetnim PLA filamentom u živim bojama, Balance Tetris je izdržljiv i vizualno atraktivan. Odaberi boje po želji kako bi odgovarale tvom ukusu ili uređenju.

    Bilo da si ljubitelj mozgalica ili tražiš zabavnu aktivnost za prijatelje i obitelj, Balance Tetris nudi uzbuđenje i izazov u svakoj partiji.`,
    image: "/images/products/balance-tetris.jpg",
    category: "Igre",
    seoTitle:
      "Balance Tetris – 3D Printana Igra Složive Ravnoteže | [Ime tvoje trgovine]",
    seoDescription:
      "Otkrij Balance Tetris – 3D printanu igru slaganja koja testira tvoje vještine ravnoteže i strategije. Idealno za sve uzraste i prilike.",
    keywords: [
      "Balance Tetris",
      "3D printana igra",
      "igra slaganja",
      "obiteljska igra",
      "Tetris igra",
      "igra ravnoteže",
      "PLA set",
    ],
    slug: "balance-tetris",
  },
  {
    id: "drzaci-casa-za-kauc",
    name: "Držači Čaša za Kauč",
    price: 5.99,
    description: `Praktično i pametno rješenje za sve koji uživaju u ispijanju kave, sokova ili piva dok se odmaraju na kauču!
  
  Ovi 3D printani držači za čaše jednostavno se postavljaju između jastuka kauča i pružaju stabilno mjesto za čaše, limenke ili boce – bez prolijevanja.
  
  💡 Idealno za:
  - Dnevne boravke
  - Kauče s mekanim jastucima
  - Ljude koji ne žele stol
  
  Dostupno u različitim bojama i lako se čisti. Moderan, diskretan dizajn koji se uklapa u svaki prostor.`,
    descriptioncard:
      "Pametan držač čaša koji se postavlja između jastuka kauča. Stabilnost bez prolijevanja – savršeno za chillanje!",
    image: "/images/products/drzaci-casa-za-kauc.png",
    category: "Namještaj",
    seoTitle: "Držači Čaša za Kauč – 3D Printani Praktični Dodatak",
    seoDescription:
      "Stabilni i elegantni držači za čaše koji se jednostavno postavljaju između jastuka na kauču. Savršeno za piće bez prolijevanja.",
    keywords: [
      "držač čaša",
      "kauč dodatak",
      "3D print",
      "organizator za piće",
      "sofa držač",
      "držač limenke",
      "dnevni boravak",
      "namještaj",
    ],
    slug: "drzaci-casa-za-kauc",

    variants: [
      {
        id: "dvo-dijelni-twist-za-boce",
        name: "Dvo-dijelni Twist za Boce",
        price: 6.99,
        image: "/images/products/double.png",
      },
      {
        id: "dvo-dijelni-twist-za-mobitele",
        name: "Dvo-dijelni Twist za Mobitele",
        price: 6.99,
        image: "/images/products/remote.png",
      },
      {
        id: "jedno-strani-basic-za-boce",
        name: "Jedno-strani Basic za Boce",
        price: 5.99,
        image: "/images/products/drzaci-casa-za-kauc.png",
      },
      {
        id: "jedno-strani-basic-za-mobitele",
        name: "Jedno-strani Basic za Mobitele",
        price: 5.99,
        image: "/images/products/drzaci-casa-za-kauc.png",
      },
    ],
  },
];

export const categories = [
  { id: "Elektronika", name: "Elektronika" },
  { id: "Dekoracija", name: "Dekoracija" },
  { id: "Igre", name: "Igre" },
  { id: "Moda", name: "Moda" },
  { id: "Sport", name: "Sport" },
  { id: "Putovanja", name: "Putovanja" },
  { id: "Tehnologija", name: "Tehnologija" },
  { id: "Automobil", name: "Automobili" },
  { id: "Namještaj", name: "Namještaj" },
];
