export const javaScript_index = `// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// Core imports
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Custom utility to connect to MongoDB
import connectDB from "./db/connectDB.js";

// Initialize express app
const app = express();

// ---------------------------
// Middleware Configuration
// ---------------------------

// Enable CORS to allow requests from frontend (e.g., React app)
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "http://localhost:5173",
        credentials: true, // Allow sending cookies and auth headers
    })
);

// Parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies from incoming requests
app.use(cookieParser());

// Serve static assets from the "public" directory
app.use(express.static("public"));

// ---------------------------
// Route Definitions
// ---------------------------
// TODO: Add your route handlers here
// Example:
// app.use("/api/users", userRoutes);

// ---------------------------
// Start Server
// ---------------------------

const PORT = process.env.PORT || 1604;

// Connect to database and then start server
// Go to ./src/db/connectDB.js file to establish database connection
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(\`✅ Server is running on http://localhost:\${PORT}\`);
        });

        // Handle server-level errors
        app.on("error", (err) => {
            console.error("❌ Server error:", err);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err);
    });
`