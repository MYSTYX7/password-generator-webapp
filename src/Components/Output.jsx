import { FaRegCopy } from "react-icons/fa6";
import toast from "react-hot-toast";

const Output = ({ generated }) => {
  // Copy Button Logic
  const handleCopyClick = () => {
    if (generated) {
      navigator.clipboard.writeText(generated);
      notify();
    }
  };

  // Toast Notification
  const notify = () =>
    toast.success("Copied to Clipboard", {
      style: { backgroundColor: "#a5feaf" },
      iconTheme: {
        primary: "#25232a",
        secondary: "#e7e4ea",
      },
    });

  return (
    <div className="bg-darkgray-c flex justify-between px-5 py-4 items-center">
      <p
        className="text-2xl font-bold"
        style={{ color: generated ? "#e7e4ea" : "#54525a" }}
      >
        {generated || "P4$5W0rD!"}
      </p>
      <FaRegCopy
        style={{
          color: "#a5feaf",
          cursor: generated ? "pointer" : "not-allowed",
        }}
        size={24}
        onClick={handleCopyClick}
        title={generated ? "Copy to Clipboard" : ""}
      />
    </div>
  );
};

export default Output;
