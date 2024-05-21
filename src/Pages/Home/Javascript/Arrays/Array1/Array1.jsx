import React from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import "./Array1.css";
import { useState } from "react";
import { useEffect } from "react";
const Array1 = () => {
  const [imageClass, setImageClass] = useState('');
  const [textArea, setTextArea] = useState("");
  const [finalTextArea, setFinalTextArea] = useState("");

  const handleClick = () => {
    setFinalTextArea(textArea);
  };
  useEffect(() => {
    if (
      finalTextArea == 'const parking =["car1","car2","car3"]' ||
      finalTextArea ==  'var parking =["car1","car2","car3"]' ||
      finalTextArea == 'let parking =["car1","car2","car3"]'||
      finalTextArea == "const parking =['car1','car2','car3']" ||
      finalTextArea ==  "var parking =['car1','car2','car3']" ||
      finalTextArea == "let parking =['car1','car2','car3']"
    ) {
      setImageClass("moveCar");
    } else {
      setImageClass("");
    }
  }, [finalTextArea]);
  return (
    <div className="array1">
      <div className="array1Image">
        <div className="array1Garage">
          <img src={car1} className={imageClass } />
          <img src={car2} className={imageClass} />
          <img src={car1} className={imageClass} />
          <img src={car2} className={imageClass} />
        </div>
        <div className="array1Cars"></div>
      </div>
      <div className="array1Question">
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <button onClick={handleClick}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Array1;
