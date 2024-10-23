import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, currentTask, setCurrentTask }) => {
  const [task, setTask] = useState(currentTask || { title: '', description: '', dueDate: '', reminder: '' });

  useEffect(() => {
    setTask(currentTask || { title: '', description: '', dueDate: '', reminder: '' });
  }, [currentTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      editTask(task);
    } else {
      addTask(task);
    }
    setTask({ title: '', description: '', dueDate: '', reminder: '' });
    setCurrentTask(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={task.title} onChange={handleChange} placeholder="Task Title" required />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Task Description" />
      <input type="datetime-local" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <input type="number" name="reminder" value={task.reminder} onChange={handleChange} placeholder="Reminder Minutes" />
      <button type="submit">{currentTask ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
