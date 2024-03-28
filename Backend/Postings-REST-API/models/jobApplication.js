const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class JobApplications extends Model {
    static associate() {
      //define associations here
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }

  JobApplications.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      job_uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      user_uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      fileURL: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "JobApplications",
      tableName: "job_applications",
    }
  );
  return JobApplications;
};
