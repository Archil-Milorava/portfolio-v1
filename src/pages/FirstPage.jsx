import RotatingText from "../ui/RotatingText/RotatingText";

const FirstPage = () => {
  return (
    <main className="w-full h-screen min-h-screen bg-beige text-dark flex flex-col">
      <div className="h-auto max-h-auto w-full overflow-hidden  bg-red-300">
        <img
          src="../../public/name.png"
          className="max-h-[12rem] w-full object-cover"
          alt="profile"
        />
      </div>

      <div className="h-4/6 w-full overflow-hidden flex items-center justify-around gap-3 ">
        <div>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
          <h1 className="font-Prata text-[30px] uppercase font-extrabold text-dark text-center">
            Web developer
          </h1>
        </div>
        <div>
          <img
            src="../../public/Screenshot 2025-03-03 205511.png"
            className="h-[30rem] rounded-md shadow-xl"
            alt="profile"
          />
        </div>
      </div>

      <div className="h-1/6 w-full overflow-hidden  flex gap-3 items-center justify-center ">
        <h1 className="font-Prata italic text-[50px] uppercase font-extrabold text-dark text-center mt-2">
          make your web-site
        </h1>

        <RotatingText
          texts={["Profesional", "Creative", "Modern", "Interactive"]}
          mainClassName=" text-[50px] text-beige h-[4rem] w-[20rem] text-center rounded-xl px-2 justify-center tracking-wider text-dark font-Prata font-semibold bg-dark"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
      </div>
    </main>
  );
};

export default FirstPage;
