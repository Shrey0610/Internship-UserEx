import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TasksContext } from "./TasksContext";

const AddTaskForm = () => {
    const { addTask } = useContext(TasksContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            taskStatus: "",
        }
    });

    const onSubmit = (data) => {
        addTask(data);
        reset(); // Reset form after submission
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3>Add Task</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Task Status *</label>
                    <input
                        {...register("taskStatus", { required: "Task status is required" })}
                        placeholder="Enter Task Status"
                    />
                    {errors.taskStatus && <p>{errors.taskStatus.message}</p>}
                </div>

                <div>
                    <label>Priority *</label>
                    <select
                        {...register("priority", { required: "Priority is required" })}
                    >
                        <option value="">Select Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    {errors.priority && <p>{errors.priority.message}</p>}
                </div>

                <button type="submit" style={{ marginRight: '8px' }}>
                    Save
                </button>
                <button type="submit" onClick={() => reset()} style={{ marginRight: '8px' }}>
                    Save & Add New
                </button>
                <button type="button" onClick={() => reset()}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default AddTaskForm;
