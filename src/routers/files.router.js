import multer from "multer";
import { getFile, uploadPDF } from "../controllers/files.controller.js";
import { Router } from "express";

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = Router();

router.post("/upload", upload.single("file"), uploadPDF);

router.get("/files", getFile);

export default router;
