import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import "./general.css";

import { HiOutlineArrowLongDown } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const FirstPage2 = () => {
  const nameRef = useRef();
  const webText = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.to(nameRef.current, {
      scrollTrigger: {
        trigger: nameRef.current,
        start: 2,
        toggleActions: "restart none none reverse",
        scrub: 1.5,
      },
      y: -190,
      duration: 5,
    });

    gsap.fromTo(
      webText.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        toggleActions: "restart none none reverse",
        scrub: 2,
      },
      y: 100,
      color: "#FF8863",
    });
  });

  return (
    <main className=" border border-yellow-500 w-full h-screen overflow-hidden bg-[#F5F5ED]  flex flex-col">
      {/* Header Container */}
      <div className="h-1/6 w-full flex items-center justify-center">
        <h1
          ref={nameRef}
          className=" sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-[8rem] mt-8 font-bla uppercase text-dark  tracking-widest "
        >
          archil milorava
        </h1>
      </div>

      {/* Placeholder for content */}
      <div className=" w-full h-full flex flex-col  items-center justify-around text-dark py-2">
        <p className="text  text-3xl font-bla  tracking-wide">
          Web Developer From <span className=" shiny-effect"> Georgia </span>
        </p>

        <div className="">
          <img
            src="../../public/Screenshot 2025-03-03 205511.png"
            alt="profile"
            className="h-[30rem]  object-cover"
          />
        </div>

        <p className="text2  uppercase text- font-bla  tracking-wide">
          Scroll to explore more
        </p>

        <div>
          <HiOutlineArrowLongDown
            ref={imageRef}
            className="animate- text-4xl font-extralight"
          />
        </div>
      </div>
    </main>
  );
};

export default FirstPage2;
