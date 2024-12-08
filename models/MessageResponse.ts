import { DataTypes } from "sequelize";
import { sequelize } from "../libs/db";

export const MessageResponseSchema = sequelize.define("MessageResponse", {
  _messageId: { type: DataTypes.STRING, primaryKey: true },
  senderPhone: { type: DataTypes.STRING },
  responseContent: { type: DataTypes.TEXT },
});
