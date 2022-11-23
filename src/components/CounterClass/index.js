import React, { Component } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./index.css";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleAddCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleMinusCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="quantity">
        <h3>Counter App:</h3>
        <p className="quantity-desc">
          <span className="minus" onClick={this.handleMinusCount}>
            <AiOutlineMinus />
          </span>
          <span className="num">{this.state.count}</span>
          <span className="plus" onClick={this.handleAddCount}>
            <AiOutlinePlus />
          </span>
        </p>
      </div>
    );
  }
}
