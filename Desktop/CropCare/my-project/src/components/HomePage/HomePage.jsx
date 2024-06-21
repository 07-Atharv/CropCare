import logo from "../../assets/crop care.png";
import plant from "../../assets/plant-svgrepo-com.svg";
import plant2 from "../../assets/plant-svgrepo-com (4).svg";
// import background from "../../assets/image.png";
// import farmingcc from "../../assets/image-with-field-tractor-agricultural-concept.jpg";
// import axios from "react-axios";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <div className="bg-lime-500 bg-cover h-screen max-w-[55rem]">
        <div className="max-w-[58rem]">
          <p className="text-5xl font-bold  ml-52 underline">
            <span style={{ color: "black" }}>SMART FARMING</span>{" "}
          </p>
          <p className="text-2xl mt-[10rem] ml-12 mr-6 space-x-4">
            Smart home gardening integrates technology to tailor
            recommendations, optimize resourcee usage, and enhance
            productivityby monitoring environmental factors likelikelike
            sunlight,promote , and soil soil. Itl quality. It promotess
            promotespromotespromotesthe sustainability promote by minimizing
            waste and fosters community engagement through accessible
            interfaces, mamaking gardening more accessible and rewarding for
            allrewardingrewardingrewsardingaaaa.
          </p>
          <div className="items-stretch space-x-18 flex flex-row">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24 ml-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg> */}
            <img
              src={plant}
              className="mt-[8rem] w-[8rem] ml-[12rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
            <img
              src={plant2}
              className="mt-[8rem] w-[8rem] ml-[12rem] transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-150 duration-500"
            ></img>
          </div>
        </div>
      </div>
      <div className=" absolute top-0 right-10 items-stretch space-x-4">
        <Link to="/usereg">
          <button className="bg-green-500  text-white font-semibold py-1 px-7 rounded-lg my-14 text-2xl mr-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500">
            Register As User
          </button>
        </Link>

        <Link to="/farmreg">
          <button className="bg-green-500  text-white font-semibold py-1 px-7 rounded-lg my-14 text-2xl mr-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500">
            Farmer
          </button>
        </Link>
      </div>
      <div className="absolute top-[10rem] right-[1rem]">
        <img src={logo} className="mt-[2rem] ml-20 w-[34rem] h-[34rem]"></img>
      </div>
      {/* <div>
        <h1 className="text-8xl mt-2 text-center mt-12  text-green-700 text-opacity-12 font-bold">
          CROP CARE
        </h1>
      </div> */}
      <div>
        {/* <h1 className="text-center mt-12 text-2xl font-semibold">
          AGRO PRODUCT COMPANY
        </h1> */}
      </div>
      {/* <img src={farmingcc} className="w-screen h-screen mt-10"></img> */}
      <div className="flex items-stretch">
        <div>
          <h1 className="text-6xl drop-shadow-{2xl} mt-[12rem] text-left font-bold">
            URBAN <br></br> FARMING<br></br> MADE EASY
          </h1>
        </div>
        <div>
          <p className="mt-[12rem] ml-4 text-2xl text-shadow shadow-red-500">
            With technology-driven solutions, optimizing resources and fostering
            community engagement for accessible and sustainable gardening in
            city environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
