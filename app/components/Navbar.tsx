import React from "react";

type navItem = {
  name: string;
  link: string;
};

const Navbar = (): React.ReactNode => {
  const navData: navItem[] = [
    {
      name: "Source code",
      link: "https://github.com/Romeo-Richardson/parallax",
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1WCP1sLqnxcCgX1IJWbKJn0HQlHAxB1ke/view?usp=sharing",
    },
    {
      name: "Github",
      link: "https://github.com/Romeo-Richardson",
    },
  ];
  return (
    <div className=" h-16 w-full text-white bg-[#adb5bd] border-b-white border-b-4 absolute top-0 z-10 flex items-center px-6">
      <p className="grow font-bold text-2xl">Romeo Richardson.</p>
      <div className=" h-[85%] flex items-center gap-6">
        {navData.map((item, key: number) => {
          return (
            <a href={item.link} key={key}>
              <div className=" flex h-full items-center justify-center hover:border-t-[4px] hover:cursor-pointer hover:border-white">
                <p>{item.name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
