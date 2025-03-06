import React from "react";
import Example from "./pages/Example";
import FirstPage2 from "./pages/FirstPage copy";
import FourthPage from "./pages/fourthPage";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <div className="h-auto w-full min-h-screen flex flex-col m-0 p-0 bg-white">
     
        <FirstPage2 />
        <Example />
        <SecondPage />
        <FourthPage />
      
    </div>
  );
};

export default App;
