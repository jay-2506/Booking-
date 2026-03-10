import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
    temple: { type: mongoose.Schema.Types.ObjectId, ref: "Temple" },
    date: Date,
    startTime: String,
    endTime: String,
    maxVisitors: Number,
    bookedCount: { type: Number, default: 0 },
});

const Slot = mongoose.model("Slot", slotSchema);
export default Slot;