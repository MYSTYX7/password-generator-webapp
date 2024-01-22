import { useState } from "react";
import CharLen from "./GeneratorComponents/CharLen";
import Strength from "./GeneratorComponents/Strength";
import Output from "./Output";

const Generator = ({ onGenerate }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleSliderChange = (value) => {
    setSliderValue(value);
    generatePassword(value);
  };

  const generatePassword = (value) => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-[]{}|;~:.<>?";
    let generatedPassword = "";

    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(randomIndex);
    }

    setGeneratedPassword(generatedPassword);
    onGenerate(generatedPassword);
  };

  const handleGenerateClick = () => {
    handleSliderChange(sliderValue);
  };

  return (
    <div className="bg-darkgray-c items-center p-5">
      <CharLen
        currentValue={sliderValue}
        onSliderChange={(value) => handleSliderChange(value)}
      />
      <Strength password={generatedPassword} />
      {/* <Output generated={generatedPassword} /> */}
      <button
        className="bg-green-c px-auto py-4 mt-5 w-full font-bold"
        onClick={handleGenerateClick}
      >
        GENERATE
      </button>
    </div>
  );
};

export default Generator;
