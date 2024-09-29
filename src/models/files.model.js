import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    file: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export const Files = mongoose.model("Files", fileSchema);
