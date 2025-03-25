import express from "express";
// controllers
import { handleCreateUrl, handleViewUrl } from "../controllers/url.js";
const router = express();

router.post("/", handleCreateUrl);

router.get("/:shortId", handleViewUrl);

export default router;