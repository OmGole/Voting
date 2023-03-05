import React from "react";
import { Link, useLocation } from "react-router-dom";
import Tesseract from "tesseract.js";
import Nav from "../components/Nav";
var validator = require("aadhaar-validator");
export default function UserVerification() {
  let { ballot } = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [text, setText] = React.useState("");
  const [isVerified, setIsVerified] = React.useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, "eng")
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        const regex = /\d{4}\s\d{4}\s\d{4}/g;
        const matches = result.data.text.match(regex);
        // console.log(matches); // ["1234 5678 9012", "1111 2222 3333"]
        // console.log(validator.isValidNumber(matches[0].split(" ").join(""))); // "1234 5678 9012"
        if (
          matches &&
          validator.isValidNumber(matches[0].split(" ").join(""))
        ) {
          setIsVerified(true);
        }
        setText(result.data.text);
        setIsLoading(false);
      });
  };
  return (
    <>
      <Nav />
      <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div className="mx-auto h-full sm:w-max">
          <div className="m-auto  py-12">
            <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                User Verification
              </h3>
              {!isLoading && text && isVerified && (
                <>
                  <h1>Verified</h1>
                  <Link to="/individual" state={ballot}>
                    <button className="bg-[#BE6DB7] text-white font-bold py-2 px-4 rounded-lg">
                      Continue
                    </button>
                  </Link>
                </>
              )}
              {!isLoading && text && !isVerified && (
                <>
                  <h1>Not authorized</h1>
                  <Link to="/dashboard">
                    <button className="bg-[#BE6DB7] text-white font-bold py-2 px-4 rounded-lg">
                      Continue
                    </button>
                  </Link>
                </>
              )}

              {isLoading && (
                <>
                  <h1>Verifying</h1>
                </>
              )}
              {!isLoading && !text && (
                <>
                  <form action="" className="mt-10 space-y-8 dark:text-white">
                    <div className="flex flex-col items-end">
                      <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                        <h1 className="pb-4 text-xl">Upload Aadhar</h1>
                        <input
                          id=""
                          type="file"
                          placeholder="banner Image"
                          onChange={(e) =>
                            setImage(URL.createObjectURL(e.target.files[0]))
                          }
                          className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                        onClick={handleSubmit}
                      >
                        <span className="text-base font-semibold text-white dark:text-gray-900">
                          Add
                        </span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import Tesseract from "tesseract.js";
// var validator = require("aadhaar-validator");

// const UserVerification = () => {
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [image, setImage] = React.useState("");
//   const [text, setText] = React.useState("");
//   const [progress, setProgress] = React.useState(0);

//   const handleSubmit = () => {
//     setIsLoading(true);
//     Tesseract.recognize(image, "eng", {
//       logger: (m) => {
//         console.log(m);
//         if (m.status === "recognizing text") {
//           setProgress(parseInt(m.progress * 100));
//         }
//       },
//     })
//       .catch((err) => {
//         console.error(err);
//       })
//       .then((result) => {
//         console.log(result.data);
//         const regex = /\d{4}\s\d{4}\s\d{4}/g;
//         const matches = result.data.text.match(regex);
//         console.log(matches); // ["1234 5678 9012", "1111 2222 3333"]
//         console.log(validator.isValidNumber(matches[0].split(" ").join(""))); // "1234 5678 9012"
//         setText(result.data.text);
//         setIsLoading(false);
//       });
//   };

//   return (
//     <div className="container text-white" style={{ height: "100vh" }}>
//       <div className="row h-100">
//         <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
//           {!isLoading && (
//             <h1 className="text-center py-5 mc-5">Image To Text</h1>
//           )}
//           {isLoading && (
//             <>
//               <progress className="form-control" value={progress} max="100">
//                 {progress}%{" "}
//               </progress>{" "}
//               <p className="text-center py-0 my-0">Converting:- {progress} %</p>
//             </>
//           )}
//           {!isLoading && !text && (
//             <>
//               <input
//                 type="file"
//                 onChange={(e) =>
//                   setImage(URL.createObjectURL(e.target.files[0]))
//                 }
//                 className="form-control mt-5 mb-2"
//               />
//               <input
//                 type="button"
//                 onClick={handleSubmit}
//                 className="btn btn-primary mt-5"
//                 value="Convert"
//               />
//             </>
//           )}
//           {!isLoading && text && (
//             <>
//               <textarea
//                 className="form-control w-100 mt-5 px-10 text-black"
//                 rows="20"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//               ></textarea>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserVerification;
