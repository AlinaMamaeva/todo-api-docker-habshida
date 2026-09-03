const errorHandler = (error, req, res, next) => {

  console.error(error);

  if (error.name === "CastError") {
    return res.status(400).json({
      error: error.message
    });
  }

  if (error.name === "ValidationError") {
    return res.status(400).json({
      error: error.message
    });
  }

  if (error.statusCode) {
    return res.status(error.statusCode).json({
      error: error.message
    });
  }

  res.status(500).json({
    error: error.message
  });
};

module.exports = errorHandler;