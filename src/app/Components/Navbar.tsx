"use client"

import Image from "next/image";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { IoCall } from "react-icons/io5";

function Navbar() {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  interface link {
    linkname: string | JSX.Element;
    src: string;
  }

  const navlink: link[] = [
    {
      linkname: "Home",
      src: "/",
    },
    {
      linkname: "About",
      src: "/about",
    },
    {
      linkname: "Products",
      src: "/products",
    },
    {
      linkname: "Contact",
      src: "/contact",
    },
  ];

  const sociallink: link[] = [
    {
      linkname: <IoIosMail />,
      src: "/",
    },
    {
      linkname: <FaFacebook />,
      src: "/",
    },
    {
      linkname: <FaTwitterSquare />,
      src: "/",
    },
    {
      linkname: <RiInstagramFill />,
      src: "/",
    },
  ];

  return (
    <div className="max_width">
      <nav className="flex items-center lg:justify-start justify-between py-2">
        <button className="lg:hidden block py-3 pr-2" onClick={handleClick}>
          <AiOutlineMenuUnfold className="text-[1.54rem] font-bold" />
          <span className="sr-only">menu</span>
        </button>
        <div className="p-1 lg:w-auto md:h-auto w-16 h-16">
          <Link href="/">
            <Image src="/logo.png" alt="alt" width={"120"} height={"120"} />
          </Link>
        </div>
        <div className="w-full lg:block hidden">
          <ul className="flex items-center justify-end w-full gap-5 border-b-2 border-red-700 pl-1">
            {sociallink.map((item, i) => (
              <li key={i} className="py-4">
                <Link
                  href={item.src}
                  className="text-[1.54rem] font-bold border-red-700 border flex items-center justify-center w-9 h-9 hover:text-yellow-400 hover:bg-red-500 duration-300"
                >
                  <span className="sr-only">social link</span>
                  {item.linkname}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-end w-full gap-5">
            {navlink.map((item, i) => (
              <li key={i} className="py-4">
                <Link
                  href={item.src}
                  className="text-base font-bold hover:text-yellow-500 hover:border-red-600 hover:border-b-2  px-4 py-2 duration-300"
                >
                  {item.linkname}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={"tel:+919038262752"} className="lg:hidden block text-2xl font-bold">
          <IoCall />
          <span className="sr-only">call</span>
        </Link>
      </nav>
      {/* mobile nave */}
      <div className={`duration-300 ease-in-out fixed top-0 w-full h-full bg-blue-50 z-20 ${show ? "left-0" : "left-[-100%]"}`}>
        <button className="p-3 mt-3 ml-1" onClick={handleClick}>
          <AiOutlineClose className="text-[1.54rem] font-bold"  />
          <span className="sr-only">close button</span>
        </button>
        <nav>
          <ul className="flex flex-col items-start w-full gap-2 pl-1">
            {navlink.map((item, i) => (
              <li key={i} className="py-4 w-full">
                <Link onClick={handleClick}
                  href={item.src}
                  className="text-base block font-bold hover:text-yellow-500 hover:border-red-600 hover:border-b-2  px-4 py-2 duration-300"
                >
                  {item.linkname}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
