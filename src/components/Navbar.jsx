import React, { useState } from "react";
import styles, { isActiveStyles, isNoActiveStyles } from "../styles/styles";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ active }) => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className={`${styles.normalFlex} h-7`}>
      <nav className='flex items-center'>
        <ul className=' hidden md:flex items-center justify-center gap-8  '>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to='/products'
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
          >
            Productos
          </NavLink>
          <NavLink
            to='/blogs'
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
          >
            Blog
          </NavLink>
          <NavLink
            to='/contactanos'
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
          >
            Contactanos
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
