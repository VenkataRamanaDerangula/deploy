import React from 'react';

const TaskList = ({ tasks, deleteTask, setCurrentTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Reminder: {task.reminder} minutes before</p>
          <button onClick={() => setCurrentTask(task)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
