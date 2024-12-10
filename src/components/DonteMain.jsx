import React, { useEffect, useRef, useState } from "react";

const DonteMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative mt-10">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-[600px] bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/src/assets/assest/01-700x300.jpg')",
        }}
      >
        {/* Yellow Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[rgb(59,163,177)] opacity-95 -z-10"
        ></div>
      </div>

      {/* Content */}
      <div
        className={`flex container gap-32 pl-40 mx-auto w-full py-28 ${
          isVisible ? "animate" : ""
        }`}
        ref={sectionRef}
      >
        <div className={`left w-[40%] ${isVisible ? "slide-in-left" : ""}`}>
          <h2 className="text-3xl">
            HOW CAN YOU <span className="font-bold"> HELP? </span>
          </h2>
          <p className="mt-10 roboto text-[#232323]">
            Project Nanhi Kali is a participatory project wherein you can sponsor the education of an underprivileged girl
            child for a minimum period of one year. For just Rs. 6,000, you can provide her with the key to a brighter future.
            Your support goes beyond mere financial assistance. It's an investment in her potential, her dreams, and her empowerment.
            With your sponsorship, she gains access to essential 21st century skills, a physical education module and a chance for
            her to break free from the humdrum of doing household work.
          </p>
          <p className="mt-3">
            And it's not just about giving; it's about receiving too. As a sponsor, you'll receive an annual progress report,
            witnessing firsthand the impact of your generosity.
          </p>
          <button className="mt-5 bg-[#DA5321] font px-6 py-2 text-white font-semibold">
            DONATE NOW
          </button>
        </div>
        <div className={`right ${isVisible ? "slide-in-right" : ""}`}>
          <img src="/src/assets/assest/SMP02766.jpg" className="w-[520px] h-[310px]" />
        </div>
      </div>
    </div>
  );
};

export default DonteMain;
