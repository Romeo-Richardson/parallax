"use client";

import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import Image from "next/image";
import RightArrow from "../assets/arrow-right.png";
import LeftArrow from "../assets/left-arrow (1).png";
import Projects, { props } from "./Projects";
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
import openAI from "../assets/ai.png";
import postgresql from "../assets/postgres.png";
import ContactMe from "./ContactMe";
import kanbanImage from "../assets/Kanban (1).png";
import socializeImage from "../assets/Create Next App (3).png";
import pusher from "../assets/pusher.png";
import RabbitImage from "../assets/rabbit.png";
import AWS from "../assets/aws-logo.png";

const CarouselSection = (): React.ReactNode => {
  const [index, setIndex] = useState<number>(0);
  const [leftStatus, setLeftStatus] = useState<boolean>(false);
  const [rightStatus, setRightStatus] = useState<boolean>(false);

  const rabbitData: props = {
    headerName: "Rabbit",
    projectName: "Rabbit Tech",
    projectDescription: "Company landing page",
    projectDetails: `Inspired by rabbit.tech, this is a fully server side rendered project using NextJS Server Components. Also contains automated email response using Resend + React Email, so the waitlist is functional. Also saves the inputted email into a MongoDB database using Prisma ORM. All video assets are hosted on AWS S3.`,
    projectImage: RabbitImage,
    projectDemo: "https://rabbit-tech-5ydy.vercel.app/",
    projectCode: "https://github.com/Romeo-Richardson/rabbit-tech",
    skillImages: [
      typescript,
      nextjs,
      tailwind,
      prisma,
      resend,
      remail,
      mongodb,
      AWS,
    ],
  };

  const kanbanData: props = {
    headerName: "Kanban Board",
    projectName: "Kanban",
    projectDescription: "Trello style task board",
    projectDetails: `The purpose of this project is to show my understanding of CRUD
    operations. This is a fullstack application where users can log in or
    logout to save their progress. Users can create, post, update and
    delete tasks, boards and columns. Everything is managed and saved to
    a MongoDB database using a custom RESTful API and Prisma ORM. Other
    features include Drag & Drop, JWT Session, Email Auth, Password
    Encryption, Middleware Protected Routes, and Optimistic Updates from
    React Query.`,
    projectImage: kanbanImage,
    projectDemo: "https://kanban-romeo-richardson.vercel.app/",
    projectCode: "https://github.com/Romeo-Richardson/kanban",
    guestEmail: "guest@email.com",
    guestPassword: "#guest123",
    skillImages: [
      typescript,
      nextjs,
      tailwind,
      mongodb,
      prisma,
      rquery,
      jwt,
      resend,
      remail,
    ],
  };

  const socializeData: props = {
    headerName: "Socialize",
    projectName: "Socialize",
    projectDescription: "Social Media App",
    projectDetails: `The purpose of this project is to show my understanding of data
    relationships. This is a fullstack application where users can
    login, logout, post messages, reply to messages, add friends, and
    direct message all in Real Time using Pusher. Everything is managed and saved to a Postgres
    database using a custom RESTful API and Prisma ORM. Other features include an AI powered Chatbot,
    Password Encryption, JWT Session, Middleware Protected Routes, and
    Optimistic Updates from React Query.`,
    projectImage: socializeImage,
    projectDemo: "https://socialize-wheat.vercel.app/",
    projectCode: "https://github.com/Romeo-Richardson/socialize",
    guestEmail: "guest@email.com",
    guestPassword: "#guest123",
    skillImages: [
      typescript,
      nextjs,
      tailwind,
      postgresql,
      prisma,
      pusher,
      rquery,
      jwt,
      openAI,
    ],
  };

  useEffect(() => {
    console.log(index);
    if (index === 4) {
      setRightStatus(true);
    } else if (index < 4) {
      setRightStatus(false);
    }

    if (index === 0) {
      setLeftStatus(true);
    } else if (index > 0) {
      setLeftStatus(false);
    }
  }, [index]);

  return (
    <div className="flex items-center justify-center relative py-24 min-h-full w-full gap-10">
      <div className=" h-screen w-[100px] flex justify-center items-center">
        <button disabled={leftStatus}>
          <Image
            className={`${!leftStatus && "hover:scale-110"} duration-300`}
            height={75}
            width={75}
            alt="Navigation Arrow Left"
            src={LeftArrow}
            onClick={() => {
              setIndex((prev) => (prev -= 1));
            }}
          ></Image>
        </button>
      </div>
      {index === 0 && <Skills></Skills>}
      {index === 1 && <Projects {...rabbitData}></Projects>}
      {index === 2 && <Projects {...kanbanData}></Projects>}
      {index === 3 && <Projects {...socializeData}></Projects>}
      {index === 4 && <ContactMe></ContactMe>}
      <div className=" h-screen w-[100px] flex justify-center items-center">
        <button disabled={rightStatus}>
          <Image
            className={`${!rightStatus && "hover:scale-110"} duration-300`}
            height={75}
            width={75}
            alt="Navigation Arrow Right"
            src={RightArrow}
            onClick={() => {
              setIndex((prev) => (prev += 1));
            }}
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default CarouselSection;
