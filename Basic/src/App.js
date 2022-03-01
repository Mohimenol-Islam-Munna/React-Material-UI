import React from "react";
import ButtonComponent from "./Components/ButtonComponent";
import Layout from "./Components/Layout";

function App() {
  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <div>
        <h2>React Material UI</h2>
      </div>
      <ButtonComponent />
      <Layout />
    </div>
  );
}

export default App;
