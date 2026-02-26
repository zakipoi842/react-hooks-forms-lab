import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);

    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      {/* IMPORTANT: tests look up by label text "Name" */}
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      {/* IMPORTANT: tests may look up by label text "Category" */}
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={itemCategory}
        onChange={(e) => setItemCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      {/* IMPORTANT: earlier test submits via this text */}
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;