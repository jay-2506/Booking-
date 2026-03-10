import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    slot: { type: mongoose.Schema.Types.ObjectId, ref: "Slot" },
    status: { type: String, default: "booked" },
    bookingDate: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;