import Slot from "../model/Slot.js";

export const createSlot = async (req, res) => {
  try {
    const slot = new Slot(req.body);
    await slot.save();
    res.json({ message: "Slot created", slot });
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to create slot" });
  }
};

export const getSlots = async (req, res) => {
  try {
    const slots = await Slot.find({ temple: req.params.templeId });
    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to fetch slots" });
  }
};
