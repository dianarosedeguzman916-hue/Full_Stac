import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '1rem'
  },
  title: {
    fontSize: '2rem',
    color: '#2d3748',
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  inputRow: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  input: {
    flexGrow: 1,
    padding: '0.7rem',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  addBtn: {
    padding: '0.7rem 1.2rem',
    border: 'none',
    background: '#805ad5',
    color: '#fff',
    cursor: 'pointer'
  },
  taskList: {
    listStyle: 'none',
    padding: 0
  },
  task: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    background: '#fff',
    borderRadius: '4px #fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '0.8rem'
  },
  deleteBtn: {
    border: 'none',
    background: '#e53e3e',
    color: '#fff',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Tasks</h1>
      
      <div style={styles.inputRow}>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map(task => (
          <li key={task.id} style={styles.task}>
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} style={styles.deleteBtn}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;