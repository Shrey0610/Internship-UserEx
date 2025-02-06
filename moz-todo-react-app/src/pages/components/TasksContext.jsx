import { createContext } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: 1, taskStatus: "Pending", priority: "High" },
        { id: 2, taskStatus: "Completed", priority: "Medium" }
    ]);

    const addTask = (task) => setTasks([...tasks, { id: tasks.length + 1, ...task }]);
    const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
    const editTask = (id, updatedTask) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
            {children}
        </TasksContext.Provider>
    );
};

// Prop type validation for 'children'
TasksProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
