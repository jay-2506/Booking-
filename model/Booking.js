// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     status: { type: String, default: "booked" },
//     bookingDate: { type: Date, default: Date.now },
// });

// const Booking = mongoose.model("Booking", bookingSchema);
// export default Booking;


import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        templeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Temple",
            required: true
        },

        date: {
            type: Date,
            required: true
        },

        timeSlot: {
            type: String,
            required: true
        },

        devotees: {
            type: Number,
            required: true,
            min: 1
        }
    },
    { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);