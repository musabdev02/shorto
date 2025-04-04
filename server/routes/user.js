import express from "express";

const router = express.Router();

import { handleCreateUser, handleVerifyUser, handleGetProfile } from "../controllers/user.js";

router.post("/", handleCreateUser);
router.post("/verify", handleVerifyUser);
router.get("/profile", handleGetProfile);

export default router;