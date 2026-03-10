import Booking from "../model/Booking.js";

export const createBooking = async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.json({ message: "Booking created", booking });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id }).populate("slot");
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to fetch bookings" });
    }
};  