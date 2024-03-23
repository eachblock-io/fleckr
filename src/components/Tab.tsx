"use client";
import { useState } from "react";
import Img1 from "@/public/Rectangle5.png";
import Img2 from "@/public/Rectangle10.png";
import Img3 from "@/public/Rectangle11.png";
import Img4 from "@/public/Rectangle12.png";
import Image from "next/image";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Design");

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="flex items-center lg:space-x-4 space-x-2 lg:mt-8 mt-4 overflow-hidden ">
        <button
          className={`tab-btn border border-black rounded-full px-4 lg:px-8 py-2 text-xs lg:text-base ${
            activeTab === "Design" ? "active bg-black text-white" : ""
          }`}
          onClick={() => handleTabClick("Design")}>
          Design
        </button>
        <button
          className={`tab-btn border border-black rounded-full px-4 lg:px-8 py-2 text-xs lg:text-base ${
            activeTab === "Development" ? "active bg-black text-white" : ""
          }`}
          onClick={() => handleTabClick("Development")}>
          Development
        </button>
        <button
          className={`tab-btn border border-black rounded-full px-4 lg:px-8 py-2 text-xs lg:text-base ${
            activeTab === "SEO" ? "active bg-black text-white" : ""
          }`}
          onClick={() => handleTabClick("SEO")}>
          SEO
        </button>
        <button
          className={`tab-btn border border-black rounded-full px-4 lg:px-8 py-2 text-xs lg:text-base ${
            activeTab === "Research" ? "active bg-black text-white" : ""
          }`}
          onClick={() => handleTabClick("Research")}>
          Research
        </button>
      </div>
      <p className="text-sm lg:hidden flex mt-6 font-medium ">
        Some of our Best works created by our team, with well though process
      </p>
      <div className="tab-content my-10">
        {activeTab === "Design" && (
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div
              className="rounded-xl"
              data-aos-delay="400"
              data-aos="fade-up-left">
              <Image
                src={Img1}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              className="rounded-xl"
              data-aos-delay="300"
              data-aos="fade-up-left">
              <Image
                src={Img2}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              className="rounded-xl"
              data-aos-delay="200"
              data-aos="fade-up-left">
              <Image
                src={Img3}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              className="rounded-xl"
              data-aos-delay="100"
              data-aos="fade-up-left">
              <Image
                src={Img4}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
          </div>
        )}
        {activeTab === "Development" && (
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div
              className="rounded-xl"
              data-aos-delay="100"
              data-aos="fade-up-left">
              <Image
                src={Img4}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              data-aos-delay="200"
              data-aos="fade-up-left"
              className="rounded-xl">
              <Image
                src={Img3}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              data-aos-delay="300"
              data-aos="fade-up-left"
              className="rounded-xl">
              <Image
                src={Img1}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              data-aos-delay="400"
              data-aos="fade-up-left"
              className="rounded-xl">
              <Image
                src={Img2}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
          </div>
        )}
        {activeTab === "SEO" && (
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div
              className="rounded-xl"
              data-aos-delay="400"
              data-aos="fade-up-left">
              <Image
                src={Img3}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              className="rounded-xl"
              data-aos-delay="300"
              data-aos="fade-up-left">
              <Image
                src={Img4}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              className="rounded-xl"
              data-aos-delay="200"
              data-aos="fade-up-left">
              <Image
                src={Img3}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              className="rounded-xl"
              data-aos-delay="100"
              data-aos="fade-up-left">
              <Image
                src={Img1}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
          </div>
        )}
        {activeTab === "Research" && (
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div
              className="rounded-xl"
              data-aos-delay="100"
              data-aos="fade-up-left">
              <Image
                src={Img4}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              className="rounded-xl"
              data-aos-delay="200"
              data-aos="fade-up-left">
              <Image
                src={Img2}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              className="rounded-xl"
              data-aos-delay="300"
              data-aos="fade-up-left">
              <Image
                src={Img1}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
            <div
              className="rounded-xl"
              data-aos-delay="400"
              data-aos="fade-up-left">
              <Image
                src={Img3}
                alt="Aquatrack"
                width="350"
                height="550"
                layout="fixed"
                className=" rounded-xl cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
