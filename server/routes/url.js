import express from "express";
import { nanoid } from "nanoid";
import URL from "../models/url.js"
const router = express();

router.post("/", async (req, res) => {
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
    catch(err){
        console.log("something went wrong", err);
    }

});

export default router;