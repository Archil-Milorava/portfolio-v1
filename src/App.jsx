import React from "react";
import Example from "./pages/Example";
import Experience from "./pages/Experience";
import FirstPage2 from "./pages/FirstPage copy";
import SecondPage from "./pages/SecondPage";
import TechStack from "./pages/TechStack";

const App = () => {
  return (
    <div className="h-auto w-full min-h-screen flex flex-col m-0 p-0 bg-white">
     
        <FirstPage2 />
        <Example />
        <SecondPage />
        <Experience />
        <TechStack />
    </div>
  );
};

export default App;
