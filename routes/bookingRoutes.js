import express from "express";
const router = express.Router();
import { createBooking, getUserBookings } from "../controller/bookingController.js";
import auth from "../middleware/authMiddleware.js";

router.post("/create", auth, createBooking);
router.get("/my", auth, getUserBookings);

export default router;  