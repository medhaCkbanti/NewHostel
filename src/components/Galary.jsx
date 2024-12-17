import React from "react";
import { Link } from "react-router-dom";

const Galary = () => {
  return (
    <div className="bg-[#ebe9e6] pt-14 pb-32">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold"> TAKE A LOOK </h1>

        <div className="flex justify-center gap-6 mt-10">
        
          <div className="h-[380px] w-[650px] bg-white">
            <img
              src="/src/assets/assest/20220113_101830-640x480.jpg"
              className="h-[280px] w-[630px] mx-auto mt-2 transform transition-transform duration-500 ease-in-out hover:translate-y-[-5px] hover:opacity-50"
            />

            <div to="/images" className="text-center">
                 
                 <Link to="/images">
                     <button className="bg-orange-600 text-white button-text px-4 py-2 text-center mt-8 hover:scale-125 transition duration-300 ease-in-out">
                             VIEW PHOTO GALLERY
                     </button>
                </Link>
            </div>
          </div>

          <div className="h-[380px] w-[650px] bg-white">
            <img
              src="/src/assets/assest/20231127_124812-scaled.jpg"
              className="h-[280px] w-[630px] mx-auto mt-2 transform transition-transform duration-500 ease-in-out hover:translate-y-[-5px] hover:opacity-50"
            />

            <div className="text-center">
              <button className="bg-orange-600 text-white px-4 py-2 text-center button-text font-bold mt-8 hover:scale-125 transition duration-300 ease-in-out">
                VIEW VIDEO GALLERY
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Galary; 