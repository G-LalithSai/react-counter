import React from "react";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Counter value={0} />
    </div>
  );
};

export default App;
