import Temple from "../model/Temple.js";

export const createTemple = async (req, res) => {
    try {
        const temple = new Temple(req.body);
        await temple.save();
        res.json({ message: "Temple created", temple });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const getTemples = async (req, res) => {
    try {
        const temples = await Temple.find();
        res.json(temples);
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to fetch temples" });
    }
};

export const getTempleById = async (req, res) => {
    try {
        const temple = await Temple.findById(req.params.id);
        if (!temple) {
            return res.status(404).json({ message: "Temple not found" });
        }
        res.json(temple);
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to fetch temple" });
    }
};
