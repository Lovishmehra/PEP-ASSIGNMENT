import React, { useState } from "react";
import "./Bmi.css";

function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please fill in both fields");
      return;
    }
    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters ** 2)).toFixed(1);
    setBmi(calculatedBMI);

    // Determine BMI status
    if (calculatedBMI < 18.5) {
      setStatus("Underweight");
    } else if (calculatedBMI < 24.9) {
      setStatus("Normal weight");
    } else if (calculatedBMI < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obesity");
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setStatus("");
  };

  return (
    <div className="bmi-container">
      <header className="bmi-header">
        <h1>BMI Calculator</h1>
        <p>Calculate your Body Mass Index (BMI) to track your fitness goals!</p>
      </header>
      <main>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>
        <div className="bmi-buttons">
          <button className="btn calculate-btn" onClick={calculateBMI}>
            Calculate BMI
          </button>
          <button className="btn reset-btn" onClick={resetForm}>
            Reset
          </button>
        </div>
        {bmi && (
          <div className="bmi-result">
            <h2>Your BMI: {bmi}</h2>
            <p>Status: <strong>{status}</strong></p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Bmi;
