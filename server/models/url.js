import mongoose from 'mongoose';

const urlSchema = mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [
        {timestamp: Number}
    ]
});

const URL = mongoose.model("urls", urlSchema);

export default URL;