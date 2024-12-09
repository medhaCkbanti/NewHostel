import React from "react";

const Banner2 = () =>  {
    return (
      <div className="relative bg-blue-900 text-white">
        {/* Main Content Section */}
        <div className="relative flex items-center justify-between px-6 py-10 md:px-12">
          <div className="max-w-lg space-y-4">
            <h1 className="text-4xl font-bold">
              Donate Now And <br />
              <span className="text-yellow-400">Make A Difference</span>
            </h1>
            <p className="text-lg">
              Over the years, our focus has expanded to incorporate areas like
              education for children and helping underprivileged women, youth, and
              children become self-reliant through education and vocational
              training.
            </p>
            <button className="px-6 py-3 font-semibold text-blue-900 bg-red-500 rounded-lg hover:bg-red-600">
              Donate Now
            </button>
          </div>
          <div className="hidden md:block">
            {/* Basketball group image */}
            <img
              src="/path-to-your-image.jpg"
              alt="Basketball Group"
              className="rounded-xl"
            />
          </div>
        </div>
  
        {/* Cloud-Like Ripped Effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath:
              "path('M0,100 Q30,80 60,100 T120,100 T180,100 T240,100 T300,100 T360,100 T420,100 T480,100 T540,100 T600,100 L600,200 L0,200 Z')",
          }}
        ></div>
      </div>
    );
  };
export default Banner2;
