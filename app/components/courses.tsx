import { ArrowBigRight, SendIcon } from "lucide-react";
import Image from "next/image";

const Courses = () => {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
            Tečajevi
          </h2>
          <p className="mb-6 font-light text-gray-400 md:text-lg">
            Želite savladati 3D printanje? Naši tečajevi su prilagođeni
            početnicima i naprednim korisnicima. Naučit ćete kako dizajnirati,
            pripremiti i ispisati modele uz stručno vodstvo.
          </p>
          <a href="mailto:trycaze@proton.me" className="flex justify-center">
            <button className="group inline-flex items-center gap-3 rounded-lg border-0 bg-purple-500 px-10 py-3 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none">
              <span>Pošalji upit</span>
              <SendIcon className="size-6 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </button>
          </a>
        </div>
        <Image width={240} height={240} src="courses.svg" alt="courses" />
      </div>
    </section>
  );
};

export default Courses;
