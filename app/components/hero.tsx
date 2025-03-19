import { ArrowRightIcon, DiamondPercentIcon, SendIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="h-full pt-0  lg:pl-8 lg:pt-20">
        <div className="m-5 overflow-hidden rounded-2xl bg-slate-800 py-10 lg:m-0 lg:rounded-bl-2xl lg:rounded-tl-2xl  xl:py-8 2xl:py-16 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:gap32 grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
              <div className="w-full lg:col-span-6 xl:col-span-5 xl:-mx-0 2xl:-mx-5">
                <div className="flex items-center justify-center text-sm font-medium text-gray-200 lg:justify-start">
                  <span className="mr-3 rounded-2xl bg-indigo-600 px-3 py-1 text-xs font-medium text-white ">
                    <DiamondPercentIcon />
                  </span>
                  Novi popusti na sve nove narudžbe!
                </div>
                <h1 className="font-manrope py-8 text-center text-5xl font-bold leading-[70px] text-gray-100 lg:text-left">
                  Uskršnji popusti su ovdje!
                </h1>
                <p className=" text-center text-lg text-white lg:text-left">
                  Sve izrade po narudžbi su sada na trajnom popustu kako bi ste
                  mogli urediti Vaš dom za ove blagdane. Provjerite naše izbore
                  i izabirate vaše najdraže likove.
                </p>
                <div className="my-10 flex justify-center">
                  <a
                    href="/services"
                    className="relative inline-flex items-center gap-2 rounded-lg border-0 bg-purple-500 px-6 py-2 text-lg text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none"
                  >
                    Istražite ponude
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
              <div className="block w-full  lg:col-span-6 xl:col-span-7">
                <div className="w-full  sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                  <Image
                    src="https://pagedone.io/asset/uploads/1694846193.png"
                    alt="Dashboard image"
                    className="rounded-l-3xl object-cover"
                    width={720}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
