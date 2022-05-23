import React from "react";
import { Link } from "react-router-dom";
import banner from "../../Images/banner/banner.jpeg";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
          <div className="mb-5">
            <h1 class="text-5xl font-bold ">DeComputerParts</h1>
            <p class="py-6">
              DeComputerParts Manufacturer gives you the best computer tools
              like Keyboard, Mouse, Processor, Graphic Card & Ram.
            </p>
            <Link className="btn btn-primary w-full  lg:w-fit" to="/allproduct">
              Check our Parts here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
