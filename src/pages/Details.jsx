import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Details = () => {
    const location = useLocation();
    const { teacher } = location.state || {};

    // Scroll to top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!teacher) {
        return <p className="text-center text-red-500 text-xl mt-20">Teacher details not available!</p>;
    }

    return (
        <div className="container mx-auto mt-16 px-8">
            {/* Background Section */}
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-lg p-8 text-white">
                <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <img
                        src={`/src/assets/assest/teacher/${teacher.image}`}
                        alt={teacher.name}
                        className="w-56 h-56 rounded-full mb-6 border-4 border-gray-700 shadow-xl hover:scale-105 transform transition duration-300"
                    />
                    
                    {/* Teacher Info */}
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                        {teacher.name}
                    </h1>
                    <p className="mt-2 text-lg font-semibold text-gray-300">Phone: {teacher.phone}</p>
                    <p className="mt-1 text-lg font-semibold text-gray-300">Email: {teacher.email}</p>
                    <p className="mt-1 text-lg font-semibold text-gray-300">Address: {teacher.address}</p>
                    <p className="mt-1 text-lg font-semibold text-gray-300">Blood Group: {teacher.bloodGroup}</p>

                    {/* Social Media Icons */}
                    <div className="mt-6 flex gap-6">
                        <a
                            href={teacher.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-blue-400 hover:scale-110 transition-transform duration-300"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href={teacher.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-pink-300 hover:scale-110 transition-transform duration-300"
                        >
                            <FaInstagramSquare />
                        </a>
                        <a
                            href={teacher.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-blue-300 hover:scale-110 transition-transform duration-300"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
