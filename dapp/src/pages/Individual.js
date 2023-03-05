import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Image from "../assets/hero1.jpg";
import useContract from "../hooks/useContract"
import { useLocation } from "react-router-dom";

export default function Individual() {
  let { state } = useLocation();
  const {voting} = useContract();
  const [candidates,setCandidates] = useState([]);
  const getCandidates = async () => {
    const y = await Promise.all(state.c.map(async candidate => {
    const x = await voting.getCandidate(candidate);
    return x;
    }));
    setCandidates(y);
  }
  const [role, setRole] = useState("");
  const [result, setResult] = useState([]);
  const getRole = async () => {
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

  const vote = async (i) => {
    await voting.voteSimple(state.c[i]);
    const x = await voting.result(candidates);
    setResult(x);
  }

  useEffect(() => {
    getCandidates();
    getRole();
  },[])

  useEffect(() => {
    console.log(candidates);
  },[candidates]);

  useEffect(() => {
    console.log(result);
  },[result]);


  

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
                src={`https://cloudflare-ipfs.com/ipfs/${state.imageHash}`}
              />
            </div>
            <div>
              <h1 className="text-transparent md:text-7xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bebas">
                {state.position}
              </h1>
              <h1 className="text-transparent md:text-4xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bebas">
                {state.state}
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
                {candidates.map((candidate,i)=> <div className="p-4 lg:w-1/3  w-full ">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={`https://gateway.pinata.cloud/ipfs/${candidate.hash}`}
                      alt=""
                      className="w-full border rounded-t-2xl"
                    />
                    <div className=" bg-lime-400 bg-opacity-75 px-8 py-6   relative">
                      <h1 className="title-font md:text-5xl text-xl font-medium text-gray-900 bebas">
                        {candidate.name}
                      </h1>
                      {/* Render Button if role == User else do not render */}
                      {role =="user" ? <button className="bg-[#BE6DB7] text-white font-bold py-2 px-4 rounded-lg" onClick={(e) => {e.preventDefault();vote(i)}}>
                        Vote
                      </button> : ""}
                      <h1 className="title-font md:text-5xl text-xl font-medium text-gray-900 bebas">
                        {candidate.votes.toNumber()}
                      </h1>
                    </div>
                  </div>
                  </div>)
                }
                
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
