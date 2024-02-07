import express from "express";
import {
  getAllFurniture,
  addFurniture,
  deleteFurniture,
  updateFurniture,
} from "../service/furniture-service.js";
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

app.route("/all").get(getAllFurniture, errorHandler);
app.route("/add").post(addFurniture, errorHandler);
app.route("/delete/:id").delete(deleteFurniture, errorHandler);
app.route("/update/:id").put(updateFurniture, errorHandler);

export default app;
