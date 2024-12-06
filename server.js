import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminrouter from "./routes/adminRoutes.js";
import userrouter from "./routes/userRoutes.js";
import authrouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Default Route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Library Management System backend!");
});

// API Routes
app.use("/api/admin", adminrouter);
app.use("/api/user", userrouter);
app.use("/api/auth", authrouter);



// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
