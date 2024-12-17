import React from "react";

const NewsEvent = () => {
  return (
    <div className="bg-[#e1e1e1] mt-10 pt-14 pb-8">
      <div className="container mx-auto px-10">
        <h1 className="text-center text-3xl">

          NEWS &<span className="font-semibold"> EVENTS </span>{" "}
        </h1>
        <p className="text-center mt-4 font-bold text-base">
      
          Stay up-to-date with the latest from Upasshak{" "}
          
        </p>

        <div className="flex mt-14 justify-between">
          <div className="h-[400px]  w-[370px] lg:w-[420px] bg-[#ffffff]">
            <div className="h-[200px] w-[350px] lg:w-[400px] mx-auto mt-2">
              <img
                src="/src/assets/assest/skill-development-training.jpg"
                className="h-full w-full "
              />
            </div>

            <div className="px-5 mt-5">
              <h3 className="text-base font-semibold text-center mb-4">
  
                Mary Kom Ignites the Fighting Spirit in Nanhi Kalis

              </h3>

              <p className="text-gray-500 text-sm mb-4">
                Project Nanhi Kali and F.A.S.T Rani proudly hosted an inspiring
                event with the legendary boxer Mary Kom, who met with our young
                scholars, the Nanhi Kalis on Saturday, […]
              </p>
            </div>
          </div>

          <div className="h-[430px] w-[370] lg:w-[420px] bg-[#ffffff]">
            <div className="h-[270px] w-[350px] lg:w-[400px] mx-auto mt-2">
              <img
                src="/src/assets/assest/vision-1.jpg"
                className="h-full w-full "
              />
            </div>

            <div className="px-5 mt-5">
              <h3 className="text-base font-semibold text-center mb-4">
  
                Mary Kom Ignites the Fighting Spirit in Nanhi Kalis

              </h3>

              <p className="text-gray-500 text-sm mb-4">
                Project Nanhi Kali and F.A.S.T Rani proudly hosted an inspiring
                event with the legendary boxer Mary Kom, who met with our young
                scholars, the Nanhi Kalis on Saturday, […]
              </p>
            </div>
          </div>

          <div className="h-[400px] w-[420px] bg-[#ffffff]">
            <div className="h-[240px] w-[400px] mx-auto mt-2">
              <img
                src="/src/assets/assest/178731301_112226077673849_6.jpg"
                className="h-full w-full "
              />
            </div>

            <div className="px-5 mt-5">
              <h3 className="text-base font-semibold text-center mb-4">
  
                Mary Kom Ignites the Fighting Spirit in Nanhi Kalis

              </h3>

              <p className="text-gray-500 text-sm mb-4">
                Project Nanhi Kali and F.A.S.T Rani proudly hosted an inspiring
                event with the legendary boxer Mary Kom, who met with our young
                scholars, the Nanhi Kalis on Saturday, […]
              </p>
            </div>
          </div>

        </div>


        <div className="mt-10 flex justify-center gap-8">
        <button className="bg-orange-600 text-white text-sm font-bold uppercase px-4 py-2 hover:bg-orange-800 mr-4 text">
          More News & Events
        </button>
        <button className="bg-orange-600 text-white font-bold uppercase px-4 py-2 hover:bg-orange-800 text">
          Become a Donor
        </button>
      </div>


      </div>
    </div>
  );
};

export default NewsEvent; 