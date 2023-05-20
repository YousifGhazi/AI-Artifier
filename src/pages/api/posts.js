import { v2 as cloudinary } from "cloudinary";
import connectDB from "@/util/connectDB";
import Post from "@/models/Post";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    connectDB(process.env.MONGODB_URL);
    if (req.method === "GET") {
      const posts = await Post.find({});
      res.status(200).json({ success: true, posts: posts.reverse() });
    } else if (req.method === "POST") {
      const { name, prompt, img } = req.body;
      const cloudinartImg = await cloudinary.uploader.upload(img);
      const newPost = await Post.create({
        prompt,
        name,
        img: cloudinartImg.secure_url,
      });

      res.status(200).json({ success: true, post: newPost });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
