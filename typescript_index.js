export const typescript_index = `// --------------------------------------------
// Load environment variables from .env
// --------------------------------------------
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// --------------------------------------------
// Core imports
// --------------------------------------------
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

// --------------------------------------------
// Database Connection
// --------------------------------------------
import connectDB from "./db/connectDB";

// --------------------------------------------
// App Initialization
// --------------------------------------------
const app: Application = express();

// --------------------------------------------
// Middleware Configuration
// --------------------------------------------

// Enable CORS to allow requests from frontend (e.g., React app)
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "http://localhost:5173",
        credentials: true, // Allow sending cookies and auth headers
    })
);

// Parse JSON payloads
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "../public")));

// --------------------------------------------
// Route Definitions (To be added)
// --------------------------------------------
// Example: app.use("/api/users", userRoutes);

// --------------------------------------------
// Start Server after DB Connection
// --------------------------------------------

// Safely extract PORT from environment or fallback to 1604
const PORT: number = parseInt(process.env.PORT || "1604", 10);

// Connect to MongoDB and then start the Express server
// Go to ./src/db/connectDB.ts file to establish database connection

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(\`✅ Server is running at http://localhost:\${PORT}\`);
        });

        // Handle server-level runtime errors
        app.on("error", (err: any) => {
            console.error("❌ Server error:", err.message);
        });
    })
    .catch((err: Error) => {
        console.error("❌ MongoDB connection failed:", err.message);
        process.exit(1);
    });
`