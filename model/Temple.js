import mongoose from "mongoose";

const templeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    description: String,
    image: {
        type: String,
        required: true
    }
});

const Temple = mongoose.model("Temple", templeSchema);
export default Temple;