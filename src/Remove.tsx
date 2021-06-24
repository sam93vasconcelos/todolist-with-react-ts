type RemoveProps = {
  task: {
    task?: string | undefined,
    checked?: boolean | undefined
  };
  tasks: { checked?: boolean; task?: string }[];
  setTasks: (tasks: object[]) => void;
}

function Remove({task, tasks, setTasks}: RemoveProps) {

  function handleRemove() {
    if(window.confirm('Remover Tarefa?')) {
      let newTasks = tasks.filter(t => {
        return t.task !== task.task
      })

      setTasks(newTasks)
    }
  }

  return (
    <button onClick={ handleRemove } className="remove-task">X</button>
  )
}

export default Remove