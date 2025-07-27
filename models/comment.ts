import { Schema, models, model } from "mongoose";

const CommentSchema = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default models.Comment || model("Comment", CommentSchema);
