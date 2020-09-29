import React, { useState } from "react";
//  import "./main.css";
import style from "./main.module.css";

function Background(props) {
  const [backgroundColor, setbackgroundColor] = useState("#fff"); //first state
  const handleClick = () => {
    setbackgroundColor(backgroundColor === "#fff" ? "#f00" : "#fff");
  };
  return (
    // <React.Fragment>
    <>
      <div
        className={style.container}
        // className="background-container"
        onClick={handleClick}
        style={{ backgroundColor }}
      >
        {props.children} {backgroundColor === "#fff" ? "white" : "red"}
      </div>
    </>
    //</React.Fragment>
  );
}
export default Background;
