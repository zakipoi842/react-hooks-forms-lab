import React from "react";

function Filter({
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
}) {
  function handleSearchChange(e) {
    onSearchChange(e.target.value);
  }

  function handleCategoryChange(e) {
    onCategoryChange(e.target.value);
  }

  return (
    <div className="Filter">
      
      {/* Search Input */}
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search items..."
      />

      {/* Category Dropdown */}
      <label htmlFor="category">Filter by category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

    </div>
  );
}

export default Filter;