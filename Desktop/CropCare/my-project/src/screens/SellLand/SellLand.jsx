import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const FarmReg = () => {
    const [fullName, setFullName] = useState();
    const [farmSize, setFarmSize] = useState();
    const [direction, setDirection] = useState();
    const [location, setLocation] = useState();
    const [details, setDetails] = useState();
    const [price, setPrice] = useState();
    const [neg, setNeg] = useState();


    const handleSubmit = (e) => {
        e.preventDefault;
        axios
            .post("http://localhost:3001/etc", {
                fullName,
                farmSize,
                direction,
                location,
                details,
                price,
                neg,
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
            <div className="w-3/5  flex flex-col justify-between mt-[2rem]">
                <div className=" w-3/4 mx-auto  ">
                    <div className="flex items-center">
                    </div>

                    <div className="border bg-white shadow-2xl rounded-xl p-4">
                        <div className="mt-6">
                            <h1 className="text-3xl mb-2 font-bold ml-14">
                                Hello Owner..!!
                            </h1>
                        </div>

                        <div className="my-8 flex justify-center">
                            <div className="main w-4/5 m-auto mt-8 ml-14">
                                <div className="register">
                                    <h2 className="text-4xl mb-6">Sell Your Land</h2>
                                    <h2 className="text-2xl mb-6">Enter Details to Sell Land</h2>
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
                                                placeholder="Plot Area (in acres or hectares)"
                                                onChange={(e) => setFarmSize(e.target.value)}
                                            />
                                        </div>
                                        <div className="username flex border rounded text-gray-500 mb-4">
                                            <input
                                                className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                                                type="text"
                                                autoComplete="off"
                                                placeholder="Direction of Land"
                                                onChange={(e) => setDirection(e.target.value)}
                                            />
                                        </div>
                                        <div className="username flex border rounded text-gray-500 mb-4">
                                            <input
                                                className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                                                type="text"
                                                autoComplete="off"
                                                placeholder="Enter the location of the Farm"
                                                onChange={(e) => setLocation(e.target.value)}
                                            />
                                        </div>
                                        <div className="username flex border rounded text-gray-500 mb-4">
                                            <input
                                                className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                                                type="text"
                                                autoComplete="off"
                                                placeholder="Enter Details about Land"
                                                onChange={(e) => setDetails(e.target.value)}
                                            />
                                        </div>

                                        <div className="username flex border rounded text-gray-500 mb-4">
                                            <input
                                                className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                                                type="text"
                                                autoComplete="off"
                                                placeholder="Enter Estimated price"
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                        </div>
                                        <div className="username flex border rounded text-gray-500 mb-4">
                                            <input
                                                className="outline-none px-4 h-full py-2 text-lg w-full form-control"
                                                type="text"
                                                autoComplete="off"
                                                placeholder="Negotiable or Not"
                                                onChange={(e) => setNeg(e.target.value)}
                                            />
                                        </div>

                                        <div className="submit border rounded mb-4 mt-4 text-black cursor-pointer submit border rounded mb-2 text-white cursor-pointer btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-green-600 ease-out hover:translate-y-1 transition-all rounded ml-28 w-1/2">
                                            <div className="wrapper flex w-full mx-auto">
                                                {/* <Link to={"/buysell"}> */}
                                                <button
                                                    className="outline-none ml-12 px-2 h-full cursor-pointer py-2 text-black font-bold justify-center"
                                                    type="submit"
                                                >
                                                    Ready to Sell
                                                </button>
                                                {/* </Link> */}
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


