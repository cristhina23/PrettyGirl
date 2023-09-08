import React from "react";
import styles from "../styles/styles";
import { Link } from "react-router-dom";
import hero from "../assets/banner-1.jpg";
import heroChica from "../assets/logo.png";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";

const Hero = () => {
  return (
    <div
      className={`relative xs:flex-col xs:min-h-[25vh] xs:py-6 min-h-[75vh] md:h-[60vh] md:min-h[60vh] w-full bg-no-repeat bg-cover bg-right ${styles.normalFlex} `}
      style={{
        backgroundImage: "url(" + hero + ")",
        width: "100vw",
        height: "500",
      }}
    >
      <div
        className={`${styles.section} xs:px-6 w-[100%] md:w-[90%] justify-center items-center px-16 `}
      >
        <div>
          <h1
            className={` xs:text-[20px] text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
          >
            Especialistas en Diseños <br /> a la Medida
          </h1>

          <Link
            to='/products'
            className='inline-block'
          >
            <div className='xs:w-[100px] w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl  mt-6 cursor-pointer  mx-auto bottom-4'>
              <span className=' xs:text-[14px] text-[#fff] font-[Poppins] text-[18px] hover:text-pink-500 hover:scale-110'>
                Shop Now
              </span>
            </div>
          </Link>
        </div>

        <div className='sm:absolute sm:bottom-8 flex '>
          <Link
            to='https://www.instagram.com/prettygirls.ca/'
            target='_blank'
          >
            <div className='flex xs:justify-start items-center sm:justify-end bottom-4'>
              <img
                src={instagram}
                className='w-[30px] h-[30px] rounded-full'
                alt=''
              />
              <span className='text-[#333] font-[Poppins] xs:text-[14px] text-[20px] font-semibold  '>
                @prettygirls.ca
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
