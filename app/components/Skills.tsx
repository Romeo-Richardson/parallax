import React from "react";
import { useInView } from "react-intersection-observer";

type skillSection = {
  title: string;
  skills: string[];
};

const Skills = () => {
  const { ref: p1Ref, inView: p1View, entry: p1Style } = useInView();

  const skillData: skillSection[] = [
    {
      title: "Front End",
      skills: [
        "HTML",
        "CSS",
        "React",
        "TailwindCSS",
        "Material UI",
        "Styled Components",
      ],
    },
    {
      title: "Back End",
      skills: [
        "Prisma",
        "Mongoose",
        "MongoDB",
        "NextJS",
        "ExpressJS",
        "NodeJS",
      ],
    },
    {
      title: "Other",
      skills: [
        "Javascript",
        "Typescript",
        "React Query",
        "Zustand",
        "Python",
        "C",
        "Pusher",
        "Resend",
        "JWT",
        "Wordpress",
      ],
    },
  ];
  return (
    <>
      <div
        className={`w-full flex justify-center mb-8 absolute top-0 ${
          p1View ? "translate-x-[0px] blur-0" : "translate-x-[-16px] blur-lg"
        } duration-500`}
        ref={p1Ref}
      >
        <p className=" text-white text-5xl">
          <strong>Skills & Technologies</strong>
        </p>
      </div>
      <div className=" min-h-screen w-[700px] bg-white flex flex-col py-4 pl-8 justify-between">
        {skillData.map((section, key) => {
          return (
            <React.Fragment key={key}>
              <div className=" w-full flex flex-col">
                <div>
                  <p className=" text-xl font-bold">{section.title}</p>
                </div>
                <div className=" w-full flex flex-wrap">
                  {section.skills.map((skill, key) => {
                    return (
                      <React.Fragment key={key}>
                        <div className="w-1/4 flex gap-1 items-center my-6">
                          <div className=" h-[12px] w-[12px] bg-[#4cc9f0]"></div>
                          <p>{skill}</p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
