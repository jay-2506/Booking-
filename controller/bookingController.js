import Booking from "../model/Booking.js";

export const createBooking = async (req, res) => {
    try {
        const booking = new Booking({
            ...req.body,
            user: req.user.id
        });
        await booking.save();
        res.json({ message: "Booking created", booking });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id }).populate("templeId");
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to fetch bookings" });
    }
};

export const cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!booking) {
            return res.status(404).json({ message: "Booking not found or unauthorized" });
        }
        res.json({ message: "Booking cancelled successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to cancel booking" });
    }
};