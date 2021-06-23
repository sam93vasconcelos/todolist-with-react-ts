import React, { useState } from 'react';

import Form from './Form'
import List from './List';
import './styles/global.scss'

function App() {
  const [tasks, setTasks] = useState<object[]>([]);

  return (
    <main>
      <h1>To Do List com React TS</h1>

      <Form tasks={tasks} setTasks={setTasks} />

      <List setTasks={setTasks} tasks={tasks} />
    </main>
  );
}

export default App;
