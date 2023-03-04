import Voting from "./Voting.json";
const ethers = require("ethers");

const ContractABI = Voting.abi;
const ContractAddess = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const Ethereum = typeof window !== "undefined" && window.ethereum;

const useContract = () => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  const voting = new ethers.Contract(ContractAddess, ContractABI, signer);
  return { voting };
};

export default useContract;
