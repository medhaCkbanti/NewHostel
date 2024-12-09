import React from "react";

const Donate = () => {
  return (
      
       
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Donate to Sponsor a Nanhi Kali */}
            <div className="w-full bg-[#FFC511] md:w-1/2 flex justify-center items-center text-black text-lg font-semibold text-center py-6  m-2 rounded-md  hover:bg-black hover:text-[#fff]">
              DONATE TO SPONSOR A NANHI KALI
            </div>
            {/* Gift a Nanhi Kali Sponsorship */}
            <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-900 white font-semibold text-lg text-center py-6 m-2 rounded-md hover:bg-[#FFC511] hover:text-black">
                GIFT A NANHI KALI SPONSORSHIP
            </div>
          </div>
        

  );
};

export default Donate;
