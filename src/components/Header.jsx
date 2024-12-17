import { Link } from "react-router-dom";
import { navItems } from "./Navitems/Navitems";
import "./Navitems.css";
import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="h-[100px] bg-gray-100 shadow-md w-full fixed z-40">
      <div className="h-full container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/src/assets/assest/logo.png"
            className="h-8 w-14"
            alt="Logo"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">UPASSHAK</h1>
            <h2 className="text-[18px] font-medium text-gray-500">
              A Hostel Based Education Project
            </h2>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="nav-items flex space-x-6">
          {navItems.map((item) => {
            if (item.title === "About us") {
              return (
                <li
                  key={item.id}
                  className={item.class}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }

            // Galary Link - Highlighting navigation for Galary
            if (item.title === "Galary") {
              return (
                <li key={item.id} className={`${item.class} nav-galary`}>
                  <Link
                    to="/gallery"
                    className="hover:text-orange-600 transition duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.id} className={item.class}>
                <Link
                  to={item.path}
                  className="hover:text-gray-600 transition duration-300"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Donate Button */}
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
