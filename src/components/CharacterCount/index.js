import React from "react";
import "./main.css";

function CharacterCount({ inputChar }) {
  return (
    <div className="character-count-container">
      <span>{inputChar.length}</span>
    </div>
  );
}
export default CharacterCount;
