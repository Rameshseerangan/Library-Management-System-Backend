import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], required: true },
  borrowHistory: [{ bookId: String, borrowedAt: Date, returnedAt: Date }],
});

const User = mongoose.model("User", userSchema);

export default User;
