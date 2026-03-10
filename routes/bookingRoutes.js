import express from "express";
const router = express.Router();
import { bookSlot, getUserBookings } from "../controller/bookingController.js";
import auth from "../middleware/authMiddleware.js";

router.post("/book", auth, bookSlot);
router.get("/my", auth, getUserBookings);

export default router;