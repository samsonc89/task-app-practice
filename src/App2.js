import React, { Component } from "react";
import MyComponent from "./components/Overview2";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label for="task">
          Task
          <input type="text" name="task" />
        </label>
        <button type="submit" onSubmit="">
          World
        </button>
        <MyComponent text="Hello" title="WOrk" />
      </div>
    );
  }
}

export default App;
