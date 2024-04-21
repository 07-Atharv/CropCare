import logo from "../../assets/ppllaant.jpg";
import blur from "../../assets/image 7.png";
import shotone from "../../assets/Ellipse 164 (1).png";
import shotwo from "../../assets/Ellipse 164 (2).png";
import shothree from "../../assets/Ellipse 164.png";

const LandingPage = () => {
  return (
    <div>
      <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a>
              <span className="text-2xl font-semibold whitespace-nowrap dark:text-white justify-left">
                CropCare
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white md:bg-transparent  md:p-0 dark:text-white "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Farming Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="items-start  relative top-0 mt-8 ml-10">
        <div>
          <h1 className="text-4xl font-bold">
            <span style={{ color: "black" }}>Bring</span>{" "}
            <span style={{ color: "green" }}>GREEN</span>{" "}
            <span style={{ color: "black" }}>to</span>
          </h1>
        </div>
        <div className="flex items-start">
          <h1 className="text-4xl font-bold">
            <span style={{ color: "black" }}>your home and</span>{" "}
          </h1>
        </div>
        <div className="flex items-start">
          <h1 className="text-4xl font-bold">
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
        <div className="flex items-stretch ">
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
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-8 rounded-full my-14 text-2xl">
          Start Farming
        </button>
        <h1 className="text-4xl font-bold ml-2 mt-10">About Us</h1>
        <div className="flex items-stretch mt-16 ml-20">
          <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
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
          </div>
          <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
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
          </div>
          <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
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
          </div>
          <div className="box-sizing h-[15rem] w-[15rem] p-10 border-4 border-cyan-900 ml-10 rounded-lg">
            <img
              src={logo}
              className="h-[8rem] w-[8rem] ml-2 mb-2"
              alt="Loading"
            />
            <h1 className="ml-2 font-semibold">Atharv powalkar</h1>
          </div>
        </div>

        <div>
          <h1 className="mt-[12rem] ml-8 text-6xl font-medium ">
            Projects and{" "}
          </h1>
          <h1 className="ml-8 text-6xl font-medium">practice</h1>
          <div className="flex items-stretch mt-8 ml-20">
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
          </div>
        </div>
        <div>
          <h1 className="mt-20 ml-8 text-6xl font-semibold">Grow Your Own</h1>
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
          <div className="flex items-stretch">
            <img
              src={shotone}
              className="mt-[10rem] w-[8rem] ml-[20rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
            <img
              src={shothree}
              className="mt-[10rem] w-[8rem] ml-[20rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
            <img
              src={shothree}
              className="mt-[10rem] w-[8rem] ml-[20rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
            {/* <img src={shothree} className="mt-[10rem] w-[8rem] ml-20"></img> */}
          </div>
          <div className="flex items-stretch">
            {/* <img src={shotone} className="mt-[10rem] w-[8rem] ml-20"></img> */}
            <img
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
            ></img>
          </div>
          {/* <div>
          <img src={blur} className="my-10 ml-[60rem]"></img>
        </div> */}
        </div>
        <div className="mt-[16rem] ml-8">
          <h1 className="font-semibold text-4xl ml-52">
            Plants, Potions, and Possibilities: A Journey to Wellness
          </h1>
          <h1 className="mt-[6rem] text-2xl flex justify-center">
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
          <footer className="bg-zinc-50 text-center dark:bg-neutral-700  mt-20 w-full	 ">
            <div className="bg-black/5 p-6 text-center text-surface dark:text-white w-100 mr-10">
              © 2024 CropCare By Atharv Powalkar & Swayam Pendurkar
            </div>
          </footer>
        </div>
      </span>
    </div>
  );
};

export default LandingPage;
