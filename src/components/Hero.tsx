import React from "react";
import heroImg from "@/public/hero-assets-ac 1.png";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-[#F5F3EF] rounded-xl lg:p-14 p-10 lg:flex items-center  relative lg:h-[70vh] h-[80vh]">
      <div className="content lg:w-7/12 w-full">
        <h1
          data-aos="fade-right"
          className="lg:text-5xl text-2xl font-bold lg:leading-snug leading-snug">
          Crafting Your Digital Presence: Building Websites That Speak Your
          Brand&apos;s Language
        </h1>
        <p className="text-base text-gray-600 my-8 lg:w-10/12">
          With the blend of creativity, innovation and meticulous craftmanship,
          we bring life to your visions, crafting your captivating designs.{" "}
        </p>
        <button className="bg-black py-3 text-white flex items-center px-8 rounded-full">
          Send us a message{" "}
          <IoArrowForwardCircleOutline className="text-xl ml-4" />
        </button>
      </div>
      <div className="lg:absolute right-8 top-10 mt-10">
        <Image
          src={heroImg}
          alt="Aquatrack"
          width="550"
          height="550"
          data-aos="fade-up-left"
          className="lg:flex hidden cursor-pointer"
        />
        <Image
          src={heroImg}
          alt="Aquatrack"
          width="450"
          height="450"
          data-aos="fade-up-left"
          className="flex lg:hidden cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Hero;
