import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);

  // Fetch all items on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/api/items");
    setItems(res.data);
  };

  const addItem = async () => {
    if (name && description) {
      const res = await axios.post("http://localhost:5000/api/items", {
        name,
        description,
      });
      setItems([...items, res.data]);
      setName("");
      setDescription("");
    }
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setEditingItemId(item.id);
    setName(item.name);
    setDescription(item.description);
  };

  const updateItem = async () => {
    const res = await axios.put(
      `http://localhost:5000/api/items/${editingItemId}`,
      { name, description }
    );
    setItems(
      items.map((item) =>
        item.id === editingItemId ? res.data : item
      )
    );
    setEditingItemId(null);
    setName("");
    setDescription("");
  };

  return (
    <div className="App">
      <h1>CRUD with React and Express</h1>

      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={editingItemId ? updateItem : addItem}>
        {editingItemId ? "Update Item" : "Add Item"}
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button onClick={() => editItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
