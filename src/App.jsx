import Output from "./Components/Output";
import Generator from "./Components/Generator";

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-950 to-black flex flex-col justify-center items-center">
      <p className="text-4xl text-white-c">Password Generator</p>
      <Output />
      <Generator />
    </div>
  );
};

export default App;
