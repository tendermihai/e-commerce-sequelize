import express from "express";
import errorHandler from "../../middleware/error-middleware.js";
import {
  getAllBooks,
  addBook,
  deleteBook,
  updateBook,
} from "../service/books-service.js";

const app = express.Router();

function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

app.route("/all").get(getAllBooks, errorHandler);
app.route("/add").post(addBook, errorHandler);
app.route("/delete/:id").delete(deleteBook, asyncHandler);
app.route("/update/:id").put(updateBook, asyncHandler);

export default app;
