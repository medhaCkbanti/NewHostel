import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Management = () => {
  const teacherData = [
    {
      id: uuidv4(),
      name: "Abramham Tripura",
      post: "President Executive Commitee",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      bloodGroup: "O+",
      address: "calaghata,Bandarban sadar",
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      image: "Abraham.jpg",
    },
    {
      id: uuidv4(),
      name: "Moung Moung Chakma",
      post: "Executive Director",
      phone: "234-567-8901",
      email: "Medhankarchakma1444@gmail.com",
      bloodGroup: "O+",
      address: "Balaghata,Bandarban sadar",
      facebook: "https://www.facebook.com/medhackpp/",
      instagram: "https://instagram.com/bijoykumar",
      twitter: "https://twitter.com/bijoykumar",
      image: "Moung.jpg",
    },
    {
      id: uuidv4(),
      name: "Amar shanti Chakma",
      post: "Program Director",
      phone: "345-678-9012",
      email: "arnob.roy@example.com",
      address: "Balaghata,Bandarban sadar",
      bloodGroup: "B+",
      facebook: "https://facebook.com/arnobroy",
      instagram: "https://instagram.com/arnobroy",
      twitter: "https://twitter.com/arnobroy",
      image: "Amar shanti.jpeg",
    },

    {
      id: uuidv4(),
      name: "Bidya Purna Chakma",
      post: "Project Coordinator",
      phone: "345-678-9012",
      email: "arnob.roy@example.com",
      bloodGroup: "B+",
      address: "Balaghata,Bandarban sadar",
      facebook: "https://facebook.com/arnobroy",
      instagram: "https://instagram.com/arnobroy",
      twitter: "https://twitter.com/arnobroy",
      image: "Bidya.jpg",
    },

    {
      id: uuidv4(),
      name: "Mong Wai Ching Marma",
      post: "Program Officer",
      phone: "345-678-9012",
      email: "arnob.roy@example.com",
      bloodGroup: "B+",
      address: "Balaghata,Bandarban sadar",
      facebook: "https://facebook.com/arnobroy",
      instagram: "https://instagram.com/arnobroy",
      twitter: "https://twitter.com/arnobroy",
      image: "Mong Wai Ching.jpg",
    },

    {
      id: uuidv4(),
      name: "Mong Haineo Marma",
      post: "Administrative Officer",
      phone: "345-678-9012",
      email: "arnob.roy@example.com",
      bloodGroup: "B+",
      address: "Balaghata,Bandarban sadar",
      facebook: "https://facebook.com/arnobroy",
      instagram: "https://instagram.com/arnobroy",
      twitter: "https://twitter.com/arnobroy",
      image: "Mong-Haineo.jpeg",
    },

    {
      id: uuidv4(),
      name: "Mong shai u Marma",
      post: "Chief Accountant",
      phone: "345-678-9012",
      email: "arnob.roy@example.com",
      bloodGroup: "B+",
      address: "Balaghata,Bandarban sadar",
      facebook: "https://facebook.com/arnobroy",
      instagram: "https://instagram.com/arnobroy",
      twitter: "https://twitter.com/arnobroy",
      image: "Mong shai u.jpeg",
    },

    {
      id: uuidv4(),
      name: "Lusia Chakma",
      post: "Documentation and Child Protection Officer",
      phone: "345-678-9012",
      email: "arnob.roy@example.com",
      bloodGroup: "B+",
      address: "Balaghata,Bandarban sadar",
      facebook: "https://facebook.com/arnobroy",
      instagram: "https://instagram.com/arnobroy",
      twitter: "https://twitter.com/arnobroy",
      image: "Lusia.jpg",
    },
  ];

  return (
    <div className="m-16">
      <div className="container mx-auto px-16">
        <h1 className="text-center mb-16 text-5xl font-bold animate-colorChange text-[#6EC1E4]">
          {" "}
          Management Team{" "}
        </h1>

        <div className="grid grid-cols-4 gap-8">
          {teacherData.map((teacher) => (
            <div
              key={teacher.id}
              className="relative group w-80 h-80 overflow-hidden rounded-lg shadow-md mx-auto"
            >
              <Link
                to={`/details/${teacher.name}`}
                state={{ teacher }} // Pass teacher data here
              >
                <img
                  src={`/src/assets/assest/management-team/${teacher.image}`}
                  alt={teacher.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#F2F1F1] bg-opacity-90 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                  <div className="p-2 text-center">
                    <h1 className="font-extrabold  text-[35px] group-hover:text-[#1f8eba] transition-colors duration-300">
                      {teacher.name}
                    </h1>
                    <p className="text-[#2F4F4F] text-[20px] font-semibold mt-2 group-hover:text-[##54595F] transition-colors duration-300 mt-4">
                      {teacher.post}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
