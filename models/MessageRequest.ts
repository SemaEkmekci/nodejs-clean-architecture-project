// models/MessageRequest.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../libs/db";

export class MessageRequestSchema extends Model {
  public messageId!: string;
  public senderName!: string;
  public senderPhone!: string;
  public messageType!: string;
  public messageContent?: string;
}

MessageRequestSchema.init(
  {
    messageId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    senderName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    senderPhone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true, isNumeric: true },
    },
    messageType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    messageContent: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { notEmpty: true },
    },
  },
  {
    sequelize,
    tableName: "MessageRequest",
  }
);
