import React, { Component } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./index.css";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleAddCount = () => {
    this.setState((prevCount) => this.prevCount - 1);
  };

  handleMinusCount = () => {
    this.setState((prevCount) => this.prevCount + 1);
  };

  render() {
    return (
      <div className="quantity">
        <h3>Counter App:</h3>
        <p className="quantity-desc">
          <span className="minus" onClick={this.handleAddCount}>
            <AiOutlineMinus />
          </span>
          <span className="num">{this.state.count}</span>
          <span className="plus" onClick={this.handleMinusCount}>
            <AiOutlinePlus />
          </span>
        </p>
      </div>
    );
  }
}

export default CounterClass;
