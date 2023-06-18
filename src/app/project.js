import React from "react";
import Slider from "infinite-react-carousel";
import Img from "next/image";
import Sc from "./document/Screenshot.png";
import Github from "./document/icons8-github.svg";
import O from "./document/1.png";
import T from "./document/2.png";
import H from "./document/3.png";
import F from "./document/4.png";
import Fi from "./document/5.png";
import S from "./document/6.png";
import Se from "./document/7.png";
import E from "./document/8.png";
import X from "./document/9.png";
import TE from "./document/10.png";

import Picture0 from "./document/Picture0.png";
import Picture1 from "./document/Picture1.png";
import Picture2 from "./document/Picture2.png";
import Picture3 from "./document/Picture3.png";
import Picture4 from "./document/Picture4.png";
import Picture5 from "./document/Picture5.png";
import Picture6 from "./document/Picture6.png";

// notebook

import notebook0 from "./document/notebook0.png";
import notebook1 from "./document/notebook1.png";
import notebook2 from "./document/notebook2.png";
import notebook3 from "./document/notebook3.png";
import notebook4 from "./document/notebook4.png";

// news app
import new1 from "./document/news1.png";
import new2 from "./document/news2.png";
import new3 from "./document/news3.png";
import new4 from "./document/news4.png";
import new5 from "./document/news5.png";

// text utils
import txt1 from "./document/txt1.png";
import txt2 from "./document/txt2.png";
import txt3 from "./document/txt3.png";
import txt4 from "./document/txt4.png";

//cal

import cal1 from "./document/cal1.png";
import cal2 from "./document/cal2.png";

