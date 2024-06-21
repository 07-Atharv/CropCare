import React from "react";
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";
const images = [
  "/imresizer-1718854368456.jpg",
  "/imresizer-1718854368456.jpg",
  "/imresizer-1718854368456.jpg"
];

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const FarmingProducts = () => {
  return (
    <>
      <nav className="bg-blue border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          </a>

          <ul className="flex items-stretch mr-24 space-x-12">
            <li>
              <Link
                to="/Fert"
                className="text-white md:bg-transparent dark:text-white text-2xl"
                aria-current="page"
              >
                Fertilizers
              </Link>
            </li>
            <li>
              <Link
                to="/Pest"
                className="text-white md:bg-transparent dark:text-white text-2xl"
              >
                Pesticides
              </Link>
            </li>
            <li>
              <Link
                to="/Chem"
                className="text-white md:bg-transparent dark:text-white text-2xl"
              >
                Chemicals
              </Link>
            </li>
            <li>
            </li>
            <li>
              <Link
                to="/Equip"
                className="text-white md:bg-transparent dark:text-white text-2xl"
              >
                Equipments
              </Link>
            </li>
            <li>
              <Link
                to="/Raw"
                className="text-white md:bg-transparent dark:text-white text-2xl"
              >
                Raw Material
              </Link>
            </li>
            <li>
              <Link
                to="/Bsrent"
                className="text-white md:bg-transparent dark:text-white text-2xl"
              >
                Buy/Sell On Rent
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="slide-container">
        <Slide {...properties}>
          {images.map((each, index) => (
            <div key={index} className="each-slide">
              <div style={{ 'backgroundImage': `url(${each})`, 'height': '700px', 'backgroundSize': 'cover' }}>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default FarmingProducts;
