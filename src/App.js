import React from "react";
import ContainerLayout from "./components/ContainerLayout";
import Background from "./components/Background";
import FormInput from "./components/FormInput";
function App() {
  return (
    <div>
      <ContainerLayout title="This is a title">content.....</ContainerLayout>

      <Background>Chang Me!!!!</Background>
      <FormInput></FormInput>
    </div>
  );
}
export default App;
