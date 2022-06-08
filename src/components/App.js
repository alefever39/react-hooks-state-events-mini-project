import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selected, setSelected] = useState('All')

  const [taskList, setTaskList] = useState(TASKS);
  
  function handleClick(e) {
    setSelected(e.target.textContent)
  }

  function handleTaskFormSubmit(newItem) {
    setTaskList((taskList) => [...taskList, newItem]);
    // setFormData(() => {
    //   return {
    //     text: '',
    //     category: 'Code'
    //   };
    // })
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} onClick={handleClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={taskList} setTaskList={setTaskList}  selected={selected} />
    </div>
  );
}

export default App;
