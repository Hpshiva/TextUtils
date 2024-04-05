import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
// import About from "./About";
function App() {
  const [mode, setMode] = useState("light"); //for dark or light more

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#0047AB";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        link="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3 ">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
