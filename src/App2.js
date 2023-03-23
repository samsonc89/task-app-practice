import { render } from "@testing-library/react";
import React, { Component } from "react";

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
      </div>
    );
  }
}

export default App;
