import React,{useEffect, useState} from "react";
import {styles} from '../styles'
import {Link} from "react-router-dom";
//import { NavLinks } from "../constans";
import {logo, menu, close} from '../assets';
import { navLinks } from "../constans";
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-background`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0);
          }}>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain"  />
            <p className="text-text text-[18px] font-bold cursor-pointer">Michał Świercz</p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10 ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                  ? "text-white"
                  : "text-gray-500"
                } hover:text-primary2 duration-300 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                    ? "text-white"
                    : "text-gray-500"
                  } font-poppins font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                  setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar