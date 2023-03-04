import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import { ethers } from "ethers";
// import { useEffect, useState } from "react";
// import useConnect from "../hooks/useConnect";

export default function Nav() {
  //   const { connect, account } = useConnect();

  //   const connectWallet = async () => {};

  //   useEffect(() => {
  //     connect();
  //   }, []);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} className="h-6  sm:h-9" alt="DVOTE logo"></img>

          <span className="ml-3 text-3xl bebas text-white">DVote</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            className="mr-5 hover:text-white text-slate-400 poppins"
            to="/register"
            // onClick={connectWallet}
          >
            Register
          </Link>
          <a className="mr-5 hover:text-white text-slate-400 poppins" href="#">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
