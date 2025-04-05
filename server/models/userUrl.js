import mongoose from "mongoose"

const userUrlScheme = mongoose.Schema({
    comment: {
        type: String,
    },
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [
        { timestamp: Number,}
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
}, { timestamps: true });

const userURL = mongoose.model("userUrls", userUrlScheme);

export default userURL;