import { Files } from "../models/files.model.js";

const uploadPDF = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newFile = new Files({
      name: name,
      description: description,
      file: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    await newFile.save();

    res
      .status(200)
      .json({ message: "File uploaded successfully", file: newFile });
  } catch (error) {
    res.status(500).json({ error: "Error uploading file" });
  }
};

const getFile = async (req, res) => {
  try {
    const getFiles = await Files.find();
    if (!getFiles) {
      res.status(400).json({ message: "No file to fetch" });
    }

    res.status(200).json({ message: "Files", getFiles });
  } catch (error) {
    res.status(400).json({ error: "Couldnot get file" });
  }
};

const deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const delFileFn = await Files.deleteOne({ _id: id });
    if (delFileFn.deletedCount === 0) {
      return res.status(400).json({ message: "ID does not exist" });
    }
    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Cannot delete file" });
  }
};

export { uploadPDF, getFile, deleteFile };
