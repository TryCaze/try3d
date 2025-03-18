import {
  ArrowRightIcon,
  BoxesIcon,
  GraduationCapIcon,
  PresentationIcon,
  SendIcon,
} from "lucide-react";

const Services = () => {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 text-center">
          <h1 className="title-font mb-4 text-3xl font-bold text-white sm:text-4xl">
            Naše usluge
          </h1>
          <p className="mx-auto text-lg leading-relaxed text-gray-400 text-opacity-80 lg:w-3/4 xl:w-2/4">
            Naše 3 glavne uloge u tehnologiji 3D printanja.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex h-1 w-16 rounded-full bg-purple-500"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:flex-nowrap">
          <div className="flex flex-col items-center p-6 text-center md:w-1/3">
            <a
              href="/services/commissions"
              className="group mb-5 inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
            >
              <BoxesIcon className="h-12 w-12 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
            </a>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-xl font-semibold text-white">
                Izrada po narudžbi
              </h2>
              <p className="text-lg leading-relaxed">
                Personalizirani 3D ispis – od ideje do stvarnosti.
              </p>
              <a
                href="/services/commissions"
                className="mt-3 inline-flex items-center text-blue-400"
              >
                Saznajte više
                <ArrowRightIcon className="ml-2 h-5 w-5 text-blue-400 transition-transform duration-300 hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Predavanja */}
          <div className="flex flex-col items-center p-6 text-center md:w-1/3">
            <a
              href="/services/lectures"
              className="group mb-5 inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
            >
              <PresentationIcon className="h-12 w-12 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
            </a>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-xl font-semibold text-white">
                Predavanja
              </h2>
              <p className="text-lg leading-relaxed">
                Inovativno obrazovanje uz 3D tehnologiju.
              </p>
              <a
                href="/services/lectures"
                className="mt-3 inline-flex items-center text-blue-400"
              >
                Saznajte više
                <ArrowRightIcon className="ml-2 h-5 w-5 text-blue-400 transition-transform duration-300 hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Tečajevi */}
          <div className="flex flex-col items-center p-6 text-center md:w-1/3">
            <a
              href="/services/courses"
              className="group mb-5 inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
            >
              <GraduationCapIcon className="h-12 w-12 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
            </a>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-xl font-semibold text-white">
                Tečajevi
              </h2>
              <p className="text-lg leading-relaxed">
                Naučite osnove i napredne tehnike 3D ispisa.
              </p>
              <a
                href="/services/courses"
                className="mt-3 inline-flex items-center text-blue-400"
              >
                Saznajte više
                <ArrowRightIcon className="ml-2 h-5 w-5 text-blue-400 transition-transform duration-300 hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="group relative mx-auto mt-16 flex items-center gap-3 rounded-lg border-0 bg-purple-500 px-10 py-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none">
          Imate pitanja?
          <SendIcon className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
        </button>
      </div>
    </section>
  );
};

export default Services;
