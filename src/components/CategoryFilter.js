import React from "react";

function CategoryFilter({ categories, selected, onClick }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} onClick={onClick} className={category === selected ? 'selected' : ''}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
