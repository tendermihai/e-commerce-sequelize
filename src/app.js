import cors from "cors";
import express, { json, request, response } from "express";
import db from "../src/config/db.js";
import { Sequelize } from "sequelize";

import bookRoute from "../src/book/rest/book-routes.js";
import fashionRoute from "../src/fashion/rest/fashion-routes.js";
import furnitureRoute from "../src/furniture/rest/furniture-routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/books", bookRoute);
app.use("/api/v1/fashion", fashionRoute);
app.use("/api/v1/furniture", furnitureRoute);

db.sequelize.sync().then((result) => {
  app.listen(5000, () => {
    console.log("Server is listening on 5000");
  });
});
