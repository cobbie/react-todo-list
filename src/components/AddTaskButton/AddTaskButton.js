import React, { Component } from 'react';
import './style.css'
class AddTaskButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    render() { 
        return ( 
            <div className = "flex main-button" onClick = {this.props.onClick}> 
                <div className="text">
                    ADD TASK
                </div>
            </div>
         );
    }
}
 
export default AddTaskButton;