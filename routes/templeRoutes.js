import express from "express";
const router = express.Router();
import { createTemple, getTemples } from "../controller/templeController.js";
import auth from "../middleware/authMiddleware.js";

router.post("/", auth, createTemple); // Admin creates temple
router.get("/", getTemples);

export default router;
