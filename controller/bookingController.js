import Booking from "../model/Booking.js";
import Slot from "../model/Slot.js";

export const bookSlot = async (req, res) => {
    try {
        const { slotId } = req.body;

        const slot = await Slot.findById(slotId);
        if (!slot) return res.status(404).json({ message: "Slot not found" });

        if (slot.bookedCount >= slot.maxVisitors) {
            return res.status(400).json({ message: "Slot full" });
        }

        const booking = new Booking({ user: req.user.id, slot: slotId });
        await booking.save();

        slot.bookedCount += 1;
        await slot.save();

        res.json({ message: "Slot booked successfully", booking });
    } catch (error) {
        res.status(500).json({ message: error.message || "Booking failed" });
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