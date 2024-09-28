import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    // console.log('connection to database',DB_NAME);
    // console.log(`mongodburl${process.env.MONGODB_URL}`);

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\nmongodb connected successfully!! DB Host:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection error:", error);
    process.exit(1);
  }
};

export { connectDB };
