import React, { useState, useEffect } from "react";
import useContract from "../hooks/useContract";
import { uploadFileToIPFS } from "../pinata";

export default function Createpoll() {
  const { voting } = useContract();
  const [state, setState] = useState("");
  const [varient, setVarient] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("initial")

  const handleState = (e) => {
    setState(e.target.value);
  };

  const handlePosition = (e) => {
    setPosition(e.target.value);
  };

  const handleImage = async (e) => {
    const imageResponse = await uploadFileToIPFS(e.target.files[0]);
    setImage(imageResponse);
    console.log(image.pinataURL);
  };

  const getBallot = async (e) => {
    e.preventDefault();
    const poll = await voting.getBallots();
    console.log(poll);
  }

  const handlePoll = async (e) => {
    e.preventDefault();
    await voting.createBallot(varient, position,state,image.hash,status,"1234");
  };

  return (
    <div class="m-auto xl:container px-12 sm:px-0 mx-auto">
      <div class="mx-auto h-full sm:w-max">
        <div class="m-auto  py-12">
          <div class="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
            <h3 class="text-2xl font-semibold text-gray-700 dark:text-white">
              Add a Ballot
            </h3>

            <form action="" class="mt-10 space-y-8 dark:text-white">
              <div>
                <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="text"
                    placeholder="State Name"
                    value={state}
                    onChange = {handleState}
                    class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  />
                </div>
              </div>
              <div>
                <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={handlePosition}
                    class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  />
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <select
                    name="cars"
                    id="cars"
                    placeholder="Type of Voting"
                    onChange={(e) => setVarient(e.target.value)}
                    className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  >
                    <option value="Normal">Normal</option>
                    <option value="Ranking ">Ranking</option>
                    <option value="approval">approval</option>
                  </select>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="file"
                    placeholder="banner Image"
                    onChange={handleImage}
                    class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  />
                </div>
              </div>

              <div>
                <button class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                onClick={handlePoll}>
                  <span class="text-base font-semibold text-white dark:text-gray-900">
                    Add
                  </span>
                </button>
              </div>

              <div>
                <button class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                onClick={getBallot}>
                  <span class="text-base font-semibold text-white dark:text-gray-900">
                    get ballot
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
