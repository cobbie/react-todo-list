import React, { Component } from 'react';

class AddTaskButton extends Component {
    constructor(props){
        super(props)
    }
    prompt(){
        const a = prompt("What task would you like to add?")
        return a
    }
    render() { 
        return (        
             <button className ="btn sm m-2" onClick={this.prompt}>Add Task</button>
    );
    }
}
export default AddTaskButton;