import express from "express";
import authenticate from "../middlewares/authMiddleware.js";
import {
  listBooks,
  borrowBook,
  getBorrowHistoryByUserId,
} from "../controller/userController.js";
const userrouter = express.Router();

userrouter.get("/books", listBooks);
userrouter.post("/borrow", authenticate, borrowBook);
userrouter.get("/borrow/history/user/:userId", getBorrowHistoryByUserId);

export default userrouter;
