import express, { json } from "express"; 
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./config/dbconfig.js";

dbConnection();
dotenv.config();
const app = express();
app.use(cors({ origin: process.env.REACT_APP_URI }));
app.use(json());









app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});



