import { ArrowRightIcon, SendIcon } from "lucide-react";
import Image from "next/image";

const HeroDupe = () => {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
            VAŠE IDEJE POSTAJU STVARNOST
          </h1>
          <div className="flex justify-center">
            <a
              href="/services"
              className="relative inline-flex items-center gap-2 rounded-lg border-0 bg-purple-500 px-6 py-2 text-lg text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none"
            >
              Započnite
              <ArrowRightIcon className="transition-transform duration-300 ease-in-out group-hover:translate-y-[-3px]" />
            </a>
            <a
              href="mailto:trycaze@proton.me"
              className="group relative ml-4 inline-flex items-center gap-2 rounded-lg border-0 bg-gray-800 px-6 py-2 text-lg text-gray-400 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              Javite nam se
              <SendIcon className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </a>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            className="rounded object-cover object-center"
            alt="hero"
            src="/hero.png"
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroDupe;
