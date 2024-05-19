import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../../../Components/ScrollToTop/ScrollToTop";
import "./SelectorsIntro.css";

const SelectorsIntro = () => {
  return (
    <div className="flexIntro">
      <div className="headindFlex">
        <h1>What is Selector</h1>
      </div>
      <div className="flexIntroHeader">
        <h2>
        A CSS selector is the first part of a CSS Rule. It is a pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them
        </h2>
        <h3>
          &#8594; We can select html elemts by three types
        </h3>
        <h3>
          &#8594; By tag name 
        </h3>
        <h3>
          &#8594; By class name 
        </h3>
        <h3>
          &#8594; By id name 
        </h3>
        <div className="buttonContainer">
          <Link to="/Smart-Learning/Css/Selectors/Selectors1">
            <button id="flexStart">START GAME</button>
          </Link>
        </div>
      </div>
      <div className="exampleFlex">
        <div className="exampleFlexHeading">
          <h2> Example :</h2>
        </div>
        <h2>div</h2>
        <div className="flexContainer">
          <div className="box1">item1</div>
          <div className="box2">item2</div>
          <div className="box3">item3</div>
        </div>
      </div>
      <div className="exampleFlexDescription">
        <div className="intro">
          <div className="flexintroContent">
            <h4>
              Consider above div it contains 3 divs named as item1 ,item2 ,item3
            </h4>
            <h4>
              &#8594; Just think if we want to adjust those three side by side
              and maintain a certain distance between them and align them in
              vertically in a specific way .How we can acheive that thing?
            </h4>
            <h4>
              &#8594; We can put them side by side by using inline-block proerty
              or some other css property but what about spacing between them and
              vertical alignment it will become a hard task to us .
            </h4>
            <h4>
              &#8594; By using Flexbox model we can achieve all these things
              very simple and easy manner.
            </h4>
            <h4>
              &#8594; Directly we can write display:flex to parent div we can
              arrange them side by side.
            </h4>
            <h4>
              &#8594; Now let's dive deep into flexbox it has some properties
              like
            </h4>
          </div>
          <div className="flexIntropoints">
            <h5>&#9733; Justify-content</h5>
            <h5>&#9733; Align-items ,</h5>
            <h5>&#9733; Flex-direction ,</h5>
            <h5>
              &#9733; Flex-wrap and some other but we use these four mainly in
              our website
            </h5>
          </div>
        </div>
        <div className="exampleJustifyContent">
          <div className="exampleJustifyContentIntro">
            <h2>Let's discuss about each concept in detail.</h2>
            <div>
              <h3>Justify-content :</h3>
              <h4>
                We can arrange items in horizontally using this property , it
                has properties like
              </h4>
            </div>
            <h5> &#10233; Flex-start</h5>
            <h5> &#10233; Center</h5>
            <h5> &#10233; Flex-end</h5>
            <h5> &#10233; Space-between</h5>
            <h5> &#10233; Space-around</h5>
            <h5> &#10233; Space-evenly</h5>
          </div>
          <div className="exampleJustifyContentStart commonJustifyClass">
            <h3>Flex-start</h3>
            <h4> Flex-start : aligns items at starting point </h4>
            <div className="flexContainer flexStart">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentCenter commonJustifyClass">
            <h3>Center</h3>
            <h4> Center : align items in center of the div </h4>
            <div className="flexContainer center">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentSpace-between commonJustifyClass">
            <h3>Flex-end</h3>
            <h4> Flex-end : aligns items at ending point </h4>
            <div className="flexContainer flexEnd">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentSpace-around commonJustifyClass">
            <h3>Space-between</h3>
            <h4>
              {" "}
              Space-between : aligns items in horizaltally and giving spacing
              between them
            </h4>
            <div className="flexContainer spaceBetween">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentStart commonJustifyClass">
            <h3>Space-around</h3>
            <h4>
              {" "}
              SpSpace-around : aligns items in horizaltally and giving spacing
              around them
            </h4>
            <div className="flexContainer spaceAround">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentSpace-evenly commonJustifyClass">
            <h3>Space-evenly</h3>
            <h4>
              {" "}
              Space-evenly : aligns items in horizaltally and giving spacing
              evenly among all items
            </h4>
            <div className="flexContainer spaceEvenly">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
        </div>
        <div className="exampleJustifyContent">
          <div className="exampleJustifyContentIntro">
            <div>
              <h3>Align-items :</h3>
              <h4>
                We can arrange items in vertical using this property , it has
                properties like
              </h4>
            </div>
            <h5> &#10233; Flex-start</h5>
            <h5> &#10233; Center</h5>
            <h5> &#10233; Flex-end</h5>
          </div>
          <div className="exampleJustifyContentStart commonJustifyClass">
            <h3>Flex-start</h3>
            <h4> Flex-start : aligns items at starting point </h4>
            <div className="flexContainer flexStartVertical">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentCenter commonJustifyClass">
            <h3>Center</h3>
            <h4> Center : align items in center of the div </h4>
            <div className="flexContainer flexEndVertical">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
        </div>
        <div className="exampleJustifyContent">
          <div className="exampleJustifyContentIntro">
            <div>
              <h3>Flex-direction :</h3>
              <h4>
                We can decide the direction of items to be in , it has
                properties like
              </h4>
            </div>
            <h5> &#10233; row</h5>
            <h5> &#10233; row-reverse</h5>
            <h5> &#10233; column</h5>
            <h5> &#10233; Column-reverse</h5>
          </div>
          <div className="exampleJustifyContentStart commonJustifyClass">
            <h3>row-reverse</h3>
            <h4> row-reverse : we can arrange items reverse row direction </h4>
            <div className="flexContainer rowReverse">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentCenter commonJustifyClass">
            <h3>column</h3>
            <h4> column : we can arrange items column direction </h4>
            <div className="flexContainer column">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentCenter commonJustifyClass">
            <h3>column-reverse</h3>
            <h4> column : we can arrange items column reverse direction </h4>
            <div className="flexContainer columnReverse">
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <Link to="/Smart-Learning/Css/Selectors/Selectors1">
          <button id="flexStart">START GAME</button>
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default SelectorsIntro;
