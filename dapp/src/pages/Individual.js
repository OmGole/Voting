import React from "react";
import Nav from "../components/Nav";
import Image from "../assets/hero1.jpg";

export default function Individual() {
  return (
    <>
      <Nav />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={Image}
              />
            </div>
            <div>
              <h1 className="text-transparent md:text-7xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bebas">
                Position
              </h1>
              <h1 className="text-transparent md:text-4xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bebas">
                STATE
              </h1>
            </div>
            <div className="w-full h-0.5 bg-white mt-4"></div>

            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-7xl bebas text-4xl title-font font-medium mt-10 md:mb-2">
              Results
            </h2>

            <section className="text-gray-600 body-font">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/3  w-full">
                  <div className=" bg-lime-400 bg-opacity-75 px-8 pt-10 pb-10 rounded-lg overflow-hidden  relative">
                    <h2 className="tracking-widest md:text-xl  font-medium text-gray-40  bebas">
                      #1st
                    </h2>
                    <h1 className="title-font md:text-6xl text-xl font-medium text-gray-900 bebas">
                      Name
                    </h1>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3  w-full">
                  <div className=" bg-lime-400 bg-opacity-75 px-8 pt-10 pb-10 rounded-lg overflow-hidden  relative">
                    <h2 className="tracking-widest md:text-xl  font-medium text-gray-40  bebas">
                      #2nd
                    </h2>
                    <h1 className="title-font md:text-6xl text-xl font-medium text-gray-900 bebas">
                      Name
                    </h1>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3  w-full">
                  <div className=" bg-lime-400 bg-opacity-75 px-8 pt-10 pb-10 rounded-lg overflow-hidden  relative">
                    <h2 className="tracking-widest md:text-xl  font-medium text-gray-40  bebas">
                      #3rd
                    </h2>
                    <h1 className="title-font md:text-6xl text-xl font-medium text-gray-900 bebas">
                      Name
                    </h1>
                  </div>
                </div>
              </div>
            </section>

            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-7xl bebas text-4xl title-font font-medium mt-10 md:mb-2">
              Candidates
            </h2>

            <section className="text-gray-600 body-font">
              <div className="flex flex-wrap -m-4">
                {/* Card Component Start */}
                <div className="p-4 lg:w-1/3  w-full ">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={Image}
                      alt=""
                      className="w-full border rounded-t-2xl"
                    />
                    <div className=" bg-lime-400 bg-opacity-75 px-8 py-6   relative">
                      <h1 className="title-font md:text-5xl text-xl font-medium text-gray-900 bebas">
                        Name
                      </h1>
                      {/* Render Button if role == User else do not render */}
                      <button className="bg-[#BE6DB7] text-white font-bold py-2 px-4 rounded-lg">
                        Vote
                      </button>
                    </div>
                  </div>
                </div>
                {/* Card Component End */}
                <div className="p-4 lg:w-1/3  w-full">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={Image}
                      alt=""
                      className="w-full border rounded-t-2xl"
                    />
                    <div className=" bg-lime-400 bg-opacity-75 px-8 py-6   relative">
                      <h1 className="title-font md:text-5xl text-xl font-medium text-gray-900 bebas">
                        Name
                      </h1>
                      <button className="bg-[#BE6DB7] text-white font-bold py-2 px-4 rounded-lg">
                        Vote
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3  w-full">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={Image}
                      alt=""
                      className="w-full border rounded-t-2xl"
                    />
                    <div className=" bg-lime-400 bg-opacity-75 px-8 py-6   relative">
                      <h1 className="title-font md:text-5xl text-xl font-medium text-gray-900 bebas">
                        Name
                      </h1>
                      <button className="bg-[#BE6DB7] text-white font-bold py-2 px-4 rounded-lg">
                        Vote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* Button component if role == Candidate else do not render */}
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
      {/* Button component end */}
    </>
  );
}
