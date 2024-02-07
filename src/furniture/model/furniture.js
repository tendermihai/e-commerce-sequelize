import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Furniture extends Sequelize.Model {}

  Furniture.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      category: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a category",
          },

          notEmpty: {
            msg: "Provide a category",
          },
        },
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a description",
          },

          notEmpty: {
            msg: "Provide a description",
          },
        },
      },

      price: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a price",
          },

          notEmpty: {
            msg: "Provide a price",
          },
        },
      },
    },
    { sequelize, timestamps: false, createdAt: false, updatedAt: false }
  );

  return Furniture;
};
