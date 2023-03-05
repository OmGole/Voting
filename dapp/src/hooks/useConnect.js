import { useState } from "react";

const Ethereum = typeof window !== "undefined" && window.ethereum;

const useConnect = () => {
  const [currentAccount, setCurrentAccount] = useState();

  const connect = async () => {
    try {
      console.log("Connect");
      if (!Ethereum) {
        alert("Please install metaMask");
        return;
      }
      const accounts = await Ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length === 0) {
        console.log("No authorized accounts");
        return;
      }

      const account = accounts[0];
      setCurrentAccount(account);
    } catch (error) {
      console.log(error);
    }
  };

  return { connect, account: currentAccount };
};

export default useConnect;
