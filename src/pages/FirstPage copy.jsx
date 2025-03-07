import { useGSAP } from "@gsap/react";
import RotatingText from "../ui/RotatingText/RotatingText";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FirstPage2 = () => {
  const nameRef = useRef();
  const webText = useRef();
  const developerText = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.to(nameRef.current, {
      scrollTrigger: {
        trigger: nameRef.current,
        start: 2,
        toggleActions: "restart none none reverse",
        scrub: 1,
      },
      y: -190,
      duration: 5,
    });

    gsap.to(webText.current, {
      scrollTrigger: {
        trigger: webText.current,
        start: 5,
        toggleActions: "restart none none reverse",
        scrub: 4,
      },
      x: 2000,
      paused: 2,
    });

    gsap.to(developerText.current, {
      scrollTrigger: {
        trigger: developerText.current,
        start: 2,
        toggleActions: "restart none none reverse",
        scrub: 4,
      },
      x: 2000,
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 30%",
        toggleActions: "restart none none reverse",
        scrub: 4,
      },
      opacity: 0,
      x: 200,
    });
  });

  return (
    <main className=" border border-yellow-500 w-full h-screen overflow-hidden bg-beige text-dark flex flex-col">
      {/* Header Container */}
      <div className="h-1/6 w-full flex items-center justify-center">
        <h1
          ref={nameRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-Roboto font-bold tracking-widest text-dark"
        >
          ARCHIL MILORAVA
        </h1>
      </div>

      {/* Placeholder for content */}
      <div className=" w-full h-5/6 flex ">
        <div className="w-2/3 h-full flex flex-col text-9xl ">
          <h1
            ref={webText}
            className=" w-full h-full flex items-end justify-end font-Prata  bg-[#b8b2a7]"
          >
            WEB
          </h1>
          <h1
            ref={developerText}
            className=" w-full h-full flex items-start justify-end font-Prata bg-[#b8b2a7]"
          >
            DEVELOPER
          </h1>
        </div>
        <div className="w-1/3 h-full flex justify-start items-center object-cover">
          <img
            ref={imageRef}
            src="../../public/Screenshot 2025-03-03 205511.png"
            alt="profile"
            className="h-[35rem]"
          />
        </div>
      </div>
    </main>
  );
};

export default FirstPage2;
