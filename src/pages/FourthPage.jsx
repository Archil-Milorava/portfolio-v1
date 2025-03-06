import Accordion from "../components/Accordion";

const experience = [
  {
    title: "Atomic finance",
    position: "Bitcoin protocol engineer",
    timeframe: "May 2021 - Oct 2022",
    description:
      " Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all   microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
      logo: "/public/atomic.png"
  },
  {
    title: "Shopify",
    position: "Software engineer",
    timeframe: "May 2021 - Oct 2022",
    description:
      " Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
      logo: "/public//shopify.svg"
  },
  {
    title: "Nvidia",
    position: "Bitcoin protocol engineer",
    timeframe: "May 2021 - Oct 2022",
    description:
      " Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
      logo: "/public/nvidia.png"
  },
  {
    title: "Lime",
    position: "Software engineer",
    timeframe: "January 2018 - April 2018",
    description:
      " Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
      logo: "/public/lime.svg"
  },
];

const FourthPage = () => {
  return (
    <section className="h-screen w-full bg-beige flex ">


      <div className="bg-[#e0ca9c] text-dark w-full h-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-widest uppercase text-center font-Italiana font-bold">
          Experience
        </h1>
        <div className="h-1/2 w-full p-28">
          {experience.map((exp, i) => (
            <Accordion exp={exp} key={i} />
          ))}
        </div>
      </div>

      <div className="bg-[#dbb970] text-dark w-full h-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-widest uppercase text-center font-Italiana font-bold">
          Tech Stack
        </h1>
        <div></div>
      </div>



    </section>
  );
};

export default FourthPage;
