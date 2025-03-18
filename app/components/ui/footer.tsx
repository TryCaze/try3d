import { Facebook, Github, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white p-4 dark:bg-gray-800 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com" className="flex items-center">
              <img src="/logo.png" className="mr-3 h-8" alt="FlowBite Logo" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Try3D
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resursi
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Try
                  </a>
                </li>
                <li>
                  <a href="https://trycaze-website.vercel.app/hr" className="hover:underline">
                    TryCaze
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Pratite nas na
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://bsky.app/profile/did:plc:ortwnym66v3s7gzkl4gritxf" className="hover:underline ">
                    Bluesky
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/trycaze/" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Dodatno
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    O nama
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2025{" "}
            <a href="/" className="hover:underline">
              Try3D™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="https://www.instagram.com/trycaze/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/TryCaze"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Github />
            </a>
            <a
              href="https://www.youtube.com/@TryCaze"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
