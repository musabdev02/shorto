import express from "express";

const router = express.Router();

import { handleCreateUser, handleVerifyUser } from "../controllers/user.js";

router.post("/", handleCreateUser);
router.post("/verify", handleVerifyUser)

export default router;