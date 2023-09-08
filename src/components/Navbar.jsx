import React from "react";
import styles from "../styles/styles";
import { navItems } from "../static/Data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div className={`${styles.normalFlex} h-7`}>
      {navItems &&
        navItems.map((i, index) => (
          <div
            className='flex '
            key={i.id}
          >
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-pink-600 font-extrabold"
                  : "text-[#fff]"
              } font-bold px-6 cursor-pointer`}
            >
              <span className='cursor-pointer hover:underline hover:text-pink-500 '>
                {i.title}
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
