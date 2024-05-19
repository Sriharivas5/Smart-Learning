import React, { useState } from "react";
import "./Positions.css";
import dogGif from "../assets/dogGif.gif";
import dogFood from "../assets/dogFood.png";
const Positions = () => {
  const [positionInput, setPositionInput] = useState("");
  const [finalPositionInput, setfinalPositionInput] = useState("");
  const [leftInput, setLeftInput] = useState("");
  const [finalLeftInput, setFinalLeftInput] = useState("0px");
  const [bottomInput, setBottomInput] = useState("");
  const [finalBottomInput, setFinalBottomInput] = useState("0px");

  const handleClick = () => {
    setfinalPositionInput(positionInput);
    setFinalLeftInput(leftInput);
    setFinalBottomInput(bottomInput);
  };
  return (
    <div className="position">
      <div className="positionImage">
        <div className="parent">
          <img
            src={dogGif}
            style={{
              position: positionInput,
              left: finalLeftInput,
              top: finalBottomInput,
            }}
            id="dog"
          />
          <img src={dogFood} id="dogFood" />
        </div>
      </div>
      <div className="positionInput">
        <div className="note">
          <h1></h1>
        </div>
        <div className="positionInputChild">
          <div className="commonInputParent">
            <h2>position : </h2>
            <input
              type="text"
              value={positionInput}
              onChange={(e) => setPositionInput(e.target.value)}
            />
          </div>
          <div className="commonInputParent">
            <h2>left :</h2>
            <input
              type="text"
              placeholder="left"
              onChange={(e) => setLeftInput(e.target.value)}
              value={leftInput}
            />
          </div>
          <div className="commonInputParent">
            <h2>top :</h2>
            <input
              type="text"
              placeholder="top"
              onChange={(e) => setBottomInput(e.target.value)}
              value={bottomInput}
            />
          </div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Positions;
