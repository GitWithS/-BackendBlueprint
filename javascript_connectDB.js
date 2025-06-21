export const javascript_connectDB = `// Import mongoose for MongoDB connection
import mongoose from "mongoose";

// Optional: specify a default DB name if not managed in the URI itself
const DB_NAME = "your-db-name";

// Asynchronous function to connect to MongoDB
const connectDB = async () => {
    try {
        // Build the full MongoDB URI with database name appended
        // const mongoURI = \`\${process.env.MONGODB_URI}/\${DB_NAME}\`;

        // Connect to MongoDB
        // const connectionInstance = await mongoose.connect(mongoURI);

        // console.log(\`✅ MongoDB connected at: \${connectionInstance.connection.host}\`);
    } catch (error) {
        // Handle initial connection errors
        console.error("❌ MongoDB connection failed:", error);

        // Exit process with failure
        process.exit(1);
    }
};

// Export the function to be used in other parts of the app
export default connectDB;
`