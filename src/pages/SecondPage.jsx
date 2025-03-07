import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SecondPage = () => {
  const selectedRef = useRef(null);
  const workRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      selectedRef.current,
      { y: -150 },
      {
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selectedRef.current,
          start: "top 50%",
        },
      }
    );

    gsap.fromTo(
      workRef.current,
      { y: -250 },
      {
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 50%",
        },
      }
    );
  });

  return (
    <section className=" w-full h-auto min-h-screen overflow-hidden  text-dark flex flex-col bg-gradient-to-t from-beige to-white">
      <div className="h-1/6 w-full flex items-center justify-center font-Mulish text-black font-bold  uppercase gap-11">
        <h1
          ref={selectedRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[9rem] tracking-widest"
        >
          selected
        </h1>
        <h1
          ref={workRef}
          className="text-4xl flex items-center justify-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-[9rem] tracking-widest"
        >
          w
          <span>
            <img
              src="../../public/pngwing.com.png"
              alt="o"
              className="h-[2rem] sm:h-[2rem] md:h-[5rem] lg:h-[6rem] xl:h-[8rem]"
            />
          </span>{" "}
          rk
        </h1>
      </div>

      {/* cards div section */}
      <div className="w-full pt-24 h-5/6 flex items-center flex-col gap-36 justify-center">
        {/* card */}
        <div className="bg-yellow hover:bg-[#fb805b] transition-all duration-500 w-[75rem] h-[30rem] flex p-8 gap-16 hover:shadow-lg cursor-pointer">
          <div className="bg-red-300 w-1/3 h-full rounded-xl overflow-hidden">
            <img
              src="../../public/f1.jpg"
              alt="f1"
              className="h-full object-cover "
            />
          </div>
          <div className=" w-2/3 h-full flex flex-col justify-between">
            <div className="w-full flex mt-4 gap-1">
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                React
              </p>
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                Tailwind
              </p>
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                Redux
              </p>
            </div>
            <h1 className="text-8xl uppercase font-Prata tracking-wider ">
              F1 shop Georgia
            </h1>
          </div>
        </div>

        {/* secondCard */}
        <div className="bg-silver hover:bg-[#fb805b] transition-all duration-500 w-[75rem] h-[30rem] flex p-8 gap-16 hover:shadow-lg cursor-pointer">
          <div className="bg-red-300 w-1/3 h-full rounded-xl overflow-hidden">
            <img
              src="../../public/mymar.jpg"
              alt="f1"
              className="h-full object-cover "
            />
          </div>
          <div className=" w-2/3 h-full flex flex-col justify-between">
            <div className="w-full flex mt-4 gap-1">
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                React
              </p>
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                Styled Components
              </p>
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                MUI
              </p>
            </div>
            <h1 className="text-8xl uppercase font-Prata tracking-wider ">
              Ecommerce website
            </h1>
          </div>
        </div>

        {/* thirdCard */}
        <div className="bg-purple hover:bg-[#fb805b] transition-all duration-500 w-[75rem] h-[30rem] flex p-8 gap-16 hover:shadow-2xl cursor-pointer">
          <div className="bg-red-300 w-1/3 h-full rounded-xl overflow-hidden">
            <img
              src="../../public/euro.jpg"
              alt="euro"
              className="h-full object-cover "
            />
          </div>
          <div className=" w-2/3 h-full flex flex-col justify-between">
            <div className="w-full flex mt-4 gap-1">
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                React
              </p>
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                MUI
              </p>
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                Tailwind
              </p>
            </div>
            <h1 className="text-8xl uppercase font-Prata tracking-wider ">
              Europop sportNews
            </h1>
          </div>
        </div>

        {/* fourthCard */}
        <div className="bg-blue hover:bg-[#fb805b] transition-all duration-500 w-[75rem] h-[30rem] flex p-8 gap-16 hover:shadow-2xl cursor-pointer">
          <div className="w-1/3 h-full rounded-xl overflow-hidden">
            <img
              src="../../public/vit.jpg"
              alt="euro"
              className="h-full object-cover "
            />
          </div>
          <div className=" w-2/3 h-full flex flex-col justify-between">
            <div className="w-full flex mt-4 gap-1">
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                React
              </p>
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                Redux
              </p>
              <p className="bg-white rounded-full px-4 text-lg tracking-wide font-Mulish font-semibold">
                Taiwind
              </p>
            </div>
            <h1 className="text-8xl uppercase font-Prata tracking-wider ">
              Workout supplyment
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
