import React, { MutableRefObject } from "react";
import me from "../assets/cropped-me.jpg";
import Image, { StaticImageData } from "next/image";
import twitter from "../assets/twitter-sign.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { useInView } from "react-intersection-observer";
import { IParallax } from "@react-spring/parallax";

type social = {
  icon: StaticImageData;
  alt: string;
  link: string;
};

type props = {
  navRef: MutableRefObject<IParallax | null>;
};

const AboutMe = ({ navRef }: props): React.ReactNode => {
  const { ref: p1Ref, inView: p1View, entry: p1Style } = useInView();

  const socials: social[] = [
    {
      icon: twitter,
      alt: "Twitter Icon",
      link: "https://twitter.com/RomeoDoesJS",
    },
    {
      icon: linkedin,
      alt: "Linkedin icon",
      link: "https://www.linkedin.com/in/romeo-richardson-4a5516247/",
    },
    {
      icon: github,
      alt: "Github icon",
      link: "https://github.com/Romeo-Richardson",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen mb-24">
      <div
        className={`w-full flex justify-center ${
          p1View ? "translate-x-0 blur-0" : "translate-x-[-16px] blur-lg"
        } duration-500`}
        ref={p1Ref}
      >
        <p className=" text-white text-5xl">
          <strong>About me</strong>
        </p>
      </div>
      <div className=" w-full flex justify-center">
        <div className=" bg-white mt-10 w-[700px] h-[400px] flex">
          <div className=" h-full w-1/2 flex flex-col items-center justify-center bg-[#ced4da] relative">
            <div className=" rounded-full h-[150px] w-[150px] mb-4">
              <Image
                src={me}
                alt="Photograph of myself"
                className=" h-full w-full rounded-full"
              ></Image>
            </div>
            <p>Romeo Richardson</p>
            <p>SOFTWARE ENGINEER</p>
            <div className=" h-[12%] w-full bg-white absolute bottom-0 flex items-center justify-center gap-6">
              {socials.map((social: social, key: number) => {
                return (
                  <a
                    onClick={() => {
                      window.open(social.link, "_blank");
                    }}
                    className="hover:cursor-pointer"
                    key={key}
                  >
                    <Image
                      className=" hover:scale-110 duration-200 hover:cursor-pointer"
                      height={25}
                      width={25}
                      alt={social.alt}
                      src={social.icon}
                    ></Image>
                  </a>
                );
              })}
            </div>
          </div>
          <div className=" h-full w-1/2 flex flex-col p-6 text- items-start justify-between">
            <p className=" text-5xl font-extrabold">HELLO</p>
            <p className=" font-bold">{`Here's who I am & what I do.`}</p>
            <div className="flex gap-2">
              <a
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1WCP1sLqnxcCgX1IJWbKJn0HQlHAxB1ke/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                <button className=" p-2 bg-[#4cc9f0] rounded-lg text-white hover:scale-110 duration-200">
                  Resume
                </button>
              </a>
              <button
                className=" p-2 rounded-lg border-black border-[1px] hover:scale-110 duration-200"
                onClick={() => {
                  navRef.current?.scrollTo(0.857);
                }}
              >
                Projects
              </button>
            </div>
            <p>
              {`Hey there, my name is Romeo and I'm a fullstack web developer.
              Since early highschool I've had a burning passion for coding and
              technology. I love creating things, solving problems, learning,
              and the satisfaction of completing something that I can be proud
              of and others can enjoy.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
