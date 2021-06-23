import { FormEvent, useState } from "react";

import "./styles/form.scss";

type FormProps = {
  tasks: object[];
  setTasks: (tasks: object[]) => void;
};

function Form(props: FormProps) {
  const [task, setTask] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    props.setTasks([...props.tasks, { checked: false, task }])
    setTask('')
  }

  return (
    <section className="form-add-task">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTask(e?.target.value)}
          placeholder="Nome da tarefa"
          type="text"
          value={task}
        />
        <button type="submit">Adicionar</button>
      </form>
    </section>
  );
}

export default Form;
