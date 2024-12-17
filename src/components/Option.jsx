import React from "react";
import { Link } from "react-router-dom";

const Option = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 lg:px-0 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Photo Box */}
          <Link to="/photos" className="group">
            <div className="relative w-full h-60 bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/src/assets/assest/01-700x300.jpg"
                alt="Photos"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white uppercase">
                  Photos
                </h2>
              </div>
            </div>
          </Link>

          {/* Video Box */}
          <Link to="/videos" className="group">
            <div className="relative w-full h-60 bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/src/assets/assest/video-placeholder.jpg"
                alt="Videos"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white uppercase">
                  Videos
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Option;
