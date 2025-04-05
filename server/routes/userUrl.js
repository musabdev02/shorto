import express from "express"

const router = express.Router();

import { handleCreateUrl } from "../controllers/userUrl.js"

router.post("/", handleCreateUrl)

export default router;