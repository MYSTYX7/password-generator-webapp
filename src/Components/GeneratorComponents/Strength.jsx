import React, { useState, useEffect } from "react";

const Strength = ({ password }) => {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    calculateStrength(password);
  }, [password]);

  const calculateStrength = (password) => {
    const hasSpecialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    const passwordLength = password.length;

    if (passwordLength < 7 || hasSpecialCharacters) {
      setStrength(1);
    } else if (passwordLength >= 7 && passwordLength < 12) {
      setStrength(2);
    } else if (passwordLength >= 12 && passwordLength < 16) {
      setStrength(3);
    } else {
      setStrength(4);
    }
  };

  return (
    <div className="mt-5">
      <div className={`strength-bar ${strength >= 1 ? "active" : ""}`}></div>
      <div className={`strength-bar ${strength >= 2 ? "active" : ""}`}></div>
      <div className={`strength-bar ${strength >= 3 ? "active" : ""}`}></div>
      <div className={`strength-bar ${strength === 4 ? "active" : ""}`}></div>
      <p>
        {strength === 1 && "Weak"}
        {strength === 2 && "Medium"}
        {strength === 3 && "Strong"}
        {strength === 4 && "Very Strong"}
      </p>
    </div>
  );
};

export default Strength;



