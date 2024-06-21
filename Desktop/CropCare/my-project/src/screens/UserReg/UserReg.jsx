import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FarmReg = () => {
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setlastName] = useState();
  const [city, setCity] = useState();
  const [occupation, setOccupation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/reguser", {
        firstName,
        middleName,
        lastName,
        city,
        occupation,
      })
      .then((result) => {
        console.log(result);
        setTimeout(() => {
          window.alert("Registration Successful!");
        }, 2000); // 1000 milliseconds = 1 second
      })
      .catch((err) => console.log(err));
  };



  return (
    <div
      className="bg-gradient-to-r from-white to-green-300 w-full flex justify-center items-center "
      style={{
        height: "100vh",
      }}
    >
      <div className="w-3/5  flex flex-col justify-between mt-[4rem]">
        <div className=" w-3/4 mx-auto  ">
          <div className="flex items-center">
          </div>

          <div className="border  bg-white shadow-2xl rounded-xl p-5">
            <div className="mt-10">
              <h1 className="text-3xl mb-2 font-bold ml-12">Hello User ..!!</h1>
            </div>

            <div className="my-20 flex justify-center">
              <div className="main w-4/5 m-auto mt-8 ml-14">
                <div className="register">
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-4xl mb-6">Enter Details</h2>
                    <div className="display_name flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full"
                        type="text"
                        placeholder="First Name"
                        autoComplete="off"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full"
                        type="text"
                        placeholder="Middle Name"
                        autoComplete="off"
                        onChange={(e) => setMiddleName(e.target.value)}
                      />
                    </div>
                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full"
                        type="text"
                        placeholder="Last Name"
                        autoComplete="off"
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </div>
                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full"
                        type="text"
                        placeholder="City"
                        autoComplete="off"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>

                    <div className="occupation flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full"
                        type="text"
                        placeholder="Occupation"
                        autoComplete="off"
                        onChange={(e) => setOccupation(e.target.value)}
                      />
                    </div>
                    <div className="contact flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full"
                        type="number"
                        placeholder="Contact Number"
                        autoComplete="off"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="submit border w-1/2 rounded mb-2 text-white cursor-pointer btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-green-600 ease-out hover:translate-y-1 transition-all rounded ml-28">
                      <div className="wrapper flex w-max mx-auto font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                        </svg>
                        <Link to="/useregsucc">
                          <button
                            className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-green"
                            type="submit"
                          >
                            Yes I am User!!
                          </button>
                        </Link>
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
    </div >
  );
};

export default FarmReg;
