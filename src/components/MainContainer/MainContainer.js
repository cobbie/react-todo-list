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
      tasks: updateState
    });
  };

  removeTask = taskToRemove => {
    const updateState = [...this.state.tasks];
    updateState.splice(updateState.indexOf(taskToRemove), 1); 
    this.setState({
        tasks: updateState
    });
  };

  editTask = task => {
    const newText = prompt("New task name: ");
    const updateState = [...this.state.tasks];
    updateState[updateState.indexOf(task)] = newText;
    this.setState({
        tasks: updateState
    })
  }

  render() {
    return (
      <div className="main">
        <div className="flexbox">
          <div className="flex first-flexbox">
            <div className="header">SIMPLE TO-DO APP</div>
            <AddTaskButton onClick={this.addTask}/>
          </div>
          <div className="tasks">
          {this.state.tasks.map((task, id) => (
              <li key={id}>
                <Task nameOfTask={task} 
                        onClickRemove={() => this.removeTask(task)}
                        editTask={() => this.editTask(task)}/>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
