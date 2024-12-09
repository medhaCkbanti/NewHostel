import { Link } from "react-router-dom";




const Header = () => {



  return (
    <header className="h-[100px] bg-gray-100 shadow-md w-full fixed z-40">

          <div className="h-full container mx-auto flex items-center justify-between">

            <div>

                <img src="/src/assets/assest/logo.png" className="h-8 w-14"/>

                <div>

                    <h1 className="text-2xl font-bold text-gray-800"> UPASSHAK </h1>
                    <h2 className="text-[18px] font-medium text-gray-500"> A Hostel Based Education Project </h2>

                </div>

            </div>


             {/** Navigation Links */}

             <nav className="flex space-x-8">
                    <Link to="/" className="text-gray-700 font-semibold hover:text-orange-500 transition-all">Home</Link>
                    <Link to="/news" className="text-gray-700 hover:text-orange-500 font-semibold"> About us </Link>
                    <Link to="/gallery" className="text-gray-700 hover:text-orange-500 font-semibold">Gallery</Link>
                    <Link to="/news" className="text-gray-700 hover:text-orange-500 font-semibold">News</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-semibold"> Blogs </Link>
                    <Link to="/news" className="text-gray-700 hover:text-orange-500 font-semibold"> </Link>
                    <Link to="/news" className="text-gray-700 hover:text-orange-500 font-semibold"> Contact us </Link>
                    
                </nav>


        <Link
          to="/donation"
          className="group flex items-center justify-center bg-orange-600 relative px-10 py-[6px] rounded-full hover:bg-orange-700 transition-all duration-300"
        >
          <div className="h-[14px] w-7 absolute left-3 top-[18px] text-red-900">
            <img
              src="/public/heart.svg"
              className="h-full w-full transition-transform duration-300 group-hover:scale-125 group-hover:filter group-hover:invert"
              alt="Heart"
            />
          </div>

          <div className="text-white">Donate</div>
        </Link>



               

          </div>


    </header>
  );
};

export default Header;
