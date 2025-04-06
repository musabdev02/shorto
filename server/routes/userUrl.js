import express from "express"

const router = express.Router();

import { handleCreateUrl, handleViewUrl, handleDeleteUrl, handleAnalyticsUrl } from "../controllers/userUrl.js"

router.post("/", handleCreateUrl);
router.get("/:shortId", handleViewUrl);
router.delete("/", handleDeleteUrl);
router.get("/", handleAnalyticsUrl);
export default router;