import React, { Component } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./index.css";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };


    //How to bind eventHandlers(// This binding is necessary to make `this` work in the callback)
    this.handleAddCount = this.handleAddCount.bind(this)
    // this.handleMinusCount = this.handleMinusCount.bind(this)
  }

  //This syntax requires a binding method, prefarably in the constructor as per the REACT documentation.
  handleAddCount(){
    this.setState((prevState) => ({
      count: prevState.count -1
    }))
    console.log(this);

  }

  //Using an arrow function is also a binding method!! No need to bind it inside the constructor
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
