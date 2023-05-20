import mongoose from "mongoose";

export default function connectDB(URL) {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(URL)
    .then(() => console.log("connected"))
    .catch((er) => console.log(er));
}
