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

const CarouselSection = (): React.ReactNode => {
  const [index, setIndex] = useState<number>(0);
  const [leftStatus, setLeftStatus] = useState<boolean>(false);
  const [rightStatus, setRightStatus] = useState<boolean>(false);

  const kanbanData: props = {
    headerName: "Kanban Board",
    projectName: "Kanban",
    projectDescription: "Trello style task board",
    projectDetails: `The purpose of this project is to show my understanding of CRUD
    operations. This is a fullstack application where users can log in or
    logout to save their progress. Users can create, post, update and
    delete tasks, boards and columns. Everything is managed and saved to
    a MongoDB database using custom REST API's and Prisma ORM. Other
    features include Drag & Drop, JWT Session, Email Auth, Password
    Encryption, Middleware Protected Routes, and Optimistic Updates from
    React Query.`,
    projectImage: kanbanImage,
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
    database using custom REST API's and Prisma ORM. Other features include an AI powered Chatbot,
    Password Encryption, JWT Session, Middleware Protected Routes, and
    Optimistic Updates from React Query.`,
    projectImage: socializeImage,
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
    if (index === 3) {
      setRightStatus(true);
    } else if (index < 3) {
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
      {index === 1 && (
        <Projects
          headerName={kanbanData.headerName}
          projectName={kanbanData.projectName}
          projectDescription={kanbanData.projectDescription}
          projectDetails={kanbanData.projectDetails}
          projectImage={kanbanData.projectImage}
          guestEmail={kanbanData.guestEmail}
          guestPassword={kanbanData.guestPassword}
          skillImages={kanbanData.skillImages}
        ></Projects>
      )}
      {index === 2 && (
        <Projects
          headerName={socializeData.headerName}
          projectName={socializeData.projectName}
          projectDescription={socializeData.projectDescription}
          projectDetails={socializeData.projectDetails}
          projectImage={socializeData.projectImage}
          guestEmail={socializeData.guestEmail}
          guestPassword={socializeData.guestPassword}
          skillImages={socializeData.skillImages}
        ></Projects>
      )}
      {index === 3 && <ContactMe></ContactMe>}
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
