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