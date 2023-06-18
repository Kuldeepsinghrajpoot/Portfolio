import React from "react";
import mits from "./document/mits-logo.png";
import RGPV from "./document/logo.png";

import Image from "next/image";
import pic from "./document/IMG20230310152701.png";
import left from "./document/m64udmyhucj2zb42uvyf_06640ff501.svg";
import right from "./document/m64udmyhucj2zb42uvyf_06640ff501 (1).svg";
import design from "./document/bkzxjg9fxeaiuej76vdd_9e7b388222.png";
import Skills from "./skills";
import Project from "./project";

function about() {
  return (
    <div>
      <div className=" ">
        <h1 className="text-6xl  bg-blue-900 text-center text-white  py-10 h-36 shadow-lg">
          <strong className=" top "> About </strong>

          <div className="flex justify-between">
            <div className="relative ...">
              <div className="absolute bottom-0 left-1 h-16 w-24 ...">
                <Image src={left} alt="left"></Image>
              </div>
            </div>
            <div className="relative">
              <div className="absolute bottom-12 right-0  h-0 w-24">
                <Image
                  src={right}
                  className="rotate-180   absolute -my-12 left-0 top-0"
                  alt="right"
                ></Image>
              </div>
            </div>
          </div>
        </h1>
        <br />
        <div className="md:visible invisible absolute">
          <Image className=" md:bg-cover" src={design} alt="user image" />
        </div>

        <div className="max-w-md mx-auto rounded bg-white  shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image src={pic} alt="Modern building architecture" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {" "}
                Introduction
              </div>

              <p className="mt-2 text-slate-500">
                {" "}
                Hi, my name is Kuldeep Singh Rajpoot. I{"'"}m a Full stack web
                Devloper. I{"'"}m here today to connect with other professionals
                in the industry and learn more about the latest design trends
                and techniques. In my free time, I enjoy hiking and trying new
                restaurants around the city. It{"'"}s great to meet all of you
                and I{"'"}m looking forward to getting to know you better!
              </p>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div>
        </div>

        <br />
        <h1 className="text-6xl bg-blue-900 text-center text-white py-10 h-36 shadow-lg">
          <strong>Education</strong>
          <div className="flex justify-between">
            <div className="relative ...">
              <div className="absolute bottom-0 left-1 h-16 w-24 ...">
                <Image src={left} alt="left"></Image>
              </div>
            </div>
            <div className="relative">
              <div className="absolute bottom-12 right-0  h-0 w-24">
                <Image
                  src={right}
                  className="rotate-180   absolute -my-12 left-0 top-0"
                  alt="right"
                ></Image>
              </div>
            </div>
          </div>
        </h1>
        <br />
        {/* eduction information */}
        <div className=" grid   sm:grid-cols-2 gap-5    xl:mx-60 2xl:mx-96">
        <div className="w-80  mx-auto rounded bg-white  shadow-md overflow-hidden md:max-w-2xl">
            <div className="bg-white object-center hover:object-top">
              <div className="md:shrink-0">
                <Image
                  className="h-32 mx-24 md:mx-24 my-8 w-32 object-cover md:h-40 md:w-40 "
                  src={RGPV}
                  alt="Modern building architecture"
                />
              </div>
              <div className=" p-3">
                <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold text-center">
                  Diploma
                </div>

                <div className="mt-2 text-slate-500">
                  {" "}
                  <div>
                    Govt. Polytechnic College Nowgong, Nowgong Chhatrpur MP, <br /> University
                    RGPV Bhopal{" "}
                  </div>
                  <div>Computer Science & Engineering </div>
                  <div>August 2018 - July 2021</div>
                  <div>CGPA - 8.46</div>
                </div>
              </div>
              <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div>
            </div>
          </div>

         
          <div className="w-80  mx-auto rounded bg-white  shadow-md overflow-hidden md:max-w-2xl">
            <div className="bg-white object-center hover:object-top">
              <div className="md:shrink-0">
                <Image
                  className="h-52  mx-7 md:mx-3  w-64 object-cover md:h-52 md:w-64"
                  src={mits}
                  alt="Modern building architecture"
                />
              </div>
              <div className=" p-8">
                <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold text-center">
                  Bechlor of technolgy
                </div>

                <h1 className="mt-2 text-slate-500">
                  {" "}
                  <div>
                    {" "}
                    Madhav institute of technolgy and science,Gwalior MP
                  </div>
                  <div>Computer Science & Engineering</div>
                  <div>October 2021 - Current(June 2024)</div>
                  <div>CGPA - 7.3</div>
                </h1>
              </div>
              <div className=" bg-gradient-to-r from-yellow-500 to-yellow-500 w-full h-4 box-content"></div>
            </div>

            {/* <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-4 box-content"></div> */}
          </div>
        </div>
      </div>
      <br />
      <h1 className="text-6xl bg-blue-900 text-center text-white  py-10 h-36 shadow-lg">
        <strong>Skills</strong>{" "}
        <div className="flex justify-between">
          <div className="relative ...">
            <div className="absolute bottom-0 left-1 h-16 w-24 ...">
              <Image src={left} alt="left"></Image>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-12 right-0  h-0 w-24">
              <Image
                src={right}
                className="rotate-180   absolute -my-12 left-0 top-0"
                alt="right"
              ></Image>
            </div>
          </div>
        </div>
      </h1>
      <br />
      <div className="grid   sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4    gap-5  xl:mx-20 2xl:mx-56  ">
        <Skills />
        {/* <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div> */}
      </div>

      <br />
      <h1 className="text-6xl bg-blue-900 text-center text-white  py-10 h-36 shadow-lg">
        <strong>Projects</strong>{" "}
        <div className="flex justify-between">
          <div className="relative ...">
            <div className="absolute bottom-0 left-1 h-16 w-24 ...">
              <Image src={left} alt="left"></Image>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-12 right-0  h-0 w-24">
              <Image
                src={right}
                className="rotate-180   absolute -my-12 left-0 top-0"
                alt="right"
              ></Image>
            </div>
          </div>
        </div>
      </h1>
      <Project />
      <br />
    </div>
  );
}

export default about;
