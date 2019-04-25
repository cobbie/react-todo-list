import React, { Component } from "react";
import "./style.css";
import AddTaskButton from "./../AddTaskButton/AddTaskButton";
import Task from "./../Task/Task";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  addTask = () => {
      const itemName = prompt("Name of Task");
      const updateState = this.state.tasks.concat(itemName);
          this.setState({
            tasks:  updateState
          });
      


  }

  removeTask = () => {
    const current = this.state.numTasks;
    if (current.length !== 0) {
      this.setState({
        numTasks: current.pop(current[current.length - 1])
      });
    }
  };

  render() {
    return (
      <div className="main">
        <div className="flexbox">
          <div className="flex first-flexbox">
            <div className="header">SIMPLE TO-DO APP</div>
            <AddTaskButton onClick={this.addTask} />
          </div>
          <div className="tasks"> {this.state.tasks.map((task) => <li key={task}><Task nameOfTask={task}/></li>)}
</div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
