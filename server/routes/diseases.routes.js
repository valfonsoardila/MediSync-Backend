import { Router } from "express";
import{
    createDisease,
    getDiseases,
    getDiseaseById,
    updateDiseaseById,
    deleteDiseaseById
} from "../controllers/diseases.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { createDiseasesSchema, updateDiseasesSchema } from "../schemas/diseases.schemas.js";

const router = Router();

// /api/diseases
router.post("/diseases", authRequired, validateSchema(createDiseasesSchema), createDisease);
router.get("/diseases", authRequired, getDiseases);
router.get("/diseases/:id", authRequired, getDiseaseById);
router.put("/diseases/:id", authRequired, validateSchema(updateDiseasesSchema), updateDiseaseById);
router.delete("/diseases/:id", authRequired, deleteDiseaseById);

export default router;
