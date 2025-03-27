import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import "./general.css";

gsap.registerPlugin(ScrollTrigger);

const FirstPage = () => {
  const nameRef = useRef();
  const webText = useRef();
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

    gsap.fromTo(
      webText.current,
      { y: 0, opacity: 0 }, // Starts below and invisible
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" } // Moves up quickly
    );

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
    <main className=" border border-yellow-500 w-full h-screen overflow-hidden bg-[#F5F5ED]  flex flex-col">
      {/* Header Container */}
      <div className="h-1/6 w-full flex items-center justify-center">
        <h1
          ref={nameRef}
          className=" sm:text-5xl md:text-5xl lg:text-5xl xl:text-[8rem] mt-8 font-bla uppercase text-dark  tracking-widest "
        >
          archil milorava
        </h1>
      </div>

      {/* Placeholder for content */}
      <div className=" w-full h-5/6 flex">
        <div className=" h-full w-2/3   flex flex-col  ">
          <div
            ref={webText}
            className="text-dark font-bla uppercase text-8xl w-full h-full flex flex-col items-start pl-[10rem] justify-center"
          >
            <h1>
              Web <br /> DEveloper
            </h1>
            <h1>
              from <span className="text">Georgia</span>
            </h1>
          </div>
        </div>

        <div className="w-1/3 h-full flex items-center justify-start">
          <img
            ref={imageRef}
            src="../../public/Screenshot 2025-03-03 205511.png"
            alt="profile"
            className="h-[30rem]  object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default FirstPage;
