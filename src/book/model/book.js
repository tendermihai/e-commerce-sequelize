import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Book extends Sequelize.Model {}

  Book.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      bookName: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a book name",
          },

          notEmpty: {
            msg: "Provide a book name",
          },
        },
      },

      price: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a price for the book",
          },

          notEmpty: {
            msg: "Provide a price for the book",
          },
        },
      },

      publisher: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a name for the publisher",
          },

          notEmpty: {
            msg: "Provide a name for the publisher",
          },
        },
      },

      publicationDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a date for this book",
          },

          notEmpty: {
            msg: " Provide a date for this book",
          },
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      publicationDate: false,
      updatedAt: false,
    }
  );

  return Book;
};
