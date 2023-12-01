import { Router } from "express";
import{
    createDisease,
    getDiseases,
    getDiseaseById,
    updateDiseaseById,
    deleteDiseaseById
} from "../controllers/diseases.controller.js";

const router = Router();

// /api/diseases
router.post("/diseases", createDisease);
router.get("/diseases", getDiseases);
router.get("/diseases/:id", getDiseaseById);
router.put("/diseases/:id", updateDiseaseById);
router.delete("/diseases/:id", deleteDiseaseById);

export default router;
