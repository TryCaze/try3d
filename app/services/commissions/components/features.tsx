import {
  SettingsIcon,
  MailboxIcon,
  SquareUserIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <h1 className="mb-10 w-full text-center text-4xl font-bold text-white">
          Naše kvalitete komisija
        </h1>
        <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
          <Image
            alt="feature"
            className="size-full object-cover object-center"
            src="/posters/coffeebar.png"
            width={920}
            height={1000}
          />
        </div>
        <div className="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="mb-5 inline-flex size-8 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
              <a
                href="/services/commissions"
                className="group mb-5 inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <ShieldCheckIcon className="size-8 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
              </a>
            </div>
            <div className="grow">
              <h2 className="title-font mb-3 text-lg font-medium text-white">
                Kvalitetno printanje
              </h2>
              <p className="text-base leading-relaxed">
                Naša usluga printanja jamči visoku preciznost i izdržljivost
                svakog izgrađenog modela. Koristimo napredene tehnologije i
                vrhunske materijale kako bismo osigurali besprijekornu kvalitetu
                i dugotrajnost proizvoda.
              </p>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="mb-5 inline-flex size-8 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
              <a
                href="/services/commissions"
                className="group mb-5 inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <SquareUserIcon className="size-8 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
              </a>
            </div>
            <div className="grow">
              <h2 className="title-font mb-3 text-lg font-medium text-white">
                Personalizirano printanje
              </h2>
              <p className="text-base leading-relaxed">
                Nudimo mogućnost prilagodbe svakog 3D modela prema vašim
                željama. Bilo da se radi o unikatnim poklonima, prototipovima
                ili dekorativnim predmetima, vaše ideje pretvaramo u stvarnost s
                visokom razinom detalja.
              </p>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="mb-5 inline-flex size-8 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
              <a
                href="/services/commissions"
                className="group mb-5 inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <SettingsIcon className="size-8 text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
              </a>
            </div>
            <div className="grow">
              <h2 className="title-font mb-3 text-lg font-medium text-white">
                Prilagođenja rješenja
              </h2>
              <p className="text-base leading-relaxed">
                Imate specifične zahtjeve? Izrađujemo prilagođena rješenja koja
                savršeno odgovaraju vašim potrebama. Bez obzira na komplekstnost
                projekata, pružamo individualni pristup i brzu izradu.
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
