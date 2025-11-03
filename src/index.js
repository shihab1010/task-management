const express = require("express");
const app = express();
const port = 3000;

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

app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
