import React from "react";
import Nav from "../components/Nav";
import Image from "../assets/hero1.jpg";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <section class="text-gray-600 body-font">
        <div class="container px-20 pt-24 pb-10 mx-auto">
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
              </div>
            </div>
            {/* End here */}
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
          </div>
        </div>
        <div class="container px-20  mx-auto">
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
          </div>
        </div>
      </section>
    </>
  );
}
