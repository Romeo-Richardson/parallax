"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Parallax pages={2}>
      <Navbar></Navbar>
      <ParallaxLayer
        speed={0}
        factor={3}
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg)`,
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>
      <ParallaxLayer offset={0} factor={1} speed={1.5} className=" bg-none">
        <Hero></Hero>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.99}
        factor={1}
        speed={1.7}
        className=" bg-[#adb5bd] mt-[1vh]"
      >
        <AboutMe></AboutMe>
        <CarouselSection></CarouselSection>{" "}
      </ParallaxLayer>
      <Footer></Footer>
    </Parallax>
  );
}
