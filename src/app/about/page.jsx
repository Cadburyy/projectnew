import About from "@/components/About";
import Footer from "@/components/Footer";
import Aboutus from "@/components/Aboutus";
import Navbar from "@/components/Navbar";

import Services from "@/components/Services";

import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <Hero />
    <Aboutus/>
    <Services />

    </>
  );
}