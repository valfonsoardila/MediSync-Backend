import { Router } from "express";
import{
    createDisease,
    getDiseases,
    getDiseaseById,
    updateDiseaseById,
    deleteDiseaseById
} from "../controllers/diseases.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";

const router = Router();

// /api/diseases
router.post("/diseases", authRequired, createDisease);
router.get("/diseases", authRequired, getDiseases);
router.get("/diseases/:id", authRequired, getDiseaseById);
router.put("/diseases/:id", authRequired, updateDiseaseById);
router.delete("/diseases/:id", authRequired, deleteDiseaseById);

export default router;
