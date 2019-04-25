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
    console.log(this.state.tasks);
  };

  removeTask = props => {
    const updateState = this.state.tasks.splice(this.state.tasks.indexOf(props.task), 1);
    console.log("item accessed: " + this.state.tasks.indexOf(props.task));
    this.setState({
        tasks: updateState
    });
  };

  render() {
    return (
      <div className="main">
        <div className="flexbox">
          <div className="flex first-flexbox">
            <div className="header">SIMPLE TO-DO APP</div>
            <AddTaskButton onClick={this.addTask}/>
          </div>
          <div className="tasks">
            {this.state.tasks.map(task => (
              <li key={task + Math.random().toString()}>
                <Task nameOfTask={task} 
                        onClickRemove={this.removeTask} id={task.id}/>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
