import { nanoid } from "nanoid";
import userURL from "../models/userUrl.js";


const handleCreateUrl = async (req, res) => {
    const { originalUrl,  comment} = req.body;
    if(!originalUrl) return res.status(401).json({message: "Unauthroized"});
    let shortId;
    let isUnique = false;

    while (!isUnique) {
      shortId = nanoid(6);
      const existing = await userURL.findOne({ shortId });
      if (!existing) isUnique = true;
    }

    try {
        await userURL.create({
            comment,
            redirectUrl: originalUrl,
            shortId,
            createdBy: req.user.id
        });
        return res.status(201).json({status: "ok", shortUrl: shortId})

    } catch (err) {
        return res.status(500).json({message: `${err}`});
    }
};


export { handleCreateUrl };