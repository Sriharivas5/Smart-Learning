import React, { useState } from "react";
import "./Position2.css";
import dogGif from "../assets/dogGif.gif";
import dogFood from "../assets/dogFood.png";
const Position2 = () => {
  const [positionInput, setPositionInput] = useState("");

  const [leftInput, setLeftInput] = useState("");
  const [finalLeftInput, setFinalLeftInput] = useState("0px");
  const [bottomInput, setBottomInput] = useState("");
  const [finalBottomInput, setFinalBottomInput] = useState("0px");

  const [leftBoyInput, setLeftBoyInput] = useState("");
  const [finalLeftBoyInput, setFinalLeftBoyInput] = useState("0px");
  const [bottomBoyInput, setBottomBoyInput] = useState("");
  const [finalBottomBoyInput, setFinalBottomBoyInput] = useState("0px");

  const handleClick = () => {
    if (positionInput == "") {
      alert("Please fill the position input field");
    } else {
      setFinalLeftInput(leftInput);
      setFinalBottomInput(bottomInput);
      setFinalLeftBoyInput(leftBoyInput),
        setFinalBottomBoyInput(bottomBoyInput);
    }
  };
  return (
    <div className="position2">
      <div className="positionImage2">
        <h1>Use position properties to feed the odg</h1>
        <div className="parent2">
          <div
            id="boy2"
            style={{
              left: finalLeftBoyInput,
              top: finalBottomBoyInput,
            }}
          >
            <img
              src={dogGif}
              style={{
                position: positionInput,
                left: finalLeftInput,
                top: finalBottomInput,
              }}
              id="dog2"
            />
          </div>
          <img src={dogFood} id="dogFood2" />
        </div>
      </div>
      <div className="positionInput">
        <div className="positionInputHeading">
          <h2>H</h2>
        </div>
        <div className="positionInputContainer2">
          <div className="positionInputRelativeChild2">
            <div className="commonInputParent2Heading">
              <h2>Boy(Parent)</h2>
            </div>
            <div className="commonInputParent2">
              <h2>position : </h2>
              <input
                type="text"
                value={positionInput}
                onChange={(e) => setPositionInput(e.target.value)}
              />
            </div>
            <div className="commonInputParent2">
              <h2>left :</h2>
              <input
                type="text"
                placeholder="left relative"
                onChange={(e) => setLeftBoyInput(e.target.value)}
                value={leftBoyInput}
              />
            </div>
            <div className="commonInputParent2">
              <h2>top :</h2>
              <input
                type="text"
                placeholder="top"
                onChange={(e) => setBottomBoyInput(e.target.value)}
                value={bottomBoyInput}
              />
            </div>
          </div>
          <div className="positionInputAbsolutChild2">
            <div className="commonInputParent2Heading">
              <h2>Dog(Child)</h2>
            </div>
            <div className="commonInputParent2">
              <h2>position : </h2>
              <input
                type="text"
                value={positionInput}
                onChange={(e) => setPositionInput(e.target.value)}
              />
            </div>
            <div className="commonInputParent2">
              <h2>left :</h2>
              <input
                type="text"
                placeholder="left"
                onChange={(e) => setLeftInput(e.target.value)}
                value={leftInput}
              />
            </div>
            <div className="commonInputParent2">
              <h2>top :</h2>
              <input
                type="text"
                placeholder="top"
                onChange={(e) => setBottomInput(e.target.value)}
                value={bottomInput}
              />
            </div>
          </div>
        </div>
        <div className="positionInputButton">
          <button onClick={handleClick}>Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Position2;
