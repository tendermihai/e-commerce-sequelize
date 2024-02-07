import { Sequelize, DataTypes } from "sequelize";

export default (sequelize) => {
  class Purchase extends Sequelize.Model {}

  Purchase.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a date",
          },

          notEmpty: {
            msg: "Provide a date",
          },
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Purchase;
};
