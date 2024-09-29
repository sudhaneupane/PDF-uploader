import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));

// routes
import fileRouter from "../src/routers/files.router.js";

app.use("/", fileRouter);

export { app };
