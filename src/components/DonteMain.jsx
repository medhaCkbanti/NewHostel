import React from "react";

const DonteMain = () => {
  return (
    <div className="bg-[#0394B5]">
      <div className="container mx-auto px-10 h-[550px] flex items-center justify-center gap-32">
        <div className="w-[35%]">
          <h2 className="text-3xl">
            HOW CAN YOU <span className="font-bold"> HELP? </span>
          </h2>
          <p className="mt-5 text-[16px] text-[#232323]">
            Project Nanhi Kali is a participatory project wherein you can
            sponsor the education of an underprivileged girl child for a minimum
            period of one year. For just Rs. 6,000, you can provide her with the
            key to a brighter future. Your support goes beyond mere financial
            assistance. It's an investment in her potential, her dreams, and her
            empowerment. With your sponsorship, she gains access to essential
            21st century skills, a physical education module and a chance for
            her to break free from the humdrum of doing household work.
          </p>
          <p className="mt-3 text-[16px]">
            And it's not just about giving; it's about receiving too. As a
            sponsor, you'll receive an annual progress report, witnessing
            firsthand the impact of your generosity.
          </p>
          <button className="mt-8 bg-[#DA5321] px-6 py-2 text-[16px] text-[white] font-semibold">
            DONATE NOW
          </button>
        </div>

        <div className="w-[520px] h-[330px] relative bottom-16">
           <img src="/src/assets/assest/SMP02766.jpg" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default DonteMain;
