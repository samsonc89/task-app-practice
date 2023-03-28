import React, { Component } from "react";

class MyComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default MyComponent;
