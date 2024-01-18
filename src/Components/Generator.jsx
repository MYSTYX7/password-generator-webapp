const Generator = ({ onGenerate }) => {
  // Password Generation Logic
  const generatePassword = () => {
    const generatedPassword = Math.random();
    onGenerate(generatedPassword);
  };

  return (
    <div className="bg-darkgray-c items-center p-5">
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
