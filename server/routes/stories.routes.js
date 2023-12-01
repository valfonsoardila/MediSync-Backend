import { Router } from "express";
import {
    createClinicalHistory,
    getClinicalHistorys,
    getClinicalHistoryById,
    updateClinicalHistoryById,
    deleteClinicalHistoryById
} from "../controllers/stories.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { createStoriesSchema, updateStoriesSchema } from "../schemas/stories.schemas.js";

const router = Router();

// /api/stories
router.post("/stories", authRequired, validateSchema(createStoriesSchema), createClinicalHistory);
router.get("/stories", authRequired, getClinicalHistorys);
router.get("/stories/:id", getClinicalHistoryById);
router.put("/stories/:id", authRequired, validateSchema(updateStoriesSchema), updateClinicalHistoryById);
router.delete("/stories/:id", authRequired, deleteClinicalHistoryById);

export default router;