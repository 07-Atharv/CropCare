import logo from "../../assets/ppllaant.jpg";
import { Link } from "react-router-dom";
import UI from "../../assets/UI.svg";
import cropcare from "../../assets/crop_care-removebg-preview.png";
import imgone from "../../assets/41611.jpg";
import imgto from "../../assets/dc4ac881-9d51-47a3-898f-6dbf25f440fe.jpg";
const LandingPage = () => {
  return (
    <div>
      <div className="flex items-stretch">
        <img src={cropcare} className="w-[6rem] h-[6rem]">
        </img>
        <nav className="ml-[30rem] w-auto bg-white border-gray-200 dark:bg-gray-900">
          {/* <div className="max-w-screen-xl"> */}
          {/* <img src={cropcare} className="w-[8rem] h-[8rem] mt-8 justify-left">
            </img> */}
          {/* <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            > */}
          <ul className="font-small flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-white md:bg-transparent  md:p-0 dark:text-white "
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/farmproducts"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                 Products
              </Link>
            </li>
            <li>
              <Link
                to="tuts"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tutorials
              </Link>
            </li>
            <li>
              <Link
                to="topnews"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                 News
              </Link>
            </li>
            <li>
              <Link
                to="buysell"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sell Lands
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>

          </ul>
          {/* </div> */}
          {/* </div> */}
        </nav>
      </div>
      <div className="items-start  relative top-0 mt-8 ml-10">
        <div>
          <h1 className="text-6xl font-bold">
            <span style={{ color: "black" }}>Bring</span>{" "}
            <span style={{ color: "green" }}>GREEN</span>{" "}
            <span style={{ color: "black" }}>to</span>
          </h1>
        </div>
        <div className="flex items-start">
          <h1 className="text-6xl font-bold">
            <span style={{ color: "black" }}>your home and</span>{" "}
          </h1>
        </div>
        <div className="flex items-start">
          <h1 className="text-6xl font-bold">
            <span style={{ color: "black" }}> make you feel</span>{" "}
            <span style={{ color: "green" }}>BETTER</span>
          </h1>
        </div>
        <div className="my-14">
          <p className="text-2xl">Lorem ipsum dolor sit amet,</p>
          <p className="text-2xl">consectetur adipiscing elit. Cursus</p>
          <p className="text-2xl">imperdiet sed id elementum.</p>
          <p className="text-2xl">Quam vel aliquam sit.</p>
        </div>
        {/* <div className="flex items-stretch ">
          <div>
            <h2 className="font-bold text-4xl ml-3">125+</h2>
            <h1 className="text-1xl ml-3">Lorem Epsumm</h1>
          </div>
          <div>
            <h2 className="font-bold text-4xl ml-3">10+</h2>
            <h1 className="text-1xl ml-3">Lorem Epsumm</h1>
          </div>
          <div>
            <h2 className="font-bold text-4xl ml-3">78K</h2>
            <h1 className="ml-3 text-1xl">Lorem Epsumm</h1>
          </div>
        </div> */}
        <Link to="/tuts">
          <button className="bg-green-500 hover:bg-blue-400 text-black font-semibold py-3 px-10 rounded-full my-14 text-3xl">
            Start Farming
          </button>
        </Link>
        <h1 className="text-6xl font-bold ml-2 mt-10">About Us</h1>
        <div className="flex items-stretch mt-16 ml-24 space-x-20">
          <div className="shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-green-200 px-5 py-5 text-2xl border rounded-xl ">
            <div className="w-full flex justify-center">
              <img src={UI} className="w-1/3" alt=""></img>
            </div>
            <p className="text-lg font-bold">Weather Forecast Analytics</p>
            <p className="text-sm mt-2">
              Exam friendly dashboards simplify <br />
              exam management for institutions
            </p>
          </div>
          <div className="shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-green-200 px-5 py-5 text-2xl border rounded-xl ">
            <div className="w-full flex justify-center">
              <img src={UI} className="w-1/3" alt=""></img>
            </div>
            <p className="text-lg font-bold">Consultation Expert Service</p>
            <p className="text-sm mt-2">
              Exam friendly dashboards simplify <br />
              exam management for institutions
            </p>
          </div>
          <div className="shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-green-200 px-5 py-5 text-2xl border rounded-xl ">
            <div className="w-full flex justify-center">
              <img src={UI} className="w-1/3" alt=""></img>
            </div>
            <p className="text-lg font-bold">Crop Health and Monitoring Alerts</p>
            <p className="text-sm mt-2">
              Exam friendly dashboards simplify <br />
              exam management for institutions
            </p>
          </div>

          {/*<div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
            <img
              src={logo}
              className="h-[8rem] w-[8rem] ml-2 mb-2"
              alt="Loading"
            />
            <h1 className="ml-2 font-semibold">Atharv powalkar</h1>
          </div> */}

          {/* <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
            <img
              src={logo}
              className="h-[8rem] w-[8rem] ml-2 mb-2"
              alt="Loading"
            />
            <h1 className="ml-2 font-semibold">Atharv powalkar</h1>
          </div>
          <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
            <img
              src={logo}
              className="h-[8rem] w-[8rem] ml-2 mb-2"
              alt="Loading"
            />
            <h1 className="ml-2 font-semibold">Atharv powalkar</h1>
          </div> */}

          {/* <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
            <img
              src={logo}
              className="h-[8rem] w-[8rem] ml-2 mb-2"
              alt="Loading"
            />
            <h1 className="ml-2 font-semibold">Atharv powalkar</h1>
          </div>
        </div>
        <div className="flex items-stretch mt-16 ml-20">
          <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
            <img
              src={logo}
              className="h-[8rem] w-[8rem] ml-2 mb-2"
              alt="Loading"
            />
            <h1 className="ml-2 font-semibold">Atharv powalkar</h1>
          </div> */}

          {/* <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
            <img
              src={logo}
              className="h-[8rem] w-[8rem] ml-2 mb-2"
              alt="Loading"
            />
            <h1 className="ml-2 font-semibold">Atharv powalkar</h1>
          </div>
          <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
            <img
              src={logo}
              className="h-[8rem] w-[8rem] ml-2 mb-2"
              alt="Loading"
            />
            <h1 className="ml-2 font-semibold">Atharv powalkar</h1>
          </div> */}

          {/* <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
            <img
              src={logo}
              className="h-[8rem] w-[8rem] ml-2 mb-2"
              alt="Loading"
            />
            <h1 className="ml-2 font-semibold">Atharv powalkar</h1>
          </div> */}
        </div>

        <div className="flex items-stretch mt-16 ml-24 space-x-20">
          <div className="shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-green-200 px-5 py-5 text-2xl border rounded-xl ">
            <div className="w-full flex justify-center">
              <img src={UI} className="w-1/3" alt=""></img>
            </div>
            <p className="text-lg font-bold">Interactive Planting Calendar</p>
            <p className="text-sm mt-2">
              Exam friendly dashboards simplify <br />
              exam management for institutions
            </p>
          </div>

          <div className="shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-green-200 px-5 py-5 text-2xl border rounded-xl ">
            <div className="w-full flex justify-center">
              <img src={UI} className="w-1/3" alt=""></img>
            </div>
            <p className="text-lg font-bold">Gardening Practices</p>
            <p className="text-sm mt-2">
              Exam friendly dashboards simplify <br />
              exam management for institutions
            </p>
          </div>

          <div className="shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 p-2 text-center  justify-center shadow-xl my-2 bg-gradient-to-b from-white to-green-200 px-5 py-5 text-2xl border rounded-xl ">
            <div className="w-full flex justify-center">
              <img src={UI} className="w-1/3" alt=""></img>
            </div>
            <p className="text-lg font-bold">Educational Resources and Tutorials</p>
            <p className="text-sm mt-2">
              Exam friendly dashboards simplify <br />
              exam management for institutions
            </p>
          </div>
        </div>

        <div>
          <h1 className="mt-[12rem] ml-8 text-6xl font-medium ">
            Projects and{" "}
          </h1>
          <h1 className="ml-8 text-6xl font-medium">practice</h1>
          <div className="flex items-stretch mt-8 ml-20 space-x-24">
            <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300 mt-16">
              <img
                className="w-full"
                src={logo}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300 ml-16 mt-16">
              <img
                className="w-full"
                src={imgone}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300 ml-16 mt-16">
              <img
                className="w-full"
                src={imgto}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-[16rem] ml-8 text-6xl font-semibold">
            Grow Your Own
          </h1>
          <h1 className=" ml-8 text-6xl font-semibold ml-8 text-6xl font-semibold">
            <span style={{ color: "green" }}>Favourite</span>{" "}
          </h1>

          <p className="text-4xl ml-8 mt-[10rem]">
            We help first plant make your
          </p>
          <p className="text-4xl ml-8">own beautiful</p>
          <p className="text-4xl ml-8">garden with our plant collection</p>
          <div className="flex items-stretch">
            <button className="bg-green-500 text-2xl hover:bg-blue-700 text-black font-bold py-4 px-10 rounded-full my-14 ml-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Explore
            </button>
            <button className="bg-green-500 text-2xl hover:bg-blue-700 text-black font-bold py-4 px-10 rounded-full my-14 ml-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Learn More
            </button>
          </div>
          {/* <hr></hr> */}
          {/* <div className="flex items-stretch">
            <img
              src={shotone}
              className="mt-[8rem] w-[8rem] ml-[20rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
            <img
              src={shothree}
              className="mt-[10rem] w-[8rem] ml-[20rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
            <img
              src={shothree}
              className="mt-[10rem] w-[8rem] ml-[20rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img> */}
          {/* <img src={shothree} className="mt-[10rem] w-[8rem] ml-20"></img> */}
          {/* </div> */}
          {/* <div className="flex items-stretch"> */}
          {/* <img src={shotone} className="mt-[10rem] w-[8rem] ml-20"></img> */}
          {/* <img
              src={shotwo}
              className="mt-[10rem] w-[8rem] ml-[10rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
            <img
              src={shotwo}
              className="mt-[10rem] w-[8rem] ml-[16rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
            <img
              src={shotwo}
              className="mt-[10rem] w-[8rem] ml-[16rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
            <img
              src={shotwo}
              className="mt-[10rem] w-[8rem] ml-[16rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img> */}
          {/* </div> */}
          {/* <div>
          <img src={blur} className="my-10 ml-[60rem]"></img>
        </div> */}
          {/* <hr></hr> */}
        </div>
        <div className="mt-[22rem] ml-8">
          <h1 className="font-semibold text-4xl ml-52">
            Plants, Potions, and Possibilities: A Journey to Wellness
          </h1>
          {/* <div className="justify-center">
            <img src={shotfour} />
          </div> */}
          <h1 className="mt-[16rem] text-4xl flex justify-center">
            Explore a world of lush greenery and sustainable living with our
            blog. Dive into the art of nurturing bamboo, herbs, ornamental
            grasses, ginseng, and medicinal plants. Uncover tips and secrets for
            creating an eco-friendly oasis at home, one plant at a time. Join us
            on this journey towards a greener, healthier, and more vibrant
            lifestyle.
          </h1>
        </div>
      </div>
      <span>
        <div>
          {/* <footer className="bg-black-50 text-center dark:bg-neutral-900  mt-20 w-full	 ">
            <div className="bg-black/5 p-4 text-left text-surface dark:text-white w-400  text-2xl">
              2024 CropCare
              <div className="ml-[40rem] ">
                <div className="text-white italic">Follow Us</div>
                <div className="flex items-stretch space-x-2 mt-2">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <FacebookIcon />
                </div>
                <div className="mt-4">
                  <h1 className="italic">Call Us</h1>
                  <h1>1800-2987-3343</h1>
                </div>
              </div>
            </div>
            <div className="bg-black/5 p-4 text-left text-surface dark:text-white w-400 mr-10 text-1xl">
              High level experience in web design<br></br> and development
              knowledge, producing quality work.
            </div>
            <hr className="w-[35rem]"></hr>
            <p className="text-white w-400 text-opacity-70 text-left ml-4 mt-6">
              © 202 All Rights Reserved
            </p>
            <div className="flex items-stretch text-white p-2 space-x-4 mt-10">
              <div>Privacy Policy</div>
              <div>Privacy Policy</div>
              <div>Privacy Policy</div>
              <div>Privacy Policy</div>
              <div>Privacy Policy</div>
            </div>
          </footer> */}

          <footer className="dark:bg-gray-900 mt-20">
            <div className="mx-auto w-full max-w-screen">
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Company
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium italic">
                    <li className="mb-4">
                      <a href="#" className=" hover:underline ">
                        About
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Careers
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Help center
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium italic">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Instagram
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Twitter
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Facebook
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium italic">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Licensing
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Download
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium italic">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        iOS
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Android
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Windows
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        MacOS
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-2xl text-gray-500 dark:text-gray-300 sm:text-center">
                  © 2024 <a href="https://flowbite.com/">CropCare™</a>. All
                  Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        // fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      // clip-rule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 21 16"
                    >
                      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                    </svg>
                    <span className="sr-only">Discord community</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 17"
                    >
                      <path
                        // fill-rule="evenodd"
                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      // clip-rule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        // fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      // clip-rule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">GitHub account</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        // fill-rule="evenodd"
                        d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      // clip-rule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Dribbble account</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </span>
    </div>
  );
};

export default LandingPage;
