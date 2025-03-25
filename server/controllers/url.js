import URL from "../models/url.js";
import { nanoid } from "nanoid";

const handleCreateUrl = async (req, res) => {
    const { url } = req.body;
    if (!url) return;
    const shortId = nanoid(6);
    try {
        await URL.create({
            shortId,
            redirectUrl: url,
        });
        return res.json({
            status: "ok",
            originalUrl: url,
            shortId,
        })
    }
    catch (err) {
        console.log("something went wrong", err);
    }
};

const handleViewUrl = async (req, res) => {
    const shortId = req.params.shortId;
    if(!shortId) return;

    try {
        const entry = await URL.findOne({
            shortId,
        });
      return res.status(200).json({
        status: "ok",
        url: entry.redirectUrl
      })
    } catch (error) {
        console.log(error); 
    }
}

export { handleCreateUrl, handleViewUrl }