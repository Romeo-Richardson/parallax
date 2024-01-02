import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import project1 from "../assets/Create Next App.png";
import { useInView } from "react-intersection-observer";
import typescript from "../assets/ts.png";
import tailwind from "../assets/tailwind.webp";
import nextjs from "../assets/next.png";
import resend from "../assets/resend.png";
import remail from "../assets/remail.png";
import mongodb from "../assets/mdb.png";
import jwt from "../assets/jwt2.png";
import prisma from "../assets/prisma.png";
import zustand from "../assets/zustand.png";
import rquery from "../assets/rQuery.png";

export type props = {
  headerName: string;
  projectName: string;
  projectDescription: string;
  projectDetails: string;
  projectImage: StaticImageData;
  projectCode: string;
  projectDemo: string;
  guestEmail?: string;
  guestPassword?: string;
  skillImages: StaticImageData[];
};

const Projects = ({
  headerName,
  projectName,
  projectDescription,
  projectDetails,
  projectImage,
  projectCode,
  projectDemo,
  guestEmail,
  guestPassword,
  skillImages,
}: props) => {
  const { ref: p1Ref, inView: p1View, entry: p1Style } = useInView();

  return (
    <>
      <div
        className={`w-full flex justify-center mb-8 absolute top-0 ${
          p1View ? "translate-x-[0px] blur-0" : "translate-x-[-16px] blur-lg"
        } duration-500`}
        ref={p1Ref}
      >
        <p className=" text-white text-5xl">
          <strong>{headerName}</strong>
        </p>
      </div>
      <div className=" h-screen max-h-[760px] w-[700px] bg-white  flex flex-col">
        <div className=" w-full h-[275px] ">
          <Image
            alt="Project Image"
            src={projectImage}
            className="h-full w-full"
          ></Image>
        </div>
        <div className=" grow w-full bg-white px-3 pt-4 flex flex-col relative gap-10">
          <div className="flex justify-between w-full">
            <div>
              <p className=" font-bold">{projectName}</p>
              <p className=" text-sm text-[#4cc9f0]">{projectDescription}</p>
            </div>
            <div>
              <p className="text-sm">
                <strong>Guest email:</strong> {guestEmail}
              </p>
              <p className="text-sm">
                <strong>Guest password:</strong> {guestPassword}
              </p>
              <div className=" w-full flex gap-4">
                <a
                  className="text-sm underline hover:cursor-pointer"
                  onClick={() => {
                    window.open(projectDemo, "_blank");
                  }}
                >
                  <strong>Demo</strong>
                </a>
                <a
                  className="text-sm underline hover:cursor-pointer"
                  onClick={() => {
                    window.open(projectCode, "_blank");
                  }}
                >
                  <strong>Source Code</strong>
                </a>
              </div>
            </div>
          </div>
          <p>{projectDetails}</p>
          <div className="absolute bottom-5 left-0 w-full h-[50px] p-2 bg-white justify-center flex items-center gap-4">
            {skillImages.map((img, key) => {
              return (
                <Image
                  alt="skill icon"
                  className="h-[50px] w-[50px] object-scale-down"
                  src={img}
                  key={key}
                ></Image>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
