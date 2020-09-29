import React from "react";

function FormInput({ value, setValue }) {
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  const handleClearClick = () => setValue("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleInputChange} />
        <button type="submit">Summit</button>
      </form>

      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
}

export default FormInput;
