import express from "express";
const router = express.Router();
import { createBooking, getUserBookings, cancelBooking } from "../controller/bookingController.js";
import auth from "../middleware/authMiddleware.js";

router.post("/create", auth, createBooking);
router.get("/my", auth, getUserBookings);
router.delete("/cancel/:id", auth, cancelBooking);

export default router;  