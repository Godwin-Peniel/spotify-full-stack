import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connection established");
  });

  // error handler to send the error directly to the terminal (for debugging)
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err.message);
  });
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "spotify",
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
};

export default connectDB;
