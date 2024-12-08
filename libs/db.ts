import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "mssql",
});