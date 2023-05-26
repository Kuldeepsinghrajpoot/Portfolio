"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import github from "./document/icons8-github.svg";
import linkedIN from "./document/icons8-linkedin.svg";
import About from "./about";

import { useState, useRef } from "react";
import Logo from "./document/logo.jpg";
import FirstImage from "./document/images.svg";
// import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  const [hide, show] = useState("hidden");
  const update = () => {
    if (hide === "hidden") {
      show("");
    } else {
      show("hidden");
    }
  };

  const aboutSection = useRef(null);
  const servcesSection = useRef(null);
  // const contactSection = useRef(null);

  const scrollDown = (ref) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: 'smooth',
		});
	};

  return (
    <>
      <header className="text-black sticky top-0 inset-x-0  shadow-md flex  flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-900 backdrop-blur-sm bg-white/30  shadow-black-xl text-sm py-3 sm:py-0">
        <nav
          className=" text-black relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Image
              src={Logo}
              className=" h-20  w-28  top-0 my-0 mx-0 "
              alt="Logo"
            />

            <div className="sm:hidden">
              <button
                type="button"
                onClick={update}
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-lg align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className={`hs-collapse-open:${hide} w-4 h-4`}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          {/* <ScrollToTop /> */}
          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse ${hide} overflow-hidden transition-all duration-300 basis-full grow sm:block font-semibold`}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              <button
                onClick={() => scrollDown(aboutSection)}
                className="font-medium hover:text-gray-400 sm:py-6 dark:text-black dark:hover:text-gray-500"
              >
                {/* <a> About</a> */}
                About
              </button>
              <button
                // onClick={() => scrollDown(servcesSection)}
                className="font-medium  hover:text-gray-400 sm:py-6 dark:text-black dark:hover:text-gray-500"
                // href="https://nextjs.org"
              >
                Projects
              </button>
              <button
                className="font-medium  hover:text-gray-400 sm:py-6 dark:text-black dark:hover:text-gray-500"
                href="#"
              >
                Blog
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-screen mx-auto overflow-hidden md:max-w-6xl">
        <div className="md:flex">
          <div className=" p-8  w-screen ">
            <div className="uppercase tracking-wide text-md md:text-2xl text-indigo-500 font-semibold">
              Hey!{" "}
              <div className=" w-full font-semibold">
                I am kuldeep Singh Rajpoot
              </div>
            </div>
            <div
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black"
              id="typewriter"
            >
              {" "}
              <Typewriter
                options={{
                  strings: ["Full Stack Web Developer", "Backend developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="mt-2 text-slate-500">
              <br />

              <button
                type="button"
                className="   bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 my-4 py-2 px-4 shadow-lg border rounded-md"
              >
                Download CV
              </button>
              <div className="flex justify-start ">
                <div className="mx-4">
                  <a
                    href="https://github.com/Kuldeepsinghrajpoot"
                    target="_blank"
                  >
                    <Image src={github} alt="github" />
                  </a>
                </div>
                <div className="mx-4 pt-2">
                  <a
                    href="https://www.linkedin.com/in/kuldeep-singh-rajpoot-867988215/"
                    target="_blank"
                  >
                    <Image src={linkedIN} alt="linkedIN" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:shrink-0 ">
            <Image
              src={FirstImage}
              alt="user pic"
              className="rounded-lg h-fit w-full   object-cover md:h-full md:w-full "
            />
          </div>
        </div>
      </div>
      <hr />

      <About return props={"aboutSection"}  ref={aboutSection}/>
      {/* <!-- component --> */}
      <footer className="relative flex flex-col items-center bg-cyan-900 overflow-hidden py-20">
        <div className="relative z-[1] container m-auto px-6 md:px-12">
          <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="w-full max-w-screen-xl mx-auto p-4 ">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <Image
                    src={Logo}
                    className=" h-20  w-28  top-0 my-0 mx-0 "
                    alt="Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                    Kuldeep Singh Rajpoot
                  </span>
                </div>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
                  <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">
                      Licensing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:py-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Kuldeep Singh Rajpoot
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute h-full inset-0 flex items-center"
        >
          <div
            aria-hidden="true"
            className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
          ></div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
        ></div>
      </footer>
    </>
  );
}
