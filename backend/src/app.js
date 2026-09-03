require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todos");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  //1=== connected
  const connected = mongoose.connection.readyState === 1;

  res.status(connected ? 200 : 503).json({
    status: connected ? "ok" : "error",
    database: connected ? "connected" : "disconnected",
  });
});

app.use("/api", todoRoutes);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
