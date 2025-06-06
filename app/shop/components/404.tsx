import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <section className="mt-10 bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <Image src="shop404.svg" alt="404" width={1200} height={500} />
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Oops!
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Shop je još uvijek u izradi, vratite se poslje.{" "}
          </p>
          <a
            href="/"
            className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-gray-400 focus:outline-none focus:ring-4 dark:text-white"
          >
            Vratite se na početnu stranicu
          </a>
        </div>
      </div>
    </section>
  );
};
