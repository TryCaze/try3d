import Image from "next/image";

const Courses = () => {
  return (
    <section className="bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
          <Image
            alt="feature"
            className="size-full object-cover object-center"
            src=""
            width={240}
            height={240}
          />
        </div>
        <div className="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="size-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="grow">
              <h2 className="mb-3 text-lg font-medium text-white">
                Shooting Stars
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="mt-3 inline-flex items-center text-indigo-400">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 size-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="size-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="grow">
              <h2 className="mb-3 text-lg font-medium text-white">
                The Catalyzer
              </h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="mt-3 inline-flex items-center text-indigo-400">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 size-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="size-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="grow">
              <h2 className="mb-3 text-lg font-medium text-white">Neptune</h2>
              <p className="text-base leading-relaxed">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="mt-3 inline-flex items-center text-indigo-400">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 size-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
