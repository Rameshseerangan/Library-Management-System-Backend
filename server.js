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

// Default Route with Clickable Link
app.get("/", (req, res) => {
    res.status(200).send(`
        <html>
            <head>
                <title>Library Management System API</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; }
                    h1 { color: #333; }
                    p { font-size: 18px; }
                    a { text-decoration: none; color: #007bff; font-weight: bold; }
                    a:hover { color: #0056b3; }
                </style>
            </head>
            <body>
                <h1>Welcome to the Library Management System Backend</h1>
                <p>Check out the API documentation on Postman:</p>
                <p>
                    <a href="https://documenter.getpostman.com/view/39168739/2sAYBbeUqY" target="_blank">
                        View API Documentation 📜
                    </a>
                </p>
            </body>
        </html>
    `);
});

// API Routes
app.use("/api/admin", adminrouter);
app.use("/api/user", userrouter);
app.use("/api/auth", authrouter);

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
