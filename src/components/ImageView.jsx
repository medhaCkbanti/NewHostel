import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md"; // Import the cross/close icon

const ImageView = () => {
    const { image } = useParams(); // Get the image name from the URL parameter
    const navigate = useNavigate(); // Use navigate to go back to Photos

    const handleClose = () => {
        navigate("/"); // Navigate back to the Photos component
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative">
                {/* Image */}
                <img
                    src={(`/src/assets/assest/${decodeURIComponent(image)}`)}
                    alt="Large View"
                    className="max-w-[90vw] max-h-[90vh] object-contain"
                />

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 bg-gray-600 text-white p-2 rounded-full hover:bg-red-500 transition duration-300"
                    aria-label="Close"
                >
                    <MdClose size={24} />
                </button>
            </div>
        </div>
    );
};

export default ImageView;
