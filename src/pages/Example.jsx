import RotatingText from "../ui/RotatingText/RotatingText";

const Example = () => {
  return (
    <div className=" shadow-lg h-auto min-h-screen relative w-full overflow-hidden  flex flex-col gap-3 items-center justify-center bg-[#F1F1F1] ">
      <h1 className="font-bla  text-[clamp(24px,5vw,50px)] uppercase font-extrabold text-dark text-center mt-2">
        make your web-site look
      </h1>

      <RotatingText
        texts={["Profesional", "Creative", "Modern", "Interactive"]}
        mainClassName=" text-[50px] text-[#F1F1F1] h-[4rem] w-[20rem] text-center rounded-xl px-2 justify-center tracking-wider text-beige font-sense font-semibold bg-dark font-bla"
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
  );
};

export default Example;
