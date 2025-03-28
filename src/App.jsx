import React from "react";
import Example from "./pages/Example";
import Experience from "./pages/Experience";
import SecondPage from "./pages/SecondPage";
import TechStack from "./pages/TechStack";
import FirstPage from "./pages/FirstPage";
import FirstPage2 from "./pages/FirstPage copy";

import { ReactLenis } from "@studio-freight/react-lenis";

const App = () => {
  return (
    <div className="h-auto w-full min-h-screen flex flex-col m-0 p-0 bg-white scroll-smooth">
      {/* <FirstPage /> */}
      <FirstPage2 />
      <Example />
      <SecondPage />
      <Experience />
      <TechStack />
    </div>
  );
};

export default App;
