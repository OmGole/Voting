import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Image from "../assets/hero1.jpg";
import useContract from "../hooks/useContract"
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [role, setRole] = useState("");
  const {voting} = useContract();
  const [ballots, setBallots] = useState([]);

  const handleCandidate = async (e,i) => {
    e.preventDefault();
    await voting.addCandidate(i);
  }
  
  useEffect(() => {
    const getROLE = async () => {
      const role1 = await voting.userLogin();
      const role2 = await voting.candidateLogin();
      console.log("role1 val: ",role1.role);
      console.log("role2 val: ",role2.role);
      if(role1.role){
        setRole(role1.role);
      }else{
        setRole(role2.role)
      }
      console.log(role)
      
    }
    getROLE();
    const getBallot = async () =>{
      const poll = await voting.getBallots();
      setBallots(poll);
    }
    getBallot();
  },[]);

  return (
    <>
      <Nav />
      <section className="text-gray-600 body-font">
      <div className="container px-20 pt-20 pb-10 mx-auto">
          <h1 className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bebas">
            Upcomming Elections
          </h1>
          <div className="flex flex-wrap -m-4 pt-10">
            {/* Starts here */}
            {ballots?.filter(ballot=>ballot.status=="initial").map((ballot,i) =>
            {
              console.log(ballot)
            return <Link className="lg:w-1/4 md:w-1/2 p-4 w-full" to="/individual" state={{name:"om"}}>
            <div>
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={`https://cloudflare-ipfs.com/ipfs/${ballot.imageHash}`}
                draggable="false"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                {ballot.state}
              </h3>
              <h2 className="text-slate-200 title-font text-lg font-medium">
                {ballot.position}
              </h2>
              
        
              {/* if role == party */}
              {
                role == "candidate" &&
                <button className="bg-[#5D9C59] text-white font-bold py-2 px-4 rounded-lg" onClick={(e)=> handleCandidate(e,i)}>
                Apply
              </button>
              }
              
              {/* button end */}
            </div>
          </div>
          </Link>})}
            
            {/* End here */}
          </div>
        </div>
        <div className="container px-20 pt-20 pb-10 mx-auto">
          <h1 className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bebas">
            Ongoing Elections
          </h1>
          <div className="flex flex-wrap -m-4 pt-10">
            {/* Starts here */}
            {ballots?.filter(ballot=>ballot.status=="ongoing").map(ballot=>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={`https://gateway.pinata.cloud/ipfs/${ballot.hash}`}
                draggable="false"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                {ballot.state}
              </h3>
              <h2 className="text-slate-200 title-font text-lg font-medium">
                {ballot.position}
              </h2>
              {/* if role == user */}
              {role == "user" && 
              <button className="bg-[#5D9C59] text-white font-bold py-2 px-4 rounded-lg">
              Vote
            </button>
              }
              
              {/* button end */}
              
            </div>
          </div>
            )}
            
            {/* End here */}
          </div>
        </div>
        <div className="container px-20 pt-20 pb-10 mx-auto">
          <h1 className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 bebas">
            Completed Elections
          </h1>
          <div className="flex flex-wrap -m-4 pt-10">
            {/* Starts here */}
            {ballots?.filter(ballot=>ballot.status=="complete").map(ballot=>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={`https://gateway.pinata.cloud/ipfs/${ballot.hash}`}
                draggable="false"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                {ballot.state}
              </h3>
              <h2 className="text-slate-200 title-font text-lg font-medium">
                {ballot.position}
              </h2>
            </div>
          </div>
            )}
            
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
