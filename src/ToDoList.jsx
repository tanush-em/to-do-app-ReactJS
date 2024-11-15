import React from 'react';
import { useState } from 'react';

const ToDoList = () => {

    const [task, setTasks] = useState(["Task 1","Task 2","Task 3"]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value)

    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }

    function prioritizeTask(index) {
        if (index > 0){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function deprioritizeTask(index) {
        if (index < (task.length -1)){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div className="to-do-list">

            <h1>To Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <o1>
                {task.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="prioritize-button"
                            onClick={() => prioritizeTask(index)}>
                            Move Up
                        </button>
                        <button
                            className="deprioritize-button"
                            onClick={() => deprioritizeTask(index)}>
                            Move Down
                        </button>
                    </li>
                )}
            </o1>

        </div>
    );
}

export default ToDoList;