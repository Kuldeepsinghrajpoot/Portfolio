import React from "react";
import Image from "next/image";
import CandCplus from "./document/C_slash_cpp.svg";
import Rating from "./rating";
import Java from "./document/java.svg";
import JS from "./document/Unofficial_JavaScript_logo_2.svg.png";
import PHP from "./document/Webysther_20160423_-_Elephpant.svg";
import Python from "./document/Python_logo_notext.svg";
import HTMLCSS from "./document/CSS3_and_HTML5_logos_and_wordmarks.svg";
import Node from "./document/nodejs-seeklogo.com.svg";
import Reactjs from "./document/React-icon.svg";
import Cerificate from "./document/approved-certified-medal-green-icon-isolated-white-background-vector-illustration_194782-476.jpg";


function skills() {
  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

  return (
    <>
      {/* java programming lanugage */}
      {/* <Slider dots className="rounded-xl w-full " autoplay> */}
      <div className="w-60 mx-auto rounded bg-white shadow-lg overflow-hidden">
        <div className="">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Programming in C/C++
              <Image src={CandCplus} alt="candcplus"></Image>
            </div>
            Intermediate
            <div className="mt-2 text-slate-500">
              
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div>
      </div>

      {/*  */}

      <div className="w-60  mx-auto rounded bg-white  shadow-md overflow-hidden md:max-w-2xl">
        <Image
          src={Cerificate}
          className=" mx-36 absolute w-24"
          alt="candcplus"
        ></Image>

        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Java
              <Image src={Java} className="mx-4" alt="candcplus"></Image>
            </div>
            Intermediate
            <div className="mt-2 text-slate-500">
              
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r  from-blue-500 to-red-500 w-full h-4 box-content"></div>
      </div>

      {/*  */}

      <div className="w-60 mx-auto rounded bg-white  shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              JavaScript
              <Image src={JS} className="mx-7 h-26" alt="candcplus"></Image>
            </div>
            Intermediate
            <div className="mt-2 text-slate-500">
              
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div>
      </div>
      <div className="w-60 mx-auto rounded bg-white  shadow-lg overflow-hidden md:max-w-2xl">
        <Image
          src={Cerificate}
          className="rounded-xl   mx-36 absolute w-24"
          alt="candcplus"
        ></Image>

        <div className="md:flex">
          <div className="p-8">
            <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              PHP
              <Image src={PHP} className="mx-3 h-26" alt="candcplus"></Image>
            </div>
            Intermediate
            <div className="mt-2 text-slate-500">
              
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div>
      </div>

      <div className="w-60 mx-auto rounded bg-white  shadow-lg overflow-hidden md:max-w-2xl">
        <Image
          src={Cerificate}
          className="rounded-xl   mx-36 absolute w-24"
          alt="candcplus"
        ></Image>

        <div className="md:flex">
          <div className="p-8">
            <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Python
              <Image src={Python} className="mx-7 h-26" alt="candcplus"></Image>
            </div>
            Intermediate
            <div className="mt-2 text-slate-500">
              
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div>
      </div>

      <div
        className="w-60 mx-auto bg-white rounded shadow-lg overflow-hidden md:max-w-2xl"
        style={{
          backgroundImage:
            "approved-certified-medal-green-icon-isolated-white-background-vector-illustration_194782-476.jpg",
          width: "24",
        }}
      >
        {/* <Image src={Cerificate} className="rounded-xl   mx-36 absolute w-24"  alt="candcplus"></Image> */}

        <div className="md:flex">
          <div className="p-8">
            <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              HTML & CSS
              <Image
                src={HTMLCSS}
                className="mx-0 h-32"
                alt="candcplus"
              ></Image>
            </div>
            Intermediate
            <div className="mt-2 text-slate-500">
              
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div>
      </div>

      <div className="w-60 mx-auto rounded bg-white  shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Node
              <Image src={Node} className="mx-0 h-32" alt="candcplus"></Image>
            </div>
            Begining
            <div className="mt-2 text-slate-500">
              
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div>
      </div>

      <div className="w-60 mx-auto rounded bg-white  shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              React
              <Image
                src={Reactjs}
                style={{ width: "256px", height: "128px" }}
                className="mx-0 h-26"
                alt="candcplus"
              ></Image>
            </div>
            Begining
            <div className="mt-2 text-slate-500">
              
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-red-500 w-full h-4 box-content"></div>
      </div>
      {/* </Slider> */}
    </>
  );
}

export default skills;

