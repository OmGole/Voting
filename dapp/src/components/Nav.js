import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import useConnect from "../hooks/useConnect";
import useContract from "../hooks/useContract";
import { Link } from "react-router-dom";

export default function Nav() {
  const { connect, account } = useConnect();
  const { voting } = useContract();

  const [role, setRole] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    connect();
    const role1 = await voting.userLogin();
    const role2 = await voting.candidateLogin();
    console.log("role1 val: ", role1.role);
    console.log("role2 val: ", role2.role);
    if (role1.role) {
      setRole(role1.role);
    } else if (role2.role) {
      setRole(role2.role);
    } else {
      alert("You are not registered");
    }
  };

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
          <a
            className="mr-5 hover:text-white text-slate-400 poppins"
            href="#"
            onClick={handleLogin}
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
