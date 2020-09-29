import React from "react";
function SearchBar({ inputChar, setInputChar }) {
  const handleInputChange = (event) => {
    setInputChar(event.target.value);
  };
  return (
    <>
      <form>
        <input type="text" inputChar={inputChar} onChange={handleInputChange} />
      </form>
    </>
  );
}
export default SearchBar;
