const express = require("express");
const router = express.Router();

const tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
    priority: "high",
    createdAt: new Date("2025-11-01T09:00:00Z"),
  },
  {
    id: 2,
    title: "Build REST API",
    completed: false,
    priority: "medium",
    createdAt: new Date("2025-11-02T10:30:00Z"),
  },
  {
    id: 3,
    title: "Test with Postman",
    completed: false,
    priority: "low",
    createdAt: new Date("2025-11-03T11:00:00Z"),
  },
  {
    id: 4,
    title: "Deploy to Render",
    completed: false,
    priority: "high",
    createdAt: new Date("2025-11-03T12:15:00Z"),
  },
  {
    id: 5,
    title: "Write Documentation",
    completed: false,
    priority: "medium",
    createdAt: new Date("2025-11-03T13:45:00Z"),
  },
];

// /tasks → return all tasks
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

// /task/:id → return a single task by ID with error handling
router.get("/task/:id", (req, res) => {
  const id = Number(req.params.id);

  // Handle invalid ID format (e.g., non-numeric)
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  // Find the task
  const task = tasks.find((t) => t.id === id);

  // Handle task not found
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  // Return found task
  res.json(task);
});

module.exports = router;
