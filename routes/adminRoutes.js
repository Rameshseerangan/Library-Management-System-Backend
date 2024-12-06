import express from "express";
import {
  createUser,
  viewRequests,
  approveRequest,
  addBook,
} from "../controller/adminController.js";

const adminrouter = express.Router();

adminrouter.post("/createuser", createUser);
adminrouter.get("/requests", viewRequests);
adminrouter.post("/approve/:bookId", approveRequest);
adminrouter.post("/add-book", addBook);

export default adminrouter;
