// app.js (React version)
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    let name = prompt("Enter your name:");
    let email = prompt("Enter your email:");
    let w = prompt("Enter weight (kg):");
    let h = prompt("Enter height (m):");

    let bmi = w / (h * h);
    alert(`Name: ${name}\nEmail: ${email}\nYour BMI is: ${bmi.toFixed(2)}`);
  }, []);

  return <h2>BMI Calculator</h2>;
}

export default App;