function App() {
  return (
    <div className=" md:mx-36 rounded grid  xl:grid-cols-2 grid-cols-1  gap-3  w-fit">
      <div className=" mx-12 my-11 rounded bg-white">
        <div className="max-w-lg rounded overflow-hidden shadow-lg  h-full">
          <div className="autoPlay">
            <Slider dots autoplay>
              {/* <Item>One</Item> */}
              <Img src={Sc} alt="School Management System" />
              <Img src={O} alt="School Management System" />
              <Img src={T} alt="School Management System" />
              <Img src={H} alt="School Management System" />
              <Img src={F} alt="School Management System" />
              <Img src={Fi} alt="School Management System" />
              <Img src={S} alt="School Management System" />
              <Img src={Se} alt="School Management System" />
              <Img src={E} alt="School Management System" />
              <Img src={X} alt="School Management System" />
              <Img src={TE} alt="School Management System" />
            </Slider>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              School Managment System
            </div>
            <p className="text-gray-700 text-base">
              This project maked for solved some problem through online and help
              to reduce the users of the teacher then they will take more to the
              teacher. This project are woking on localhost. In this project
              used for <br />{" "}
              <strong>
                {" "}
                front end - HTML ,css ,javascript,jquery and ajax{" "}
              </strong>
              <strong>
                {" "}
                backed - php xampp localhost server and mysql database.
              </strong>
              <strong> used paytm payment gateway.</strong>
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-start">
            <Img src={Github} alt="github" className="w-12  "></Img>
            <span className="cursor-pointer inline-block bg-gray-200 rounded-full my-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-8">
              <a
                href="https://github.com/Kuldeepsinghrajpoot/School-Management-System"
                target="_blank"
              >
                code
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* news app */}

      <div className=" mx-12 my-11 rounded bg-white">
        <div className="max-w-lg rounded overflow-hidden shadow-lg  h-full">
          <div className="autoPlay">
            <Slider dots className=" w-full " autoplay>
              {/* <Item>One</Item> */}
              <Img src={new1} alt="News app" />
              <Img src={new2} alt="News app" />
              <Img src={new3} alt="News app" />
              <Img src={new4} alt="News app" />
              <Img src={new5} alt="News app" />
            </Slider>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">News app</div>
            <p className="text-gray-700 text-base">
              New app is used the api key{" "}
              <a href="https://newsapi.org/" target="_blank">
                <strong>https://newsapi.org/</strong>
              </a>{" "}
              for retriving the news. The app maked in <strong> React and bootstrap</strong>. In this app some
              basic functionality like you want to show the news of sport
              ,Entertainment,health so on we click on button we want to read
              news{" "}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-start">
            <Img src={Github} alt="github" className="w-12  "></Img>
            <span className="cursor-pointer inline-block bg-gray-200 rounded-full my-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-8">
              <a
                href="https://github.com/Kuldeepsinghrajpoot/News-app"
                target="_blank"
              >
                code
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className=" mx-12 my-11 rounded bg-white">
        <div className="max-w-lg rounded overflow-hidden shadow-lg  h-full">
          <div className="autoPlay">
            <Slider dots className=" w-full " autoplay>
              {/* <Item>One</Item> */}
              <Img src={Picture0} alt="banking system" />
              <Img src={Picture1} alt="banking system" />
              <Img src={Picture2} alt="banking system" />
              <Img src={Picture3} alt="banking system" />
              <Img src={Picture4} alt="banking system" />
              <Img src={Picture5} alt="banking system" />
              <Img src={Picture6} alt="banking system" />
            </Slider>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Apna bank</div>
            <p className="text-gray-700 text-base">
              apna bank maked in java server page . In this project perform some
              basic functionality card,upi id and wradwal money and credit money
              from the upi id
              <br />{" "}
              <strong>
                {" "}
                front end - HTML ,css ,javascript,jquery and ajax,bootstrap{" "}
              </strong>
              <strong>
                {" "}
                backed - jsp xampp localhost server and mysql database.
              </strong>
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-start">
            <Img src={Github} alt="github" className="w-12  "></Img>
            <span className="cursor-pointer inline-block bg-gray-200 rounded-full my-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-8">
              <a href="https://github.com/Kuldeepsinghrajpoot/Apna-bank-project" target="_blank">code</a>
            </span>
          </div>
        </div>
      </div>

      <div className=" mx-12 my-11 bg-white">
        <div className="max-w-lg rounded overflow-hidden shadow-lg  h-full">
          <div className="autoPlay">
            <Slider dots className=" w-full " autoplay>
              {/* <Item>One</Item> */}
              <Img src={notebook0} alt="hello" />
              <Img src={notebook1} alt="hello" />
              <Img src={notebook2} alt="hello" />
              <Img src={notebook3} alt="hello" />
              <Img src={notebook4} alt="hello" />
            </Slider>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Notebook</div>
            <p className="text-gray-700 text-base">
              Notebook are the similar of todo list, In this project we can
              store,update,delete our notes from the database. In this app use <strong>react,bootstrap,monogodb and for security purpos used jwt</strong>
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-start">
            <Img src={Github} alt="github" className="w-12  "></Img>
            <span className="cursor-pointer inline-block bg-gray-200 rounded-full my-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-8">
              <a href="https://github.com/Kuldeepsinghrajpoot/textutil-app" target="_blank">code</a>
            </span>
          </div>
        </div>
      </div>

      <div className=" mx-12 my-11 bg-white">
        <div className="max-w-lg rounded overflow-hidden shadow-lg  h-full">
          <div className="autoPlay">
            <Slider dots className=" w-full " autoplay>
              {/* <Item>One</Item> */}
              <Img src={txt1} alt="txt util" />
              <Img src={txt2} alt="txt util" />
              <Img src={txt3} alt="txt util" />
              <Img src={txt4} alt="txt util" />
            </Slider>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Text Util</div>
            <p className="text-gray-700 text-base">
             Text util project made for the simple work like convert small to long word ,clip word ,remove space between word count how many word and character . This app maked in  <strong>React</strong>
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-start">
            <Img src={Github} alt="github" className="w-12  "></Img>
            <span className="cursor-pointer inline-block bg-gray-200 rounded-full my-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-8">
             <a href="https://github.com/Kuldeepsinghrajpoot/textutil-app" target="_blank">code</a>
            </span>
          </div>
        </div>
      </div>

      {/* text util */}

      <div className=" mx-12 my-11 rounded bg-white">
        <div className="max-w-lg rounded overflow-hidden shadow-lg  h-full">
          <div className="autoPlay">
            <Slider dots className=" w-full " autoplay>
              {/* <Item>One</Item> */}
              <Img src={cal1} alt="hello" />
              <Img src={cal2} alt="hello" />
            </Slider>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Calculator</div>
            <p className="text-gray-700 text-base">
             This is simple Calculator for learning new technolgy . This app maked in <strong>Next.js</strong> 
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-start">
            <Img src={Github} alt="github" className="w-12  "></Img>
            <span className="cursor-pointer inline-block bg-gray-200 rounded-full my-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-8">
             <a href="https://github.com/Kuldeepsinghrajpoot/calculator" target="_blank">code</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
