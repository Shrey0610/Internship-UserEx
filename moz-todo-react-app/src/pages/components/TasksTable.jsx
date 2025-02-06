import { useContext, useState } from "react";
import { TasksContext } from "./TasksContext";

const TasksTable = () => {
    const { tasks, deleteTask, editTask } = useContext(TasksContext);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({ taskStatus: "", priority: "" });

    const handleEdit = (task) => {
        setEditId(task.id);
        setEditData({ taskStatus: task.taskStatus, priority: task.priority });
    };

    const handleSave = (id) => {
        editTask(id, editData);
        setEditId(null);
    };

    return (
        <div>
            <h4>Task List</h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task Status</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>
                                {editId === task.id ? (
                                    <input
                                        type="text"
                                        value={editData.taskStatus}
                                        onChange={(e) => setEditData({ ...editData, taskStatus: e.target.value })}
                                    />
                                ) : (
                                    task.taskStatus
                                )}
                            </td>
                            <td>
                                {editId === task.id ? (
                                    <select
                                        value={editData.priority}
                                        onChange={(e) => setEditData({ ...editData, priority: e.target.value })}
                                    >
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                ) : (
                                    task.priority
                                )}
                            </td>
                            <td>
                                {editId === task.id ? (
                                    <button onClick={() => handleSave(task.id)} style={{ marginRight: '8px' }}>
                                        Save
                                    </button>
                                ) : (
                                    <button onClick={() => handleEdit(task)} style={{ marginRight: '8px' }}>
                                        Edit
                                    </button>
                                )}
                                <button onClick={() => deleteTask(task.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TasksTable;
