import { Router } from "express";

import {
    createSpecialty,
    getSpecialties,
    getSpecialtyById,
    updateSpecialtyById,
    deleteSpecialtyById
} from "../controllers/specialties.controller.js";

const router = Router();

//api/specialties
router.post("/specialties", createSpecialty);
router.get("/specialties", getSpecialties);
router.get("/specialties/:id", getSpecialtyById);
router.put("/specialties/:id", updateSpecialtyById);
router.delete("/specialties/:id", deleteSpecialtyById);

export default router;