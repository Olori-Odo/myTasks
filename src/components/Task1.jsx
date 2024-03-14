import { Component, useState } from "react";
import Task2 from "./Task2";
import Task3 from "./Task3";

// const Task1 = () => {
//   //   const [initial, setState] = useState("");

//   //   initial = userInput;
//   //   const userInput = "";

//   //   let onChangeHandler = (event) => {
//   //     setState.event.target.value;
//   //   };

class Task1 extends Component {
  state = {
    userInput: "",
  };

  inputChangeHandler(event) {
    this.setState({
      userInput: event.target.value,
    });
  }

  render() {
    return (
      <>
        <div>
          <label htmlFor="user">inputText</label>
          <input
            onChange={(event) => this.inputChangeHandler(event)}
            type="text"
            id="user"
          />

          <h6> {this.state.userInput.length} </h6>
        </div>

        <br />
        <br />

        <div className="t-2">
          <h1>TASK 2</h1>
          <Task2 length={this.state.userInput.length} />
        </div>

        <div className="t-3">
          <Task3 />
        </div>
      </>
    );
  }
}

export default Task1;
