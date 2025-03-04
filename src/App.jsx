import React from "react";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const App = () => {
  return (
    <div className="h-auto w-full min-h-screen flex flex-col m-0 p-0">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
};

export default App;
