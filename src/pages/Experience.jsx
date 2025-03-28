import Accordion from "../components/Accordion";
import { motion } from "framer-motion";
import "./colorChange.css"

const experienceList = [
  {
    title: "Atomic finance",
    position: "Bitcoin protocol engineer",
    timeframe: "May 2021 - Oct 2022",
    description:
      " Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all   microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    logo: "/public/atomic.png",
  },
  {
    title: "Shopify",
    position: "Software engineer",
    timeframe: "May 2021 - Oct 2022",
    description:
      " Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    logo: "/public//shopify.svg",
  },
  {
    title: "Nvidia",
    position: "Bitcoin protocol engineer",
    timeframe: "May 2021 - Oct 2022",
    description:
      " Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    logo: "/public/nvidia.png",
  },
  {
    title: "Lime",
    position: "Software engineer",
    timeframe: "January 2018 - April 2018",
    description:
      " Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    logo: "/public/lime.svg",
  },
];

const Experience = () => {
  return (
    <section className="font-bla bg-gradient-to-t from-white to-[#E8E8E8]  h-auto max-h-auto w-full py-[15rem] px-[5rem]   overflow-hidden flex items-center justify-center">
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
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        className=" w-2/6 h-full flex flex-col items-end justify-center pl-28 gap-2"
      >
        <h1 className="text-dark text-5xl font-semibold font- uppercase ">
          Experience
        </h1>
        <p className="text-dark font-Prata text-sm text-end">
          I have worked with some of the most innovative industry leaders to
          help build their top-notch products.
        </p>
      </motion.div>
      {/* experience list div */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: 170, opacity: 0 },

          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          },
        }}
        className=" w-4/6 h-full flex flex-col px-11  items-center justify-center"
      >
        {experienceList.map((exp, i) => (
          <Accordion key={i} exp={exp} />
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
