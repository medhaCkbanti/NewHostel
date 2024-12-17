import React from "react";

const Impact = () => {
  const data = [
    { label: "Education", value: "378,145+" },
    { label: "Women Empowerment", value: "18,631+" },
    { label: "Health Care", value: "1,387,762+" },
    { label: "Institutional Care", value: "1,885+" },
    { label: "Differently Abled", value: "4,922+" },
    { label: "Digital Learning", value: "6,901+" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left Section - Image */}
          <div className="w-full max-w-md lg:max-w-[600px] aspect-square mb-8 lg:mb-0">
            <img
              src="/src/assets/assest/vision-1.jpg"
              alt="Impact"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Right Section - Content */}
          <div className="w-full max-w-lg text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
              OUR IMPACT
            </h2>
            <p className="mb-8 text-lg font-semibold">
              Deepalaya impact in the last financial year | 45 years of enabling
              self-reliance
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-gray-400 text-3xl sm:text-[42px] font-extrabold mb-2">
                    {item.value}
                  </p>
                  <p className="text-black font-semibold text-sm sm:text-base">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
