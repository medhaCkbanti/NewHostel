import React, { useState, useEffect } from "react";
import { MdArrowForwardIos, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Photos = () => {
    const [images] = useState([
        "Numong.jpg",
        "IMG_0019-1.jpg",
        "20230113_145342-scaled.jpg",
        "411324321_122117024036114458_5420561416412979291_n.jpg",
        "Home_02.jpg",
        "411324321_122117024036114458_5420561416412979291_n.jpg",
    ]);

    const [selectedImage, setSelectedImage] = useState(null); // State to hold the clicked image

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image); // Set the clicked image to state
    };

    const closeModal = () => {
        setSelectedImage(null); // Close the modal by clearing the selected image
    };

    return (
        <div className="bg-slate-50">
            <div className="w-full h-80">

                <img src="/src/assets/assest/01-700x300.jpg" className="w-full h-full object-cover"/>

            </div>
            <div className="container mx-auto px-10">
                <h1 className="pt-5 text-[28px] text-gray-600 font-semibold">Images</h1>

                <div className="flex mt-10 items-center gap-3">
                    <Link to="/" className="text-[#E25A56] font-semibold text-[17px]">Home</Link>
                    <MdArrowForwardIos />
                    <p>Images of Upasshak</p>
                </div>

                <div className="mt-10 flex items-center justify-center gap-5 flex-wrap">
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className="w-80 h-72 bg-slate-200 flex items-center justify-center cursor-pointer overflow-hidden group"
                            onClick={() => handleImageClick(image)}
                        >
                            <img
                                src={(`/src/assets/assest/${image}`)} // Adjust path if necessary
                                alt={`Image ${i + 1}`}
                                className="w-[295px] h-[265px] object-cover group-hover:scale-105 group-hover:translate-y-[-5px] group-hover:opacity-80 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                        <div className="relative">
                            {/* Large Image */}
                            <img
                                src={(`/src/assets/assest/${selectedImage}`)}
                                alt="Large View"
                                className="max-w-[90vw] max-h-[90vh] object-contain"
                            />

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-5 right-5 bg-gray-600 text-white p-2 rounded-full hover:bg-red-500 transition duration-300"
                                aria-label="Close"
                            >
                                <MdClose size={24} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Photos;
