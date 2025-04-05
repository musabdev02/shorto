import { nanoid } from "nanoid";
import userURL from "../models/userUrl.js";


const handleCreateUrl = async (req, res) => {
    const shortId = nanoid(6);
    res.send(shortId);
};


export { handleCreateUrl };