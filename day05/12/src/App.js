import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Calendar from './components/Calendar';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.title === updatedTask.title ? updatedTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Reminder Application</h1>
      <TaskForm addTask={addTask} editTask={editTask} currentTask={currentTask} setCurrentTask={setCurrentTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} setCurrentTask={setCurrentTask} />
      <Calendar tasks={tasks} />
    </div>
  );
};

export default App;
