import "dotenv/config";

import express from "express";
import cors from "cors";
import http from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";

import connectDB from "./config/database.js";
import todoRoutes from "./routes/todos.js";
import errorHandler from "./middleware/errorHandler.js";
import setupSocket from "./socket/index.js";

const app = express();

// HTTP server
const server = http.createServer(app);

// Connect Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// Socket.IO events
setupSocket(io);
app.set("io", io);

app.use(express.json());
app.use(cors());

// app.get("/docker-test", (req, res) => {
//   res.json({ message: "Hot reload works!" });
// });

app.get("/health", (req, res) => {
  const connected = mongoose.connection.readyState === 1;

  res.status(connected ? 200 : 503).json({
    status: connected ? "ok" : "error",
    database: connected ? "connected" : "disconnected",
  });
});

app.use("/api", todoRoutes);
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 3000;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

//graceful shutdown
let isShuttingDown = false;

async function gracefulShutdown(signal: string) {
  if (isShuttingDown) return;
  isShuttingDown = true;

  console.log(`${signal} received. Shutting down gracefully...`);

  const forceShutdown = setTimeout(() => {
    console.error("Shutdown timeout. Forcing exit.");
    process.exit(1);
  }, 10000);

  forceShutdown.unref();

  try {
    await new Promise<void>((resolve, reject) => {
      io.close((error?: Error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });

    await mongoose.connection.close();

    clearTimeout(forceShutdown);
    console.log("Graceful shutdown completed.");
    process.exit(0);
  } catch (error) {
    console.error("Error during shutdown:", error);
    process.exit(1);
  }
}

process.on("SIGTERM", () => {
  void gracefulShutdown("SIGTERM");
});

process.on("SIGINT", () => {
  void gracefulShutdown("SIGINT");
});
