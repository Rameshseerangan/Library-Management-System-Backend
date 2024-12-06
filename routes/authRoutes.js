import express from "express";
import { login } from "../controller/authController.js";

const authrouter = express.Router();

authrouter.post("/login", login);

export default authrouter;
