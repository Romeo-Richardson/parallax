import React, { MutableRefObject, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import arrow from "../assets/down-arrow.png";
import Image from "next/image";
import { IParallax, IParallaxLayer } from "@react-spring/parallax";

type props = {
  navRef: MutableRefObject<IParallax | null>;
};

const Hero = ({ navRef }: props): React.ReactNode => {
  const { ref: p1Ref, inView: p1View, entry: p1Style } = useInView();
  const [introText, setIntroText] = useState<string | null>(
    "opacity-0 blur-sm translate-x-[-64px]"
  );

  useEffect(() => {
    setTimeout(() => {
      setIntroText("opacity-100 blur-0");
    }, 1500);
  }, []);

  return (
    <div className="flex relative flex-col gap-2 items-center justify-center h-full w-full">
      <p
        className={` ${
          p1View ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-0 blur-sm"
        } duration-300 text-7xl text-white`}
        ref={p1Ref}
      >
        <strong>WELCOME</strong>
      </p>
      <p className={`text-3xl text-white duration-300 ${introText}`}>
        <strong>To a fresh new start.</strong>
      </p>
      <>
        <div
          className="flex flex-col gap-2 absolute bottom-6 hover:cursor-pointer"
          onClick={() => {
            navRef.current?.scrollTo(0.371);
          }}
        >
          <Image
            height={50}
            width={75}
            alt="Arrow Pointing Downward"
            src={arrow}
            className=" animate-bounce duration-300"
          ></Image>
          <p className="text-white">See more</p>
        </div>
      </>
    </div>
  );
};

export default Hero;
