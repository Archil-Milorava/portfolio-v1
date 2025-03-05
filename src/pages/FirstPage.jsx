import { useGSAP } from "@gsap/react";
import RotatingText from "../ui/RotatingText/RotatingText";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FirstPage = () => {
  const webDevText = Array.from({ length: 139 });

  const nameRef = useRef();

  useGSAP(() => {
    gsap.to(nameRef.current, {
      scrollTrigger: {
        trigger: nameRef.current,
        start: 2,
        toggleActions: "restart none none reverse",

        scrub: 1,
        // markers: true,
      },
      y: -290,
    });
  });

  return (
    <main className=" w-full h-screen overflow-hidden bg-beige  text-dark flex flex-col gap-2">
      <div ref={nameRef} className="h-auto  w-auto overflow-hidden  bg-red-300">
        <img
          src="../../public/name.png"
          className="h-[8rem] w-full object-cover"
          alt="profile"
        />
      </div>

      <div className="w-full h-full flex ">
        <div className="h-full max-h-[54rem] overflow-hidden w-1/2 flex flex-col items-center justify-center text-4xl">
          {webDevText.map((_, index) => (
            <h1 key={index} className="  font-Prata">
              Web developer
            </h1>
          ))}
        </div>
        <div className="h-full w-1/2 flex flex-col items-center justify-center text-4xl ">
          <img src="../../public/Screenshot 2025-03-03 205511.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default FirstPage;
