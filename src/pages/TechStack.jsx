import React from "react";
import StackBox from "../components/StackBox";
import { motion } from "framer-motion";

const frontend = [
  {
    title: "html",
    icon: "html5",
  },
  {
    title: "css",
    icon: "css3",
  },
  {
    title: "js",
    icon: "js",
  },
  {
    title: "typescript",
    icon: "typescript",
  },
  {
    title: "react",
    icon: "reactjs",
  },
  {
    title: "next",
    icon: "nextjs2",
  },
  {
    title: "reactQuery",
    icon: "reactquery",
  },
  {
    title: "bootstrap",
    icon: "bootstrap5",
  },
  {
    title: "framer",
    icon: "framer",
  },
  {
    title: "Gsap",
    icon: "gsap",
  },
  {
    title: "redux",
    icon: "redux",
  },
  {
    title: "sass",
    icon: "sass",
  },
  {
    title: "Tailwind",
    icon: "tailwindcss",
  },
];

const backend = [
  {
    title: "nodejs",
    icon: "nodejs",
  },
  {
    title: "express",
    icon: "express",
  },
  {
    title: "mongodb",
    icon: "mongodb",
  },
  {
    title: "mongoose",
    icon: "mongoose",
  },
  {
    title: "mysql",
    icon: "mysql",
  },
  {
    title: "postgresql",
    icon: "postgresql",
  },
  {
    title: "prisma",
    icon: "prisma",
  },
  {
    title: "postman",
    icon: "postman",
  },
];

const other = [
  {
    title: "git",
    icon: "git",
  },
  {
    title: "github",
    icon: "github",
  },
  {
    title: "i18next",
    icon: "i18next",
  },
];

const TechStack = () => {
  return (
    <section className="bg-gradient-to-t from-[#E8E8E8] to-white  h-auto max-h-auto w-full  overflow-hidden flex items-center justify-center gap-8 pb-[10rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: 100, opacity: 0 },

          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
        }}
        className=" w-4/6 h-full flex flex-col gap-4 pl-28 "
      >
        {/* front stack list div */}
        <div className="w-full h-1/3  flex flex-col gap-2">
          <h1 className="text-4xl uppercase tracking-widest font-bold text-dark font-Italiana ">
            FrontEnd
          </h1>
          <div className="flex flex-wrap gap-2 w-full h-full ">
            {frontend.map((stack, i) => (
              <StackBox key={i} stack={stack} />
            ))}
          </div>
        </div>

        {/* back stack list div */}
        <div className="w-full h-auto flex flex-col gap-2">
          <h1 className="text-4xl uppercase tracking-widest font-bold text-dark font-Italiana">
            backend
          </h1>
          <div className="flex flex-wrap gap-2 w-full h-auto ">
            {backend.map((stack, i) => (
              <StackBox key={i} stack={stack} />
            ))}
          </div>
        </div>

        {/* other stack list div */}
        <div className="w-full h-1/3  flex flex-col gap-2">
          <h1 className="text-4xl uppercase tracking-widest font-bold text-dark font-Italiana">
            other
          </h1>
          <div className="flex flex-wrap gap-2 w-full h-full ">
            {other.map((stack, i) => (
              <StackBox key={i} stack={stack} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* experince text div */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: 150, opacity: 0 },

          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
        }}
        className=" w-2/6 h-full flex flex-col items-start justify-center pr-28 gap-2"
      >
        <h1 className="text-dark text-5xl font-semibold font-Italiana uppercase ">
          Tech Stack
        </h1>
        <p className="text-dark font-Prata text-sm text-start">
          I have proficiency at fullstack developemente and here is the stack
          that i use to build the applications
        </p>
      </motion.div>
    </section>
  );
};

export default TechStack;
