import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import uuid library

const Teacher = () => {
    const teacherData = [
        {
            uniqueId: uuidv4(), // Generate unique ID
            name: 'Bijoy Chakma',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            bloodGroup: 'O+',
            address: 'Balaghata, Bandarban Sadar',
            facebook: 'https://facebook.com/johndoe',
            instagram: 'https://instagram.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
            image: 'bijoy.jpg',
        },
        {
            uniqueId: uuidv4(),
            name: 'Medhankar Chakma',
            phone: '234-567-8901',
            email: 'Medhankarchakma1444@gmail.com',
            bloodGroup: 'O+',
            address: 'Balaghata, Bandarban Sadar',
            facebook: 'https://www.facebook.com/medhackpp/',
            instagram: 'https://instagram.com/bijoykumar',
            twitter: 'https://twitter.com/bijoykumar',
            image: 'medha.jpg',
        },
        {
            uniqueId: uuidv4(),
            name: 'Manti Chakma',
            phone: '345-678-9012',
            email: 'arnob.roy@example.com',
            bloodGroup: 'B+',
            address: 'Balaghata, Bandarban Sadar',
            facebook: 'https://facebook.com/arnobroy',
            instagram: 'https://instagram.com/arnobroy',
            twitter: 'https://twitter.com/arnobroy',
            image: 'Lusia.jpg',
        },
        {
            uniqueId: uuidv4(),
            name: 'Arnob Chakma',
            phone: '345-678-9012',
            email: 'arnob.roy@example.com',
            bloodGroup: 'B+',
            address: 'Balaghata, Bandarban Sadar',
            facebook: 'https://facebook.com/arnobroy',
            instagram: 'https://instagram.com/arnobroy',
            twitter: 'https://twitter.com/arnobroy',
            image: 'arnob.jpg',
        },
    ];

    return (
        <div className='mt-20'>
            <div className="container mx-auto px-16">
                <h1 className='text-center mb-16 text-5xl font-bold animate-colorChange text-[#6EC1E4]'>Hostel Teachers</h1>

                <div className='grid grid-cols-4 gap-8'>
                    {teacherData.map((teacher) => (
                        <div
                            key={teacher.uniqueId} // Use the unique ID as the key
                            className='relative group w-80 h-80 overflow-hidden rounded-lg shadow-md mx-auto'
                        >
                            <Link
                                to={`/details/${teacher.name}`}
                                state={{ teacher }} // Pass teacher data here
                            >
                                <img
                                    src={`/src/assets/assest/teacher/${teacher.image}`}
                                    alt={teacher.name}
                                    className='w-full h-full object-cover transform scale-100 transition-transform duration-500 ease-out group-hover:scale-110'
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                                    <p className="text-[#ffffff] text-[30px] font-semibold">{teacher.name}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teacher;
