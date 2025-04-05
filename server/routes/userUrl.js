import express from "express"

const router = express.Router();

import { handleCreateUrl, handleViewUrl, handleDeleteUrl } from "../controllers/userUrl.js"

router.post("/", handleCreateUrl);
router.get("/:shortId", handleViewUrl);
router.delete("/", handleDeleteUrl);
export default router;