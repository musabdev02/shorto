import express from "express";

const router = express();

router.post("/", (req, res) => {
    const { url } = req.body;
    return res.json({
        status: "ok",
        url: url
    })
});

export default router;