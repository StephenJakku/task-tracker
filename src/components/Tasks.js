import Task from "./Task";
const Tasks=({tasks, onDelete, onToggle}) => {
  return (<div>
      {tasks.map((task)=>(<Task onDelete={onDelete} key={task.id} task={task} onToggle={onToggle}>{task.text}</Task>))}
  </div>);
}

export default Tasks;