import { useState } from "react";
import CharLen from "./GeneratorComponents/CharLen";

const Generator = ({ onGenerate }) => {
  const [sliderValue, setSliderValue] = useState(0);

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

    onGenerate(generatedPassword);
  };

  return (
    <div className="bg-darkgray-c items-center p-5">
      <CharLen
        currentValue={sliderValue}
        onSliderChange={(value) => handleSliderChange(value)}
      />
      <button
        className="bg-green-c px-auto py-4 w-full font-bold"
        onClick={generatePassword}
      >
        GENERATE
      </button>
    </div>
  );
};

export default Generator;
