import express from "express";

const router = express.Router();

import { handleCreateUser } from "../controllers/user.js";

router.post("/", handleCreateUser);

export default router;