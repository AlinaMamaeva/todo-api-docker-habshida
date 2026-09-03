const express = require("express");
const {
  toggleTodo,
  createTodo,
  getTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

//post
router.post("/todos", createTodo);

//get todo by id
router.get("/todos/:id", getTodo);

//get todos
router.get("/todos", getTodos);

//patch
router.patch("/todos/:id", updateTodo);

///toggle
router.patch("/todos/:id/toggle", toggleTodo);

//delete
router.delete("/todos/:id", deleteTodo);

module.exports = router;
