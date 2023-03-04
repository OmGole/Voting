import Voting from "./Voting.json";
const ethers = require("ethers");

const ContractABI = Voting.abi;
const ContractAddess = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const Ethereum = typeof window !== "undefined" && window.ethereum;

const useContract = () => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  const voting = new ethers.Contract(ContractAddess, ContractABI, signer);
  return { voting };
};

export default useContract;
