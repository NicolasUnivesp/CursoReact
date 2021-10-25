import React, { useState } from 'react';
import Button from "./Button"

import "./Task.css";
import "./AddTask.css";


const AddTask = ({handleTaskAddtion}) => {    
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value); 

    };

    const handleAddTaskClick = () => {
        handleTaskAddtion(inputData); 
        setInputData("");  
    }

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className="add-task-input" 
                type="text" 
            />
            ;
            <div className="add-task-button-container">
                <Button 
                    onClick={handleAddTaskClick}>
                    Adicionar
                </Button>
            </div>
            
        </div>
     );
};
 
export default AddTask;
 