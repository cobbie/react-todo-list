import React from 'react';
import './style.css'

const Task = (props) =>{

    return(
        <div className = "task-container">
            <div className="task-flexbox">
                <div className="task-name" onClick={() => {console.log("temp")}}>{props.nameOfTask}</div>
                <div className="checkbox" onClick={props.onClickRemove}> 
                    <div className="inner-square">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Task;