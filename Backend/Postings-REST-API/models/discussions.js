const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Discussions extends Model {
    static associate() {
      //define associations here
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }

  Discussions.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      accommodation_uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      message: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Discussions",
      tableName: "discussions",
    }
  );
  return Discussions;
};
