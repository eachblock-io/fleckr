"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Works from "@/components/Works";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <main className="w-11/12 mx-auto">
        <Nav />
        <Hero />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
