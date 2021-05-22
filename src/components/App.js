import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [category, setCategory] = useState("All")
  const [tasks,setTasks] = useState(TASKS)
  

  function selectCategory(chosenCategory) {
    setCategory(chosenCategory)
  }

  function filterTasks() {
    return tasks.filter((task) => {
      if (category ==="All") {return true}
      
      return task.category === category;
    })
  }

  const filteredTasks = filterTasks(tasks)

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutRemovedTask = tasks.filter((task) => task.text !== taskToDelete.text || task.category != taskToDelete.category)
    setTasks(tasksWithoutRemovedTask)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={selectCategory} chosenCategory={category} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit}  categories={CATEGORIES}/>
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
