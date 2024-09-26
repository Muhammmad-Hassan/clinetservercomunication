const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data array
let items = [
  { id: 1, name: "Hassan Khan", description: "studying in 12th class" },
  { id: 2, name: "Khalid Khan", description: "studying in 11th class" },
];

// CRUD routes

// Get all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Get item by id
app.get("/api/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Create new 

app.post("/api/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  items.push(newItem);
  res.json(newItem);
});