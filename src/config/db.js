import { Sequelize } from "sequelize";
import Book from "../book/model/book.js";
import Fashion from "../fashion/model/fashion.js";
import Furniture from "../furniture/model/furniture.js";
import Client from "../../src/clients/model/client.js";
import Purchase from "../../src/purchases/model/purchase.js";

const connectDb = () => {
  try {
    let sequelize = new Sequelize("online_ecommerce_db", "root", "password95", {
      host: "localhost",
      dialect: "mysql",
    });

    let db = {
      models: {},
    };

    db.Sequelize = sequelize;
    db.sequelize = sequelize;
    db.models.Book = Book(sequelize);
    db.models.Fashion = Fashion(sequelize);
    db.models.Furniture = Furniture(sequelize);
    db.models.Client = Client(sequelize);
    db.models.Purchase = Purchase(sequelize);

    return db;
  } catch (error) {
    console.error("Error connecting to the database: ", error); //
    throw error;
  }
};

let db = connectDb();
export default db;
