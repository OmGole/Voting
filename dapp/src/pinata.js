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
        pinata_api_key: "4e240aace6d5910a88e3",
        pinata_secret_api_key: "fd0ba2e1a66d1447fad1393088cbf5a09c265f41f8e021d3322c71c4e6bc4937",
      },
    })
    .then(function (response) {
      console.log(
        "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
      );
      return {
        success: true,
        pinataURL:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
        hash:response.data.IpfsHash
      };
    })
    .catch(function (error) {
      console.log(error)
      return {
        success: false,
        message: error.message,
      };
    });
};
