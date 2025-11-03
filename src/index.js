const express = require("express");
const app = express();
const port = 3000;

// Import routes
const taskRoutes = require("./routes/tasks");

// Middleware
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
  });
});

//  task routes
app.use("/", taskRoutes);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
