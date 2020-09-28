import React, { useState } from "react";

function Background(props) {
  const [backgroundColor, setbackgroundColor] = useState("#fff"); //first state
  const handleClick = () => {
    setbackgroundColor(backgroundColor === "#fff" ? "#f00" : "#fff");
  };
  return (
    // <React.Fragment>
    <>
      <div onClick={handleClick} style={{ backgroundColor }}>
        {props.children} {backgroundColor === "#fff" ? "white" : "red"}
      </div>
    </>
    //</React.Fragment>
  );
}
export default Background;
