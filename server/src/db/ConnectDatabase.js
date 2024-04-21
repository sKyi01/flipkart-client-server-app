import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const ConnectDatabase = async () => {
  try {
    const dbInstance = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error in connecting database", error);
  }
};

export default ConnectDatabase;