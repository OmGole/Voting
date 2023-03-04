import axios from "axios";
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;

export const uploadFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();
  data.append("file", file);

  const metadata = JSON.stringify({
    name: "testname",
    keyvalues: {
      exampleKey: "exampleValue",
    },
  });
  data.append("pinataMetadata", metadata);
  return axios
    .post(url, data, {
      maxBodyLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: "9bf788b97d563307e25a",
        pinata_secret_api_key:
          "e15dec243cf544ed981e0d0a2b062d645af5f490ef8b34e5364ab0643821ff4c",
      },
    })
    .then(function (response) {
      console.log("https://cloudflare-ipfs.com/ipfs/" + response.data.IpfsHash);
      return {
        success: true,
        pinataURL: "https://cloudflare-ipfs.com/ipfs/" + response.data.IpfsHash,
        hash: response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
