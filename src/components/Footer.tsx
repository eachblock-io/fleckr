import Link from "next/link";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import logoImg from "@/public/logo2.png";
import Image from "next/image";
import { LiaBehance } from "react-icons/lia";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#1E429B] p-10 mt-20">
      <div className="lg:w-10/12 w-11/12 mx-auto lg:mt-20 mt-10">
        <div className="flex items-center justify-between lg:flex-row flex-col space-y-6">
          <Link href="/">
            <Image
              src={logoImg}
              alt="Aquatrack"
              width="150"
              height="150"
              className="lg:flex hidden"
            />
            <Image
              src={logoImg}
              alt="Aquatrack"
              width="120"
              height="120"
              className="flex lg:hidden"
            />
          </Link>
          <Link href="/">
            <button className="text-white py-2 bg-transparent border  transition-all border-white flex items-center px-6 rounded-full">
              Get in touch{" "}
              <IoArrowForwardCircleOutline className="text-xl ml-4" />
            </button>
          </Link>
        </div>
        <nav className="flex items-center justify-between lg:flex-row flex-col mb-10 lg:mt-20 mt-10 border-t border-gray-400 pt-10">
          <div className="grid grid-cols-2 gap-10 text-white">
            <div className="flex flex-col space-y-4">
              <Link href="">Blogs</Link>
              <Link href="">Terms of service</Link>
              <Link href="">Works</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="">About us</Link>
              <Link href="">Contact Us</Link>
              <Link href="">Careers</Link>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-6 lg:mt-6 mt-12 pt-8 lg:border-none border-t border-gray-400 ">
            <div className="lg:h-20 lg:w-20 h-16 w-16 rounded-full bg-[#D9D9D9]/10 text-white flex items-center justify-center">
              <div className="lg:h-8 lg:w-8 h-7 w-7 border-2 border-white rounded-lg flex items-center justify-center">
                <LiaBehance className="lg:text-xl text-lg" />
              </div>
            </div>
            <div className="lg:h-20 lg:w-20 h-16 w-16 rounded-full bg-[#D9D9D9]/10 text-white flex items-center justify-center">
              <SlSocialLinkedin className="text-3xl" />
            </div>
            <div className="lg:h-20 lg:w-20 h-16 w-16 rounded-full bg-[#D9D9D9]/10 text-white flex items-center justify-center">
              <FaInstagram className="text-3xl" />
            </div>
            <div className="lg:h-20 lg:w-20 h-16 w-16 rounded-full bg-[#D9D9D9]/10 text-white flex items-center justify-center">
              <FiYoutube className="text-3xl" />
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
