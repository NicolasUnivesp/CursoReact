import React from 'react';
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClik}) => {
    return (  
        <div>
            {tasks.map((task) => (
                <Task task={task} handleTaskClik={handleTaskClik} />
            ))}
        </div>
    );
}

export default Tasks; 