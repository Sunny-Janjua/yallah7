import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './taskItems';
import TaskForm from './tasks';
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data); // Ensure this matches your API response structure
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
        ))}
      </ul>
      {tasks.length === 0 && <p className="text-center text-gray-500">No tasks available.</p>}
    </div>
  );
};

export default TaskList;
