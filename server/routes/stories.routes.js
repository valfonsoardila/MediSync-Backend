import { Router } from "express";
import {
    createClinicalHistory,
    getClinicalHistorys,
    getClinicalHistoryById,
    updateClinicalHistoryById,
    deleteClinicalHistoryById
} from "../controllers/stories.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";

const router = Router();

// /api/stories
router.post("/stories", authRequired, createClinicalHistory);
router.get("/stories", authRequired, getClinicalHistorys);
router.get("/stories/:id", authRequired, getClinicalHistoryById);
router.put("/stories/:id", authRequired, updateClinicalHistoryById);
router.delete("/stories/:id", authRequired, deleteClinicalHistoryById);

export default router;