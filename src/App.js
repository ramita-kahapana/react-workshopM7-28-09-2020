import React, { useState } from "react";
import ContainerLayout from "./components/ContainerLayout";
import Background from "./components/Background";
import FormInput from "./components/FormInput";
import FormSearch from "./components/SearchBar";
import CharacterCount from "./components/CharacterCount";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputChar, setInputChar] = useState("");

  return (
    <div className="App">
      <ContainerLayout title="This is a title">content.....</ContainerLayout>

      <FormInput value={inputValue} setValue={setInputValue} />
      {/* ผ่านpropsตรงนี้ เข้าไปในฟอร์ม */}
      <Background>{inputValue}</Background>
      <FormSearch inputChar={inputChar} setInputChar={setInputChar} />
      <CharacterCount inputChar={inputChar} />
    </div>
  );
}
export default App;
