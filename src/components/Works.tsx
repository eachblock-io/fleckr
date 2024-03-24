import React from "react";
import Tab from "./Tab";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";

const Works = () => {
  return (
    <section id="works" data-aos="fade-down-right" className="lg:my-40 mt-40 mb-20">
      <div className="header flex items-center justify-between">
        <h2 className="font-bold lg:text-3xl text-2xl mb-4">Selected Works</h2>
        <p className="text-sm lg:flex hidden">
          Some of our Best works created by our team, with well though process
        </p>
      </div>
      <div className="toggles">
        <Tab />
      </div>
      <div className="text-center mt-10">
        <p className="font-semibold mb-4">See our other works</p>
        <div className="flex items-center justify-center gap-4 flex-wrap text-center">
          <Link href="/">
            <button className="bg-black py-2 text-white flex items-center px-6 rounded-full">
              Dribble <IoArrowForwardCircleOutline className="text-xl ml-4" />
            </button>
          </Link>
          <Link href="/">
            <button className="text-black py-2 bg-white hover:bg-black hover:text-white transition-all border border-black flex items-center px-6 rounded-full">
              Instagram <IoArrowForwardCircleOutline className="text-xl ml-4" />
            </button>
          </Link>
          <Link href="/">
            <button className="text-black py-2 bg-white border hover:bg-black hover:text-white transition-all border-black flex items-center px-6 rounded-full">
              Behance <IoArrowForwardCircleOutline className="text-xl ml-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
