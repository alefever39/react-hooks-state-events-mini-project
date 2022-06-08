import React from "react";
import Task from './Task';


function TaskList({ tasks, setTaskList, selected='All' }) {
  
  function onDelete(text) {
    setTaskList(tasks.filter(task => text !== task.text));
  };

  const filteredTasks = tasks.filter(task => {
    if(selected === "All") {
      return true;
    };
    return task.category === selected;
  })

  const listedTasks = filteredTasks.map(task => (<Task key={task.text} category={task.category} text={task.text} onDelete={onDelete} />))

  return (
    <div className="tasks">
      {listedTasks}
    </div>
  );
}

export default TaskList;
