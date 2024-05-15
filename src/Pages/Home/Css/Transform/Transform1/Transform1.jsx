import React, { useState } from "react";
import "./Transform1.css";
import bird from "../Assets/birds_PNG42.png";

const Transform1 = () => {
  const [rotate, setRotate] = useState();
  const [rotateInput, setRotateInput] = useState();

  const handleRotate = () => {
    setRotate(rotateInput);
  };
  return (
    <div className="transform">
      <div className="result">
        <div className="resultContent">
        <h3>enter the correct deg in input field and match bird-B with bird-A</h3>
        </div>
        <div className="resultS">
         <div>
          <h3>bird-A</h3>
         <div><img src={bird} alt="#" />  </div>       
         </div>
         <div>
         <h3>bird-B</h3>
         <div style={{ transform: `rotate(${rotate})` }}>
          
          <img src={bird} id="bird" alt="#" />
        </div>
         </div>
         
        </div>
      </div>
      <div className="rotate">
        <div className="rotateCont">
          <h3>We have transform properties in CSS </h3>
          <h4>In General we'll give the rotate values with deg ex: 45deg</h4>
        </div>
        <div className="rightContent">
          <h2 htmlFor="">transform: rotate()</h2>
          <input
            type="text"
            value={rotateInput}
            onChange={(e) => setRotateInput(e.target.value)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") handleRotate();
            }}
          />
        </div>

        <button onClick={handleRotate}>Enter</button>
      </div>
    </div>
  );
};

export default Transform1;
