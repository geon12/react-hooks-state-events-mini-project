import React, {useState} from "react";


function CategoryFilter({categories ,selectCategory,chosenCategory}) {


  function handleClick(e) {
    selectCategory(e.target.value)
    
  }

 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        let className = null
        if (category === chosenCategory) {className = "selected"}
        return <button className={className} 
            onClick={handleClick} 
            key={category} 
            value={category}>{category}
          </button>}
      )}
    </div>
  );
}

export default CategoryFilter;
