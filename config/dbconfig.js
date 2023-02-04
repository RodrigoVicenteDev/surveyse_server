import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function connect() {
  try {
    
    mongoose.set("strictQuery", true);
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("CONECTADO AO DB", dbConnection.connection.name);
  } catch (error) {
    console.log(error);
  }
}


export default connect