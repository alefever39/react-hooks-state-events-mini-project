import React, { useState } from "react";

function NewTaskForm({ categories, onChange, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: '',
    category: 'Code'
  })

  const Cats = categories.filter(category => category !== "All")


  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={formData.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={onChange} value={formData.category} >
          {Cats.map(category => <option key={category} name={category} >{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
