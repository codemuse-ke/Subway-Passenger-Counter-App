//Class based components - useState
import React, { Component } from "react";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //useEffect

  //initialization
  componentDidMount() {
    document.title = "Button created";
  }

  //State update
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  //destroyed/ unmounted
  componentWillUnmount() {
    document.title = `Button unmounter!`;
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}

export default CounterApp;
