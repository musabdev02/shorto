import mongoose from "mongoose";

const connectToDb = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB is connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

export default connectToDb;