import {
  BrushIcon,
  CircleCheckBigIcon,
  ImageUpscaleIcon,
  MonitorCogIcon,
  MousePointerClickIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="flex w-full flex-wrap">
          <div className="md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-800"></div>
              </div>
              <div className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <MousePointerClickIcon />
              </div>
              <div className="grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-white">
                  KORAK 1
                </h2>
                <h3 className="subtitle-font mb-1 text-xs font-light tracking-wider text-gray-300">
                  Odabir modela
                </h3>
                <p className="leading-relaxed">
                  Možete odabrati jedan od postojećih modela ili nam poslati
                  svoj dizajn. Ukoliko nemate dizajn, pomoći će mo vam da ga
                  kreirate. Gotove dizajne možete pronaći{" "}
                  <Link className="underline" href="/guide">
                    ovdje.
                  </Link>
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-800"></div>
              </div>
              <div className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <ImageUpscaleIcon />
              </div>
              <div className="grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-white">
                  KORAK 2
                </h2>
                <h3 className="subtitle-font mb-1 text-xs font-light tracking-wider text-gray-300">
                  Prilagodba i optimizacija
                </h3>
                <p className="leading-relaxed">
                  Nakon odabira modela, prilagođavamo ga prema vašim željama i
                  potrebama. Ukoliko je potrebno, optimiziramo dizajn kako bi
                  bio prikladan za izradu.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-800"></div>
              </div>
              <div className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <MonitorCogIcon />
              </div>
              <div className="grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-white">
                  KORAK 3
                </h2>
                <h3 className="subtitle-font mb-1 text-xs font-light tracking-wider text-gray-300">
                  Izrada
                </h3>
                <p className="leading-relaxed">
                  Nakon prilagodbe i optimizacije, pristupamo izradi vašeg
                  proizvoda. Koristimo najkvalitetnije materijale i tehnologije
                  kako bi vaš proizvod bio vrhunske kvalitete.
                </p>
              </div>
            </div>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                <div className="pointer-events-none h-full w-1 bg-gray-800"></div>
              </div>
              <div className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <BrushIcon />
              </div>
              <div className="grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-white">
                  KORAK 4
                </h2>
                <h3 className="subtitle-font mb-1 text-xs font-light tracking-wider text-gray-300">
                  Obrada i dorada
                </h3>
                <p className="leading-relaxed">
                  Nakon izrade proizvoda, pristupamo obradi i doradi. Ukoliko je
                  potrebno, proizvod se dodatno obrađuje kako bi bio savršen.
                </p>
              </div>
            </div>
            <div className="relative flex">
              <div className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                <CircleCheckBigIcon />
              </div>
              <div className="grow pl-4">
                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-white">
                  ZAVRŠENI PRODUKT
                </h2>
                <h3 className="subtitle-font mb-1 text-xs font-light tracking-wider text-gray-300">
                  Dostava
                </h3>
                <p className="leading-relaxed">
                  Nakon obrade i dorade, proizvod je spreman za dostavu ili ga
                  možete preuzeti osobno.
                </p>
              </div>
            </div>
          </div>
          <Image
            className="mt-12 rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-3/5"
            src="/posters/hexshelf.png"
            alt="step"
            width={1200}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
