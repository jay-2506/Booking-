import express from "express";
const router = express.Router();
import { createTemple, getTemples, getTempleById, searchTemples } from "../controller/templeController.js";
import auth from "../middleware/authMiddleware.js";

router.post("/", auth, createTemple); // Admin creates temple
router.get("/", getTemples);
router.get("/search", searchTemples);
router.get("/:id", getTempleById);

export default router;
