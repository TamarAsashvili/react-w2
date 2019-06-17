import React from "react";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div className="App" style={{ padding: "2vh" }}>
      <h1 style={headerStyle}>Homework 2 class 3</h1>
      <TodoList />
    </div>
  );
}

const headerStyle = {
  background: "#bfff00",
  color: "#0040ff",
  textAlign: "center",
  padding: "20px"
};

export default App;
