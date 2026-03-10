import express from "express";
const router = express.Router();
import { createSlot, getSlots } from "../controller/slotController.js";
import auth from "../middleware/authMiddleware.js";

router.post("/create", auth, createSlot); // Admin creates slot
router.get("/get/:templeId", getSlots); // Get slots by templeId query

export default router;
