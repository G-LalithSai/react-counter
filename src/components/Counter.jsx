import React, { useState } from "react";

const Counter = ({ value }) => {
  let [count, setCount] = useState(value);
  let color = count % 2 === 0 ? "green" : "red";
  return (
    <div>
      <h2 className="counter">
        <span className="counter-heading">
          Count : <span className={color}>{count}</span>
        </span>
      </h2>
      <button
        className="counter-btn"
        onClick={() => {
          setCount(count * 2);
        }}
      >
        Count * 2
      </button>
      <button
        className="counter-btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count + 1
      </button>
      <button
        className="counter-btn"
        onClick={() => {
          count > 0 ? setCount(count - 1) : setCount(0);
        }}
      >
        Count - 1
      </button>
      <button
        className="counter-btn"
        onClick={() => {
          setCount(count / 2);
        }}
      >
        Count / 2
      </button>
    </div>
  );
};

export default Counter;
