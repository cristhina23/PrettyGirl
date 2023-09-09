import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/styles";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { categoriesData, productData, userDropDownLinks } from "../static/Data";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import Navbar from "../components/Navbar";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";

const Header = ({ activeHeading }) => {
  const [user, setUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <header>
      <div className=' xs:w-full sm:w-11/12 mx-auto'>
        <div className=''>
          <div className='flex  md:flex items-center justify-between py-4'>
            <span className='p-2 mx-2 rounded-md cursor-pointer shadow-2xl hover:bg-slate-100 md:hidden'>
              <AiOutlineMenu
                size={25}
                color='#333'
              />
            </span>
            <div className='flex items-center '>
              <Link
                to='/'
                className=' md:block'
              >
                <span
                  className={`xs:text-[20px] ${styles.heading} text-[#333] inline-block `}
                >
                  Pretty Girls
                </span>
              </Link>
            </div>
            {/* search box */}
            <div className='xs:hidden w-[40%] relative '>
              <input
                type='text'
                placeholder='Search Product...'
                value={searchTerm}
                onChange={handleSearchChange}
                className='h-[40px] w-full border-[#333] border-[2px] rounded-md px-2'
              />
              <AiOutlineSearch
                size={30}
                className='absolute right-2 top-1.5 cursor-pointer text-[#6E6F73]'
              />
              {searchData && searchData.length !== 0 ? (
                <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-10 py-4 '>
                  {searchData &&
                    searchData.map((i, index) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className='w-full flex items-start-py-3 '>
                            <img
                              src={i.image_Url[0].url}
                              alt='image-product'
                              className='w-[40px] h-[40px] mr-[19px] '
                            />
                            <h1>{i.name}</h1>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              ) : null}
            </div>
            <div className='flex gap-2 mx-2  items-center md:gap-6'>
              <div className='relative cursor-pointer rounded-md p-1  hover:shadow-2xl hover:scale-110'>
                <LiaShoppingBagSolid
                  size={25}
                  color='#333'
                />
                <span className='absolute right-[-5px] top-[-5px] rounded-full h-4 w-4  p-0 m-0 text-white font-Poppins text-[12px] leading-tight text-center bg-pink-500 '>
                  0
                </span>
              </div>

              <div className='relative cursor-pointer  rounded-md p-1  hover:shadow-2xl hover:scale-110'>
                <AiOutlineHeart
                  size={25}
                  color='#333'
                />
                <span className='absolute right-[-5px] top-[-5px] rounded-full h-4 w-4  p-0 m-0 text-white font-Poppins text-[12px] leading-tight text-center bg-pink-500 '>
                  0
                </span>
              </div>
              <div className='cursor-pointer  rounded-md p-1  hover:shadow-2xl hover:scale-110'>
                <AiOutlineUser
                  size={25}
                  color='#333'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-[11]" : null
        } transition hidden md:flex items-center justify-between w-full h-[50px] mx-auto bg-[#000] `}
      >
        <div
          className={`${styles.section}  relative ${styles.normalFlex} justify-between `}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className='relative h-[60px] mt-[10px] w-[270px] 1000px:block '>
              <BiMenuAltLeft
                size={30}
                className='absolute top-3 left-2'
              />
              <button
                className={`h-[83%] w-[80%] flex justify-between items-center pl-10 bg-pink-100  font-sans text-md font[500] select-none rounded-t-md `}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className='absolute right-16 top-4 cursor-pointer'
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  setDropDown={setDropDown}
                  categoriesData={categoriesData}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.normalFlex}contenedor-menu`}>
            <Navbar active={activeHeading} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
