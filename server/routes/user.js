import express from "express";

const router = express.Router();

import { handleCreateUser, handleVerifyUser, handleGetProfile, handleLogoutProfile } from "../controllers/user.js";

router.post("/", handleCreateUser);
router.post("/verify", handleVerifyUser);
router.get("/profile", handleGetProfile);
router.get("/logout", handleLogoutProfile);

export default router;