
import { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post('http://localhost:5000/api/tasks', { title });
      setTitle('');
      fetchTasks();
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-l"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
