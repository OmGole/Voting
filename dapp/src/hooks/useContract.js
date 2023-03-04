// import NFT from './NFT.json'
import { ethers } from "ethers";

const ContractABI = NFT.abi;
// const ContractAddess = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const Ethereum = typeof window !== "undefined" && window.ethereum;

const useContract = () => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  const nft = new ethers.Contract(ContractAddess, ContractABI, signer);
  return { nft };
};

export default useContract;
