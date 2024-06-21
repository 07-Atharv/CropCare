import logo from "../../assets/crop care.png";
import { useState } from "react";
import axios from "axios";
const FarmReg = () => {


  const [fullName, setFullName] = useState();
  const [query, setQuery] = useState();
  const [email, setEmail] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/querie", {
        fullName,
        query,
        email,
      })
      .then((result) => {
        console.log(result);
        setTimeout(() => {
          window.alert("Our Team Will Reach to Your Query Soon!!");
        }, 500);
        setFullName("");
        setQuery("");
        setEmail("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="bg-gradient-to-r from-white to-brown-700 w-full flex justify-center items-center "
      style={{
        height: "100vh",
      }}
    >
      <img src={logo} className="w-[30rem] h-[30rem]"></img>
      <div className="w-3/5  flex flex-col justify-between mt-[4rem]">
        <div className=" w-3/4 mx-auto  ">
          <div className="flex items-center">
          </div>
          <div className="border  bg-white shadow-2xl rounded-xl p-5">
            <div className="mt-10">
              <h1 className="text-3xl mb-2 font-bold ml-[9rem]">
                Feel Free to Contact Us
              </h1>
            </div>

            <div className="my-20 flex justify-center">
              <div className="main w-4/5 m-auto mt-8 ml-14">
                <div className="register">
                  <form onSubmit={handleSubmit}>

                    <div className="display_name flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full"
                        type="text"
                        placeholder="Your Full Name"
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>{" "}
                    <div className="relative top-0 right-0"></div>
                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full"
                        type="text"
                        placeholder="Your Query"
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full"
                        type="text"
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="submit border rounded mb-4 mt-4 text-black cursor-pointer submit border rounded mb-2 text-white cursor-pointer btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-green-600 ease-out hover:translate-y-1 transition-all rounded ml-28 w-1/2">
                      <div className="wrapper flex w-full mx-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                        </svg>
                        <button
                          className="outline-none ml-10 px-2 h-full cursor-pointer py-2 text-black font-bold justify-center"
                          type="submit"
                        >
                          Submittt
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>&copy; CropCare</div>
        </div>
      </div>
    </div>
  );
};

export default FarmReg;
