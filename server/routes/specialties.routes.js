import { Router } from "express";

import {
    createSpecialty,
    getSpecialties,
    getSpecialtyById,
    updateSpecialtyById,
    deleteSpecialtyById
} from "../controllers/specialties.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";

const router = Router();

//api/specialties
router.post("/specialties", authRequired, createSpecialty);
router.get("/specialties", authRequired, getSpecialties);
router.get("/specialties/:id", authRequired, getSpecialtyById);
router.put("/specialties/:id", authRequired, updateSpecialtyById);
router.delete("/specialties/:id", authRequired, deleteSpecialtyById);

export default router;