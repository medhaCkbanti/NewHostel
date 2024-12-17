

import backgroundImage from '../assets/assest/Home_01.jpg';

const Banner = () => {



  return (
    <div className="relative w-full h-[450px] lg:h-[680px] overflow-hidden group">
      {/* Images */}
      <div className="relative w-full h-full">

          <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          >
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

      </div>

    

    </div>
  );
};

export default Banner;
