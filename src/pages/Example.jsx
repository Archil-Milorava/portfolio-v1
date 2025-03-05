import React, { useRef } from 'react'
import RotatingText from '../ui/RotatingText/RotatingText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);


const Example = () => {




  return (
    <div  className="h-auto min-h-screen w-full overflow-hidden  flex flex-col gap-3 items-center justify-center bg-dark">
        <h1 className="font-Mulish  text-[clamp(24px,5vw,50px)] uppercase font-extrabold text-beige text-center mt-2">
          make your web-site look
        </h1>

        <RotatingText
          texts={["Profesional", "Creative", "Modern", "Interactive"]}
          mainClassName=" text-[50px] text-dark h-[4rem] w-[20rem] text-center rounded-xl px-2 justify-center tracking-wider text-beige font-Prata font-semibold bg-beige"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
  )
}

export default Example