import { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


const FarmReg = () => {
  const [fullName, setFullName] = useState();
  const [farmSize, setFarmSize] = useState();
  const [typeFarming, setTypeFarming] = useState();
  const [yoe, setYoe] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [pass, setPass] = useState();

  // const history = useHistory(); // Get the history object

  const handleSubmit = (e) => {
    e.preventDefault;
    axios
      .post("http://localhost:3001/register", {
        fullName,
        farmSize,
        typeFarming,
        yoe,
        state,
        city,
        pass,
      })
      .then((result) => console.log(result).then((result) => {
        console.log(result);
        setTimeout(() => {
          window.alert("Registration Successful!");
          // history.push("/farmproducts");
        }, 2000); // 1000 milliseconds = 1 second
        setFullName("");
        setFarmSize("");
        setTypeFarming("");
        setYoe("");
        setState("");
        setCity("");
        setPass("");
      }))
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="bg-gradient-to-r from-white to-green-300 w-full flex justify-center items-center "
      style={{
        height: "100vh",
      }}
    >
      <div className="w-3/5  flex flex-col justify-between mt-[2rem]">
        <div className=" w-3/4 mx-auto  ">
          <div className="flex items-center">
          </div>

          <div className="border bg-white shadow-2xl rounded-xl p-4">
            <div className="mt-6">
              <h1 className="text-3xl mb-2 font-bold ml-14">
                Hello Farmer ..!!
              </h1>
            </div>

            <div className="my-8 flex justify-center">
              {/* <style></style> */}
              <div className="main w-4/5 m-auto mt-8 ml-14">
                <div className="register">
                  <h2 className="text-4xl mb-6">Register</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="display_name flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                        type="text"
                        autoComplete="off"
                        placeholder="Your Full Name"
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>

                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                        type="text"
                        autoComplete="off"
                        placeholder="Farm Size (in acres or hectares)"
                        onChange={(e) => setFarmSize(e.target.value)}
                      />
                    </div>
                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                        type="text"
                        autoComplete="off"
                        placeholder="Type of Farming (e.g., crop farming, livestock farming)"
                        onChange={(e) => setTypeFarming(e.target.value)}
                      />
                    </div>
                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                        type="text"
                        autoComplete="off"
                        placeholder="Years of Farming Experience"
                        onChange={(e) => setYoe(e.target.value)}
                      />
                    </div>
                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                        type="text"
                        autoComplete="off"
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>

                    <div className="username flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                        type="text"
                        autoComplete="off"
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>

                    <div className="password flex border rounded text-gray-500 mb-4">
                      <input
                        className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                        type="password"
                        placeholder="password"
                        autoComplete="off"
                        onChange={(e) => setPass(e.target.value)}
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
                        <Link to={"/farmregsucc"}>
                          <button
                            className="outline-none ml-4 px-2 h-full cursor-pointer py-2 text-black font-bold justify-center"
                            type="submit"
                          >
                            Yes I am a Farmer
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
    </div>
  );
};

export default FarmReg;
