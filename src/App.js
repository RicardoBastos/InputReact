import React from "react";
import Input from "./Input";

export default function App() {
  return (
    <div className="App">
      <Input name="nome" label="Nome" required />
    </div>
  );
}
