import React from "react";
import { FaPlay } from "react-icons/fa";

const Commitment = () => {
  return (
    <div className="mt-0">
      <div className="container mx-auto px-20">
        <div className="bg-white py-16 px-6 lg:px-20">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#DA291C]">
              OUR COMMITMENT TO BE THE RAKSHAKS OF <br /> CHILDREN'S FUTURE
            </h2>
            <p className="mt-6 text-gray-600 text-lg font-serif">
              We invite you behind the scenes to witness the transformations made
              possible by donors like you. Through poignant video testimonials,
              you'll see the tangible impact your compassion has already made in
              the lives of underprivileged children in India. Watch their eyes light up
              as they gain access to education, medical care, and safety - they are
              glimpses into young lives infused with promise. By contributing, you
              join a community devoted to nurturing India's next generation. Browse
              through and discover how even the smallest act of kindness can plant
              seeds of change.
            </p>
          </div>

          {/* Video and Content Row */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Video Section */}
            <div className="flex-shrink-0">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                {/* Image */}
                <img
                  src="/src/assets/assest/SMP02766.jpg"
                  alt="Video Thumbnail"
                  className="w-[600px] h-[350px] transition-transform duration-300 "
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-[#89807F] w-[60px] h-[60px] flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                    <FaPlay style={{ fontSize: "16px" }} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#DA291C] mb-4">
                Bal Raksha Bharat's Ongoing Mission to <br /> Empower 4 Million Children!
              </h3>
              <p className="text-gray-600 mb-3 font-serif">
                At Bal Raksha Bharat, we believe in creating a secure future by
                ensuring every child has a secure childhood. Our ongoing mission is
                to empower 4 million children, and we are committed to making this
                vision a reality.
              </p>
              <p className="text-gray-600 mb-3 font-serif">
                India's children possess immense potential, yet they face numerous
                challenges and limited opportunities. Our mission recognizes that
                similar efforts may not yield the same results for every child, and
                we are dedicated to tailoring our support to meet their unique
                needs.{" "}
                <a
                  href="/online-donation"
                  className="text-red-600 font-semibold underline"
                >
                  Online donation India
                </a>
                .
              </p>

              <p className="text-gray-600 font-serif">
                Join us in building a world where every child has access to equal
                opportunities and can grow with confidence. Together, we can create
                a brighter, more equitable future for all children.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
