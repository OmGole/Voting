import React from "react";
import Nav from "../components/Nav";
import Image from "../assets/hero1.jpg";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="text-gray-600  body-font overflow-hidden">
        <div className="container px-5 pt-32 pb-10 mx-auto align-middle">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-900 text-8xl title-font font-medium mb-4 bebas text-white">
                Decentralized Voting
              </h1>

              <p className="leading-relaxed mb-4 text-2xl text-white">
                It allows individuals to cast their votes in an election without
                the need for a central authority or intermediary.
              </p>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={Image}
            />
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
