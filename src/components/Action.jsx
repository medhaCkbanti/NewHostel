import React from "react";

const Action = () => {
  return (
    <div className="">
      <h2 className="text-center text-2xl font-bold mb-4"> TAKE ACTION </h2>

      <div className="relative">
        <div className="bgImage h-[400px] flex items-center justify-center gap-5">
          {/* Optional overlay to adjust background opacity */}
          <div className="overlay"></div>
          
          <div className="border-2 border-black w-[500px] h-[85%] rounded-3xl bgCard1 relative z-10">
            <p>This is Medhankar Chakma</p>
          </div>

          <div className="border-2 border-black w-[500px] h-[85%] rounded-3xl bgCard2 relative z-10">
            <p>Another Card Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;