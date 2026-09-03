
const {
  createTodo: createTodoService,
  getTodo: getTodoService,
  getTodos: getTodosService,
  updateTodo: updateTodoService,
  deleteTodo: deleteTodoService,
  toggleTodo: toggleTodoService,

} = require("./../services/todoService");

const toggleTodo = async (req, res, next) => {
  try {
    const todo = await toggleTodoService(req.params.id);

    if (!todo) {
      return res.status(404).json({
        error: "Todo not found",
      });
    }
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

//post create
const createTodo = async (req, res, next) => {
  try {
    const todo = await createTodoService(req.body);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};
//get todo
const getTodo = async (req, res, next) => {
  try {
    const todo = await getTodoService(req.params.id);
    if (!todo) {
      return res.status(404).json({
        error: "Todo not found",
      });
    }
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

//get todos
const getTodos = async (req, res, next) => {
  try {
    const todos = await getTodosService(
      req.query.completed,
      req.query.limit,
      req.query.page,
      req.query.sort,
    );

    res.json(todos);
  } catch (error) {
    next(error);
  }
};

//patch todo
const updateTodo = async (req, res, next) => {
  try {
    const todo = await updateTodoService(req.params.id, req.body);
    if (!todo) {
      return res.status(404).json({
        error: "Todo not found",
      });
    }
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

///delete todo
const deleteTodo = async (req, res, next) => {
  try {
    const todo = await deleteTodoService(req.params.id);

    if (!todo) {
      return res.status(404).json({
        error: "Todo not found",
      });
    }

    res.json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  toggleTodo,
  createTodo,
  getTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
