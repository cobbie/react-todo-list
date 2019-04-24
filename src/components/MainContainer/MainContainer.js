import React, { Component } from "react";
import "./style.css";
import AddTaskButton from "./../AddTaskButton/AddTaskButton";
import Task from "./../Task/Task"


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            numTasks: [],
            tasks: []
         }

    }

    componentDidMount(){
        console.log(typeof this.state.numTasks);
    }

    addTask = () => {
        if (this.state.numTasks.length === 0){
            const current = this.state.numTasks.concat(1);
            this.setState({
                numTasks: current
            })
        }
        else{
            const current = this.state.numTasks.concat(this.state.numTasks[this.state.numTasks.length - 1] + 1);
            this.setState({
                numTasks: current
            });
        }

        const newListItem = <li><Task key={this.state.numTasks[this.state.numTasks.length - 1]} nameOfTask="temp"/></li>
        const newTaskList = this.state.tasks.concat(newListItem);
        this.setState({
            tasks: newTaskList
        });
        console.log(this.state.tasks);
        for(let i=0; i< this.state.tasks.length-1; i++){
            console.log(this.state.tasks[i].key)
        }
    }

    removeTask = () => {
        const current = this.state.numTasks;
        if (current.length !== 0){
        this.setState({
            numTasks: current.pop(current[current.length-1])
        });
    }
    }
    render() { 
        return (  
                <div className="main">
                  <div className="flexbox">
                    <div className="flex first-flexbox">
                      <div className="header">SIMPLE TO-DO APP</div>
                      <AddTaskButton onClick = {this.addTask}/>
                    </div>
                    <div className="tasks" >
                        {this.state.tasks}
                    </div>
            
                  </div>
                </div>

        );
    }
}

export default MainContainer;
