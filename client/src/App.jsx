import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);  useEffect(() => {
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
