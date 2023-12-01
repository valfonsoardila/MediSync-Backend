import { Router } from "express";

import {
    createSpecialty,
    getSpecialties,
    getSpecialtyById,
    updateSpecialtyById,
    deleteSpecialtyById
} from "../controllers/specialties.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { createSpecialtiesSchema, updateSpecialtiesSchema } from "../schemas/specialties.schemas.js";
const router = Router();

//api/specialties
router.post("/specialties", authRequired, validateSchema(createSpecialtiesSchema), createSpecialty);
router.get("/specialties", authRequired, getSpecialties);
router.get("/specialties/:id", authRequired, getSpecialtyById);
router.put("/specialties/:id", authRequired, validateSchema(updateSpecialtiesSchema), updateSpecialtyById);
router.delete("/specialties/:id", authRequired, deleteSpecialtyById);

export default router;