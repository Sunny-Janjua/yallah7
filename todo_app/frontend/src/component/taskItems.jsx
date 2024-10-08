import axios from 'axios';

const TaskItem = ({ task, fetchTasks }) => {
  const toggleCompletion = async () => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${task._id}`, {
        completed: !task.completed,
      });
      fetchTasks();
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <li className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleCompletion}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.title}
        </span>
      </div>
      <button
        onClick={deleteTask}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
