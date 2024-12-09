import React from "react";

const Success = () => {
  const workItems = [
    {
      title: "EDUCATION",
      description:
        "We are working on high-quality education, spreading awareness about the importance of education",
      imgSrc: "/src/assets/assest/13-12-2023.jpg", // Replace with actual image URL
    },
    {
      title: "INSTITUTIONAL CARE",
      description:
        "Deepalaya started its Institutional Care program at Deepalaya Gram",
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
    <div className="bg-[#ffffff] pt-14 pb-32">
      <div className="container mx-auto px-44">
        <div className="py-12">
          <h2 className="text-4xl font-bold text-center text-[#862E6D] mb-12">
            SUCCESS STORIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 px-4 md:px-8">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="max-w-80 group bg-white hover:shadow-xl boxShadow rounded-lg overflow-hidden transform transition-transform duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-40 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 w-full h-full">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 font-serif h-24 pt-2">
                    {item.description}
                  </p>
                  <button className="white bg-[#DB1F48] px-5 py-3 mt-3 font-medium">
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
