"use client";
import {
  IParallax,
  IParallaxLayer,
  Parallax,
  ParallaxLayer,
} from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<IParallax | null>(null);
  return (
    <Parallax pages={2} ref={ref}>
      <Navbar></Navbar>
      <ParallaxLayer
        speed={0}
        factor={3}
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg)`,
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>
      <ParallaxLayer offset={0} factor={1} speed={1.2} className=" bg-none">
        <Hero navRef={ref}></Hero>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.99}
        factor={1}
        speed={1.6}
        className=" bg-[#adb5bd] mt-[1vh]"
      >
        <AboutMe navRef={ref}></AboutMe>
        <CarouselSection></CarouselSection>{" "}
      </ParallaxLayer>
      <Footer></Footer>
    </Parallax>
  );
}
