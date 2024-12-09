import React from 'react';

const Teacher = () => {
    const images = ['Orginial.jpg', 'bijoy.jpg', 'arnob.jpg', 'Orginial.jpg',];

    return (
        <div className='m-16'>
            <div className="container mx-auto px-16">
                <h1 className='text-center mb-16 text-5xl font-bold animate-colorChange'>Hostel Teachers</h1>

                <div className='grid grid-cols-4 gap-8'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className='relative group w-60 h-60 overflow-hidden rounded-lg shadow-md mx-auto'
                        >
                            <img
                                src={`/src/assets/assest/teacher/${image}`}
                                alt={`Teacher ${index + 1}`}
                                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white font-semibold">Teacher {index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center-align last row */}
                <div className='flex justify-center gap-8 mt-8'>
                    <div className='relative group w-60 h-60 overflow-hidden rounded-lg shadow-md'>
                        <img
                            src={`/src/assets/assest/teacher/bijoy.jpg`}
                            alt="Teacher 5"
                            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex   group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white font-semibold">Teacher 5</p>
                        </div>
                    </div>
                    <div className='relative group w-60 h-60 overflow-hidden rounded-lg shadow-md'>
                        <img
                            src={`/src/assets/assest/teacher/arnob.jpg`}
                            alt="Teacher 6"
                            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white font-semibold">Teacher 6</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                h1 {
                    font-family: "Rubik", sans-serif;
                }
                @keyframes colorChange {
                    0% {
                        color: #6a337a;
                    }
                    50% {
                        color: #c12453;
                    }
                    100% {
                        color: #6a337a;
                    }
                }
                .animate-colorChange {
                    animation: colorChange 3s infinite;
                }
            `}</style>
        </div>
    );
};

export default Teacher;
