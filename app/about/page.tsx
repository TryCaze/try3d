import { ChevronRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="my-10 text-gray-700 dark:text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h1 className="mb-4 text-5xl font-bold">
                Upoznajte svijet 3D Printanja
              </h1>
              <p className="mb-6 text-lg">
                Pomaknimo granice inovacija uz vrhunsku 3D print tehnologiju! Sa
                strašću za preciznost, pretvaramo ideje u stvarnost od prototipa
                do finalnih rješenja. Podržavamo obrazovanje kroz besplatne
                školske programe i tečajeve za početnike i napredne. Naučite
                dizajnirati, pripremiti i ispisati modele uz stručno vodstvo.
                Otkrijte snagu 3D printanja s nama!
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-md hover:bg-blue-700"
              >
                Javite nam se <ChevronRight className="ml-2" />
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                width={720}
                height={500}
                src="/lecture.jpg"
                alt="Conference"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tko smo mi?
            </h2>
            <p className="mb-4 font-light">
              Try3D je dio tvrtke Try, specijaliziran za inovativna rješenja u
              3D printanju. Bavimo se izradom visokokvalitetnih figurica,
              rezervnih dijelova, prototipova i prilagođenih proizvoda po
              narudžbi. Naša misija je učiniti 3D printanje dostupnim svima od
              hobista i dizajnera do industrijskih stručnjaka.
            </p>
            <p className="mb-4 font-medium">
              Osim same izrade, posvećeni smo edukaciji. Organiziramo besplatna
              predavanja i tečajeve gdje dijelimo znanje o 3D tehnologijama,
              materijalima i procesima. Bilo da ste početnik ili iskusni
              korisnik, pomažemo vam da iskoristite puni potencijal 3D
              printanja.
            </p>
            <p className="mb-4 font-medium">
              Pridružite nam se i otkrijte svijet beskonačnih mogućnosti koje
              nudi 3D print!
            </p>
            <a
              href="#"
              className="text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700 inline-flex items-center font-medium"
            >
              Saznajte više
              <svg
                className="ml-1 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Oživimo vaše ideje!
            </h2>
            <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Spremni za istraživanje mogućnosti 3D printanja? Bilo da imate
              projekt, trebate stručne savjete ili ste zainteresirani za
              suradnju, tu smo za vas. Kontaktirajte nas danas i otkrijte kako
              zajedno možemo stvoriti nešto nevjerojatno!
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-md hover:bg-blue-700"
              >
                Javite nam se odmah <span className="ml-2" /> 🚀
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                Saznajte više
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
