import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Fashion extends Sequelize.Model {}

  Fashion.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      clothName: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a cloth name",
          },

          notEmpty: {
            msg: "Provide a cloth name",
          },
        },
      },

      brandName: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a brand name",
          },

          notEmpty: {
            msg: "Provde a brand name",
          },
        },
      },

      modelName: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a model name",
          },

          notEmpty: {
            msg: "Provide a model name",
          },
        },
      },

      color: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a color name",
          },
          notEmpty: {
            msg: "Provide a color name",
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

      gender: {
        type: Sequelize.STRING,
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
    {
      sequelize,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Fashion;
};
