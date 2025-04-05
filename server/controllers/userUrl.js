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

const handleViewUrl = async (req, res) => {
    const shortId = req.params.shortId;
    if(!shortId) return res.status(401).json({message: "ShortID is required!"});

    try{
        const entry = await userURL.findOneAndUpdate(
            { shortId },
            {
              $push: {
                visitHistory: {
                  timestamp: Date.now()
                }
              }
            },
            { new: true }
          );
          return res.status(200).json({
            status: "ok",
            url: entry.redirectUrl
          })
    }catch(err){
        return res.status(500).json({messaage: `${err}`})
    }
};

const handleDeleteUrl = async (req, res) => {
    const { shortId } = req.body;
    if(!shortId) return res.status(401).json({messaage: "ShortID is required!"});
    
    try{
        await userURL.findOneAndDelete({
            _id: shortId
        });
        return res.status(202).json({status: "ok"})
    }catch(err){
        return res.status(500).json({messaage: `${err}`});
    }
}


export { handleCreateUrl, handleViewUrl, handleDeleteUrl };