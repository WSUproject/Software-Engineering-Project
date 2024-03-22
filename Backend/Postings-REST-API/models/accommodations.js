const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Accommodations extends Model {
    static associate() {
      //define associations here
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }

  Accommodations.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      roomType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      imageURL: {
        type: DataTypes.STRING,
      },
      moveIn: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      rent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      space: {
        type: DataTypes.STRING,
      },
      amenities: {
        type: DataTypes.STRING,
      },
      rules: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Accommodations",
      tableName: "accommodations",
    }
  );
  return Accommodations;
};
