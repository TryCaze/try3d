const Hero = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="my-5 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Hvala Vam Na Narudžbi!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Hvala Vam na narudžbi! Vaša narudžba je uspješno zaprimljena i
          trenutno se obrađuje. Naš tim će Vas kontaktirati u najkraćem mogućem
          roku kako bi potvrdio detalje dostave.
        </p>
      </div>
    </section>
  );
};

export default Hero;
