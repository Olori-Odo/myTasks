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
    let outCome = [this.state.userInput.length];
    let thRee = outCome > 10 ? "text is too long" : "text is too short";

    return (
      <>
        <div className="t-1">
          <h1>TASK 1</h1>
          <label htmlFor="user">inputText</label>
          <input
            onChange={(event) => this.inputChangeHandler(event)}
            type="text"
            id="user"
          />

          <h6> {outCome} </h6>
        </div>

        <div className="t-2">
          <h1>TASK 2</h1>
          <Task2 length={outCome} />
        </div>

        <br />

        <div className="t-3">
          <Task3 result={thRee} />
        </div>
      </>
    );
  }
}

export default Task1;
