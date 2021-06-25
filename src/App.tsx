import React, { useState } from 'react';

import Form from './Form'
import List from './List';
import './styles/global.scss'
import Icon from './assets/icon.png'

function App() {
  const [tasks, setTasks] = useState<object[]>([]);

  return (
    <main>
      <div className="header">
        <img className="task-icon" src={ Icon } alt="Icone"/>
        <h1>To Do List</h1>
      </div>

      <Form tasks={tasks} setTasks={setTasks} />

      <List setTasks={setTasks} tasks={tasks} />
    </main>
  );
}

export default App;
