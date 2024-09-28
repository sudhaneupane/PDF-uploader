import express from "express";

const app = express();
app.use(cors());
app.use(express.json({ limit: "20kb" }));

// routes

export {app}
