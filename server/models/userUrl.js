import mongoose from "mongoose"

const userUrlScheme = mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    originalUrl: {
        type: String,
        required: true,
    },
    visitHistory: [
        { timestamp: Number,}
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
}, { timestamps: true });

const userURL = mongoose.model("userUrls", userUrlScheme);

export default userURL;