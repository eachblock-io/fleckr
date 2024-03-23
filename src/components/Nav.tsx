import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center space-x-4 my-4 pl-4">
      <a href="#hero" className="lg:text-base text-sm font-semibold">
        Home
      </a>
      <a href="#works" className="lg:text-base text-sm font-semibold">
        Works
      </a>
      <a href="#contact" className="lg:text-base text-sm font-semibold">
        Reach us
      </a>
    </nav>
  );
};

export default Nav;
