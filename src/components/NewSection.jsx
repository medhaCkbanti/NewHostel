
import React from "react";

const NewSection = () => {
  return (
    <div className="relative -top-28">
      <div className="container mx-auto px-10">
         
         <div className="flex">

          <div className="w-[580px] h-[250px] bg-white flex items-center justify-center "> 
            
            <h1 className="px-10 text-2xl font-extrabold"> CARE works to fight poverty and achieve social justice</h1>  

           </div>

          <div className="bg-[#1c1d2b] w-[1000px] flex flex-col items-center justify-center px-10">

            <p className="text-[white] text-xl"> We put women and girls in the center because we cannot 
              overcome poverty until all people have equal rights and 
              opportunities.
             </p>

             <button className="text-[white] border-[5px] border-[#e36f1e] mt-3 px-10 py-2 block text-left"> Learn About us </button>

          </div>

             
             
         </div>
      </div>
    </div>
  );
};

export default NewSection;