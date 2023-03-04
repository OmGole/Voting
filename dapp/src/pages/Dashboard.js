import React from "react";
import Nav from "../components/Nav";
import Image from "../assets/hero1.jpg";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <section class="text-gray-600 body-font">
        <div class="container px-20 pt-20 pb-10 mx-auto">
          <h1 className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bebas">
            Ongoing Elections
          </h1>
          <div class="flex flex-wrap -m-4 pt-10">
            {/* Starts here */}
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={Image}
                  draggable="false"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-200 text-xs tracking-widest title-font mb-1">
                  STATE
                </h3>
                <h2 class="text-slate-200 title-font text-lg font-medium">
                  POSITION
                </h2>
                {/* if role == user */}
                <button className="bg-[#5D9C59] text-white font-bold py-2 px-4 rounded-lg">
                  Vote
                </button>
                {/* button end */}
                {/* if role == party */}
                <button className="bg-[#5D9C59] text-white font-bold py-2 px-4 rounded-lg">
                  Apply
                </button>
                {/* button end */}
              </div>
            </div>
            {/* End here */}
          </div>
        </div>
        <div class="container px-20 pb-20 mx-auto">
          <h1 className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bebas">
            PAST Elections
          </h1>
          <div class="flex flex-wrap -m-4 pt-10">
            {/* Starts here */}
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={Image}
                  draggable="false"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-200 text-xs tracking-widest title-font mb-1">
                  STATE
                </h3>
                <h2 class="text-slate-200 title-font text-lg font-medium">
                  POSITION
                </h2>
              </div>
            </div>
            {/* End here */}
          </div>
        </div>
      </section>
      {/*button component start If role == Organizer else do not render */}
      <div className="fixed bottom-5 right-10">
        <div className="">
          <button className="dark-blue rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bc48ff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-20 h-15 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*Button component end  */}
    </>
  );
}
