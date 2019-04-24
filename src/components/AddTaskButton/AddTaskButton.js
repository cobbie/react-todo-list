import React, { Component } from 'react';
import './style.css'
class AddTaskButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    componentDidMount(){
        console.log("successful component mounting");
        const test_list = [0,2,4,6];
        const doubled = test_list.map((num) => num**2);
        console.log(doubled);
    }

    testFunc = () => {
        console.log("test if working");
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