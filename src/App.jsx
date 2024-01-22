import Output from "./Components/Output";
import Generator from "./Components/Generator";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleGenerate = (password) => {
    setGeneratedPassword(password);
  };

  return (
    <div className="h-screen font-jetbrains bg-gradient-to-b from-gray-950 to-black justify-center items-center flex flex-col">
      <div className="w-1/4 flex flex-col gap-5">
        <Toaster />
        <p className="text-2xl text-lightgray-c font-bold text-center">
          Password Generator
        </p>
        <Output generated={generatedPassword} />
        <Generator onGenerate={handleGenerate} />
      </div>
    </div>
  );
};

export default App;
