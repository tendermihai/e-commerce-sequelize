import express from "express";
import {
  getAllFashions,
  addFashion,
  deleteFashion,
  updateFashion,
} from "../service/fashion-service.js";
import errorHandler from "../../middleware/error-middleware.js";

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

app.route("/all").get(getAllFashions, errorHandler);
app.route("/add").post(addFashion, errorHandler);
app.route("/delete/:id").delete(deleteFashion, asyncHandler);
app.route("/update/:id").put(updateFashion, asyncHandler);

export default app;
