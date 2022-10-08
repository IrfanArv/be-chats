"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chats.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      senderID: DataTypes.STRING,
      revicerID: DataTypes.STRING,
      message: DataTypes.TEXT,
      senderView: DataTypes.DATE,
      revicerView: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Chats",
    }
  );
  return Chats;
};
