import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const CharLen = ({ currentValue, onSliderChange }) => {
  return (
    <div className="flex flex-col pb-5">
      <div className="flex justify-between items-center text-white-c">
        <p className="text-sm">Character Length</p>
        <p className="text-2xl text-green-c">{currentValue || 0}</p>
      </div>
      <div className="pt-3">
        <Slider
          onChange={onSliderChange}
          max={25}
          trackStyle={{ backgroundColor: "#a5feaf", height: 6 }}
          railStyle={{ backgroundColor: "#030712", height: 6 }}
          handleStyle={{
            borderColor: "white",
            height: 20,
            width: 20,
            marginTop: -6.25,
            backgroundColor: "white",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};

export default CharLen;
