import dotenv from "dotenv";
dotenv.config();

export default {
  dialect: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timeStampes: true,
    underscored: true,
    underscoredAll: true
  },
  dialectOptions: {
    timezone: "-03:00"
  },
  timezone: "-03:00"
};
