import { BoxesIcon, CakeIcon, MailboxIcon } from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
          <Image
            alt="feature"
            className="h-full w-full object-cover object-center"
            src="/background.jpeg"
            width={460}
            height={500}
          />
        </div>
        <div className="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
              <a
                href="/services/commissions"
                className="group mb-5 inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <BoxesIcon className="h-12 w-12 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
              </a>
            </div>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-white">
                Kvalitetno printanje
              </h2>
              <p className="text-base leading-relaxed">-</p>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
              <a
                href="/services/commissions"
                className="group mb-5 inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <CakeIcon className="h-12 w-12 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
              </a>
            </div>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-white">
                Personalizirano printanje
              </h2>
              <p className="text-base leading-relaxed">
                Treba nešto jedinstveno?
              </p>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
              <a
                href="/services/commissions"
                className="group mb-5 inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <CakeIcon className="h-12 w-12 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
              </a>
            </div>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-white">
                Neptune
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a
                href="mailto:trycaze@proton.me"
                className="group relative my-10 ml-4 inline-flex items-center gap-2 rounded-lg border-0 bg-purple-700 px-6 py-2 text-lg text-gray-200 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-400 hover:text-white focus:outline-none"
              >
                Javite nam se
                <MailboxIcon className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
