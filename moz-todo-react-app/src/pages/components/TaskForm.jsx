import { TasksProvider } from "./TasksContext";
import AddTaskForm from "./AddTaskForm";
import TasksTable from "./TasksTable";
import '/src/css/App.css';

function TaskForm() {
    return (
        <TasksProvider>
            <div className="TaskForm">
                <AddTaskForm className='adding' />
                <br />
                <TasksTable className='table' />
            </div>
        </TasksProvider>
    );
}

export default TaskForm;
