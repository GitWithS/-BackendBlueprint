export const typescript_connectDB = `import mongoose from "mongoose";

// Optional: specify a fallback DB name in case it's not included in the URI
const DB_NAME = "your-db-name";

/**
 * Asynchronously connects to MongoDB using Mongoose.
 * Throws and logs an error if connection fails.
 */
const connectDB = async (): Promise<void> => {
    try {
        // const MONGODB_URI = process.env.MONGODB_URI;

        // if (!MONGODB_URI) {
        //    throw new Error("Missing MONGODB_URI in environment variables.");
        // }

        // Build the full MongoDB URI with database name appended
        // const mongoURI = \`\${MONGODB_URI}/\${DB_NAME}\`;

        // Connect to MongoDB
        // const connectionInstance = await mongoose.connect(mongoURI);

        // console.log(\`✅ MongoDB connected at: \${connectionInstance.connection.host}\`);
    } catch (error: unknown) {
        const err = error instanceof Error ? error.message : String(error);

        // Handle initial connection errors
        console.error("❌ MongoDB connection failed:", err);

        // Exit process with failure
        process.exit(1);
    }
};

// Export the function to be used in other parts of the app
export default connectDB;
`