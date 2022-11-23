import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleMinusCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("count affected");
  }, []);
  return (
    <div className="quantity">
      <h3>Counter App:</h3>
      <p className="quantity-desc">
        <span className="minus" onClick={handleAddCount}>
          <AiOutlineMinus />
        </span>
        <span className="num">{count}</span>
        <span className="plus" onClick={handleMinusCount}>
          <AiOutlinePlus />
        </span>
      </p>
    </div>
  );
};

export default Counter;
