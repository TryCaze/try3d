import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

const Lectures = () => {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <Image width={240} height={240} src="lectures.svg" alt="lectures" />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Predavanja
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Podržavamo obrazovanje kroz besplatne školske programe koji uvode
            učenike u svijet 3D printanja. Praktične radionice omogućuju
            učenicima da razvijaju kreativnost i tehničke vještine, pripremajući
            ih za budućnost.
          </p>
          <div className="group relative inline-flex items-center justify-center gap-4">
            <div className="transitiona-all absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 opacity-60 blur-lg filter duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <a
              role="button"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/30"
              title="Više"
              href="#"
            >
              Javite nam se
              <ArrowBigRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lectures;
