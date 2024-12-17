import React from "react";

const Success = () => {
  const workItems = [
    {
      title: "EDUCATION",
      description:
        "We are working on high-quality education, spreading awareness about the importance of education.",
      imgSrc: "/src/assets/assest/13-12-2023.jpg",
    },
    {
      title: "INSTITUTIONAL CARE",
      description:
        "Deepalaya started its Institutional Care program at Deepalaya Gram.",
      imgSrc: "/src/assets/assest/DSC_0417-1-scaled.jpg",
    },
    {
      title: "DIFFERENTLY ABLED",
      description:
        "We strongly believe that differently-abled children can live a healthy life.",
      imgSrc: "/src/assets/assest/activity-2-600x576.jpg",
    },
  ];

  return (
    <div className="bg-white pt-14 pb-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="py-12">
          <h2 className="text-4xl font-bold text-center text-[#862E6D] mb-12">
            SUCCESS STORIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                {/* Image Section */}
                <div className="overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 font-serif mb-4">
                    {item.description}
                  </p>
                  <button className="bg-[#DB1F48] text-white px-5 py-2 mt-2 rounded-md hover:bg-[#b51a3c] transition-colors duration-300">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
