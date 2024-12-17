import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
  const workItems = [
    {
      title: "EDUCATION",
      description:
        "We are working on high-quality education, spreading awareness about the importance of education and enrolling as many children...",
      imgSrc: "/src/assets/assest/13-12-2023.jpg", // Replace with actual image URL
    },
    {
      title: "INSTITUTIONAL CARE",
      description:
        "Deepalaya started its Institutional Care program at Deepalaya Gram, Gusbethi to bring a long-lasting change in...",
      imgSrc: "/src/assets/assest/DSC_0417-1-scaled.jpg",
    },
    {
      title: "DIFFERENTLY ABLED",
      description:
        "We strongly believe that differently-abled children can live a healthy life if they have access to services like early symptom identification and education...",
      imgSrc: "/src/assets/assest/activity-2-600x576.jpg",
    },
    {
      title: "ENVIRONMENT SUSTAINABILITY",
      description:
        "Deepalaya in collaboration with Fluor Daniel India Pvt. Ltd. is trying to create a sustainable and replicable model of combating Stubble Burning...",
      imgSrc: "/src/assets/assest/20220113_101830-640x480.jpg",
    },
    {
      title: "HEALTH CARE",
      description:
        "Deepalaya aims to restore healthcare as a universal right by targeting the grassroots. With this goal in mind, we launched the Community Health program...",
      imgSrc: "/src/assets/assest/Numong.jpg",
    },
    {
      title: "WOMEN EMPOWERMENT",
      description:
        "Financial independence directly correlates to social independence. Thus, alleviation of poverty has the potential to positively impact women...",
      imgSrc: "/src/assets/assest/411324321_122117024036114458_5420561416412979291_n.jpg",
    },
  ];

  return (
    <div className="bg-[#f7f5f5] pt-14 pb-32">
      <div className="container mx-auto px-36">
        <div className="py-12">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-8">
            OUR WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 justify-items-center items-center">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="max-w-xs group bg-white hover:shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 mb-4 font-serif text-center">{item.description}</p>
                  <button className="text-red-500 font-medium hover:underline block mx-auto">
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

export default Work;
