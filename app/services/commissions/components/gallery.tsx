import Image from "next/image";

const Gallery = () => {
  return (
    <section className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl lg:mb-0 lg:w-1/3">
            Primjer izrada
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 lg:pl-6">
            Pogledajte naše primjere završenih produkata od zadovoljnih
            klijenata.
          </p>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={500}
                height={300}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/background.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={501}
                height={301}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/background.jpeg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                width={600}
                height={360}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/background.jpeg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                width={601}
                height={361}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/background.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={502}
                height={302}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/background.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={503}
                height={303}
                alt="gallery"
                className="block h-full w-full object-cover object-center"
                src="/background.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
