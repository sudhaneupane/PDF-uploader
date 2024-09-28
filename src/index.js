import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

dotenv.config({});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    `mongodb connection failed: `, err;
  });
