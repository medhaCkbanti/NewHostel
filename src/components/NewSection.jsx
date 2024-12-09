import React from "react";

const NewSection = () => {
  return (
    <div className="bg-[#EDEBE8] mt-1 pb-10">
      <div className="container mx-auto px-44">
        <div className="py-5">
          <h2 className="text-[35px] font-serif leading-8 "> PROJECT UPASSHOK: <span className="font-bold">   EMPOWERING <br/> ACROSS BANDARBAN </span> </h2>

            <div className="flex gap-20 relative">

            <div className="flex mt-10 gap-5">
            <div className="max-w-80">
              <h3 className="mb-4 font-serif font-semibold">
                
                Find out who we are and <br /> What we do for the girl child

              </h3>

              <p>
                Project Upasshok was founded in 2004 at Bandarban by
                Humanitarian NGO with the vision of creating a world where
                remote area girls and boys, despite the patriarchal challenges
                and societal biases they face, are empowered through education.
              </p>
            </div>

            <div className="max-w-[340px]">
            <h3 className="mb-4 font-serif font-semibold font-para">
                
                Change and Continuity: Extended Support, Enhanced Empowerment
              </h3>

              <p>
                
                Starting from the academic year 2024-25, Project Nanhi Kali
                embarks on a new journey of empowering girls from lower income
                strata by supporting them through Grades 6 to 10 with targeted
                educational initiatives. In alignment with National Education
                Policy 2020, the educational support provides 21st century
                skills training, making the transition from school to the
                workplace more seamless. The skills include financial and
                digital literacy as well as life skills. The program also
                integrates physical education to cultivate leadership, teamwork
                and fitness.
              </p>
            </div>
          </div>

             <div>

                <img src="/src/assets/assest/activity-2-600x576.jpg" className="w-[500px] h-[330px] absolute -top-[60px]"/>

             </div>
            </div>

            <p className="mt-10 bg-[#DA5321] text-center py-1 max-w-[140px] white text-lg font-semibold"> READ MORE </p>

        </div>
      </div>
    </div>
  );
};

export default NewSection;
