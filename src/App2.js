import React, { Component } from "react";
import MyComponent from "./components/Overview2";

class App extends Component {
  constructor() {
    super();

    this.state = { task: "", tasks: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
    console.log(this.state.tasks);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">World</button>
        </form>
        <MyComponent text={this.state.tasks} title="WOrk" />
      </div>
    );
  }
}

export default App;
