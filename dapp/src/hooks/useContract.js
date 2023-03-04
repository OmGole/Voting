import Voting from "./Voting.json";
const ethers = require("ethers");

const ContractABI = Voting.abi;
const ContractAddess = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const Ethereum = typeof window !== "undefined" && window.ethereum;

const useContract = () => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  const voting = new ethers.Contract(ContractAddess, ContractABI, signer);
  return { voting };
};

export default useContract;
