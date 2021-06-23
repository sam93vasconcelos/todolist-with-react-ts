import { ChangeEvent } from "react";

import "./styles/list.scss";

type ListProps = {
  tasks: { checked?: boolean; task?: string }[];
  setTasks: (tasks: object[]) => void;
};

function List(props: ListProps) {
  function handleCheck(event: any) {
    let newTasks = [] as { checked?: boolean, task?: string }[]

    props.tasks.map(t => newTasks.push(t))

    newTasks[event.target.dataset.index].checked =
      !newTasks[event.target.dataset.index].checked;

    props.setTasks(newTasks);
    console.log(props.tasks);
  }

  return (
    <div>
      <div className="task-headers">
        <h4>Lista de tarefas</h4>
        <span className="task-count">{props.tasks.length} tarefa(s)</span>
      </div>
      <section className="task-list">
        <ul>
          {props.tasks.map((task, i) => (
            <li key={`task-${i}`}>
              <input
                data-index={i}
                onChange={handleCheck}
                checked={task.checked}
                id={`task-${i}-${task.task}`}
                type="checkbox"
              />
              <label htmlFor={`task-${i}-${task.task}`}>{task.task}</label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default List;
