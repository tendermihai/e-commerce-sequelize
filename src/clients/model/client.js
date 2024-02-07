import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Client extends Sequelize.Model {}

  Client.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a client first name",
          },
          notEmpty: {
            msg: "Provide a client first name",
          },
        },
      },

      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a last name",
          },
          notEmpty: {
            msg: "Please provide a last name",
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Provide an email",
          },
        },
      },

      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Provide an age",
          },
          notEmpty: {
            msg: "Provide an age",
          },
        },
      },

      gender: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Provide a gender",
          },
          notEmpty: {
            msg: "Provide a gender",
          },
        },
      },

      password: {
        type: Sequelize.VIRTUAL,
        allowNull: false,
        validate: {
          is: /^(?=.*[A-Z]).{8,}$/i, // Regex constraint for at least 1 uppercase letter and minimum length of 8 characters
        },
      },

      confirmedPassword: {
        type: Sequelize.STRING,
        allowNull: false,
        set(val) {
          if (val === this.password) {
            const hashPassword = bcrypt.hashSync(val, 10);
            this.setDataValue("confirmedPassword", hashPassword);
            return hashPassword;
          }
        },
        validate: {
          is: /^(?=.*[A-Z]).{8,}$/i, // Regex constraint for at least 1 uppercase letter and minimum length of 8 characters
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

  return Client;
};
