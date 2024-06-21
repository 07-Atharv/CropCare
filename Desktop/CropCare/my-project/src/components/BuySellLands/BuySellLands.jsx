import landsell from "../../assets/landsell.avif";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import logo from "../../assets/crop_care-removebg-preview.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import Button from '@mui/material/Button';

const BuySellLands = () => {
    return (
        <div>
            <nav className="bg-blue border-gray-200 dark:bg-gray-900">
                <div className="flex fl ex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <img src={logo} className="h-14 w-12" alt="CropCare" />
                    <h1 className="text-white mr-[74rem] font-bold">CropCare</h1>
                </div>
            </nav>
            <div className="ml-[86rem] mt-2 space-x-6">
                <Link to={"/sellland"}>
                    <button className="bg-green-500  text-black font-semibold py-1 px-7 rounded-lg  text-1xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500">Sell Land</button>
                </Link>
                <Link to="/home">
                    <Button>
                        {/* <HomeIcon></HomeIcon> */}
                        {/* Back to Home */}
                    </Button>
                </Link>
            </div>
            <nav className="bg-gray-50 dark:bg-gray-700">
            </nav>

            <div className="flex items-stretch">
                <div className="ml-16 mt-4">
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={landsell} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Farm Agricultural Land</h5>
                            </a>
                            <div className="flex items-center mt-8 mb-5 mr-8">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <span className="text-1xl bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">For Sale</span>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">Farm Land</span>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Address</b> - Amba , Kolhapur.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <ExploreOutlinedIcon />
                                            <span className="ml-2"><b>Direction</b> East.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Plot Area</b> 2 Acres.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <b>Detials</b> <br></br>Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <span className="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Owner</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-16 mt-4">
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={landsell} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Farm Agricultural Land</h5>
                            </a>
                            <div className="flex items-center mt-8 mb-5 mr-8">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <span className="text-1xl bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">For Sale</span>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">Farm Land</span>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Address</b> - Amba , Kolhapur.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <ExploreOutlinedIcon />
                                            <span className="ml-2"><b>Direction</b> East.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Plot Area</b> 2 Acres.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <b>Detials</b> <br></br>Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <span className="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Owner</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-16 mt-4">
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={landsell} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Farm Agricultural Land</h5>
                            </a>
                            <div className="flex items-center mt-8 mb-5 mr-8">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <span className="text-1xl bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">For Sale</span>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">Farm Land</span>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Address</b> - Amba , Kolhapur.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <ExploreOutlinedIcon />
                                            <span className="ml-2"><b>Direction</b> East.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Plot Area</b> 2 Acres.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <b>Detials</b> <br></br>Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <span className="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Owner</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-stretch">
                <div className="ml-16 mt-4">
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={landsell} alt="product image" />
                        </a>

                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Farm Agricultural Land</h5>
                            </a>
                            <div className="flex items-center mt-8 mb-5 mr-8">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <span className="text-1xl bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">For Sale</span>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">Farm Land</span>
                            </div>

                            <div>
                                <ul>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Address</b> - Amba , Kolhapur.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <ExploreOutlinedIcon />
                                            <span className="ml-2"><b>Direction</b> East.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Plot Area</b> 2 Acres.</span>
                                        </div>
                                    </li>
                                </ul>
                                <div id="dropdown" className="z-10 hidden text-base list-none bg-black divide-y divide-black-100 rounded-lg shadow w-44 dark:bg-black-700">
                                    <ul className="py-2" aria-labelledby="dropdownButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-black-700 hover:bg-black-100 dark:hover:bg-black-600 dark:text-black-200 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-black-700 hover:bg-black-100 dark:hover:bg-black-600 dark:text-black-200 dark:hover:text-white">Export Data</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-black-100 dark:hover:bg-black-600 dark:text-black-200 dark:hover:text-white">Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4">
                                <b>Detials</b> <br></br>Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <span className="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Owner</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-16 mt-4">
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={landsell} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Farm Agricultural Land</h5>
                            </a>
                            <div className="flex items-center mt-8 mb-5 mr-8">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <span className="text-1xl bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">For Sale</span>
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                <span className="bg-blue-100 text-blue-800 text-1xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">Farm Land</span>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Address</b> - Amba , Kolhapur.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <ExploreOutlinedIcon />
                                            <span className="ml-2"><b>Direction</b> East.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-stretch">
                                            <MyLocationIcon />
                                            <span className="ml-2"><b>Plot Area</b> 2 Acres.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <b>Detials</b> <br></br>Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <span className="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Owner</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuySellLands;