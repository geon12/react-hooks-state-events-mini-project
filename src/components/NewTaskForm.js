import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit ,categories}) {

  const [text,setText] = useState("")
  const [newCategory,setNewCategory] = useState("All")

  function handleSubmit(e) {
    e.preventDefault()
    const newTask = {text: text, category:newCategory}
    onTaskFormSubmit(newTask)
    setText("")
  }

  function handleTextChange(e) {
    setText(e.target.value)
  }

  function handleSelectChange(e) {
    setNewCategory(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} value={text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelectChange} value={newCategory}>
          {/* render <option> elements for each category here */}
          {categories.map( (category) => {
            return <option key={category}>{category}</option>
          }
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
