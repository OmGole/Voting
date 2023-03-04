import React, { useState, useEffect } from "react";
import useConnect from "../hooks/useConnect";
import useContract from "../hooks/useContract";
import { uploadFileToIPFS } from "../pinata";

export default function Register() {
  const { connect, account } = useConnect();
  const { voting } = useContract();
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [image, setImage] = useState("");

  useEffect(() => {
    connect();
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImage = async (e) => {
    const imageResponse = await uploadFileToIPFS(e.target.files[0]);
    setImage(imageResponse);
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (role == "user") {
      await voting.userRegister(name);
    } else {
      await voting.candidateRegister(name, image.hash);
    }
  };

  const getUser = async (e) => {
    e.preventDefault();
    const user = await voting.candidateLogin();
    console.log(user);
  };

  useEffect(() => {
    console.log(account);
  }, [account]);
  return (
    <div class="m-auto xl:container px-12 sm:px-0 mx-auto">
      <div class="mx-auto h-full sm:w-max">
        <div class="m-auto  py-12">
          <div class="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
            <h3 class="text-2xl font-semibold text-gray-700 dark:text-white">
              Register your account
            </h3>

            <form action="" class="mt-10 space-y-8 dark:text-white">
              <div>
                <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <p class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition">
                    {account}
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <select
                    name="cars"
                    id="cars"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  >
                    <option value="user">User</option>
                    <option value="candidate">candidate</option>
                  </select>
                </div>
              </div>

              {role == "candidate" ? (
                <div>
                  <label>Image: </label>
                  <input type="file" onChange={handleImage}></input>
                </div>
              ) : (
                ""
              )}

              <div class="flex flex-col items-end">
                <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="Your password"
                    placeholder="Your Name / Party Name"
                    value={name}
                    onChange={handleName}
                    class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  />
                </div>
              </div>

              <div>
                <button
                  class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                  onClick={handleRegister}
                >
                  <span class="text-base font-semibold text-white dark:text-gray-900">
                    Register
                  </span>
                </button>
                <button
                  class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                  onClick={getUser}
                >
                  <span class="text-base font-semibold text-white dark:text-gray-900">
                    getUser
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
