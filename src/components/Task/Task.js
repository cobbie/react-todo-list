import React from 'react';
import './style.css'

const Task = (props) =>{
    return(
        <div className = "task-container">
            <div className="task-flexbox">
                <div className="task-name">{props.nameOfTask}</div>
                <div className="checkbox"> 
                    <div className="inner-square">
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Task;