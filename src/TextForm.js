import React, { useState } from "react";

export default function TextForm(props) {
  const upper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const CapitalizedCase = () => {
    if (typeof text === "string") {
      // Split the string into an array of words
      const words = text.split(" ");

      // Capitalize each word
      const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.substr(1);
      });

      // Join the capitalized words back into a string
      const newText = capitalizedWords.join(" ");

      // Update the state with the capitalized text
      setText(newText);
    } else {
      console.log("text is not a string");
    }
  };

  const Altcase = () => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      // Toggle case based on the character's position
      if (i % 2 === 0) {
        result += text[i].toLowerCase();
      } else {
        result += text[i].toUpperCase();
      }
    }
    setText(result);
  };

  const inverseAlt = () => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      // Toggle case based on the character's position
      if (i % 2 === 0) {
        result += text[i].toUpperCase();
      } else {
        result += text[i].toLowerCase();
      }
    }
    setText(result);
  };

  const SentenceCase = () => {
    let newText = text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  };

  const Trim = () => {
    let newText = text.trim();
    setText(newText);
  };

  const Reset = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here ");

  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div
          className="mb-3 "
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "#0047AB" : "white",
            }}
          ></textarea>
        </div>

        <button
          className="btn bg-primary "
          onClick={upper}
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          Convert to Upper{" "}
        </button>

        <button
          className="btn bg-primary mx-3   "
          onClick={lower}
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          Convert to Lower{" "}
        </button>

        <button
          className="btn bg-primary    "
          onClick={SentenceCase}
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          Sentence case{" "}
        </button>

        <button
          className="btn bg-primary  mx-3  "
          onClick={CapitalizedCase}
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          Capitalized Case{" "}
        </button>

        <button
          className="btn bg-primary    "
          onClick={Altcase}
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          aLtErNaTiNg cAsE{" "}
        </button>

        <button
          className="btn bg-primary  mx-3  "
          onClick={inverseAlt}
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          InVeRsE CaSe{" "}
        </button>

        <button
          className="btn bg-primary  mx-3  "
          onClick={Trim}
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          Trim{" "}
        </button>

        <button
          className="btn bg-primary  mx-3  "
          onClick={Reset}
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          Reset{" "}
        </button>
      </div>
      <div
        className=" container my-4"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text Summary</h2>
        <p>
          Character Count - {text.length} Word Count - {text.split(" ").length}
        </p>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Preview Here </h3>
        <p>{text}</p>
      </div>
    </>
  );
}
