import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  img: { type: String, required: true },
});

const PsotSchema = mongoose.models.Post || mongoose.model("Post", Post);

export default PsotSchema;
