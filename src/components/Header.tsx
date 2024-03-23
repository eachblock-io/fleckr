"use client";
import { useState } from "react";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import menuImg from "@/public/menu.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navs } from "@/contants";
import { Button } from "./ui/button";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Dialog } from "@headlessui/react";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between w-11/12 mx-auto lg:h-[14vh] h-[10vh]">
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

        <Image
          src={menuImg}
          alt="Aquatrack"
          width="40"
          height="40"
          className="cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        />
      </div>
    </header>
  );
};

export default Header;
